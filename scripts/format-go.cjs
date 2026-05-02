const fs = require("node:fs");
const { spawnSync } = require("node:child_process");

const files = listGoFiles();

if (files.length !== 0) {
  run("gofmt", ["-w", ...files]);
  for (const file of files) {
    const before = fs.readFileSync(file, "utf8");
    const after = before.replace(/^\t+/gm, (tabs) => "  ".repeat(tabs.length));
    if (after !== before) {
      fs.writeFileSync(file, after);
    }
  }
}

function listGoFiles() {
  const result = spawnSync("git", ["ls-files", "--", "*.go"], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "inherit"],
  });
  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
  return result.stdout
    .split(/\r?\n/)
    .map((file) => file.trim())
    .filter((file) => file.length !== 0);
}

function run(command, args) {
  const result = spawnSync(command, args, {
    stdio: "inherit",
  });
  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}
