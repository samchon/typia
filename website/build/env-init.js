// Seeds `.env` from `.env.local` if `.env` does not exist. Run manually with
// `npm run env:init` after cloning. Never overwrites an existing `.env`.

const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const src = path.join(root, ".env.local");
const dst = path.join(root, ".env");

if (!fs.existsSync(src)) {
  console.error("[env:init] .env.local not found; nothing to seed from");
  process.exit(1);
}
if (fs.existsSync(dst)) {
  console.log("[env:init] .env already exists; leaving it untouched");
  process.exit(0);
}
fs.copyFileSync(src, dst);
console.log("[env:init] .env created from .env.local");
