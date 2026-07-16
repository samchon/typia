const { test } = require("node:test");
const path = require("node:path");
const {
  createFixture,
  expectFailureWithoutOutput,
  linkDirectory,
  writeSource,
} = require("./fixture.cjs");

/**
 * Verifies repeated directory aliases emit each physical source once.
 *
 * Locks deterministic directory de-duplication so alias order cannot multiply
 * transformed output or choose different target trees between runs.
 *
 * 1. Add one real source directory and two links to that directory.
 * 2. Generate and assert aliases are rejected before output is created.
 */
test("repeated directory aliases are deduplicated", () => {
  const fixture = createFixture();
  try {
    const actual = path.join(fixture.input, "actual");
    writeSource(path.join(actual, "source.ts"));
    linkDirectory(actual, path.join(fixture.input, "alias-a"));
    linkDirectory(actual, path.join(fixture.input, "alias-b"));
    expectFailureWithoutOutput(
      fixture,
      /alias-a.*revisits|revisits.*alias-a/is,
    );
  } finally {
    fixture.cleanup();
  }
});
