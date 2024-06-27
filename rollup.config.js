const typescript = require("@rollup/plugin-typescript");
const nodeResolve = require("@rollup/plugin-node-resolve");
const commomnjs = require("@rollup/plugin-commonjs");

module.exports = {
  input: "./src/index.ts",
  output: {
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
    preserveModules: true,
    preserveModulesRoot: "src",
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
