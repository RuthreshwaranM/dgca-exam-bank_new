# Setup & Deploy — DGCA Exam Bank (subscription version)

## 1. What changed
- `question-source/*.js` — your original question files, moved here.
  Edit questions HERE from now on (same paste format as before).
- `build-questions.js` — run this after any question edit:
    node build-questions.js
  It regenerates:
    - `server-data/questions-full.json` (private, full bank)
    - `server-data/meta.json` (public counts only, no answers)
    - `data/free-questions.js` (public, free sample — first 5
      questions per chapter; change FREE_PER_CHAPTER at the top
      of build-questions.js to adjust)
- `api/*.js` — serverless functions: signup, login, logout, me,
  create-order, verify-payment, questions (the gate), meta, alert.
- `login.html` — new login/signup page.
- `js/auth.js` — frontend auth + paywall + Razorpay checkout logic.
- `vercel.json` — blocks direct browser access to
  `/question-source/*` and `/server-data/*`.

## 2. Install dependencies
    npm install

## 3. Set up storage for users + orders (Upstash Redis)
Vercel's own KV product is deprecated, so this uses Upstash Redis
(Vercel's recommended replacement) instead:
1. In your Vercel dashboard, open this project.
2. Storage tab -> Marketplace Database Providers -> "Upstash for
   Redis" -> create and connect it to this project.
   This auto-adds `UPSTASH_REDIS_REST_URL` and
   `UPSTASH_REDIS_REST_TOKEN` to your project's environment
   variables — you don't need to set these by hand.

## 4. Set environment variables
In Vercel Dashboard -> Settings -> Environment Variables, add
(also see `.env.example`):

| Name                    | Value                                    |
|--------------------------|------------------------------------------|
| JWT_SECRET               | any long random string (`openssl rand -hex 32`) |
| RAZORPAY_KEY_ID           | from Razorpay Dashboard -> Settings -> API Keys |
| RAZORPAY_KEY_SECRET       | same page                                |
| EXAM_BANK_PRICE_INR       | e.g. `499`                               |

If you want to test locally first, copy `.env.example` to `.env.local`
and fill it in, then run `vercel dev`.

## 5. Build the question bundles
    node build-questions.js
Commit the output (`server-data/*.json` and `data/free-questions.js`)
along with your code — Vercel doesn't run this automatically unless
you add it as a build step (Project Settings -> Build Command:
`node build-questions.js`, if you'd rather not commit the generated
files).

## 6. Deploy
    vercel --prod
(or push to the GitHub repo connected to this Vercel project, same
as before).

## 7. Test the flow end-to-end
1. Visit the site logged out — you should see the free sample and
   an "Unlock full access" banner.
2. Sign up via `login.html`.
3. Click "Unlock full access" — Razorpay checkout should open.
   Use a Razorpay test card if your account is still in test mode
   (Dashboard -> Settings -> toggle Test/Live).
4. After a successful payment, the page reloads and the full
   question bank should load for every subject.
5. Log out, log back in — `hasPaid` should persist (stored in KV).

## Notes
- Price changes: update `EXAM_BANK_PRICE_INR` (server, what's actually
  charged) AND `EXAM_PRICE_DISPLAY` in `js/auth.js` (just the label
  shown before checkout opens — cosmetic only).
- This is a one-time payment (lifetime access), not a recurring
  subscription. If you want recurring billing instead, Razorpay
  Subscriptions is a different API (razorpay.subscriptions.create)
  and would need `/api/create-order.js` reworked — let me know if
  you'd rather have that.
- `js/protection.js` (the anti-cheat layer) already expected this
  exact gate setup — its comments literally describe this
  architecture, so nothing needed to change there. It does NOT send
  email alerts on this site (by design/decision) — it only blocks,
  blurs, and detects DevTools. If you ever want email alerts added
  back the way RTR has them, that's a deliberate ask, not a default.

## 8. Testing price + watermark (this update)
- **Price is temporarily ₹10** for end-to-end testing — both the server
  default in `.env.example` and the on-page label in `js/auth.js`
  (`EXAM_PRICE_DISPLAY`). The server only ever charges whatever
  `EXAM_BANK_PRICE_INR` is set to in Vercel's environment variables,
  so once you're done testing, set that back to `499` (or whatever
  your real price is) in Vercel, AND update `EXAM_PRICE_DISPLAY` in
  `js/auth.js` to match, then re-run `npm run build` and redeploy.
- **Traceable watermark** — a faint, tiled, non-blocking overlay
  showing the logged-in user's email + date now appears across every
  page (`js/protection.js` / `js/auth.js`). This is the honest fix for
  screenshots specifically: **no website can detect or block a phone's
  native screenshot gesture** — that capture happens inside the OS,
  entirely outside what any webpage's JavaScript can see. That's true
  for every site, not just this one; apps that do block screenshots
  use native OS DRM permissions a browser tab is never granted. The
  watermark doesn't stop the screenshot — it makes any leaked image
  traceable to the account that took it, which is the same fallback
  real exam platforms and DRM video services use for this exact gap.

## 9. Security hardening added in this version
- **Rate limiting** on signup, login, create-order, verify-payment,
  questions, and alert — all backed by the same Upstash Redis you
  already connected. Stops scripted abuse (password guessing, order
  spam, log flooding) without affecting a normal student.
- **Account lockout** — 6 wrong passwords for the same email locks
  that email for 15 minutes, regardless of which IP is trying.
- **CSRF / origin check** — set `ALLOWED_ORIGIN` in your environment
  variables to your real site URL (e.g.
  `https://dgca-exam-bank-new.vercel.app`). Once set, login/signup/
  payment requests whose Origin header doesn't match get rejected —
  this is what stops another website from quietly using a logged-in
  visitor's cookies against your API. Leave it unset and this check
  is skipped (so it won't break anything before you configure it,
  but set it before going fully live).
- **Timing-safe signature check** in `verify-payment.js` — prevents a
  byte-by-byte timing attack against the Razorpay signature check.
- **Security headers** in `vercel.json` — Content-Security-Policy,
  X-Frame-Options (clickjacking), X-Content-Type-Options, HSTS,
  Referrer-Policy, and Permissions-Policy, all tuned to still allow
  the Razorpay checkout iframe/scripts and Google Fonts.
- **Minified production build** — run `node build-prod.js` after
  `node build-questions.js` (or `npm run build` for both) before
  deploying. This strips whitespace/variable names from the shipped
  JS/CSS so casual "view source" isn't a readable copy-paste of your
  code. Read the comment at the top of `build-prod.js` for the honest
  limits of this — it's friction, not real protection; the actual
  protection is the server-side gate in `/api/questions.js`, since
  that's the part that never reaches the browser at all.
