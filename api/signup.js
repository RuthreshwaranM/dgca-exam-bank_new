const bcrypt = require("bcryptjs");
const { getUser, createUser } = require("./_lib/db");
const { signSession, setSessionCookie } = require("./_lib/auth");

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { email, password } = req.body || {};
    if (!email || !EMAIL_RE.test(email)) return res.status(400).json({ error: "Enter a valid email address." });
    if (!password || password.length < 6) return res.status(400).json({ error: "Password must be at least 6 characters." });

    const existing = await getUser(email);
    if (existing) return res.status(409).json({ error: "An account with this email already exists. Try logging in instead." });

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await createUser(email, passwordHash);

    const token = signSession(user.email);
    setSessionCookie(res, token);
    return res.status(200).json({ email: user.email, hasPaid: user.hasPaid });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};
