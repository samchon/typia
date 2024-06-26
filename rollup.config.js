const typescript = require("@rollup/plugin-typescript");
const nodeResolve = require("@rollup/plugin-node-resolve");
const commomnjs = require("@rollup/plugin-commonjs");

const outDir = "lib";

/** @type {import('rollup').RollupOptions} */
module.exports = {
  input: "./src/index.ts",
  output: {
    preserveModules: true,
    preserveModulesRoot: "src",
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
      module: "ESNext",
      target: "ESNext",
    }),
  ],
};
