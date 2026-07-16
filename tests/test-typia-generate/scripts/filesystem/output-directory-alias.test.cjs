const { test } = require("node:test");
const fs = require("node:fs");
const path = require("node:path");
const {
  createFixture,
  expectSuccess,
  linkDirectory,
  writeSource,
} = require("./fixture.cjs");

/**
 * Verifies an input alias to the physical output tree is excluded.
 *
 * Locks physical output exclusion so a differently spelled path cannot turn
 * stale generated files back into fresh inputs.
 *
 * 1. Pre-create the output with a stale source and link to it from the input.
 * 2. Generate one real input and assert the alias tree is not copied.
 */
test("physical output aliases are excluded", () => {
  const fixture = createFixture();
  try {
    writeSource(path.join(fixture.input, "source.ts"));
    fs.mkdirSync(fixture.output);
    writeSource(path.join(fixture.output, "stale.ts"));
    linkDirectory(fixture.output, path.join(fixture.input, "output-alias"));
    fs.writeFileSync(
      path.join(fixture.root, "tsconfig.json"),
      JSON.stringify({
        compilerOptions: { module: "commonjs", strict: true, target: "ES2022" },
        files: ["input/source.ts"],
      }),
    );
    expectSuccess(fixture, ["source.ts", "stale.ts"]);
  } finally {
    fixture.cleanup();
  }
});
