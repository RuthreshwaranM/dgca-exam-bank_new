const Razorpay = require("razorpay");
const { getSession } = require("./_lib/auth");
const { getUser, saveOrder } = require("./_lib/db");
const { rateLimit, tooMany, assertSameOrigin } = require("./_lib/security");

// Price lives here on the server — never trust an amount sent from the browser.
const PRICE_INR = Number(process.env.EXAM_BANK_PRICE_INR || 499);

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  if (!assertSameOrigin(req, res)) return;

  // 8 order attempts per IP per 10 minutes — plenty for a real student, not for a script.
  const allowed = await rateLimit(req, "create-order", 8, 10 * 60);
  if (!allowed) return tooMany(res);

  const session = getSession(req);
  if (!session) return res.status(401).json({ error: "Please log in first." });

  const user = await getUser(session.email);
  if (!user) return res.status(401).json({ error: "Please log in first." });
  if (user.hasPaid) return res.status(200).json({ alreadyPaid: true });

  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET
    });

    const order = await razorpay.orders.create({
      amount: PRICE_INR * 100, // paise
      currency: "INR",
      receipt: `dgca_${Date.now()}`,
      notes: { email: user.email }
    });

    await saveOrder(order.id, user.email);

    return res.status(200).json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.RAZORPAY_KEY_ID
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Could not start payment. Please try again." });
  }
};
