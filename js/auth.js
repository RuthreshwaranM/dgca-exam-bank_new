/* ============================================================
   AUTH + PAYWALL LAYER
   Load order matters: js/parser.js, data/free-questions.js,
   js/auth.js, js/app.js (auth.js populates window.AUTH and, for
   paid users, swaps window.SUBJECTS for the full bank BEFORE
   app.js's DOMContentLoaded render() call runs).
   ============================================================ */

window.AUTH = { loggedIn: false, hasPaid: false, email: null };
window.META = []; // subject/chapter free-vs-total counts, filled below

const EXAM_PRICE_DISPLAY = "\u20B9199"; // keep in sync with EXAM_BANK_PRICE_INR env var; display only

async function initAuthAndQuestions() {
  try {
    const [meRes, metaRes] = await Promise.all([
      fetch("/api/me", { credentials: "same-origin" }),
      fetch("/api/meta")
    ]);
    if (meRes.ok) window.AUTH = await meRes.json();
    if (metaRes.ok) window.META = await metaRes.json();
  } catch (e) {
    console.warn("Auth/meta check failed — continuing with free sample only.", e);
  }

  if (window.AUTH.hasPaid) {
    try {
      const qRes = await fetch("/api/questions", { credentials: "same-origin" });
      if (qRes.ok) {
        window.SUBJECTS = await qRes.json();
      }
    } catch (e) {
      console.warn("Could not load full question bank — showing free sample.", e);
    }
  }
}

function metaFor(subjectId, chapterId) {
  const s = (window.META || []).find(x => x.id === subjectId);
  if (!s) return null;
  return (s.chapters || []).find(c => c.id === chapterId) || null;
}

/* ============================================================
   RAZORPAY CHECKOUT
   ============================================================ */

function loadRazorpayScript() {
  return new Promise((resolve, reject) => {
    if (window.Razorpay) return resolve();
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.onload = resolve;
    s.onerror = () => reject(new Error("Could not load payment gateway. Check your connection."));
    document.head.appendChild(s);
  });
}

async function startCheckout() {
  if (!window.AUTH.loggedIn) {
    window.location.href = "login.html?next=" + encodeURIComponent("index.html");
    return;
  }
  try {
    await loadRazorpayScript();

    const orderRes = await fetch("/api/create-order", { method: "POST", credentials: "same-origin" });
    const order = await orderRes.json();
    if (!orderRes.ok) throw new Error(order.error || "Could not start payment.");
    if (order.alreadyPaid) { window.AUTH.hasPaid = true; window.location.reload(); return; }

    const rzp = new Razorpay({
      key: order.keyId,
      order_id: order.orderId,
      amount: order.amount,
      currency: order.currency,
      name: "Flight Flare Aviation",
      description: "DGCA Exam Bank — Full Access",
      image: "logo1.png",
      prefill: { email: window.AUTH.email || "" },
      theme: { color: "#4FD1C5" },
      handler: async function (response) {
        try {
          const verifyRes = await fetch("/api/verify-payment", {
            method: "POST",
            credentials: "same-origin",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response)
          });
          const result = await verifyRes.json();
          if (!verifyRes.ok) throw new Error(result.error || "Payment verification failed.");
          window.AUTH.hasPaid = true;
          alert("Payment successful — full question bank unlocked!");
          window.location.reload();
        } catch (e) {
          alert(e.message + "\n\nIf money was deducted, contact us and we'll sort it out — your payment ID is " + response.razorpay_payment_id);
        }
      },
      modal: { ondismiss: function () {} }
    });
    rzp.on("payment.failed", function (resp) {
      alert("Payment failed: " + (resp.error && resp.error.description ? resp.error.description : "please try again."));
    });
    rzp.open();
  } catch (e) {
    alert(e.message);
  }
}

async function logout() {
  await fetch("/api/logout", { method: "POST", credentials: "same-origin" });
  window.location.href = "index.html";
}

/* ============================================================
   TOPBAR ACCOUNT WIDGET
   ============================================================ */

function renderAccountWidget() {
  const mount = document.getElementById("ff-account-widget");
  if (!mount) return;

  if (!window.AUTH.loggedIn) {
    mount.innerHTML = `<a href="login.html" class="btn btn-ghost btn-sm">Log in</a>`;
    return;
  }

  if (window.AUTH.hasPaid) {
    mount.innerHTML = `
      <span class="chip chip-success" title="${window.AUTH.email}">Full access</span>
      <button class="btn btn-ghost btn-sm" id="ff-logout-btn">Log out</button>
    `;
  } else {
    mount.innerHTML = `
      <button class="btn btn-primary btn-sm" id="ff-unlock-btn">Unlock full access &middot; ${EXAM_PRICE_DISPLAY}</button>
      <button class="btn btn-ghost btn-sm" id="ff-logout-btn">Log out</button>
    `;
    const unlockBtn = document.getElementById("ff-unlock-btn");
    if (unlockBtn) unlockBtn.addEventListener("click", startCheckout);
  }
  const logoutBtn = document.getElementById("ff-logout-btn");
  if (logoutBtn) logoutBtn.addEventListener("click", logout);
}
