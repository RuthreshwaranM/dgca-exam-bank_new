const crypto = require("crypto");
const { getSession } = require("./_lib/auth");
const { getOrder, markPaid } = require("./_lib/db");

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const session = getSession(req);
  if (!session) return res.status(401).json({ error: "Please log in first." });

  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body || {};
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ error: "Missing payment details." });
    }

    const order = await getOrder(razorpay_order_id);
    if (!order || order.email !== session.email) {
      return res.status(400).json({ error: "Order does not match this session." });
    }

    // The one check that actually matters: recompute the signature server-side
    // using the secret key. Never trust a "payment succeeded" message from the browser.
    const expected = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (expected !== razorpay_signature) {
      return res.status(400).json({ error: "Payment verification failed." });
    }

    const user = await markPaid(session.email);
    return res.status(200).json({ hasPaid: true, email: user.email });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Something went wrong verifying payment." });
  }
};
