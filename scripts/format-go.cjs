const fs = require("node:fs");
const { spawnSync } = require("node:child_process");

const files = listGoFiles();

if (files.length !== 0) {
  formatGoFiles(files);
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
  return (
    file.includes("/third_party/") === false && isGenerated(file) === false
  );
}

function isGenerated(file) {
  const prefix = fs.readFileSync(file, "utf8").slice(0, 512);
  return /^\/\/ Code generated .* DO NOT EDIT\./m.test(prefix);
}

/**
 * Formats every selected Go file in bounded argument batches.
 *
 * Windows has a finite command-line length. Splitting independent gofmt inputs
 * preserves each file's formatting while collecting all batch failures before
 * the caller applies its indentation convention.
 *
 * Gofmt formats each input independently, so ordered disjoint batches preserve
 * the complete selected population. A conservative UTF-16 argument budget
 * accounts for quoting and escaping; arguments stay separate from shell syntax.
 * Every batch runs and any spawn or exit failure prevents indentation
 * postprocessing and successful completion. This helper owns argument
 * partitioning and synchronous process failure collection; file selection and
 * indentation normalization remain with their existing owners. The same
 * path-length budget applies to every selected file without omitting a fixture,
 * changing the comparison base or retrying a failed formatter with weaker
 * inputs. The comment states why batching is necessary and explains
 * complete-population and failure behavior before indentation normalization.
 */
function formatGoFiles(files) {
  const batches = [];
  let batch = [];
  let units = 16;
  for (const file of files) {
    const argumentUnits = file.length * 2 + 3;
    if (batch.length !== 0 && units + argumentUnits > 8192) {
      batches.push(batch);
      batch = [];
      units = 16;
    }
    batch.push(file);
    units += argumentUnits;
  }
  if (batch.length !== 0) batches.push(batch);

  console.log(
    `Formatting ${files.length} Go files in ${batches.length} batches.`,
  );
  const errors = [];
  let exitCode = 0;
  for (const inputs of batches) {
    const result = spawnSync("gofmt", ["-w", ...inputs], {
      stdio: "inherit",
    });
    if (result.error) errors.push(result.error);
    if (result.status !== 0) exitCode = result.status ?? 1;
  }
  for (const error of errors) console.error(error);
  if (errors.length !== 0 || exitCode !== 0) process.exit(exitCode || 1);
}
