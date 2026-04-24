const { TestValidator } = require("@nestia/e2e");
const { runScenario } = require("../internal/runScenario");

async function test_package_json_deletes_empty_scripts_and_dev_dependencies(
  context,
) {
  runScenario(context, {
    name: "package-json-deletes-empty-scripts-and-dev-dependencies",
    packageJson: {
      scripts: {
        prepare: "typia patch && ts-patch install",
      },
      devDependencies: {
        "ts-patch": "^3.3.0",
      },
    },
    tsconfig: {
      compilerOptions: {},
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
    },
  });
}

module.exports = {
  test_package_json_deletes_empty_scripts_and_dev_dependencies,
};
