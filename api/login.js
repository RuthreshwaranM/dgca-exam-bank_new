const bcrypt = require("bcryptjs");
const { getUser } = require("./_lib/db");
const { signSession, setSessionCookie } = require("./_lib/auth");
const { rateLimit, tooMany, assertSameOrigin, recordFailedLogin, clearFailedLogins, isLockedOut } = require("./_lib/security");

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  if (!assertSameOrigin(req, res)) return;

  // 10 login attempts per IP per 5 minutes — slows down credential-stuffing.
  const allowed = await rateLimit(req, "login", 10, 5 * 60);
  if (!allowed) return tooMany(res);

  try {
    const { email, password } = req.body || {};
    if (!email || !password) return res.status(400).json({ error: "Enter your email and password." });

    if (await isLockedOut(email)) {
      return res.status(423).json({ error: "Too many failed attempts for this account. Try again in 15 minutes." });
    }

    const user = await getUser(email);
    if (!user) {
      await recordFailedLogin(email);
      return res.status(401).json({ error: "No account found with that email." });
    }

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) {
      await recordFailedLogin(email);
      return res.status(401).json({ error: "Incorrect password." });
    }

    await clearFailedLogins(email);
    const token = signSession(user.email);
    setSessionCookie(res, token);
    return res.status(200).json({ email: user.email, hasPaid: user.hasPaid });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};
