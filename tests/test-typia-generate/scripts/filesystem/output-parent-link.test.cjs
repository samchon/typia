const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  createFixture,
  expectFailure,
  linkDirectory,
  writeSource,
} = require("./fixture.cjs");

/**
 * Verifies generated targets cannot cross a linked output parent directory.
 *
 * Locks the handoff from bounded input gathering to the existing output safety
 * checks, where matching input-relative segments can otherwise mask the link.
 *
 * 1. Map an input `link/new` source to an output whose `link` is an external
 *    junction.
 * 2. Assert generation rejects the parent and creates no directory outside output.
 */
test("linked output parent directories are rejected", () => {
  const fixture = createFixture();
  try {
    const external = path.join(fixture.root, "external");
    writeSource(path.join(fixture.input, "link", "new", "source.ts"));
    fs.mkdirSync(fixture.output);
    fs.mkdirSync(external);
    linkDirectory(external, path.join(fixture.output, "link"));
    expectFailure(
      fixture,
      /output parent path.*symbolic link|symbolic link.*output parent path/is,
    );
    assert.equal(fs.existsSync(path.join(external, "new")), false);
  } finally {
    fixture.cleanup();
  }
});
