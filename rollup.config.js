const typescript = require("@rollup/plugin-typescript");
const terser = require("@rollup/plugin-terser");
const nodeResolve = require("@rollup/plugin-node-resolve");
const commomnjs = require("@rollup/plugin-commonjs");


module.exports = {
  input: "./src/index.ts",
  output: {
    preserveModules: true,
    preserveModulesRoot: "src",
    dir: "./lib",
    format: "esm",
    sourcemap: true,
    entryFileNames: (chunkInfo) => {
      const ext = `mjs`
      const externalDir = `_external`;
      const nodeModulesDir = `node_modules`;
      if (chunkInfo.name.includes(nodeModulesDir)) {
        console.log(chunkInfo.name);
        return `${chunkInfo.name.replace(nodeModulesDir, externalDir)}.${ext}`;
      }
      return `[name].${ext}`;
    },
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
