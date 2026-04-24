const { TestValidator } = require("@nestia/e2e");
const { runScenario } = require("../internal/runScenario");

async function test_package_json_deletes_empty_dependencies(context) {
  runScenario(context, {
    name: "package-json-deletes-empty-dependencies",
    packageJson: {
      dependencies: {
        "ts-patch": "^3.3.0",
      },
      devDependencies: {
        vitest: "^3.0.0",
      },
    },
    tsconfig: {
      compilerOptions: {},
    },
    verify: ({ manifest, tsconfig }) => {
      TestValidator.equals(
        "empty dependencies object is removed",
        undefined,
        manifest.dependencies,
      );
      TestValidator.equals(
        "unrelated devDependencies are preserved",
        {
          vitest: "^3.0.0",
        },
        manifest.devDependencies,
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
  test_package_json_deletes_empty_dependencies,
};
