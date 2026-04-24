const fs = require("node:fs");

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

module.exports = {
  readJson,
};
