const assert = require("node:assert/strict");
const { spawnSync } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const workspace = path.resolve(__dirname, "..", "..");
const repository = path.resolve(workspace, "..", "..");
const ttscRoot = path.dirname(
  require.resolve("ttsc/package.json", { paths: [repository] }),
);
const executable = path.join(ttscRoot, "lib", "launcher", "ttsx.js");
const cli = path.join(
  repository,
  "packages",
  "typia",
  "src",
  "executable",
  "typia.ts",
);

const createFixture = () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "typia-generate-fs-"));
  const input = path.join(root, "input");
  const output = path.join(root, "output");
  fs.mkdirSync(input);
  fs.writeFileSync(
    path.join(root, "tsconfig.json"),
    JSON.stringify({
      compilerOptions: {
        module: "commonjs",
        strict: true,
        target: "ES2022",
      },
      include: ["input/**/*.ts"],
    }),
  );
  return {
    input,
    output,
    root,
    cleanup: () => fs.rmSync(root, { force: true, recursive: true }),
  };
};

const writeSource = (file, value = path.basename(file)) => {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `export const value = ${JSON.stringify(value)};\n`);
};

const linkDirectory = (target, link) => {
  fs.symlinkSync(
    target,
    link,
    process.platform === "win32" ? "junction" : "dir",
  );
};

const linkFile = (target, link) => {
  fs.symlinkSync(target, link, process.platform === "win32" ? "file" : "file");
};

const runCli = (fixture, args, timeout) =>
  spawnSync(
    process.execPath,
    [
      executable,
      "--no-plugins",
      cli,
      "generate",
      "--output",
      fixture.output,
      "--project",
      path.join(fixture.root, "tsconfig.json"),
      ...args,
    ],
    {
      cwd: path.join(repository, "packages", "typia"),
      encoding: "utf8",
      env: {
        ...process.env,
        TTSC_CACHE_DIR: path.join(
          repository,
          "packages",
          "typia",
          "node_modules",
          ".cache",
          "ttsc",
        ),
      },
      timeout,
    },
  );

const runGenerate = (fixture, timeout = 180_000) =>
  runCli(fixture, ["--input", fixture.input], timeout);

const runFileGenerate = (fixture, files, timeout = 180_000) =>
  runCli(fixture, files, timeout);

const diagnostic = (result) =>
  [result.error?.message, result.stdout, result.stderr]
    .filter((text) => text)
    .join("\n");

const expectSuccess = (fixture, expected) => {
  const result = runGenerate(fixture);
  assert.equal(result.error, undefined, diagnostic(result));
  assert.equal(result.status, 0, diagnostic(result));
  assert.deepEqual(listFiles(fixture.output), [...expected].sort());
};

const expectFailure = (fixture, pattern) => {
  const result = runGenerate(fixture);
  assert.equal(result.error, undefined, diagnostic(result));
  assert.notEqual(result.status, 0, diagnostic(result));
  assert.match(diagnostic(result), pattern);
  return result;
};

const expectFailureWithoutOutput = (fixture, pattern) => {
  const result = expectFailure(fixture, pattern);
  assert.equal(fs.existsSync(fixture.output), false, diagnostic(result));
};

const listFiles = (directory, prefix = "") => {
  if (fs.existsSync(directory) === false) return [];
  const output = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const relative = path.join(prefix, entry.name);
    if (entry.isDirectory())
      output.push(...listFiles(path.join(directory, entry.name), relative));
    else output.push(relative.replace(/\\/g, "/"));
  }
  return output.sort();
};

module.exports = {
  createFixture,
  diagnostic,
  expectFailure,
  expectFailureWithoutOutput,
  expectSuccess,
  linkDirectory,
  linkFile,
  listFiles,
  runGenerate,
  runFileGenerate,
  writeSource,
};
