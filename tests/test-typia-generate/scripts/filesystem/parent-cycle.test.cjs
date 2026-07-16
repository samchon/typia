const { test } = require("node:test");
const path = require("node:path");
const {
  createFixture,
  expectFailureWithoutOutput,
  linkDirectory,
  writeSource,
} = require("./fixture.cjs");

/**
 * Verifies directory generation terminates when a child links to its parent.
 *
 * Locks ancestor identity tracking rather than relying on the link's lexical
 * spelling, which grows on every recursive visit.
 *
 * 1. Put a source in a nested directory and link that directory to the input root.
 * 2. Generate with a bounded subprocess and assert rejection precedes output.
 */
test("parent directory links terminate", () => {
  const fixture = createFixture();
  try {
    const nested = path.join(fixture.input, "nested");
    writeSource(path.join(nested, "source.ts"));
    linkDirectory(fixture.input, path.join(nested, "parent"));
    expectFailureWithoutOutput(fixture, /parent.*revisits|revisits.*parent/is);
  } finally {
    fixture.cleanup();
  }
});
