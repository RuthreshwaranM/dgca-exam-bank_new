/* ============================================================
   Tiny data-access layer over Vercel KV.
   Keys used:
     user:<email>            -> { email, passwordHash, hasPaid, createdAt }
     order:<razorpay_order_id> -> { email, createdAt }
   Requires the Upstash Redis REST URL + token, which get set
   automatically once you connect a Redis database to this
   project (Storage tab). Vercel has used a couple of different
   names for these over time, so we check both.
   ============================================================ */
const { Redis } = require("@upstash/redis");
const redis = new Redis({
  url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN
});

function userKey(email) {
  return `user:${email.trim().toLowerCase()}`;
}

async function getUser(email) {
  return redis.get(userKey(email));
}

async function createUser(email, passwordHash) {
  const user = {
    email: email.trim().toLowerCase(),
    passwordHash,
    hasPaid: false,
    createdAt: Date.now()
  };
  await redis.set(userKey(email), user);
  return user;
}

async function markPaid(email) {
  const user = await getUser(email);
  if (!user) return null;
  user.hasPaid = true;
  user.paidAt = Date.now();
  await redis.set(userKey(email), user);
  return user;
}

async function saveOrder(orderId, email) {
  await redis.set(`order:${orderId}`, { email: email.trim().toLowerCase(), createdAt: Date.now() });
}

async function getOrder(orderId) {
  return redis.get(`order:${orderId}`);
}

module.exports = { getUser, createUser, markPaid, saveOrder, getOrder };
