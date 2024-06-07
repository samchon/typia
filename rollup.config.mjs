import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import glob from "tiny-glob";

/** @type {import('rollup').InputOptions} */
const input = await glob("src/**/*.ts");

/** @type {import('rollup').OutputOptions} */
const outputConfig = {
  dir: "lib",
  sourcemap: true,
  preserveModules: true,
};

/** @type {import('rollup').Plugin[]} */
const plugins = [
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
];

/** @type {import('rollup').RollupOptions[]} */
export default [
  {
    input,
    output: {
      ...outputConfig,
      entryFileNames: "[name].mjs",
      format: "esm",
    },
    plugins,
  },
  {
    input,
    output: {
      ...outputConfig,
      format: "cjs",
    },
    plugins,
  },
];
