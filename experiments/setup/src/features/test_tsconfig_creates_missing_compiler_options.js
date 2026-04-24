const { TestValidator } = require("@nestia/e2e");
const { runScenario } = require("../internal/runScenario");

async function test_tsconfig_creates_missing_compiler_options(context) {
  runScenario(context, {
    name: "tsconfig-creates-missing-compiler-options",
    packageJson: {
      scripts: {
        prepare: "ts-patch install",
      },
      dependencies: {
        "ts-patch": "^3.3.0",
      },
      devDependencies: {
        "ts-patch": "^3.3.0",
      },
    },
    tsconfig: {
      extends: "@company/tsconfig/base.json",
    },
    verify: ({ manifest, tsconfig }) => {
      TestValidator.equals(
        "legacy prepare is removed",
        undefined,
        manifest.scripts,
      );
      TestValidator.equals(
        "empty dependencies object is removed",
        undefined,
        manifest.dependencies,
      );
      TestValidator.equals(
        "empty devDependencies object is removed",
        undefined,
        manifest.devDependencies,
      );
      TestValidator.equals(
        "extends is preserved",
        "@company/tsconfig/base.json",
        tsconfig.extends,
      );
      TestValidator.equals(
        "compilerOptions is created",
        {
          skipLibCheck: true,
          strict: true,
          strictNullChecks: true,
          plugins: [{ transform: "typia/lib/transform" }],
        },
        tsconfig.compilerOptions,
      );
    },
  });
}

module.exports = {
  test_tsconfig_creates_missing_compiler_options,
};
