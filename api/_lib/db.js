/* ============================================================
   Tiny data-access layer over Vercel KV.
   Keys used:
     user:<email>            -> { email, passwordHash, hasPaid, createdAt }
     order:<razorpay_order_id> -> { email, createdAt }
   Requires env vars UPSTASH_REDIS_REST_URL and
   UPSTASH_REDIS_REST_TOKEN, which get set automatically once you
   add "Upstash for Redis" to this project from the Vercel
   Marketplace (Storage tab -> Create Database / Marketplace ->
   Upstash for Redis). (@vercel/kv is deprecated — this is the
   package Vercel now points to.)
   ============================================================ */
const { Redis } = require("@upstash/redis");
const redis = Redis.fromEnv();

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
