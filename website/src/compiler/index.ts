// In-browser compiler worker.
//
// Drives the real ttsc-typia native compiler via WebAssembly. The worker
// exposes the same {compile, transform, bundle} surface the playground
// component already calls; all heavy lifting happens inside the wasm module.

import { WorkerServer } from "tgrid";

import { ICompilerService } from "./ICompilerService";
import { ITransformOptions } from "./ITransformOptions";
import { RollupBundler } from "./RollupBundler";
import { bootTtscTypia } from "./wasm/instantiate";
import type { ITtscTypiaApi, ITtscTypiaResult } from "./wasm/TtscTypia";
import { IMemFSHost } from "./wasm/MemFS";
import { installTypiaPack } from "./wasm/TypiaSourcePack";

const WORK_DIR = "/work";
const ENTRY_FILE = `${WORK_DIR}/src/index.ts`;
const TSCONFIG_PATH = `${WORK_DIR}/tsconfig.json`;

const main = async (): Promise<void> => {
  const { api, host } = await bootTtscTypia();
  await installStaticFiles(host);

  const worker = new WorkerServer();
  const provider: ICompilerService = {
    compile: async (props) => callWasm(api, host, props, "javascript"),
    transform: async (props) => callWasm(api, host, props, "typescript"),
    bundle: async (props) => {
      const compiled = await callWasm(api, host, props, "javascript");
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
  await worker.open(provider);
};

void main();

async function installStaticFiles(host: IMemFSHost): Promise<void> {
  host.mkdirp(WORK_DIR);
  host.mkdirp(`${WORK_DIR}/src`);
  await installTypiaPack(host);
}

async function callWasm(
  api: ITtscTypiaApi,
  host: IMemFSHost,
  props: ICompilerService.IProps,
  target: "javascript" | "typescript",
): Promise<ICompilerService.IResult> {
  host.writeFile(ENTRY_FILE, props.source);
  host.writeFile(TSCONFIG_PATH, buildTsconfig(props.options));

  host.resetStdio();
  let result: ITtscTypiaResult;
  try {
    result = await api.transform({
      cwd: WORK_DIR,
      tsconfig: TSCONFIG_PATH,
      file: ENTRY_FILE,
      output: target === "javascript" ? "js" : "ts",
    });
  } catch (error) {
    return { type: "error", target, value: normalizeError(error) };
  }

  const value =
    target === "javascript" ? normalizeEsmImports(result.stdout) : result.stdout;
  if (result.code === 0) {
    return { type: "success", target, value };
  }
  return {
    type: "failure",
    target,
    value,
    diagnostics: parseDiagnostics(result.stderr),
  };
}

// ttsc-typia's TypeScript-Go emitter currently writes typia helper imports as
// CommonJS `const { X: Y } = require("Z")` even when `module: ESNext` is set
// in tsconfig. The RollupBundler downstream only understands ES module syntax,
// so we rewrite those single-line require destructuring statements to
// `import { X as Y } from "Z"` before handing the code on. This is a string
// rewrite by design — keeping it text-level avoids re-parsing the JS just to
// fix the import form.
function normalizeEsmImports(code: string): string {
  return code
    .replace(
      /^const\s+\{\s*([A-Za-z_$][A-Za-z0-9_$]*)\s*(?::\s*([A-Za-z_$][A-Za-z0-9_$]*)\s*)?\}\s*=\s*require\(("[^"]+"|'[^']+')\)\s*;?\s*$/gm,
      (_match, name, alias, source) =>
        `import { ${name}${alias ? ` as ${alias}` : ""} } from ${source};`,
    )
    .replace(
      /^const\s+([A-Za-z_$][A-Za-z0-9_$]*)\s*=\s*require\(("[^"]+"|'[^']+')\)\s*;?\s*$/gm,
      (_match, name, source) =>
        `import * as ${name} from ${source};`,
    );
}

function buildTsconfig(options: ITransformOptions | undefined): string {
  const plugin = {
    transform: "typia/lib/transform",
    ...(options?.finite ? { finite: true } : {}),
    ...(options?.numeric ? { numeric: true } : {}),
    ...(options?.functional ? { functional: true } : {}),
    ...(options?.undefined ? { undefined: true } : {}),
  };
  return JSON.stringify(
    {
      compilerOptions: {
        target: "ESNext",
        module: "ESNext",
        moduleResolution: "Bundler",
        strict: true,
        skipLibCheck: true,
        esModuleInterop: true,
        forceConsistentCasingInFileNames: true,
        baseUrl: ".",
        plugins: [plugin],
      },
      include: ["src/**/*.ts"],
    },
    null,
    2,
  );
}

function parseDiagnostics(stderr: string): object[] {
  if (!stderr.trim()) return [];
  return stderr
    .split("\n")
    .filter((line) => line.trim().length > 0)
    .map((line) => ({ messageText: line, category: "error" }));
}

function normalizeError(error: unknown): object {
  if (error instanceof Error) {
    return { name: error.name, message: error.message, stack: error.stack };
  }
  return { name: "Error", message: String(error) };
}
