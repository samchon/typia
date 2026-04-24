const { TestValidator } = require("@nestia/e2e");
const { runScenario } = require("../internal/runScenario");

async function test_no_existing_tsconfig(context) {
  runScenario(context, {
    name: "no-existing-tsconfig",
    scripts: undefined,
    devDependencies: {
      "ts-patch": "^3.3.0",
      eslint: "^9.0.0",
    },
    tsconfig: null,
    verify: ({ manifest, tsconfig }) => {
      TestValidator.equals(
        "scripts remain absent",
        undefined,
        manifest.scripts,
      );
      TestValidator.equals(
        "ts-patch dev dependency is removed",
        undefined,
        manifest.devDependencies["ts-patch"],
      );
      TestValidator.equals(
        "unrelated dev dependency is preserved",
        "^9.0.0",
        manifest.devDependencies.eslint,
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
  test_no_existing_tsconfig,
};
