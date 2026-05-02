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
  const base = resolveFormatBase();
  return unique([
    ...gitLines([
      "diff",
      "--name-only",
      "--diff-filter=ACMRTUXB",
      base,
      "--",
      "*.go",
    ]),
    ...gitLines(["ls-files", "--others", "--exclude-standard", "--", "*.go"]),
  ]).filter(isFormatTarget);
}

function resolveFormatBase() {
  if (process.env.FORMAT_GO_BASE) {
    return process.env.FORMAT_GO_BASE;
  }
  for (const candidate of ["origin/next", "origin/main", "origin/master"]) {
    const result = spawnSync("git", ["merge-base", "HEAD", candidate], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });
    const base = result.stdout.trim();
    if (result.status === 0 && base.length !== 0) {
      return base;
    }
  }
  return "HEAD";
}

function gitLines(args) {
  const result = spawnSync("git", args, {
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

function unique(files) {
  return [...new Set(files)].sort();
}

function isFormatTarget(file) {
  return file.includes("/third_party/") === false && isGenerated(file) === false;
}

function isGenerated(file) {
  const prefix = fs.readFileSync(file, "utf8").slice(0, 512);
  return /^\/\/ Code generated .* DO NOT EDIT\./m.test(prefix);
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
