const fs = require("fs");
const path = require("path");
const { getSession } = require("./_lib/auth");
const { getUser } = require("./_lib/db");
const { rateLimit, tooMany } = require("./_lib/security");

// Bundled with the function at deploy time — not reachable via any URL
// (see vercel.json, which also 404s /server-data/* as a belt-and-braces measure).
const FULL_PATH = path.join(process.cwd(), "server-data", "questions-full.json");

let cached = null;
function loadFull() {
  if (!cached) cached = JSON.parse(fs.readFileSync(FULL_PATH, "utf8"));
  return cached;
}

module.exports = async (req, res) => {
  const session = getSession(req);
  if (!session) return res.status(401).json({ error: "Please log in to access the full question bank." });

  // A real student loads this once per session/page load; this just stops
  // a script from repeatedly re-downloading the whole bank.
  const allowed = await rateLimit(req, "questions", 30, 10 * 60);
  if (!allowed) return tooMany(res);

  const user = await getUser(session.email);
  if (!user || !user.hasPaid) {
    return res.status(403).json({ error: "Upgrade to unlock the full question bank." });
  }

  res.setHeader("Cache-Control", "private, no-store");
  return res.status(200).json(loadFull());
};
