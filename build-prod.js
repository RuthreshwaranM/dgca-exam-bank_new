/* ============================================================
   BUILD-PROD.JS — minify JS/CSS for deployment.

   Run this after build-questions.js, right before deploying:
     node build-questions.js
     node build-prod.js

   What this does and does NOT do:
   - DOES make casual "view source" / copy-paste noticeably more
     annoying (variable names gone, whitespace gone, one long line).
   - Does NOT hide the code from anyone using DevTools' own
     "pretty print" button, which un-minifies JS in about one click.
     Minification is friction, not encryption — nothing sent to a
     browser can be made unreadable to that same browser, because
     the browser has to execute it. Real protection is what never
     gets sent to the browser at all (server-data/*.json, the
     Razorpay secret key, the JWT secret) — that part is handled by
     the API layer, not by this script.

   Source files (js/*.js, css/*.css) are left untouched — always
   edit those, then re-run this script. It writes *.min.js /
   *.min.css next to them and rewrites the <script>/<link> tags in
   the shipped HTML files to point at the minified versions.
   ============================================================ */
const fs = require("fs");
const path = require("path");
const { minify } = require("terser");
const CleanCSS = require("clean-css");

const ROOT = __dirname;

const JS_FILES = [
  "js/parser.js",
  "js/auth.js",
  "js/app.js",
  "js/protection.js",
  "data/free-questions.js"
];
const CSS_FILES = ["css/style.css", "css/academy.css"];
const HTML_FILES = ["index.html", "login.html", "aboutus.html", "contactus.html"];

async function minifyJs(relPath) {
  const full = path.join(ROOT, relPath);
  const src = fs.readFileSync(full, "utf8");
  const result = await minify(src, { mangle: true, compress: true });
  if (result.error) throw result.error;
  const outPath = full.replace(/\.js$/, ".min.js");
  fs.writeFileSync(outPath, result.code, "utf8");
  return path.relative(ROOT, outPath).split(path.sep).join("/");
}

function minifyCss(relPath) {
  const full = path.join(ROOT, relPath);
  const src = fs.readFileSync(full, "utf8");
  const output = new CleanCSS({}).minify(src);
  if (output.errors && output.errors.length) throw new Error(output.errors.join("; "));
  const outPath = full.replace(/\.css$/, ".min.css");
  fs.writeFileSync(outPath, output.styles, "utf8");
  return path.relative(ROOT, outPath).split(path.sep).join("/");
}

function rewriteHtmlReferences(map) {
  for (const htmlRel of HTML_FILES) {
    const full = path.join(ROOT, htmlRel);
    if (!fs.existsSync(full)) continue;
    let html = fs.readFileSync(full, "utf8");
    for (const [from, to] of Object.entries(map)) {
      html = html.split(`"${from}"`).join(`"${to}"`);
    }
    fs.writeFileSync(full, html, "utf8");
  }
}

(async () => {
  const map = {};
  console.log("Minifying JS...");
  for (const f of JS_FILES) {
    const out = await minifyJs(f);
    map[f] = out;
    console.log(`  ${f} -> ${out}`);
  }
  console.log("Minifying CSS...");
  for (const f of CSS_FILES) {
    const out = minifyCss(f);
    map[f] = out;
    console.log(`  ${f} -> ${out}`);
  }
  console.log("Rewriting HTML references...");
  rewriteHtmlReferences(map);
  console.log("Done. Original source files were left untouched — only .min. files were added and HTML now points at them.");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
