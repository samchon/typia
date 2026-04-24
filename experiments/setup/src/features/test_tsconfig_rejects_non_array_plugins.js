const { TestValidator } = require("@nestia/e2e");
const { runScenarioWithError } = require("../internal/runScenarioWithError");

async function test_tsconfig_rejects_non_array_plugins(context) {
  runScenarioWithError(context, {
    name: "tsconfig-rejects-non-array-plugins",
    packageJson: {},
    tsconfig: {
      compilerOptions: {
        plugins: {
          transform: "typia/lib/transform",
        },
      },
    },
    verify: ({ error }) => {
      TestValidator.predicate(
        "setup wizard rejects non-array plugins",
        error instanceof Error &&
          error.message.includes("typia setup exited with status"),
      );
    },
  });
}

module.exports = {
  test_tsconfig_rejects_non_array_plugins,
};
