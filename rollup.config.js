import path from "path";
import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "./src/index.ts",
  output: {
    dir: "./lib",
    format: "esm",
    sourcemap: true,
    entryFileNames: (chunkInfo) => {
      const ext = `mjs`;
      const externalDir = `_external`;
      const nodeModulesDir = `node_modules`;
      if (chunkInfo.name.includes(nodeModulesDir)) {
        /** replace / to _ and the last part of the path is the file name */
        const nameSplit = chunkInfo.name.split("/");
        const chunkName = path.join(
          externalDir,
          nameSplit.slice(0, -1).join("_"),
          nameSplit.at(-1),
        );
        console.table({
          before: chunkInfo.name,
          after: chunkName,
        });
        return `${chunkName}.${ext}`;
      }
      return `[name].${ext}`;
    },
    preserveModules: true,
    preserveModulesRoot: "src",
    external: ["randexp"],
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({
      tsconfig: "tsconfig.json",
      module: "ESNext",
      target: "ESNext",
    }),
  ],
};
