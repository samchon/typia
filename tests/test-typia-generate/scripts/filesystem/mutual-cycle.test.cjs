const { test } = require("node:test");
const path = require("node:path");
const {
  createFixture,
  expectFailureWithoutOutput,
  linkDirectory,
  writeSource,
} = require("./fixture.cjs");

/**
 * Verifies directory generation terminates across a two-directory link cycle.
 *
 * Locks physical identity tracking across sibling branches, where neither
 * lexical link path is an ancestor of the other.
 *
 * 1. Link two input directories to one another and add a source to each.
 * 2. Generate with a bounded subprocess and assert rejection precedes output.
 */
test("mutual directory links terminate", () => {
  const fixture = createFixture();
  try {
    const left = path.join(fixture.input, "left");
    const right = path.join(fixture.input, "right");
    writeSource(path.join(left, "left.ts"));
    writeSource(path.join(right, "right.ts"));
    linkDirectory(right, path.join(left, "right-link"));
    linkDirectory(left, path.join(right, "left-link"));
    expectFailureWithoutOutput(fixture, /link.*revisits|revisits.*link/is);
  } finally {
    fixture.cleanup();
  }
});
