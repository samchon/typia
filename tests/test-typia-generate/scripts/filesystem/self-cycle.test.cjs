const { test } = require("node:test");
const path = require("node:path");
const {
  createFixture,
  expectFailureWithoutOutput,
  linkDirectory,
  writeSource,
} = require("./fixture.cjs");

/**
 * Verifies directory generation terminates at a self-referential link.
 *
 * Locks the visited-directory identity guard so a lexical path cannot re-enter
 * the same physical root until path exhaustion.
 *
 * 1. Add one source and a directory link from the input root to itself; on Windows
 *    the fixture creates the equivalent directory junction.
 * 2. Generate with a bounded subprocess and assert rejection precedes output.
 */
test("self-referential directory links terminate", () => {
  const fixture = createFixture();
  try {
    writeSource(path.join(fixture.input, "source.ts"));
    linkDirectory(fixture.input, path.join(fixture.input, "loop"));
    expectFailureWithoutOutput(fixture, /loop.*revisits|revisits.*loop/is);
  } finally {
    fixture.cleanup();
  }
});
