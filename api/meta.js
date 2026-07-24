const fs = require("fs");
const path = require("path");

const META_PATH = path.join(process.cwd(), "server-data", "meta.json");
let cached = null;

module.exports = async (req, res) => {
  if (!cached) cached = fs.readFileSync(META_PATH, "utf8");
  res.setHeader("Cache-Control", "public, max-age=300");
  res.setHeader("Content-Type", "application/json");
  return res.status(200).send(cached);
};
