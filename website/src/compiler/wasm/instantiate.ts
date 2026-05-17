// Boots ttsc-typia.wasm inside a Web Worker and returns the JS-side handle.
//
// Order of operations matters: wasm_exec.js installs default no-op fs/process
// shims if `globalThis.fs` is missing at load time, so we must install our
// MemFS BEFORE importing wasm_exec.js.

import { createMemFS, IMemFSHost } from "./MemFS";
import type { ITtscTypiaApi } from "./TtscTypia";

declare const importScripts: (...urls: string[]) => void;

interface IBootResult {
  api: ITtscTypiaApi;
  host: IMemFSHost;
}

let cached: Promise<IBootResult> | null = null;

export function bootTtscTypia(
  options: { wasmUrl?: string; wasmExecUrl?: string } = {},
): Promise<IBootResult> {
  if (cached) return cached;
  cached = boot(options);
  return cached;
}

async function boot(options: {
  wasmUrl?: string;
  wasmExecUrl?: string;
}): Promise<IBootResult> {
  const wasmUrl = options.wasmUrl ?? "/compiler/ttsc-typia.wasm";
  const wasmExecUrl = options.wasmExecUrl ?? "/compiler/wasm_exec.js";

  const host = createMemFS();
  const globalAny = globalThis as Record<string, unknown>;
  globalAny.fs = host.fs;
  globalAny.process = createProcessShim();

  // wasm_exec.js installs `globalThis.Go`. It also reads globalThis.fs at
  // module-eval time.
  importScripts(wasmExecUrl);

  const ready = new Promise<void>((resolve) => {
    globalAny.ttscTypiaReady = resolve;
  });

  const goCtor = (globalAny as { Go: new () => IGoInstance }).Go;
  const go = new goCtor();

  const response = await fetch(wasmUrl);
  if (!response.ok) {
    throw new Error(
      `bootTtscTypia: failed to fetch ${wasmUrl}: ${response.status}`,
    );
  }
  const wasm = await WebAssembly.instantiateStreaming(
    response,
    go.importObject,
  );
  // go.run never resolves until the wasm exits; we don't await it.
  go.run(wasm.instance);
  await ready;

  const api = (globalAny as { ttscTypia: ITtscTypiaApi }).ttscTypia;
  if (!api) throw new Error("bootTtscTypia: ttscTypia global was not set");
  return { api, host };
}

interface IGoInstance {
  importObject: WebAssembly.Imports;
  run(instance: WebAssembly.Instance): Promise<void>;
}

function createProcessShim(): Record<string, unknown> {
  return {
    getuid: () => -1,
    getgid: () => -1,
    geteuid: () => -1,
    getegid: () => -1,
    getgroups: () => {
      throw new Error("not implemented");
    },
    pid: -1,
    ppid: -1,
    umask: () => {
      throw new Error("not implemented");
    },
    cwd: () => "/",
    chdir: () => {
      /* no-op; the workspace lives at /work */
    },
  };
}
