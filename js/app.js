/* ============================================================
   DGCA EXAM BANK — APPLICATION ENGINE
   Plain JS, no framework, no build step.
   Structure: Subject -> Chapter -> Questions (flat, no nesting)
   ============================================================ */

const APP = document.getElementById("app");
const CRUMBS = document.getElementById("breadcrumbs");
const PASS_MARK = 70; // % — DGCA ground exam pass threshold

// Subjects that don't have local chapter data — clicking their card
// opens an external tool in a new tab instead of navigating in-app.
const EXTERNAL_SUBJECTS = {
  "radio-telephony": {
    url: "https://dgca-rtr-simulator.vercel.app/login.html",
    label: "Opens the RTR Simulator"
  },
  "cockpit-study": {
    url: "https://cockpit-study.vercel.app/",
    label: "Opens Cockpit Study"
  }
};

/* ============================================================
   STORAGE LAYER (all persisted client-side via localStorage)
   ============================================================ */

const Store = {
  _get(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  },
  _set(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
  },

  getMistakes() { return this._get("dgca_mistakes", {}); },
  addMistake(q, ctx) {
    const m = this.getMistakes();
    m[q.id] = { question: q, ctx, missedAt: Date.now(), count: (m[q.id] ? m[q.id].count + 1 : 1) };
    this._set("dgca_mistakes", m);
  },
  clearMistake(id) {
    const m = this.getMistakes();
    delete m[id];
    this._set("dgca_mistakes", m);
  },

  getBookmarks() { return this._get("dgca_bookmarks", {}); },
  isBookmarked(id) { return !!this.getBookmarks()[id]; },
  toggleBookmark(q, ctx) {
    const b = this.getBookmarks();
    if (b[q.id]) delete b[q.id];
    else b[q.id] = { question: q, ctx, savedAt: Date.now() };
    this._set("dgca_bookmarks", b);
  },

  getHistory() { return this._get("dgca_history", []); },
  saveAttempt(record) {
    const h = this.getHistory();
    h.unshift(record);
    this._set("dgca_history", h.slice(0, 300));
  },

  statsForChapterKey(key) {
    const h = this.getHistory().filter(r => r.chapterKey === key);
    if (!h.length) return null;
    const attempts = h.length;
    const avg = Math.round(h.reduce((s, r) => s + r.pct, 0) / attempts);
    const best = Math.max(...h.map(r => r.pct));
    return { attempts, avg, best, last: h[0] };
  }
};

/* ============================================================
   UTILITIES
   ============================================================ */

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function letterFor(i) { return ["A", "B", "C", "D"][i]; }

function fmtTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function ringSVG(pct, size, stroke, cls) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (pct / 100) * c;
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <circle class="ring-bg" cx="${size/2}" cy="${size/2}" r="${r}" stroke-width="${stroke}"></circle>
    <circle class="ring-fill ${cls || ""}" cx="${size/2}" cy="${size/2}" r="${r}" stroke-width="${stroke}"
      stroke-dasharray="${c}" stroke-dashoffset="${offset}"></circle>
  </svg>`;
}

/* ============================================================
   DATA HELPERS
   ============================================================ */

function allSubjects() { return window.SUBJECTS || []; }
function findSubject(id) { return allSubjects().find(s => s.id === id); }
function findChapter(subjectId, chapterId) {
  const subject = findSubject(subjectId);
  if (!subject) return null;
  const chapter = (subject.chapters || []).find(c => c.id === chapterId);
  if (!chapter) return null;
  return { chapter, subjectId, subjectName: subject.name, key: `${subjectId}/${chapterId}` };
}
function subjectQuestionCount(subject) { return (subject.chapters || []).reduce((n, c) => n + c.questions.length, 0); }

/* ============================================================
   ROUTER
   ============================================================ */

function navigate(hash) { window.location.hash = hash; }

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", async function () {
  await initAuthAndQuestions();
  renderAccountWidget();
  render();
});

function render() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  const parts = hash.split("?")[0].split("/").filter(Boolean);
  window.scrollTo(0, 0);

  if (parts[0] === "subject" && parts[1]) return renderChapterList(parts[1]);
  if (parts[0] === "setup" && parts[1] && parts[2]) return renderSetup(parts[1], parts[2]);
  if (parts[0] === "quiz") return renderQuizView();
  if (parts[0] === "results") return renderResultsView();
  if (parts[0] === "review") return renderReviewView();
  if (parts[0] === "mistakes") return renderMistakesPage();
  if (parts[0] === "bookmarks") return renderBookmarksPage();
  if (parts[0] === "stats") return renderStatsPage();

  return renderHome();
}

function setCrumbs(items) {
  CRUMBS.innerHTML = "";
  items.forEach((item, i) => {
    if (i > 0) CRUMBS.appendChild(el(`<span class="sep">/</span>`));
    if (item.hash) {
      const b = el(`<button>${item.label}</button>`);
      b.addEventListener("click", () => navigate(item.hash));
      CRUMBS.appendChild(b);
    } else {
      CRUMBS.appendChild(el(`<span class="current">${item.label}</span>`));
    }
  });
}

/* ============================================================
   PAGE: HOME — subject grid
   ============================================================ */

function renderHome() {
  setCrumbs([{ label: "Home" }]);
  const subjects = allSubjects();
  const totalQ = subjects.reduce((s, sub) => s + subjectQuestionCount(sub), 0);
  const mistakeCount = Object.keys(Store.getMistakes()).length;
  const bookmarkCount = Object.keys(Store.getBookmarks()).length;

  APP.innerHTML = "";
  APP.appendChild(el(`
    <div class="page-head">
      <div class="page-eyebrow">DGCA CPL / ATPL &middot; Question Bank</div>
      <h1 class="page-title">Choose a subject</h1>
      <p class="page-sub">${totalQ} question${totalQ === 1 ? "" : "s"} loaded across ${subjects.length} subjects. Pick a subject to drill into chapters, or jump straight into revision below.</p>
    </div>
  `));

  if (!window.AUTH.hasPaid) {
    const totalFree = (window.META || []).reduce((s, sub) => s + sub.chapters.reduce((n, c) => n + c.free, 0), 0);
    const totalFull = (window.META || []).reduce((s, sub) => s + sub.chapters.reduce((n, c) => n + c.total, 0), 0);
    const banner = el(`
      <div class="chapter-row" style="border-color:var(--amber); margin-bottom:20px;">
        <div class="chapter-row-left">
          <div>
            <div class="chapter-name">You're on the free sample &middot; ${totalFree} of ${totalFull} questions</div>
            <div class="chapter-meta">Unlock every subject and chapter with a one-time payment.</div>
          </div>
        </div>
        <div class="chapter-row-actions">
          <button class="btn btn-sm" id="ff-home-unlock" style="background:var(--amber);color:#2a1e00;">Unlock full access &middot; ${EXAM_PRICE_DISPLAY}</button>
        </div>
      </div>
    `);
    banner.querySelector("#ff-home-unlock").addEventListener("click", startCheckout);
    APP.appendChild(banner);
  }

  const quickRow = el(`<div class="grid" style="margin-bottom:6px;"></div>`);
  quickRow.appendChild(quickCard("Revise mistakes", mistakeCount + " question" + (mistakeCount === 1 ? "" : "s") + " flagged wrong", "#/mistakes", "chip-danger"));
  quickRow.appendChild(quickCard("Bookmarks", bookmarkCount + " question" + (bookmarkCount === 1 ? "" : "s") + " saved", "#/bookmarks", "chip-cyan"));
  quickRow.appendChild(quickCard("Progress", "Accuracy by chapter & subject", "#/stats", "chip-amber"));
  APP.appendChild(quickRow);

  APP.appendChild(el(`<div class="section-title">Subjects</div>`));
  const grid = el(`<div class="grid"></div>`);
  subjects.forEach(sub => {
    const qc = subjectQuestionCount(sub);
    const cc = (sub.chapters || []).length;
    const ext = EXTERNAL_SUBJECTS[sub.id];
    const isExternal = !!ext;
    const card = el(`
      <button class="card">
        <div class="card-top">
          <div class="card-title">${sub.name}${isExternal ? ' <span style="color:var(--cyan);font-size:13px;">&nearr;</span>' : ""}</div>
          ${isExternal ? "" : `<span class="chip chip-amber">${cc} ch</span>`}
        </div>
        <div class="card-meta">${isExternal ? ext.label : qc + " question" + (qc === 1 ? "" : "s")}</div>
      </button>
    `);
    if (isExternal) {
      card.addEventListener("click", () => window.open(ext.url, "_blank", "noopener"));
    } else {
      card.addEventListener("click", () => navigate(`#/subject/${sub.id}`));
    }
    grid.appendChild(card);
  });
  APP.appendChild(grid);
}

function quickCard(title, meta, hash, chipClass) {
  const c = el(`
    <button class="card">
      <div class="card-top">
        <div class="card-title">${title}</div>
        <span class="chip ${chipClass}">&rarr;</span>
      </div>
      <div class="card-meta">${meta}</div>
    </button>
  `);
  c.addEventListener("click", () => navigate(hash));
  return c;
}

/* ============================================================
   PAGE: CHAPTER LIST
   ============================================================ */

function renderChapterList(subjectId) {
  const subject = findSubject(subjectId);
  if (!subject) return navigate("#/");
  const chapters = subject.chapters || [];

  setCrumbs([{ label: "Home", hash: "#/" }, { label: subject.name }]);

  APP.innerHTML = "";
  APP.appendChild(el(`
    <div class="page-head">
      <div class="page-eyebrow">${subject.name}</div>
      <h1 class="page-title">Chapters</h1>
      <p class="page-sub">Pick a chapter, then choose Practice or Test mode and configure your session.</p>
    </div>
  `));

  if (!chapters.length) {
    APP.appendChild(el(`
      <div class="empty-state">
        <div class="em-title">No chapters yet</div>
        <p>Paste a <code>registerChapterText(...)</code> block into <code>data/${subjectId}.js</code> and it will show up here automatically. See <code>data/radio-navigation.js</code> for a fully worked example.</p>
      </div>
    `));
    return;
  }

  chapters.forEach((ch, i) => {
    const key = `${subjectId}/${ch.id}`;
    const stat = Store.statsForChapterKey(key);
    const warnCount = (ch.parseWarnings || []).length;
    const cm = metaFor(subjectId, ch.id);
    const locked = !window.AUTH.hasPaid && cm && cm.total > cm.free;
    const lockChip = locked ? ` <span class="chip chip-amber" title="${cm.free} free, ${cm.total} total">&#128274; ${cm.total - cm.free} locked</span>` : "";
    const row = el(`
      <div class="chapter-row">
        <div class="chapter-row-left">
          <div class="chapter-index">${String(i + 1).padStart(2, "0")}</div>
          <div>
            <div class="chapter-name">${ch.name}${warnCount ? ` <span class="chip chip-danger" title="${(ch.parseWarnings||[]).join(' | ').replace(/"/g,'&quot;')}">${warnCount} to fix</span>` : ""}${lockChip}</div>
            <div class="chapter-meta">${ch.questions.length}${locked ? ` of ${cm.total}` : ""} question${ch.questions.length === 1 ? "" : "s"}${stat ? ` &middot; best ${stat.best}% &middot; ${stat.attempts} attempt${stat.attempts === 1 ? "" : "s"}` : " &middot; not attempted yet"}</div>
          </div>
        </div>
        <div class="chapter-row-actions">
          <button class="btn btn-ghost btn-sm" data-act="practice">Practice</button>
          <button class="btn btn-primary btn-sm" data-act="test">Test</button>
          ${locked ? `<button class="btn btn-sm" data-act="unlock" style="background:var(--amber);color:#2a1e00;">Unlock all</button>` : ""}
        </div>
      </div>
    `);
    if (locked) row.querySelector('[data-act="unlock"]').addEventListener("click", (e) => { e.stopPropagation(); startCheckout(); });
    row.querySelector('[data-act="practice"]').addEventListener("click", () => { setupState.mode = "practice"; navigate(`#/setup/${subjectId}/${ch.id}`); });
    row.querySelector('[data-act="test"]').addEventListener("click", () => { setupState.mode = "test"; navigate(`#/setup/${subjectId}/${ch.id}`); });
    row.addEventListener("click", (e) => {
      if (e.target.closest("button")) return;
      navigate(`#/setup/${subjectId}/${ch.id}`);
    });
    APP.appendChild(row);
  });
}

/* ============================================================
   PAGE: SETUP — mode, shuffle, count, timer
   ============================================================ */

let setupState = { mode: "practice", shuffleQ: true, shuffleOpt: false, count: "all", timerType: "off", timerMinutes: 20 };

function renderSetup(subjectId, chapterId) {
  const ctx = findChapter(subjectId, chapterId);
  if (!ctx) return navigate("#/");

  setCrumbs([{ label: "Home", hash: "#/" }, { label: ctx.subjectName, hash: `#/subject/${subjectId}` }, { label: ctx.chapter.name }]);

  const total = ctx.chapter.questions.length;
  if (setupState.count === "all" || setupState.count > total) setupState.count = total;
  if (!total) {
    APP.innerHTML = "";
    APP.appendChild(el(`<div class="empty-state"><div class="em-title">This chapter has no valid questions yet</div><p>Check the console (or the "to fix" chip on the chapter list) for parsing issues.</p></div>`));
    return;
  }

  APP.innerHTML = "";
  APP.appendChild(el(`
    <div class="page-head">
      <div class="page-eyebrow">${ctx.chapter.name}</div>
      <h1 class="page-title">Session setup</h1>
      <p class="page-sub">${total} question${total === 1 ? "" : "s"} available in this chapter.</p>
    </div>
  `));

  const grid = el(`<div class="setup-grid"></div>`);

  const p1 = el(`
    <div class="setup-panel">
      <h3>Mode</h3>
      <div class="segmented" id="seg-mode">
        <button data-v="practice">Practice</button>
        <button data-v="test">Test</button>
      </div>
      <div class="field" style="margin-top:16px;">
        <label>Number of questions</label>
        <div class="number-with-buttons">
          <button class="stepper-btn" id="count-minus">&minus;</button>
          <input type="number" id="count-input" min="1" max="${total}" value="${setupState.count}">
          <button class="stepper-btn" id="count-plus">&plus;</button>
        </div>
      </div>
      <div class="toggle-row">
        <div>
          <div class="toggle-row-label">Shuffle questions</div>
          <div class="toggle-row-desc">Random order each attempt</div>
        </div>
        <div class="switch ${setupState.shuffleQ ? "on" : ""}" id="sw-shuffleq"></div>
      </div>
      <div class="toggle-row">
        <div>
          <div class="toggle-row-label">Shuffle options</div>
          <div class="toggle-row-desc">Randomize A/B/C/D order</div>
        </div>
        <div class="switch ${setupState.shuffleOpt ? "on" : ""}" id="sw-shuffleopt"></div>
      </div>
    </div>
  `);

  const p2 = el(`
    <div class="setup-panel">
      <h3>Timer</h3>
      <div class="segmented" id="seg-timer">
        <button data-v="off">Off</button>
        <button data-v="total">Total</button>
        <button data-v="perq">Per question</button>
      </div>
      <div class="field" style="margin-top:16px;" id="timer-minutes-field">
        <label id="timer-minutes-label">Minutes</label>
        <div class="number-with-buttons">
          <button class="stepper-btn" id="min-minus">&minus;</button>
          <input type="number" id="min-input" min="1" max="180" value="${setupState.timerMinutes}">
          <button class="stepper-btn" id="min-plus">&plus;</button>
        </div>
      </div>
      <div class="empty-state" style="padding:16px; margin-top:6px;">
        <p style="margin:0; font-size:12.5px;">${setupState.mode === "practice" ? "In Practice mode you get instant feedback after each answer, with an explanation where available." : "In Test mode answers are hidden until you submit — a question palette on the side lets you jump around and mark questions for review, just like the real CBT."}</p>
      </div>
    </div>
  `);

  grid.appendChild(p1);
  grid.appendChild(p2);
  APP.appendChild(grid);

  const footer = el(`
    <div class="setup-footer">
      <button class="btn btn-ghost" id="cancel-btn">Cancel</button>
      <button class="btn btn-primary" id="start-btn">Start session</button>
    </div>
  `);
  APP.appendChild(footer);

  function syncSegs() {
    p1.querySelectorAll("#seg-mode button").forEach(b => b.classList.toggle("active", b.dataset.v === setupState.mode));
    p2.querySelectorAll("#seg-timer button").forEach(b => b.classList.toggle("active", b.dataset.v === setupState.timerType));
    p2.querySelector("#timer-minutes-field").classList.toggle("hidden", setupState.timerType === "off");
    p2.querySelector("#timer-minutes-label").textContent = setupState.timerType === "perq" ? "Seconds per question" : "Total minutes";
  }
  syncSegs();

  p1.querySelector("#seg-mode").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    setupState.mode = b.dataset.v; renderSetup(subjectId, chapterId);
  });
  p2.querySelector("#seg-timer").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    setupState.timerType = b.dataset.v;
    if (b.dataset.v === "perq") setupState.timerMinutes = 60;
    syncSegs();
  });

  const countInput = p1.querySelector("#count-input");
  countInput.addEventListener("change", () => {
    let v = parseInt(countInput.value || "1", 10);
    v = Math.max(1, Math.min(total, v));
    countInput.value = v; setupState.count = v;
  });
  p1.querySelector("#count-minus").addEventListener("click", () => { countInput.value = Math.max(1, parseInt(countInput.value) - 1); countInput.dispatchEvent(new Event("change")); });
  p1.querySelector("#count-plus").addEventListener("click", () => { countInput.value = Math.min(total, parseInt(countInput.value) + 1); countInput.dispatchEvent(new Event("change")); });

  p1.querySelector("#sw-shuffleq").addEventListener("click", (e) => { setupState.shuffleQ = !setupState.shuffleQ; e.target.classList.toggle("on"); });
  p1.querySelector("#sw-shuffleopt").addEventListener("click", (e) => { setupState.shuffleOpt = !setupState.shuffleOpt; e.target.classList.toggle("on"); });

  const minInput = p2.querySelector("#min-input");
  minInput.addEventListener("change", () => {
    const max = setupState.timerType === "perq" ? 600 : 180;
    let v = parseInt(minInput.value || "1", 10);
    v = Math.max(1, Math.min(max, v));
    minInput.value = v; setupState.timerMinutes = v;
  });
  p2.querySelector("#min-minus").addEventListener("click", () => { minInput.value = Math.max(1, parseInt(minInput.value) - 1); minInput.dispatchEvent(new Event("change")); });
  p2.querySelector("#min-plus").addEventListener("click", () => { minInput.value = parseInt(minInput.value) + 1; minInput.dispatchEvent(new Event("change")); });

  footer.querySelector("#cancel-btn").addEventListener("click", () => history.back());
  footer.querySelector("#start-btn").addEventListener("click", () => startQuiz(ctx));
}

/* ============================================================
   QUIZ ENGINE
   ============================================================ */

let session = null;
let timerHandle = null;

function startQuiz(ctx) {
  let pool = ctx.chapter.questions.slice();
  if (setupState.shuffleQ) pool = shuffle(pool);
  pool = pool.slice(0, setupState.count);

  const questions = pool.map(q => {
    let options = q.options.map((text, i) => ({ text, isCorrect: i === q.correctIndex }));
    if (setupState.shuffleOpt) options = shuffle(options);
    return { id: q.id, question: q.question, image: q.image, explanation: q.explanation, explanationImage: q.explanationImage, options, userAnswer: null, marked: false, original: q };
  });

  session = {
    mode: setupState.mode,
    ctx,
    questions,
    current: 0,
    startTime: Date.now(),
    timerType: setupState.timerType,
    totalSeconds: setupState.timerType === "total" ? setupState.timerMinutes * 60 : null,
    perQSeconds: setupState.timerType === "perq" ? setupState.timerMinutes : null,
    remaining: setupState.timerType === "total" ? setupState.timerMinutes * 60 : (setupState.timerType === "perq" ? setupState.timerMinutes : null),
  };

  navigate("#/quiz");
}

function currentQ() { return session.questions[session.current]; }
function stopTimer() { if (timerHandle) { clearInterval(timerHandle); timerHandle = null; } }

function startTimerIfNeeded() {
  stopTimer();
  if (session.timerType === "off") return;
  if (session.timerType === "perq") session.remaining = session.perQSeconds;
  timerHandle = setInterval(() => {
    session.remaining--;
    updateTimerUI();
    if (session.remaining <= 0) {
      if (session.timerType === "total") { finishQuiz(); return; }
      if (session.timerType === "perq") {
        if (session.current < session.questions.length - 1) goTo(session.current + 1);
        else finishQuiz();
      }
    }
  }, 1000);
}

function updateTimerUI() {
  const ringEl = document.getElementById("quiz-ring");
  const label = document.getElementById("quiz-ring-text");
  if (!ringEl || session.remaining == null) return;
  const total = session.timerType === "total" ? session.totalSeconds : session.perQSeconds;
  const pct = Math.max(0, (session.remaining / total) * 100);
  const warn = session.remaining <= Math.min(30, total * 0.15);
  ringEl.innerHTML = ringSVG(pct, 58, 5, warn ? "warn" : "");
  if (label) label.textContent = fmtTime(Math.max(0, session.remaining));
}

function renderQuizView() {
  if (!session) return navigate("#/");
  setCrumbs([{ label: "Home", hash: "#/" }, { label: session.ctx.chapter.name }, { label: session.mode === "practice" ? "Practice" : "Test" }]);

  APP.innerHTML = "";
  const shell = el(`<div class="quiz-shell"></div>`);
  const left = el(`<div></div>`);

  const header = el(`
    <div class="quiz-header">
      <div class="quiz-progress-label">Question <strong style="color:var(--text)">${session.current + 1}</strong> of ${session.questions.length} &middot; ${session.mode === "practice" ? "Practice mode" : "Test mode"}</div>
      <div class="instrument-ring-wrap">
        ${session.timerType !== "off" ? `<div class="instrument-ring" id="quiz-ring"></div><span id="quiz-ring-text" style="font-family:var(--font-mono);font-size:13px;color:var(--text-muted)"></span>` : ""}
      </div>
    </div>
  `);
  left.appendChild(header);
  left.appendChild(renderQuestionCard());
  shell.appendChild(left);

  if (session.mode === "test") shell.appendChild(renderPalette());

  APP.appendChild(shell);
  if (session.timerType !== "off") { updateTimerUI(); startTimerIfNeeded(); } else stopTimer();
}

function renderQuestionCard() {
  const q = currentQ();
  const card = el(`<div class="question-card"></div>`);

  const bookmarked = Store.isBookmarked(q.id);
  const idRow = el(`
    <div class="question-id">
      <span>${q.id}</span>
      <button class="icon-btn" style="width:28px;height:28px;color:${bookmarked ? "var(--amber)" : "var(--text-faint)"}" id="bookmark-btn" title="Bookmark">${bookmarked ? "★" : "☆"}</button>
    </div>
  `);
  idRow.querySelector("#bookmark-btn").addEventListener("click", () => {
    Store.toggleBookmark(q.original, { subjectId: session.ctx.subjectId, subjectName: session.ctx.subjectName, chapterId: session.ctx.chapter.id, chapterName: session.ctx.chapter.name });
    renderQuizView();
  });
  card.appendChild(idRow);

  card.appendChild(el(`<div class="question-text">${q.question}</div>`));
  if (q.image) card.appendChild(el(`<img class="question-image" src="${q.image}" alt="Question diagram">`));

  const optWrap = el(`<div class="options"></div>`);
  const answered = q.userAnswer !== null;

  q.options.forEach((opt, i) => {
    const btn = el(`
      <button class="option-btn" data-i="${i}">
        <span class="option-letter">${letterFor(i)}</span>
        <span>${opt.text}</span>
      </button>
    `);
    if (session.mode === "practice" && answered) {
      if (opt.isCorrect) btn.classList.add("correct");
      else if (i === q.userAnswer) btn.classList.add("incorrect");
      btn.disabled = true;
    } else if (session.mode === "test" && i === q.userAnswer) {
      btn.classList.add("selected");
    }
    btn.addEventListener("click", () => selectAnswer(i));
    optWrap.appendChild(btn);
  });
  card.appendChild(optWrap);

  if (session.mode === "practice" && answered && q.explanation) {
    card.appendChild(el(`<div class="explanation-box"><span class="eb-label">Explanation</span>${q.explanation}${q.explanationImage ? `<img class="question-image" src="${q.explanationImage}" alt="Explanation diagram">` : ""}</div>`));
  }

  const nav = el(`
    <div class="quiz-nav">
      <button class="btn btn-ghost" id="prev-btn" ${session.current === 0 ? "disabled" : ""}>&larr; Previous</button>
      <div class="quiz-nav-right">
        ${session.mode === "test" ? `<button class="btn btn-ghost" id="mark-btn">${q.marked ? "Unmark" : "Mark for review"}</button>` : ""}
        ${session.current < session.questions.length - 1
          ? `<button class="btn btn-primary" id="next-btn" ${session.mode === "practice" && !answered ? "disabled" : ""}>Next &rarr;</button>`
          : `<button class="btn btn-primary" id="submit-btn">Submit</button>`}
      </div>
    </div>
  `);
  nav.querySelector("#prev-btn")?.addEventListener("click", () => goTo(session.current - 1));
  nav.querySelector("#next-btn")?.addEventListener("click", () => goTo(session.current + 1));
  nav.querySelector("#mark-btn")?.addEventListener("click", () => { q.marked = !q.marked; renderQuizView(); });
  nav.querySelector("#submit-btn")?.addEventListener("click", () => confirmSubmit());
  card.appendChild(nav);

  return card;
}

function renderPalette() {
  const wrap = el(`<div class="palette-panel"></div>`);
  wrap.appendChild(el(`<div class="palette-title">Question palette</div>`));
  const grid = el(`<div class="palette-grid"></div>`);
  session.questions.forEach((q, i) => {
    const cls = ["palette-cell"];
    if (i === session.current) cls.push("current");
    if (q.userAnswer !== null) cls.push("answered");
    if (q.marked) cls.push("marked");
    const cell = el(`<button class="${cls.join(" ")}">${i + 1}</button>`);
    cell.addEventListener("click", () => goTo(i));
    grid.appendChild(cell);
  });
  wrap.appendChild(grid);
  wrap.appendChild(el(`
    <div class="palette-legend">
      <div><span class="legend-dot" style="background:var(--success-dim);border:1px solid var(--success)"></span> Answered</div>
      <div><span class="legend-dot" style="background:var(--bg-elev);border:1px solid var(--border)"></span> Unanswered</div>
      <div><span class="legend-dot" style="background:var(--amber)"></span> Marked for review</div>
    </div>
  `));
  wrap.appendChild(el(`<button class="btn btn-primary btn-block" id="palette-submit" style="margin-top:16px;">Submit test</button>`));
  wrap.querySelector("#palette-submit").addEventListener("click", () => confirmSubmit());
  return wrap;
}

function selectAnswer(i) {
  const q = currentQ();
  if (session.mode === "practice" && q.userAnswer !== null) return;
  q.userAnswer = i;
  renderQuizView();
}

function goTo(i) {
  if (i < 0 || i >= session.questions.length) return;
  session.current = i;
  renderQuizView();
}

function confirmSubmit() {
  const unanswered = session.questions.filter(q => q.userAnswer === null).length;
  if (unanswered > 0) {
    const ok = window.confirm(`${unanswered} question${unanswered === 1 ? " is" : "s are"} unanswered. Submit anyway?`);
    if (!ok) return;
  }
  finishQuiz();
}

function finishQuiz() {
  stopTimer();
  const total = session.questions.length;
  let correct = 0;
  session.questions.forEach(q => {
    const isCorrect = q.userAnswer !== null && q.options[q.userAnswer].isCorrect;
    if (isCorrect) correct++;
    const ctxInfo = { subjectId: session.ctx.subjectId, subjectName: session.ctx.subjectName, chapterId: session.ctx.chapter.id, chapterName: session.ctx.chapter.name };
    if (isCorrect) Store.clearMistake(q.id);
    else Store.addMistake(q.original, ctxInfo);
  });
  const pct = total ? Math.round((correct / total) * 100) : 0;
  const timeTaken = Math.round((Date.now() - session.startTime) / 1000);

  session.result = { correct, total, pct, timeTaken, pass: pct >= PASS_MARK };

  Store.saveAttempt({
    date: Date.now(), mode: session.mode,
    subjectId: session.ctx.subjectId, subjectName: session.ctx.subjectName,
    chapterId: session.ctx.chapter.id, chapterName: session.ctx.chapter.name,
    chapterKey: session.ctx.key, correct, total, pct, timeTaken
  });

  navigate("#/results");
}

/* ============================================================
   PAGE: RESULTS
   ============================================================ */

function renderResultsView() {
  if (!session || !session.result) return navigate("#/");
  setCrumbs([{ label: "Home", hash: "#/" }, { label: session.ctx.chapter.name }, { label: "Results" }]);

  const r = session.result;
  APP.innerHTML = "";

  const hero = el(`
    <div class="results-hero">
      <div class="score-ring">
        ${ringSVG(r.pct, 128, 10, r.pass ? "" : "fail")}
        <div class="score-ring-text">
          <div class="score-ring-pct">${r.pct}%</div>
          <div class="score-ring-label">${r.pass ? "Pass" : "Below pass"}</div>
        </div>
      </div>
      <div class="results-stats">
        <div><div class="result-stat-num">${r.correct}/${r.total}</div><div class="result-stat-label">Correct</div></div>
        <div><div class="result-stat-num">${fmtTime(r.timeTaken)}</div><div class="result-stat-label">Time taken</div></div>
        <div><div class="result-stat-num">${PASS_MARK}%</div><div class="result-stat-label">Pass mark</div></div>
        <div><div class="result-stat-num">${session.mode === "practice" ? "Practice" : "Test"}</div><div class="result-stat-label">Mode</div></div>
      </div>
    </div>
  `);
  APP.appendChild(hero);

  const actions = el(`<div style="display:flex; gap:10px; flex-wrap:wrap; margin-bottom:10px;"></div>`);
  const retryAll = el(`<button class="btn btn-primary">Retry this chapter</button>`);
  retryAll.addEventListener("click", () => navigate(`#/setup/${session.ctx.subjectId}/${session.ctx.chapter.id}`));
  const review = el(`<button class="btn btn-cyan">Review answers</button>`);
  review.addEventListener("click", () => navigate("#/review"));
  const wrongCount = session.questions.filter(q => q.userAnswer === null || !q.options[q.userAnswer].isCorrect).length;
  const backBtn = el(`<button class="btn btn-ghost">Back to chapters</button>`);
  backBtn.addEventListener("click", () => navigate(`#/subject/${session.ctx.subjectId}`));
  actions.appendChild(retryAll); actions.appendChild(review); actions.appendChild(backBtn);
  if (wrongCount > 0) actions.appendChild(el(`<span class="chip chip-danger" style="align-self:center;">${wrongCount} added to Revise Mistakes</span>`));
  APP.appendChild(actions);
}

/* ============================================================
   PAGE: REVIEW
   ============================================================ */

function renderReviewView() {
  if (!session || !session.result) return navigate("#/");
  setCrumbs([{ label: "Home", hash: "#/" }, { label: session.ctx.chapter.name }, { label: "Review" }]);

  APP.innerHTML = "";
  APP.appendChild(el(`
    <div class="page-head">
      <div class="page-eyebrow">${session.ctx.chapter.name}</div>
      <h1 class="page-title">Answer review</h1>
      <p class="page-sub">${session.result.correct} of ${session.result.total} correct.</p>
    </div>
  `));

  session.questions.forEach((q, i) => {
    const answered = q.userAnswer !== null;
    const isCorrect = answered && q.options[q.userAnswer].isCorrect;
    const correctOpt = q.options.find(o => o.isCorrect);

    const item = el(`
      <div class="review-item">
        <div class="review-item-head">
          <div class="review-q">${i + 1}. ${q.question}</div>
          <span class="chip ${isCorrect ? "chip-success" : "chip-danger"}">${isCorrect ? "Correct" : answered ? "Incorrect" : "Skipped"}</span>
        </div>
        ${q.image ? `<img class="question-image" src="${q.image}" style="max-width:320px;">` : ""}
        <div class="review-answer-row"><span class="label">Your answer</span> ${answered ? `${letterFor(q.userAnswer)} — ${q.options[q.userAnswer].text}` : "—"}</div>
        ${!isCorrect ? `<div class="review-answer-row"><span class="label">Correct</span> ${letterFor(q.options.indexOf(correctOpt))} — ${correctOpt.text}</div>` : ""}
        ${q.explanation ? `<div class="explanation-box" style="margin-top:12px;"><span class="eb-label">Explanation</span>${q.explanation}${q.explanationImage ? `<img class="question-image" src="${q.explanationImage}" style="max-width:320px;">` : ""}</div>` : ""}
      </div>
    `);
    APP.appendChild(item);
  });
}

/* ============================================================
   PAGE: MISTAKES BANK
   ============================================================ */

function renderMistakesPage() {
  setCrumbs([{ label: "Home", hash: "#/" }, { label: "Revise mistakes" }]);
  const mistakes = Object.values(Store.getMistakes());

  APP.innerHTML = "";
  APP.appendChild(el(`
    <div class="page-head">
      <div class="page-eyebrow">Revision</div>
      <h1 class="page-title">Revise mistakes</h1>
      <p class="page-sub">Every question you've gotten wrong lands here automatically. Clear it by answering it correctly.</p>
    </div>
  `));

  if (!mistakes.length) {
    APP.appendChild(el(`<div class="empty-state"><div class="em-title">Nothing here yet</div><p>Questions you answer incorrectly in Practice or Test mode will show up here for focused revision.</p></div>`));
    return;
  }

  const startBtn = el(`<button class="btn btn-primary" style="margin-bottom:20px;">Practice all ${mistakes.length} mistake${mistakes.length === 1 ? "" : "s"}</button>`);
  startBtn.addEventListener("click", () => startVirtualQuiz(mistakes.map(m => m.question), "Revise Mistakes", "practice"));
  APP.appendChild(startBtn);

  mistakes.sort((a, b) => b.missedAt - a.missedAt).forEach(m => {
    const row = el(`
      <div class="chapter-row">
        <div class="chapter-row-left">
          <div>
            <div class="chapter-name" style="font-size:14px;">${m.question.question}</div>
            <div class="chapter-meta">${m.ctx.subjectName} / ${m.ctx.chapterName} &middot; missed ${m.count}x</div>
          </div>
        </div>
        <div class="chapter-row-actions"><button class="btn btn-ghost btn-sm" data-act="clear">Clear</button></div>
      </div>
    `);
    row.querySelector('[data-act="clear"]').addEventListener("click", () => { Store.clearMistake(m.question.id); renderMistakesPage(); });
    APP.appendChild(row);
  });
}

/* ============================================================
   PAGE: BOOKMARKS
   ============================================================ */

function renderBookmarksPage() {
  setCrumbs([{ label: "Home", hash: "#/" }, { label: "Bookmarks" }]);
  const bookmarks = Object.values(Store.getBookmarks());

  APP.innerHTML = "";
  APP.appendChild(el(`
    <div class="page-head">
      <div class="page-eyebrow">Saved</div>
      <h1 class="page-title">Bookmarks</h1>
      <p class="page-sub">Questions you've flagged with the ★ icon while practicing.</p>
    </div>
  `));

  if (!bookmarks.length) {
    APP.appendChild(el(`<div class="empty-state"><div class="em-title">No bookmarks yet</div><p>Tap the star icon on any question while practicing to save it here.</p></div>`));
    return;
  }

  const startBtn = el(`<button class="btn btn-primary" style="margin-bottom:20px;">Practice all ${bookmarks.length} bookmark${bookmarks.length === 1 ? "" : "s"}</button>`);
  startBtn.addEventListener("click", () => startVirtualQuiz(bookmarks.map(b => b.question), "Bookmarks", "practice"));
  APP.appendChild(startBtn);

  bookmarks.sort((a, b) => b.savedAt - a.savedAt).forEach(b => {
    const row = el(`
      <div class="chapter-row">
        <div class="chapter-row-left">
          <div>
            <div class="chapter-name" style="font-size:14px;">${b.question.question}</div>
            <div class="chapter-meta">${b.ctx.subjectName} / ${b.ctx.chapterName}</div>
          </div>
        </div>
        <div class="chapter-row-actions"><button class="btn btn-ghost btn-sm" data-act="remove">Remove</button></div>
      </div>
    `);
    row.querySelector('[data-act="remove"]').addEventListener("click", () => { Store.toggleBookmark(b.question, b.ctx); renderBookmarksPage(); });
    APP.appendChild(row);
  });
}

function startVirtualQuiz(questions, label, mode) {
  const ctx = { chapter: { id: "virtual", name: label, questions }, subjectId: "virtual", subjectName: label, key: "virtual/" + label };
  session = null;
  const pool = shuffle(questions);
  const qs = pool.map(q => {
    const options = q.options.map((text, i) => ({ text, isCorrect: i === q.correctIndex }));
    return { id: q.id, question: q.question, image: q.image, explanation: q.explanation, explanationImage: q.explanationImage, options, userAnswer: null, marked: false, original: q };
  });
  session = { mode, ctx, questions: qs, current: 0, startTime: Date.now(), timerType: "off", remaining: null };
  navigate("#/quiz");
}

/* ============================================================
   PAGE: STATS DASHBOARD
   ============================================================ */

function renderStatsPage() {
  setCrumbs([{ label: "Home", hash: "#/" }, { label: "Progress" }]);
  const history = Store.getHistory();

  APP.innerHTML = "";
  APP.appendChild(el(`
    <div class="page-head">
      <div class="page-eyebrow">Analytics</div>
      <h1 class="page-title">Your progress</h1>
      <p class="page-sub">Stats are calculated from every Practice and Test attempt, stored locally on this device.</p>
    </div>
  `));

  if (!history.length) {
    APP.appendChild(el(`<div class="empty-state"><div class="em-title">No attempts yet</div><p>Complete a Practice or Test session and your stats will appear here.</p></div>`));
    return;
  }

  const totalAttempts = history.length;
  const avgScore = Math.round(history.reduce((s, r) => s + r.pct, 0) / totalAttempts);
  const totalQAnswered = history.reduce((s, r) => s + r.total, 0);
  const passCount = history.filter(r => r.pct >= PASS_MARK).length;

  const statGrid = el(`<div class="stat-grid"></div>`);
  [
    [totalAttempts, "Attempts"],
    [avgScore + "%", "Average score"],
    [totalQAnswered, "Questions answered"],
    [Math.round((passCount / totalAttempts) * 100) + "%", "Sessions at pass mark"]
  ].forEach(([num, lbl]) => statGrid.appendChild(el(`<div class="stat-card"><div class="num">${num}</div><div class="lbl">${lbl}</div></div>`)));
  APP.appendChild(statGrid);

  APP.appendChild(el(`<div class="section-title">By chapter</div>`));
  const byChapter = {};
  history.forEach(r => {
    if (!byChapter[r.chapterKey]) byChapter[r.chapterKey] = { name: r.chapterName, subject: r.subjectName, attempts: [] };
    byChapter[r.chapterKey].attempts.push(r);
  });
  Object.values(byChapter).forEach(c => {
    const avg = Math.round(c.attempts.reduce((s, r) => s + r.pct, 0) / c.attempts.length);
    const best = Math.max(...c.attempts.map(r => r.pct));
    APP.appendChild(el(`
      <div class="chapter-row">
        <div class="chapter-row-left">
          <div>
            <div class="chapter-name">${c.name}</div>
            <div class="chapter-meta">${c.subject} &middot; ${c.attempts.length} attempt${c.attempts.length === 1 ? "" : "s"}</div>
          </div>
        </div>
        <div style="display:flex; gap:20px; align-items:center;">
          <div style="text-align:right;"><div class="result-stat-num" style="font-size:16px;">${avg}%</div><div class="result-stat-label" style="font-size:10px;">avg</div></div>
          <div style="text-align:right;"><div class="result-stat-num" style="font-size:16px; color:var(--success)">${best}%</div><div class="result-stat-label" style="font-size:10px;">best</div></div>
        </div>
      </div>
    `));
  });

  APP.appendChild(el(`<div class="section-title">Recent attempts</div>`));
  history.slice(0, 15).forEach(r => {
    const d = new Date(r.date);
    APP.appendChild(el(`
      <div class="chapter-row">
        <div class="chapter-row-left">
          <div>
            <div class="chapter-name" style="font-size:14px;">${r.chapterName}</div>
            <div class="chapter-meta">${d.toLocaleDateString()} ${d.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})} &middot; ${r.mode} &middot; ${fmtTime(r.timeTaken)}</div>
          </div>
        </div>
        <span class="chip ${r.pct >= PASS_MARK ? "chip-success" : "chip-danger"}">${r.correct}/${r.total} &middot; ${r.pct}%</span>
      </div>
    `));
  });
}