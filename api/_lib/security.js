/* ============================================================
   SECURITY HELPERS — shared by every API route.
   Uses the same Upstash Redis instance as db.js (no new env vars
   needed beyond what SETUP.md already asks for).

   What's in here:
   1. rateLimit()      — fixed-window counter per IP (or per IP+key).
                          Stops one visitor from hammering an endpoint
                          (brute-forcing passwords, spamming orders,
                          flooding /api/alert, etc).
   2. recordFailedLogin() / isLockedOut() — after N wrong passwords
      for the same email, that email is locked for a cooldown window,
      independent of which IP is trying it.
   3. assertSameOrigin() — rejects POSTs whose Origin/Referer header
      doesn't match this site. This is what stops a malicious page on
      another domain from silently submitting requests using a
      logged-in visitor's cookies (CSRF).

   IMPORTANT — same honesty note as protection.js: these stop
   automated abuse and cross-site trickery. They do not, and cannot,
   hide your JavaScript from someone reading it in DevTools — nothing
   server-side can, because the browser has to receive and run that
   code to render the page. The actual secret (the paid question
   content, the Razorpay key SECRET, the JWT secret) never reaches
   the browser at all, which is the part that actually matters.
   ============================================================ */
const { Redis } = require("@upstash/redis");
const redis = Redis.fromEnv();

function clientIp(req) {
  const fwd = req.headers["x-forwarded-for"];
  if (fwd) return fwd.split(",")[0].trim();
  return req.socket && req.socket.remoteAddress ? req.socket.remoteAddress : "unknown";
}

/**
 * Fixed-window rate limit. Returns true if the request is ALLOWED,
 * false if the caller should be rejected with 429.
 */
async function rateLimit(req, bucket, limit, windowSeconds) {
  const ip = clientIp(req);
  const key = `rl:${bucket}:${ip}`;
  const count = await redis.incr(key);
  if (count === 1) {
    await redis.expire(key, windowSeconds);
  }
  return count <= limit;
}

const LOGIN_FAIL_LIMIT = 6; // wrong passwords allowed
const LOGIN_LOCK_SECONDS = 15 * 60; // lockout length

async function recordFailedLogin(email) {
  const key = `loginfail:${email.trim().toLowerCase()}`;
  const count = await redis.incr(key);
  if (count === 1) await redis.expire(key, LOGIN_LOCK_SECONDS);
  return count;
}

async function clearFailedLogins(email) {
  await redis.del(`loginfail:${email.trim().toLowerCase()}`);
}

async function isLockedOut(email) {
  const key = `loginfail:${email.trim().toLowerCase()}`;
  const count = await redis.get(key);
  return Number(count || 0) >= LOGIN_FAIL_LIMIT;
}

/**
 * CSRF guard for cookie-authenticated POST routes. Same-origin fetch()
 * calls always send Origin (or at least Referer) — this only ever
 * blocks a request that did NOT come from your own site.
 * Set ALLOWED_ORIGIN in env to your real domain (see .env.example).
 */
function assertSameOrigin(req, res) {
  const allowed = (process.env.ALLOWED_ORIGIN || "").replace(/\/$/, "");
  if (!allowed) return true; // not configured yet — skip rather than lock everyone out
  const origin = req.headers.origin || "";
  const referer = req.headers.referer || "";
  const ok = origin.replace(/\/$/, "") === allowed || referer.startsWith(allowed);
  if (!ok) {
    res.status(403).json({ error: "Request blocked (origin check failed)." });
    return false;
  }
  return true;
}

function tooMany(res) {
  res.status(429).json({ error: "Too many attempts. Please wait a bit and try again." });
}

module.exports = { rateLimit, recordFailedLogin, clearFailedLogins, isLockedOut, assertSameOrigin, tooMany, clientIp };
