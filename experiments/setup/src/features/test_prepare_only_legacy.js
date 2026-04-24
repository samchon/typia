const { TestValidator } = require("@nestia/e2e");
const { runScenario } = require("../internal/runScenario");

async function test_prepare_only_legacy(context) {
  runScenario(context, {
    name: "prepare-only-legacy",
    scripts: {
      prepare: " ts-patch install ",
    },
    devDependencies: {
      "ts-patch": "^3.3.0",
    },
    tsconfig: {
      compilerOptions: {
        plugins: [],
      },
    },
    verify: ({ manifest, tsconfig }) => {
      TestValidator.equals(
        "empty scripts object is removed",
        undefined,
        manifest.scripts,
      );
      TestValidator.equals(
        "empty devDependencies object is removed",
        undefined,
        manifest.devDependencies,
      );
      TestValidator.equals(
        "plugin list is created",
        [{ transform: "typia/lib/transform" }],
        tsconfig.compilerOptions.plugins,
      );
      TestValidator.equals(
        "strict is enabled",
        true,
        tsconfig.compilerOptions.strict,
      );
      TestValidator.equals(
        "strictNullChecks is enabled",
        true,
        tsconfig.compilerOptions.strictNullChecks,
      );
      TestValidator.equals(
        "skipLibCheck is enabled",
        true,
        tsconfig.compilerOptions.skipLibCheck,
      );
    },
  });
}

module.exports = {
  test_prepare_only_legacy,
};
