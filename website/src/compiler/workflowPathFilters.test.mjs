import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const readWorkflow = (name) =>
  readFile(
    new URL(`../../../.github/workflows/${name}.yml`, import.meta.url),
    "utf8",
  );

const workflowPaths = (text) => {
  const lines = text.split(/\r?\n/);
  const block = (key, start, end) => {
    const pattern = new RegExp(`^(\\s*)${key}:\\s*$`);
    const index = lines.findIndex(
      (line, candidate) =>
        candidate >= start && candidate < end && pattern.test(line),
    );
    assert.notEqual(index, -1, `workflow omits ${key}`);
    const indent = /^\s*/.exec(lines[index])[0].length;
    let next = index + 1;
    while (
      next < end &&
      (lines[next].trim().length === 0 ||
        /^\s*/.exec(lines[next])[0].length > indent)
    )
      next += 1;
    return { start: index + 1, end: next };
  };

  const on = block("on", 0, lines.length);
  const pullRequest = block("pull_request", on.start, on.end);
  const paths = block("paths", pullRequest.start, pullRequest.end);
  const result = new Set();
  for (const line of lines.slice(paths.start, paths.end)) {
    const match = /^\s+-\s+(['"]?)([^'"]+)\1\s*$/.exec(line);
    if (match) result.add(match[2]);
  }
  return result;
};

const assertOrdered = (text, labels) => {
  let previous = -1;
  for (const label of labels) {
    const current = text.indexOf(label);
    assert.notEqual(current, -1, `workflow omits ${label}`);
    assert.ok(current > previous, `${label} is out of order`);
    previous = current;
  }
};

/**
 * Verifies pull-request workflows watch every directly consumed input.
 *
 * The website job builds packages, stages tarballs, and installs the complete
 * workspace, while the test job compiles workspaces that extend shared config.
 * Omitting those inputs defers failures until after a pull request merges.
 *
 * 1. Read the website and test pull-request path filters.
 * 2. Assert each consumed workspace, compiler, and tarball input is present.
 * 3. Assert unrelated benchmark and README changes remain excluded.
 * 4. Verify dependency install, tag selection, compiler tests, and build order.
 */
test("workflow path filters match consumed inputs", async () => {
  const synthetic = workflowPaths(
    `on:\n  pull_request:\n    paths:\n      - 'inside/**'\njobs:\n  test:\n    strategy:\n      matrix:\n        include:\n          - 'outside/**'\n`,
  );
  assert.deepEqual(synthetic, new Set(["inside/**"]));

  const websiteText = await readWorkflow("website");
  const website = workflowPaths(websiteText);
  for (const path of [
    ".github/workflows/release.yml",
    ".github/workflows/website.yml",
    "config/**",
    "examples/**",
    "experiments/tarballs/**",
    "packages/**",
    "website/**",
    "website/package.json",
    "package.json",
    "pnpm-lock.yaml",
    "pnpm-workspace.yaml",
  ])
    assert.equal(website.has(path), true, `website workflow omits ${path}`);

  const tests = workflowPaths(await readWorkflow("test"));
  for (const path of [
    ".github/workflows/test.yml",
    "config/**",
    "examples/**",
    "packages/**",
    "tests/**",
    "package.json",
    "pnpm-lock.yaml",
    "pnpm-workspace.yaml",
  ])
    assert.equal(tests.has(path), true, `test workflow omits ${path}`);

  for (const paths of [website, tests]) {
    assert.equal(paths.has("benchmark/**"), false);
    assert.equal(paths.has("README.md"), false);
  }

  assert.match(websiteText, /pnpm run test:compiler/);
  assert.match(websiteText, /go -C compiler test \.\/cmd\/playground/);
  assert.match(
    websiteText,
    /require\('\.\/website\/node_modules\/@ttsc\/wasm\/package\.json'\)\.version/,
  );
  assert.match(websiteText, /git clone --branch "v\$\{TTSC_VERSION\}"/);
  assertOrdered(websiteText, [
    "- name: Install Dependencies",
    "- name: Checkout ttsc sibling",
    "- name: Packages",
    "- name: Test Playground Compiler",
    "- name: Build",
  ]);
  assertOrdered(websiteText, [
    'TTSC_VERSION="$(node -p',
    'git clone --branch "v${TTSC_VERSION}"',
  ]);
  assertOrdered(websiteText, [
    "pnpm run test:compiler",
    "go -C compiler test ./cmd/playground",
  ]);
});
