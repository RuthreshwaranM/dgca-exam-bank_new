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
  architecture, so nothing needed to change there.
