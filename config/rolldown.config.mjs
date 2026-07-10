import ttsc from "@ttsc/unplugin/rolldown";
import path from "node:path";
import { globSync } from "tinyglobby";

// The `.mjs` build feeds the TypeScript sources straight to rolldown, which
// transpiles them natively; `@ttsc/unplugin` applies the project's ttsc
// plugins on the way in. `preserveModules` keeps the 1:1 module layout, so
// every `lib/<path>.js` from the main ttsc build gets a genuine ESM twin at
// `lib/<path>.mjs` — named exports intact, no facade chunks, no CommonJS
// transcoding. Everything outside `src/` is an external module.
export default {
  input: globSync("./src/**/*.ts"),
  external: (id) => !id.startsWith(".") && !path.isAbsolute(id),
  output: {
    dir: "./lib",
    format: "esm",
    sourcemap: true,
    entryFileNames: "[name].mjs",
    preserveModules: true,
    preserveModulesRoot: "src",
  },
  plugins: [ttsc()],
};
