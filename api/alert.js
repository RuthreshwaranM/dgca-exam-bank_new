const { rateLimit } = require("./_lib/security");

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).end();

  // This is a public, unauthenticated beacon (protection.js calls it before
  // login too) — throttle hard so it can't be used to flood logs/Redis.
  const allowed = await rateLimit(req, "alert", 20, 60);
  if (!allowed) return res.status(204).end();

  try {
    const { activity } = req.body || {};
    const safe = typeof activity === "string" ? activity.slice(0, 120) : "unknown";
    console.log(`[protection] ${safe} — ${req.headers["x-forwarded-for"] || "unknown ip"}`);
  } catch (e) {
    // ignore malformed beacons
  }
  return res.status(204).end();
};
