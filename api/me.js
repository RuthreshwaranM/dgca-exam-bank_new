const { getSession } = require("./_lib/auth");
const { getUser } = require("./_lib/db");

module.exports = async (req, res) => {
  const session = getSession(req);
  if (!session) return res.status(200).json({ loggedIn: false });

  const user = await getUser(session.email);
  if (!user) return res.status(200).json({ loggedIn: false });

  return res.status(200).json({ loggedIn: true, email: user.email, hasPaid: !!user.hasPaid });
};
