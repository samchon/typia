import commonjs from "@rollup/plugin-commonjs";
import esmShim from "@rollup/plugin-esm-shim";
import nodeResolve from "@rollup/plugin-node-resolve";
import nodeExternals from "rollup-plugin-node-externals";
import { globSync } from "tinyglobby";

export default {
  input: globSync("./lib/**/*.js"),
  external: (id) => /node_modules/.test(id),
  output: {
    dir: "./lib",
    format: "esm",
    sourcemap: true,
    entryFileNames: (chunkInfo) => {
      if (chunkInfo.name.includes("node_modules")) {
        throw new Error(`Invalid chunk name: ${chunkInfo.name}`);
      }
      return `[name].mjs`;
    },
    preserveModules: true,
    preserveModulesRoot: "lib",
  },
  plugins: [
    // Some sources use the CJS globals `__dirname`/`__filename` (e.g.
    // typia's `executable/TypiaGenerateWizard.ts`). esm-shim derives them from
    // `import.meta.url` so the transcoded `.mjs` stays correct in ESM too.
    esmShim(),
    nodeExternals(),
    nodeResolve(),
    commonjs({
      strictRequires: false,
    }),
  ],
};
