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
      // Third-party externals must be transcoded as ESM. Left as CJS, a
      // `require("pkg")` becomes a default import (`import x from "pkg"`),
      // which throws at runtime for named-export-only ESM packages with no
      // default export (`@modelcontextprotocol/sdk`, `ai`, `@langchain/core/*`,
      // `tinyglobby`), breaking the published `.mjs` for every ESM consumer.
      // As ESM the require becomes a namespace import; CJS externals stay
      // callable via `getAugmentedNamespace`.
      //
      // The sibling `@typia/*` (and `typia`) packages are the opposite: their
      // `.mjs` re-exports only a `default` (the whole API object), so they must
      // stay on the default import — a namespace import would surface just
      // `{ default }` and lose every member. Scope the ESM treatment to
      // everything but our own packages.
      esmExternals: (id) => id !== "typia" && !id.startsWith("@typia/"),
    }),
  ],
};
