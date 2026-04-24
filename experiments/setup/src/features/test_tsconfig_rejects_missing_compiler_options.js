const { TestValidator } = require("@nestia/e2e");
const { runScenarioWithError } = require("../internal/runScenarioWithError");

async function test_tsconfig_rejects_missing_compiler_options(context) {
  runScenarioWithError(context, {
    name: "tsconfig-rejects-missing-compiler-options",
    packageJson: {},
    tsconfig: {},
    verify: ({ error }) => {
      TestValidator.predicate(
        "setup wizard rejects missing compilerOptions",
        error instanceof Error &&
          error.message.includes("typia setup exited with status"),
      );
    },
  });
}

module.exports = {
  test_tsconfig_rejects_missing_compiler_options,
};
