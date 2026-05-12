// Build the typia native compiler as a browser-loadable wasm module and
// stage the matching wasm_exec.js into website/public/compiler/.
//
// Usage: node build/wasm.js [--force]
//
// Behavior:
//   * If `public/compiler/ttsc-typia.wasm` already exists and is newer than
//     every Go source under `packages/typia/native` and `packages/ttsc/...`,
//     the build is skipped (instant). Pass `--force` or set
//     `WEBSITE_WASM_FORCE=1` to rebuild unconditionally.
//   * If the Go toolchain / native dir / ttsc shim tree is unavailable and a
//     prebuilt wasm already lives in `public/compiler/`, we leave the existing
//     artifact in place and log a notice instead of failing the dev server.
//   * Hard failure only when the wasm is missing AND we cannot build it.
//
// Inputs (env overrides):
//   TYPIA_NATIVE_DIR    path to packages/typia/native
//   GOROOT              Go install root (default: `go env GOROOT`)
//   WEBSITE_WASM_FORCE  any truthy value forces a rebuild

const cp = require("child_process");
const fs = require("fs");
const path = require("path");

const websiteRoot = path.resolve(__dirname, "..");
const nativeDir =
  process.env.TYPIA_NATIVE_DIR ??
  path.resolve(websiteRoot, "..", "packages", "typia", "native");
const ttscDir = path.resolve(websiteRoot, "..", "..", "ttsc", "packages", "ttsc");
const outDir = path.join(websiteRoot, "public", "compiler");
const wasmOut = path.join(outDir, "ttsc-typia.wasm");
const wasmExecOut = path.join(outDir, "wasm_exec.js");
const forceRebuild =
  process.argv.includes("--force") || !!process.env.WEBSITE_WASM_FORCE;

fs.mkdirSync(outDir, { recursive: true });

function hasGoToolchain() {
  try {
    cp.execSync("go env GOROOT", { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

function locateWasmExec() {
  if (!hasGoToolchain()) return null;
  const goroot =
    process.env.GOROOT ??
    cp.execSync("go env GOROOT", { encoding: "utf8" }).trim();
  const candidate = path.join(goroot, "lib", "wasm", "wasm_exec.js");
  return fs.existsSync(candidate) ? candidate : null;
}

function newestMtime(...roots) {
  let max = 0;
  for (const root of roots) {
    if (!root || !fs.existsSync(root)) continue;
    walk(root, (file, stat) => {
      if (stat.mtimeMs > max) max = stat.mtimeMs;
    });
  }
  return max;
}

function walk(root, visit) {
  const stack = [root];
  while (stack.length) {
    const cur = stack.pop();
    let stat;
    try {
      stat = fs.statSync(cur);
    } catch {
      continue;
    }
    if (stat.isDirectory()) {
      const base = path.basename(cur);
      if (base === "node_modules" || base === ".ttsc" || base === ".git") continue;
      for (const entry of fs.readdirSync(cur)) {
        stack.push(path.join(cur, entry));
      }
    } else if (stat.isFile() && cur.endsWith(".go")) {
      visit(cur, stat);
    }
  }
}

function buildWasm() {
  console.log(`build/wasm.js: building ${wasmOut}`);
  cp.execFileSync(
    "go",
    [
      "build",
      "-trimpath",
      "-ldflags",
      "-s -w",
      "-o",
      wasmOut,
      "./cmd/ttsc-typia",
    ],
    {
      cwd: nativeDir,
      env: { ...process.env, GOOS: "js", GOARCH: "wasm" },
      stdio: "inherit",
    },
  );
}

const wasmExecSrc = locateWasmExec();
const hasNativeDir = fs.existsSync(nativeDir);

if (!forceRebuild && fs.existsSync(wasmOut)) {
  const wasmMtime = fs.statSync(wasmOut).mtimeMs;
  const sourceMtime = newestMtime(nativeDir, ttscDir);
  if (sourceMtime > 0 && wasmMtime >= sourceMtime) {
    console.log(
      `build/wasm.js: cached ttsc-typia.wasm is up to date (${(
        fs.statSync(wasmOut).size /
        1024 /
        1024
      ).toFixed(2)} MiB) — skipping rebuild`,
    );
    if (wasmExecSrc && !fs.existsSync(wasmExecOut)) {
      fs.copyFileSync(wasmExecSrc, wasmExecOut);
    }
    return;
  }
}

if (!hasNativeDir || !wasmExecSrc) {
  if (fs.existsSync(wasmOut) && fs.existsSync(wasmExecOut)) {
    console.warn(
      "build/wasm.js: Go toolchain or typia native dir missing; reusing existing prebuilt artifacts.",
    );
    return;
  }
  if (!hasNativeDir) {
    console.error(`build/wasm.js: typia native dir not found: ${nativeDir}`);
  }
  if (!wasmExecSrc) {
    console.error(
      "build/wasm.js: wasm_exec.js not located. Install Go 1.26+ or pre-stage `public/compiler/ttsc-typia.wasm` + `wasm_exec.js`.",
    );
  }
  process.exit(1);
}

buildWasm();
fs.copyFileSync(wasmExecSrc, wasmExecOut);

console.log(
  `build/wasm.js: done. ttsc-typia.wasm = ${(
    fs.statSync(wasmOut).size /
    1024 /
    1024
  ).toFixed(2)} MiB`,
);
