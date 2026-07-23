/* ============================================================
   Session helpers — signed JWT stored in an httpOnly cookie.
   Requires env var JWT_SECRET (any long random string).
   ============================================================ */
const jwt = require("jsonwebtoken");

const COOKIE_NAME = "dgca_session";
const SECRET = process.env.JWT_SECRET;
const isProd = process.env.VERCEL_ENV === "production";

function signSession(email) {
  return jwt.sign({ email: email.trim().toLowerCase() }, SECRET, { expiresIn: "180d" });
}

function setSessionCookie(res, token) {
  const parts = [
    `${COOKIE_NAME}=${token}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    `Max-Age=${60 * 60 * 24 * 180}`
  ];
  if (isProd) parts.push("Secure");
  res.setHeader("Set-Cookie", parts.join("; "));
}

function clearSessionCookie(res) {
  res.setHeader("Set-Cookie", `${COOKIE_NAME}=; Path=/; HttpOnly; Max-Age=0`);
}

function parseCookies(req) {
  const header = req.headers.cookie || "";
  const out = {};
  header.split(";").forEach(pair => {
    const idx = pair.indexOf("=");
    if (idx === -1) return;
    out[pair.slice(0, idx).trim()] = decodeURIComponent(pair.slice(idx + 1).trim());
  });
  return out;
}

// Returns { email } if a valid session cookie is present, else null.
function getSession(req) {
  const cookies = parseCookies(req);
  const token = cookies[COOKIE_NAME];
  if (!token) return null;
  try {
    return jwt.verify(token, SECRET);
  } catch (e) {
    return null;
  }
}

module.exports = { signSession, setSessionCookie, clearSessionCookie, getSession };
