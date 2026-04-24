const { TestValidator } = require("@nestia/e2e");
const { runScenario } = require("../internal/runScenario");

async function test_tsconfig_preserves_strict_false(context) {
  runScenario(context, {
    name: "tsconfig-preserves-strict-false",
    packageJson: {},
    tsconfig: {
      compilerOptions: {
        plugins: [],
        strict: false,
        skipLibCheck: false,
      },
    },
    verify: ({ tsconfig }) => {
      TestValidator.equals(
        "strict false is preserved",
        false,
        tsconfig.compilerOptions.strict,
      );
      TestValidator.equals(
        "strictNullChecks is still enabled",
        true,
        tsconfig.compilerOptions.strictNullChecks,
      );
      TestValidator.equals(
        "skipLibCheck is enabled",
        true,
        tsconfig.compilerOptions.skipLibCheck,
      );
      TestValidator.equals(
        "plugin list is created",
        [{ transform: "typia/lib/transform" }],
        tsconfig.compilerOptions.plugins,
      );
    },
  });
}

module.exports = {
  test_tsconfig_preserves_strict_false,
};
