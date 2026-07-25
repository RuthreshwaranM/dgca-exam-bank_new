/* ============================================================
   PROTECTION.JS — Flight Flare Aviation Exam Bank
   ============================================================
   Client-side deterrent: blocks common copy/inspect shortcuts,
   detects DevTools, blurs the screen on tab-switch, and reports
   serious attempts (print / screenshot / DevTools) to /api/alert.

   IMPORTANT — read this before relying on it:
   This is a deterrent, not real security. Any client-side script
   can be bypassed by disabling JS before the page loads, or by
   reading network requests directly. The actual protection for
   the question content is that index.html / js/app.js / js/parser.js
   / data/*.js are served through /api/gate and require a valid
   session cookie — this script just makes casual copying annoying
   and notifies you when someone tries harder.

   Add to any page:  <script src="js/protection.js" defer></script>
============================================================ */
(function () {
  'use strict';

  const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const COOLDOWN_MS = 30000;
  const lastAlerted = {};

  function canAlert(type) {
    const now = Date.now();
    if (!lastAlerted[type] || now - lastAlerted[type] > COOLDOWN_MS) {
      lastAlerted[type] = now;
      return true;
    }
    return false;
  }

  function sendAlert(activity) {
    if (!canAlert(activity)) return;
    fetch('/api/alert', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ activity }),
    }).catch(() => {});
  }

  function showWarning(msg) {
    let ov = document.getElementById('ffa-warn-ov');
    if (ov) {
      document.getElementById('ffa-warn-msg').textContent = msg;
      return;
    }
    ov = document.createElement('div');
    ov.id = 'ffa-warn-ov';
    ov.style.cssText =
      'position:fixed;inset:0;z-index:999999;background:rgba(5,10,20,0.93);display:flex;align-items:center;justify-content:center;font-family:Inter,Arial,sans-serif';
    ov.innerHTML = `
      <div style="background:#10182b;border:2px solid #d4af37;border-radius:16px;padding:36px 32px;max-width:380px;width:90%;text-align:center;box-shadow:0 0 60px rgba(212,175,55,0.25)">
        <div style="font-size:17px;font-weight:800;color:#d4af37;margin-bottom:10px;letter-spacing:1px">SECURITY NOTICE</div>
        <div id="ffa-warn-msg" style="font-size:12px;color:#dfe6f0;line-height:1.7;margin-bottom:16px">${msg}</div>
        <button id="ffa-warn-ok" style="padding:10px 28px;background:#1a2a4a;color:#fff;border:none;border-radius:6px;font-size:12px;font-weight:700;cursor:pointer;letter-spacing:1px;text-transform:uppercase">I Understand</button>
      </div>`;
    document.body.appendChild(ov);
    document.getElementById('ffa-warn-ok').onclick = () => ov.remove();
  }

  function showBlur() {
    if (document.getElementById('ffa-blur-ov')) return;
    const bl = document.createElement('div');
    bl.id = 'ffa-blur-ov';
    bl.style.cssText =
      'position:fixed;inset:0;z-index:999998;background:rgba(5,10,20,0.97);display:flex;align-items:center;justify-content:center;font-family:Inter,Arial,sans-serif';
    bl.innerHTML = `<div style="text-align:center;color:#5a6a80">
        <div style="font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Content Hidden</div>
        <div style="font-size:11px;margin-top:8px;">${isMobile ? 'Tap' : 'Click'} to continue</div>
      </div>`;
    bl.onclick = () => bl.remove();
    document.body.appendChild(bl);
  }
  function hideBlur() {
    const bl = document.getElementById('ffa-blur-ov');
    if (bl) bl.remove();
  }

  /* ── DESKTOP ── */
  if (!isMobile) {
    let devOpen = false;
    function alertDevTools(method) {
      if (devOpen) return;
      devOpen = true;
      document.body.innerHTML = `<div style="position:fixed;inset:0;z-index:999999;background:#0a0e1a;display:flex;align-items:center;justify-content:center;font-family:Inter,Arial,sans-serif;color:#fff;">
        <div style="background:#10182b;border:2px solid #d4af37;border-radius:16px;padding:36px 32px;max-width:380px;width:90%;text-align:center;">
          <div style="font-size:17px;font-weight:800;color:#d4af37;margin-bottom:10px;">SECURITY ALERT</div>
          <div style="font-size:12px;color:#dfe6f0;line-height:1.7;margin-bottom:20px;">Developer Tools detected. Access blocked.</div>
          <button onclick="location.reload()" style="padding:10px 28px;background:#1a2a4a;color:#fff;border:none;border-radius:6px;font-size:12px;font-weight:700;cursor:pointer;">Reload Page</button>
        </div></div>`;
      sendAlert(`Opened Developer Tools (${method})`);
    }

    function checkDevTools() {
      const threshold = 160;
      if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
        alertDevTools('resize detection');
      }
    }
    setInterval(checkDevTools, 500);

    document.addEventListener(
      'keydown',
      function (e) {
        const k = e.key ? e.key.toLowerCase() : '';
        const ctrl = e.ctrlKey || e.metaKey;
        const shift = e.shiftKey;

        if (k === 'printscreen' || k === 'prtscn') {
          e.preventDefault();
          showWarning('Screenshot attempt detected and logged.');
          sendAlert('PrintScreen pressed');
          return false;
        }
        if (ctrl && k === 'u') {
          e.preventDefault();
          showWarning('View Source is disabled.');
          sendAlert('Ctrl+U pressed');
          return false;
        }
        if (ctrl && k === 's') {
          e.preventDefault();
          showWarning('Saving pages is not allowed.');
          sendAlert('Ctrl+S pressed');
          return false;
        }
        if (ctrl && k === 'p') {
          e.preventDefault();
          showWarning('Printing is not allowed.');
          sendAlert('Ctrl+P pressed');
          return false;
        }
        if (k === 'f12') {
          e.preventDefault();
          showWarning('Developer Tools is disabled.');
          sendAlert('F12 pressed');
          return false;
        }
        if (ctrl && shift && k === 'i') {
          e.preventDefault();
          showWarning('Developer Tools is disabled.');
          sendAlert('Ctrl+Shift+I');
          return false;
        }
        if (ctrl && shift && k === 'j') {
          e.preventDefault();
          sendAlert('Ctrl+Shift+J');
          return false;
        }
        if (ctrl && shift && k === 'c') {
          e.preventDefault();
          sendAlert('Ctrl+Shift+C');
          return false;
        }
        if (ctrl && k === 'a') {
          e.preventDefault();
          return false;
        }
        if (ctrl && k === 'c') {
          e.preventDefault();
          sendAlert('Ctrl+C pressed');
          return false;
        }
      },
      true
    );

    document.addEventListener(
      'contextmenu',
      (e) => {
        e.preventDefault();
        return false;
      },
      true
    );

    window.addEventListener('beforeprint', function () {
      showWarning('Printing is not allowed.');
      sendAlert('Print dialog opened');
      document.body.style.filter = 'blur(30px)';
      setTimeout(() => {
        document.body.style.filter = '';
      }, 3000);
    });

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) showBlur();
      else hideBlur();
    });

    console.log('%c⚠ STOP!', 'color:#d4af37;font-size:44px;font-weight:900');
    console.log(
      '%cThis is a browser developer tool. If someone told you to paste something here, they are trying to compromise your account.',
      'color:#d4af37;font-size:13px;font-weight:bold'
    );
  }

  /* ── MOBILE ── */
  if (isMobile) {
    let longPressTimer;
    document.addEventListener(
      'touchstart',
      function () {
        longPressTimer = setTimeout(() => sendAlert('Long press detected on mobile'), 800);
      },
      { passive: true }
    );
    document.addEventListener('touchend', () => clearTimeout(longPressTimer), { passive: true });
    document.addEventListener('touchmove', () => clearTimeout(longPressTimer), { passive: true });
    document.addEventListener(
      'contextmenu',
      function (e) {
        e.preventDefault();
        sendAlert('Long press context menu on mobile');
        return false;
      },
      true
    );
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) showBlur();
      else hideBlur();
    });
    window.addEventListener('orientationchange', function () {
      showBlur();
      setTimeout(hideBlur, 1500);
    });
    document.addEventListener(
      'touchstart',
      function (e) {
        if (e.touches.length > 1) e.preventDefault();
      },
      { passive: false }
    );
    let lastTouchEnd = 0;
    document.addEventListener(
      'touchend',
      function (e) {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) e.preventDefault();
        lastTouchEnd = now;
      },
      false
    );
  }

  /* ── COMMON ── */
  window.addEventListener('blur', function () {
    showBlur();
  });
  window.addEventListener('focus', function () {
    hideBlur();
  });

  document.addEventListener(
    'selectstart',
    (e) => {
      e.preventDefault();
      return false;
    },
    true
  );
  document.addEventListener(
    'copy',
    function (e) {
      e.preventDefault();
      sendAlert('Content copy attempted');
      return false;
    },
    true
  );
  document.addEventListener(
    'dragstart',
    (e) => {
      e.preventDefault();
      return false;
    },
    true
  );

  const style = document.createElement('style');
  style.textContent = `
    *{ -webkit-user-select:none!important; -moz-user-select:none!important; -ms-user-select:none!important; user-select:none!important; -webkit-touch-callout:none!important; }
    img{ -webkit-user-drag:none!important; pointer-events:none!important; }
    @media print{
      body *{ visibility:hidden!important }
      body::after{ content:'PRINTING NOT ALLOWED — FLIGHT FLARE AVIATION'; visibility:visible!important; position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);font-size:22px;color:#d4af37;font-weight:bold; }
    }
  `;
  document.head.appendChild(style);
})();
