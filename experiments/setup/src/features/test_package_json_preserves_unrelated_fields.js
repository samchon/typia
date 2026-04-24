const { TestValidator } = require("@nestia/e2e");
const { runScenario } = require("../internal/runScenario");

async function test_package_json_preserves_unrelated_fields(context) {
  runScenario(context, {
    name: "package-json-preserves-unrelated-fields",
    packageJson: {
      description: "consumer manifest",
      scripts: {
        build: "tsc -p tsconfig.json",
        prepare:
          "npm run prepack && ts-patch install --silent && npm run postpack",
        test: "node test.js",
      },
      dependencies: {
        "ts-patch": "^3.3.0",
        zod: "^3.25.0",
      },
      devDependencies: {
        "@types/node": "^24.0.0",
        "ts-patch": "^3.3.0",
        vitest: "^3.0.0",
      },
      peerDependencies: {
        typescript: "^5.0.0",
      },
    },
    tsconfig: {
      compilerOptions: {
        plugins: [],
      },
    },
    verify: ({ manifest, tsconfig }) => {
      TestValidator.equals(
        "description is preserved",
        "consumer manifest",
        manifest.description,
      );
      TestValidator.equals(
        "scripts are cleaned and preserved",
        {
          build: "tsc -p tsconfig.json",
          prepare: "npm run prepack && npm run postpack",
          test: "node test.js",
        },
        manifest.scripts,
      );
      TestValidator.equals(
        "dependencies remove only ts-patch",
        {
          zod: "^3.25.0",
        },
        manifest.dependencies,
      );
      TestValidator.equals(
        "devDependencies remove only ts-patch",
        {
          "@types/node": "^24.0.0",
          vitest: "^3.0.0",
        },
        manifest.devDependencies,
      );
      TestValidator.equals(
        "peerDependencies are preserved",
        {
          typescript: "^5.0.0",
        },
        manifest.peerDependencies,
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
  test_package_json_preserves_unrelated_fields,
};
