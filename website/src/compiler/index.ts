// Playground compiler worker.
//
// Runs inside a Web Worker bundled by rspack (see `rspack.config.js` and
// `build/compiler.js`). The worker boots `ttsc-typia.wasm` — built from the
// website-owned Go module `website/compiler/cmd/playground` against
// `@ttsc/wasm`'s `host.Expose` — which registers a single `host.Plugin` named
// `"typia"` that dispatches `transform` / `build` into typia's native runners.
//
// Most shared playground scaffolding lives inside `@ttsc/playground`. The
// website worker uses a typia-specific compiler wrapper so each compile can
// resolve the current transform toggles into a typia plugin entry, write it
// into `compilerOptions.plugins`, and hand that same entry to the plugin as its
// `--plugins-json` manifest — this worker is typia's host here, and a plugin
// reads its options from the entry its host resolved rather than by parsing the
// tsconfig back (samchon/typia#1887). The in-page Execute lane resolves typia's
// runtime from a prebuilt pack in `PlaygroundMovie`'s `executeBundle`.

import { createTypiaSourcePackMount } from "@ttsc/playground";
import { WorkerServer } from "tgrid";

import { createTypiaWorkerCompiler } from "./createTypiaWorkerCompiler";

const service = createTypiaWorkerCompiler({
  wasmUrl: "/compiler/ttsc-typia.wasm",
  wasmExecUrl: "/compiler/wasm_exec.js",
  apiName: "ttscTypia",
  // typia ships its own wasm — `@ttsc/lint` is not linked. Sites that want
  // lint in this playground would need to rebuild the wasm with lint
  // registered as a second plugin.
  lintPlugin: false,
  typiaPlugin: {
    name: "typia",
    transformModule: "typia/lib/transform",
    // Mount the pre-built typia + @typia/interface + @typia/utils source pack
    // (written by `build/typia-pack.js`, served from `/compiler/typia-pack.json`)
    // into the wasm MemFS so the compiler can resolve `import typia from "typia"`
    // against the same code the published package ships.
    mount: createTypiaSourcePackMount({ url: "/compiler/typia-pack.json" }),
  },
  // `@ttsc/playground`'s default tsconfig encodes `target` / `moduleResolution`
  // as TypeScript's NUMERIC enum values (99 = ESNext, 100 = Bundler). The base
  // `@ttsc/wasm` build reads those numbers directly, but typia's plugin
  // re-parses the tsconfig through typescript-go's option parser
  // (`driver.LoadProgram`), which only accepts the STRING enum spellings and
  // rejects the numbers with TS5024 ("requires a value of type enum"). Override
  // both with strings — the same form as the `module: "ESNext"` the playground
  // already emits — so the typia transform pass parses the project.
  extraCompilerOptions: {
    target: "ESNext",
    moduleResolution: "Bundler",
  },
});

const main = async (): Promise<void> => {
  const worker = new WorkerServer();
  await worker.open(service);
};

void main();
