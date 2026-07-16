const { test } = require("node:test");
const path = require("node:path");
const {
  createFixture,
  expectSuccess,
  linkFile,
  writeSource,
} = require("./fixture.cjs");

/**
 * Verifies an ordinary in-root source-file link remains supported.
 *
 * Locks the positive link branch while directory and containment guards reject
 * only unsafe traversal, not every symbolic input entry.
 *
 * 1. Add a real TypeScript source and a second filename linked to it.
 * 2. Generate and assert the physical source is emitted exactly once.
 */
test("in-root source-file links remain supported", (context) => {
  const fixture = createFixture();
  try {
    const source = path.join(fixture.input, "source.ts");
    writeSource(source);
    try {
      linkFile(source, path.join(fixture.input, "source-link.ts"));
    } catch (error) {
      if (error?.code === "EPERM") {
        context.skip("file symbolic links require Windows developer mode");
        return;
      }
      throw error;
    }
    expectSuccess(fixture, ["source.ts"]);
  } finally {
    fixture.cleanup();
  }
});
