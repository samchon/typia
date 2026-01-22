const typescript = require("@rollup/plugin-typescript");
const terser = require("@rollup/plugin-terser");
const autoExternal = require("rollup-plugin-auto-external");
const { globSync } = require("tinyglobby");

module.exports = {
  input: globSync("./src/**/*.ts"),
  output: {
    dir: "lib",
    format: "esm",
    entryFileNames: "[name].mjs",
    sourcemap: true,
    preserveModules: true,
    preserveModulesRoot: "src",
  },
  plugins: [
    autoExternal(),
    typescript({
      tsconfig: "tsconfig.json",
      module: "ES2020",
      target: "ES2020",
    }),
    terser({
      format: {
        comments: "some",
        beautify: true,
        ecma: "2020",
      },
      compress: false,
      mangle: false,
      module: true,
    }),
    {
      name: "copy-dts-to-dmts",
      async generateBundle(_, bundle) {
        for (const fileName of Object.keys(bundle)) {
          if (fileName.endsWith(".d.ts")) {
            const dtsFile = bundle[fileName];
            const dmtsFileName = fileName.replace(/\.d\.ts$/, ".d.mts");

            this.emitFile({
              type: "asset",
              fileName: dmtsFileName,
              source: dtsFile.source,
            });
          }
        }
      },
    },
  ],
};
