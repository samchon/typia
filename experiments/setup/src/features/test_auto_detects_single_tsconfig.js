const { TestValidator } = require("@nestia/e2e");
const { runScenario } = require("../internal/runScenario");

async function test_auto_detects_single_tsconfig(context) {
  runScenario(context, {
    name: "auto-detects-single-tsconfig",
    project: "auto",
    packageJson: {},
    tsconfig: {
      compilerOptions: {},
    },
    verify: ({ tsconfig }) => {
      TestValidator.equals(
        "plugin list is created in auto-detected tsconfig",
        [{ transform: "typia/lib/transform" }],
        tsconfig.compilerOptions.plugins,
      );
      TestValidator.equals(
        "strict is enabled in auto-detected tsconfig",
        true,
        tsconfig.compilerOptions.strict,
      );
      TestValidator.equals(
        "skipLibCheck is enabled in auto-detected tsconfig",
        true,
        tsconfig.compilerOptions.skipLibCheck,
      );
    },
  });
}

module.exports = {
  test_auto_detects_single_tsconfig,
};
