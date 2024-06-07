const typescript = require("@rollup/plugin-typescript");
const terser = require("@rollup/plugin-terser");

const glob = require("glob");

const input = glob.sync("src/**/*.ts");

const outputConfig = {
  dir: "lib",
  sourcemap: true,
  preserveModules: true,
};

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

module.exports = [
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
