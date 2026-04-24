const { TestValidator } = require("@nestia/e2e");
const { runScenario } = require("../internal/runScenario");

async function test_mixed_legacy_prepare(context) {
  runScenario(context, {
    name: "mixed-legacy-prepare",
    scripts: {
      prepare: "npm run before && ts-patch install && echo keep && typia patch",
      postinstall: "echo keep-postinstall",
    },
    devDependencies: {
      "ts-patch": "^3.3.0",
      vitest: "^3.0.0",
    },
    tsconfig: {
      compilerOptions: {
        plugins: [
          { transform: "typia/lib/transform" },
          { name: "keep-me" },
          { transform: "typia/lib/transform" },
        ],
        skipLibCheck: false,
        strictNullChecks: false,
      },
    },
    verify: ({ manifest, tsconfig }) => {
      TestValidator.equals(
        "mixed legacy prepare is cleaned",
        "npm run before && echo keep",
        manifest.scripts.prepare,
      );
      TestValidator.equals(
        "postinstall script is preserved",
        "echo keep-postinstall",
        manifest.scripts.postinstall,
      );
      TestValidator.equals(
        "ts-patch dev dependency is removed",
        undefined,
        manifest.devDependencies["ts-patch"],
      );
      TestValidator.equals(
        "unrelated dev dependency is preserved",
        "^3.0.0",
        manifest.devDependencies.vitest,
      );
      TestValidator.equals(
        "plugin list is normalized",
        [{ name: "keep-me" }, { transform: "typia/lib/transform" }],
        tsconfig.compilerOptions.plugins,
      );
      TestValidator.equals(
        "skipLibCheck is enabled",
        true,
        tsconfig.compilerOptions.skipLibCheck,
      );
      TestValidator.equals(
        "strictNullChecks is enabled",
        true,
        tsconfig.compilerOptions.strictNullChecks,
      );
    },
  });
}

module.exports = {
  test_mixed_legacy_prepare,
};
