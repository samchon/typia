const fs = require("node:fs");
const path = require("node:path");

const entries = process.argv.slice(2);
if (entries.length === 0)
  throw new Error("At least one .d.ts entry declaration is required.");

for (const entry of entries) {
  if (entry.endsWith(".d.ts") === false)
    throw new Error(`Not a .d.ts declaration: ${entry}`);

  const source = path.resolve(entry);
  const declaration = fs.readFileSync(source);
  const stem = source.slice(0, -".d.ts".length);
  fs.writeFileSync(`${stem}.d.mts`, declaration);
  fs.writeFileSync(`${stem}.d.cts`, declaration);
}
