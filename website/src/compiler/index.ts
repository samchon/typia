// Playground compiler worker.
//
// Runs inside a Web Worker bundled by rspack (see `rspack.config.js` and
// `build/compiler.js`). The worker boots `ttsc-typia.wasm` which is built
// from `packages/typia/native/cmd/ttsc-typia/main_wasm.go` against
// `@ttsc/wasm`'s `host.Expose`. The wasm registers a single `host.Plugin`
// named `"typia"` that dispatches `transform` and `build` verbs into typia's
// existing native runners.
//
// All shared playground scaffolding (worker race guards, MemFS layout,
// tsconfig builder, lint plugin dispatch, npm dependency installer) lives
// inside `@ttsc/playground` and is invoked through `createWorkerCompiler`.
// This file only supplies the typia-specific wasm URL + plugin id and wraps
// `bundle` with a rollup pass for the in-page Execute lane.

import {
  type ICompilerService,
  createTypiaSourcePackMount,
  createWorkerCompiler,
} from "@ttsc/playground";
import { WorkerServer } from "tgrid";

import { RollupBundler } from "./RollupBundler";

const base = createWorkerCompiler({
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
});

// Wrap `bundle` with a rollup pass so the in-page Execute lane gets a single
// CJS module that resolves esm.sh deps the user typed. The base
// `createWorkerCompiler` returns the raw emitted JS (CJS-shaped) — rollup
// bundles that against esm.sh.
const provider: ICompilerService = {
  installDependencies: base.installDependencies,
  compile: base.compile,
  lint: base.lint,
  bundle: async (props) => {
    const compiled = await base.bundle(props);
    if (compiled.type !== "success") return compiled;
    try {
      const value = await RollupBundler.build(compiled.value);
      return { type: "success", target: "javascript", value };
    } catch (error) {
      return {
        type: "error",
        target: "javascript",
        value: normalizeError(error),
      };
    }
  },
};

const main = async (): Promise<void> => {
  const worker = new WorkerServer();
  await worker.open(provider);
};

void main();

function normalizeError(error: unknown): object {
  if (error instanceof Error) {
    return { name: error.name, message: error.message, stack: error.stack };
  }
  return { name: "Error", message: String(error) };
}
