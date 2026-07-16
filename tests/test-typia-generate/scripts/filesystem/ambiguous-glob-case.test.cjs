const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  createFixture,
  diagnostic,
  runFileGenerate,
  writeSource,
} = require("./fixture.cjs");

/**
 * Verifies a glob fails safely when its base reveals no case behavior.
 *
 * Locks explicit-file expansion before tinyglobby selects a case policy; using
 * output semantics here could silently miss sources on a different filesystem.
 *
 * 1. Place a source below a glob base whose immediate entry names contain no
 *    letters.
 * 2. Assert expansion reports ambiguous case behavior and creates no output.
 */
test("ambiguous glob case behavior is rejected", () => {
  const fixture = createFixture();
  try {
    writeSource(path.join(fixture.input, "123", "source.ts"));
    const result = runFileGenerate(fixture, [
      path.join(fixture.input, "*", "*.ts"),
    ]);
    assert.equal(result.error, undefined, diagnostic(result));
    assert.notEqual(result.status, 0, diagnostic(result));
    assert.match(
      diagnostic(result),
      /unable to determine.*case behavior.*input pattern base/is,
    );
    assert.equal(fs.existsSync(fixture.output), false);
  } finally {
    fixture.cleanup();
  }
});
