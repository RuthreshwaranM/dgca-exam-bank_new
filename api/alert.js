module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).end();
  try {
    const { activity } = req.body || {};
    console.log(`[protection] ${activity} — ${req.headers["x-forwarded-for"] || "unknown ip"}`);
  } catch (e) {
    // ignore malformed beacons
  }
  return res.status(204).end();
};
