/* ============================================================
   DGCA EXAM BANK — SUBJECT: Technical Specific
   ------------------------------------------------------------
   HOW TO ADD A CHAPTER
   ------------------------------------------------------------
   Copy this pattern for each chapter (see data/radio-navigation.js
   for a fully worked example with real questions):

   registerChapterText("atpl-met", "chapter-id", "Chapter Display Name", `
   1. Question text goes here?
   a. Wrong option
   *b. Correct option
   c. Wrong option
   d. Wrong option
   Explanation: optional.

   2. Next question...
   a. ...
   *b. ...
   c. ...
   d. ...
   `);

   Full format reference (images, multi-line questions, etc.)
   is documented at the top of js/parser.js.
   ============================================================ */

registerSubject("atpl-met", "ATPL-MET");

registerChapterText("atpl-met", "atmosphere", "The Atmosphere", `
1. Lowest layer of atmosphere is
*a. Troposphere
b. Tropopause
c. Stratosphere
Explanation: The troposphere is the lowest atmospheric layer, extending from the surface up to the tropopause, and is where almost all weather occurs.

`);