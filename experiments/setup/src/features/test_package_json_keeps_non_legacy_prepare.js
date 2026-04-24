const { TestValidator } = require("@nestia/e2e");
const { runScenario } = require("../internal/runScenario");

async function test_package_json_keeps_non_legacy_prepare(context) {
  runScenario(context, {
    name: "package-json-keeps-non-legacy-prepare",
    packageJson: {
      scripts: {
        prepare: "npm run build && node scripts/prepare.js",
      },
      devDependencies: {
        eslint: "^9.0.0",
      },
    },
    tsconfig: {
      compilerOptions: {},
    },
    verify: ({ manifest, tsconfig }) => {
      TestValidator.equals(
        "non legacy prepare is preserved",
        {
          prepare: "npm run build && node scripts/prepare.js",
        },
        manifest.scripts,
      );
      TestValidator.equals(
        "devDependencies are preserved",
        {
          eslint: "^9.0.0",
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
  test_package_json_keeps_non_legacy_prepare,
};
