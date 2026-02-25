import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import autoExternal from "rollup-plugin-auto-external";
import nodeExternals from "rollup-plugin-node-externals";
import { globSync } from "tinyglobby";

export default {
  input: globSync("./src/**/*.ts"),
  output: {
    dir: "./lib",
    format: "esm",
    sourcemap: true,
    entryFileNames: (chunkInfo) => {
      const ext = `mjs`;
      const nodeModulesDir = `node_modules`;
      if (chunkInfo.name.includes(nodeModulesDir)) {
        throw new Error(`Invalid chunk name: ${chunkInfo.name}`);
      }
      return `[name].${ext}`;
    },
    preserveModules: true,
    preserveModulesRoot: "src",
  },
  plugins: [
    nodeResolve(),
    autoExternal(),
    nodeExternals(),
    commonjs(),
    typescript({
      tsconfig: "tsconfig.json",
      module: "ESNext",
      target: "ESNext",
    }),
  ],
};
