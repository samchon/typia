import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const readWorkflow = (name) =>
  readFile(
    new URL(`../../../.github/workflows/${name}.yml`, import.meta.url),
    "utf8",
  );

const workflowPaths = (text) => {
  return new Set(
    text
      .split(/\r?\n/)
      .map((line) => /^\s+-\s+['"]?([^'"]+)['"]?\s*$/.exec(line)?.[1])
      .filter((path) => path !== undefined),
  );
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
 */
test("workflow path filters match consumed inputs", async () => {
  const websiteText = await readWorkflow("website");
  const website = workflowPaths(websiteText);
  for (const path of [
    "config/**",
    "examples/**",
    "experiments/tarballs/**",
    "packages/**",
    "website/**",
    "package.json",
    "pnpm-lock.yaml",
    "pnpm-workspace.yaml",
  ])
    assert.equal(website.has(path), true, `website workflow omits ${path}`);

  const tests = workflowPaths(await readWorkflow("test"));
  for (const path of [
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
});
