const { test } = require("node:test");
const path = require("node:path");
const {
  createFixture,
  expectFailureWithoutOutput,
  linkDirectory,
} = require("./fixture.cjs");

/**
 * Verifies directory generation rejects a broken filesystem link explicitly.
 *
 * Locks the lstat-before-stat branch so missing link targets produce a bounded,
 * path-specific failure instead of an unclassified traversal exception.
 *
 * 1. Add a directory link whose target does not exist.
 * 2. Assert generation names the broken link and creates no output directory.
 */
test("broken input links are rejected", () => {
  const fixture = createFixture();
  try {
    linkDirectory(
      path.join(fixture.root, "missing"),
      path.join(fixture.input, "broken"),
    );
    expectFailureWithoutOutput(
      fixture,
      /broken.*(missing|target|inspect)|(?:missing|target|inspect).*broken/is,
    );
  } finally {
    fixture.cleanup();
  }
});
