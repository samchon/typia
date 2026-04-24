const { TestValidator } = require("@nestia/e2e");
const { runScenarioWithError } = require("../internal/runScenarioWithError");

async function test_tsconfig_rejects_non_array_plugins(context) {
  runScenarioWithError(context, {
    name: "tsconfig-rejects-non-array-plugins",
    packageJson: {
      scripts: {
        prepare: "typia patch && npm run keep",
      },
      dependencies: {
        "ts-patch": "^3.3.0",
      },
      devDependencies: {
        "ts-patch": "^3.3.0",
      },
    },
    tsconfig: {
      compilerOptions: {
        plugins: {
          transform: "typia/lib/transform",
        },
      },
    },
    verify: ({ error, installCommands, manifest }) => {
      TestValidator.predicate(
        "setup wizard rejects non-array plugins",
        error instanceof Error &&
          error.message.includes("typia setup exited with status"),
      );
      TestValidator.equals(
        "failed setup does not install TypeScript Go preview",
        installCommands.before.typescript,
        installCommands.after.typescript,
      );
      TestValidator.equals(
        "failed setup does not install ttsc",
        installCommands.before.ttsc,
        installCommands.after.ttsc,
      );
      TestValidator.equals(
        "failed setup does not install ttsx",
        installCommands.before.ttsx,
        installCommands.after.ttsx,
      );
      TestValidator.equals(
        "failed setup does not rewrite package scripts",
        {
          prepare: "typia patch && npm run keep",
        },
        manifest.scripts,
      );
      TestValidator.equals(
        "failed setup does not rewrite dependencies",
        {
          "ts-patch": "^3.3.0",
        },
        manifest.dependencies,
      );
      TestValidator.equals(
        "failed setup does not rewrite devDependencies",
        {
          "ts-patch": "^3.3.0",
        },
        manifest.devDependencies,
      );
    },
  });
}

module.exports = {
  test_tsconfig_rejects_non_array_plugins,
};
