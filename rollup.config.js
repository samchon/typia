const typescript = require("@rollup/plugin-typescript");
const terser = require("@rollup/plugin-terser");

module.exports = {
  input: "./src/index.ts",
  output: {
    dir: "lib",
    format: "esm",
    entryFileNames: "[name].mjs",
    sourcemap: true,
  },
  plugins: [
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
