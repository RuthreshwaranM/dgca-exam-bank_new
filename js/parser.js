/* ============================================================
   DGCA EXAM BANK — TEXT PARSER
   ------------------------------------------------------------
   This is what makes adding questions fast: you paste question
   text almost exactly as it appears in a PDF, mark the correct
   option with a single "*", and this file turns it into the
   structured question objects the app uses.

   FORMAT (paste this shape into any data/*.js file):

     1. Question text goes here? It can wrap onto
        as many lines as you need.
     a. Wrong option
     *b. Correct option        <-- just add "*" before the letter
     c. Wrong option
     d. Wrong option
     Explanation: optional, shown in Practice mode. Skip this
     line entirely if you don't have one yet.

     2. Next question...
     a. ...
     *b. ...
     c. ...
     d. ...

   Questions can have 2, 3, OR 4 options (e.g. some MET questions
   only have a/b/c, true/false ones only have a/b). Just omit
   the "c."/"d." lines you don't need — no special marker required.

   OPTIONAL — add a diagram to a question by adding a line
   anywhere between the question and its options:
     [image: filename.png]
   (drop the actual image file into the /images folder)

   OPTIONAL — add a diagram to the EXPLANATION by adding a line
   anywhere after your "Explanation:" line:
     Explanation: See the diagram below.
     [image: filename.png]
   (same [image: ...] syntax — it's routed to the question or the
   explanation depending on whether it appears before or after
   the "Explanation:" line)

   Numbering (1., 2., 3. ...) doesn't need to be sequential or
   unique across chapters — it's only used to help you keep
   track while pasting; the app generates its own internal IDs.
   ============================================================ */

function parseQuestionsText(raw, idPrefix) {
  const lines = String(raw || "").split(/\r?\n/);
  const questions = [];
  const warnings = [];

  const qStartRe = /^\s*\d+[\.\)]\s+(.*)$/;
  const optRe = /^\s*(\*)?\s*([a-dA-D])[\.\)]\s+(.*)$/;
  const imgRe = /^\s*\[image:\s*(.+?)\]\s*$/i;
  const expRe = /^\s*explanation\s*:\s*(.*)$/i;

  const MIN_OPTIONS = 2;
  const MAX_OPTIONS = 4;

  let cur = null;
  let state = "idle"; // question | options | explanation

  function pushCurrent() {
    if (!cur) return;
    if (cur.options.length < MIN_OPTIONS || cur.options.length > MAX_OPTIONS) {
      warnings.push(`Question starting "${cur.qLines[0]?.slice(0, 50)}..." was skipped — it has ${cur.options.length} options (expected ${MIN_OPTIONS} or ${MAX_OPTIONS}).`);
    } else {
      const correctIndex = cur.options.findIndex(o => o.correct);
      if (correctIndex === -1) warnings.push(`Question "${cur.qLines[0]?.slice(0, 50)}..." has no option marked with "*" — mark the correct one.`);
      questions.push({
        id: `${idPrefix}-${questions.length + 1}`,
        question: cur.qLines.join(" ").replace(/\s+/g, " ").trim(),
        image: cur.image,
        options: cur.options.map(o => o.text.trim()),
        correctIndex: correctIndex,
        explanation: cur.explanationLines.join(" ").replace(/\s+/g, " ").trim(),
        explanationImage: cur.explanationImage
      });
    }
    cur = null;
  }

  for (const line of lines) {
    if (!line.trim()) continue;
    let m;

    if ((m = line.match(qStartRe))) {
      pushCurrent();
      cur = { qLines: [m[1]], image: null, options: [], explanationLines: [], explanationImage: null };
      state = "question";
      continue;
    }
    if (!cur) continue;

    if ((m = line.match(imgRe))) {
      const v = m[1].trim();
      const path = v.includes("/") ? v : "images/" + v;
      if (state === "explanation") {
        cur.explanationImage = path;
      } else {
        cur.image = path;
      }
      continue;
    }
    if ((m = line.match(optRe))) {
      cur.options.push({ text: m[3], correct: !!m[1] });
      state = "options";
      continue;
    }
    if ((m = line.match(expRe))) {
      cur.explanationLines.push(m[1]);
      state = "explanation";
      continue;
    }

    // continuation of whatever we were last reading
    if (state === "question") cur.qLines.push(line.trim());
    else if (state === "options" && cur.options.length) cur.options[cur.options.length - 1].text += " " + line.trim();
    else if (state === "explanation") cur.explanationLines.push(line.trim());
  }
  pushCurrent();

  if (warnings.length) {
    console.warn(`[${idPrefix}] ${warnings.length} issue(s) while parsing questions:\n` + warnings.join("\n"));
  }

  return { questions, warnings };
}

/* ============================================================
   REGISTRATION HELPERS — called from data/*.js files
   ============================================================ */

window.SUBJECTS = window.SUBJECTS || [];

function registerSubject(id, name) {
  let subject = window.SUBJECTS.find(s => s.id === id);
  if (!subject) {
    subject = { id, name, chapters: [] };
    window.SUBJECTS.push(subject);
  }
  return subject;
}

function registerChapterText(subjectId, chapterId, chapterName, rawText) {
  const subject = window.SUBJECTS.find(s => s.id === subjectId);
  if (!subject) {
    console.error(`registerChapterText: unknown subject "${subjectId}" — call registerSubject() first.`);
    return;
  }
  const { questions, warnings } = parseQuestionsText(rawText, `${subjectId}-${chapterId}`.toUpperCase());
  let chapter = subject.chapters.find(c => c.id === chapterId);
  if (!chapter) {
    chapter = { id: chapterId, name: chapterName, questions: [], parseWarnings: [] };
    subject.chapters.push(chapter);
  }
  chapter.questions = chapter.questions.concat(questions);
  chapter.parseWarnings = (chapter.parseWarnings || []).concat(warnings);
}

// For anyone who prefers hand-built objects instead of pasted text —
// still supported, same as before.
function registerChapterObjects(subjectId, chapterId, chapterName, questionObjects) {
  const subject = window.SUBJECTS.find(s => s.id === subjectId);
  if (!subject) {
    console.error(`registerChapterObjects: unknown subject "${subjectId}" — call registerSubject() first.`);
    return;
  }
  let chapter = subject.chapters.find(c => c.id === chapterId);
  if (!chapter) {
    chapter = { id: chapterId, name: chapterName, questions: [], parseWarnings: [] };
    subject.chapters.push(chapter);
  }
  chapter.questions = chapter.questions.concat(questionObjects);
}