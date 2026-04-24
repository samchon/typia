const { TestValidator } = require("@nestia/e2e");
const { runScenario } = require("../internal/runScenario");

async function test_prepare_with_empty_segments(context) {
  runScenario(context, {
    name: "prepare-with-empty-segments",
    scripts: {
      prepare: " && echo first &&  && ts-patch install && echo second && ",
    },
    devDependencies: undefined,
    tsconfig: {
      compilerOptions: {
        plugins: [{ name: "keep-me" }],
        strict: true,
        strictNullChecks: true,
        skipLibCheck: true,
      },
    },
    verify: ({ manifest, tsconfig }) => {
      TestValidator.equals(
        "empty prepare segments are removed",
        "echo first && echo second",
        manifest.scripts.prepare,
      );
      TestValidator.equals(
        "devDependencies remain absent",
        undefined,
        manifest.devDependencies,
      );
      TestValidator.equals(
        "plugin list is appended",
        [{ name: "keep-me" }, { transform: "typia/lib/transform" }],
        tsconfig.compilerOptions.plugins,
      );
      TestValidator.equals(
        "strict remains enabled",
        true,
        tsconfig.compilerOptions.strict,
      );
    },
  });
}

module.exports = {
  test_prepare_with_empty_segments,
};
