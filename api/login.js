const bcrypt = require("bcryptjs");
const { getUser } = require("./_lib/db");
const { signSession, setSessionCookie } = require("./_lib/auth");

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { email, password } = req.body || {};
    if (!email || !password) return res.status(400).json({ error: "Enter your email and password." });

    const user = await getUser(email);
    if (!user) return res.status(401).json({ error: "No account found with that email." });

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ error: "Incorrect password." });

    const token = signSession(user.email);
    setSessionCookie(res, token);
    return res.status(200).json({ email: user.email, hasPaid: user.hasPaid });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};
