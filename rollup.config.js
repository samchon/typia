const typescript = require("@rollup/plugin-typescript");
const terser = require("@rollup/plugin-terser");
const nodeResolve = require("@rollup/plugin-node-resolve");
const commomnjs = require("@rollup/plugin-commonjs");

const outDir = "lib";

module.exports = {
  input: "./src/index.ts",
  output: {
    dir: outDir,
    format: "esm",
    entryFileNames: "[name].mjs",
    sourcemap: true,
  },
  plugins: [
    nodeResolve(),
    commomnjs(),
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
  ],
};
