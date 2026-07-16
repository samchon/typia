const { test } = require("node:test");
const fs = require("node:fs");
const path = require("node:path");
const {
  createFixture,
  expectFailureWithoutOutput,
  linkDirectory,
  writeSource,
} = require("./fixture.cjs");

/**
 * Verifies directory generation rejects links outside the physical input root.
 *
 * Locks the containment boundary so a lexically nested link cannot silently
 * import an unrelated TypeScript tree.
 *
 * 1. Link an input entry to an external directory containing a source file.
 * 2. Assert generation reports the link path and creates no output directory.
 */
test("external directory links are rejected", () => {
  const fixture = createFixture();
  try {
    const external = path.join(fixture.root, "external");
    fs.mkdirSync(external);
    writeSource(path.join(external, "external.ts"));
    linkDirectory(external, path.join(fixture.input, "external-link"));
    expectFailureWithoutOutput(
      fixture,
      /external-link.*outside.*input|outside.*input.*external-link/is,
    );
  } finally {
    fixture.cleanup();
  }
});
