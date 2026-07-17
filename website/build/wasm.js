// Build the typia native compiler as a browser-loadable wasm module and
// stage the matching wasm_exec.js into website/public/compiler/.
//
// Usage: node build/wasm.js [--force] [--allow-prebuilt]
//
// Behavior:
//   * If the Go toolchain is available and `public/compiler/ttsc-typia.wasm`
//     already exists and is newer than every Go source under
//     `packages/typia/native` and `packages/ttsc/...`, the build is skipped
//     (instant). Pass `--force` or set `WEBSITE_WASM_FORCE=1` to rebuild
//     unconditionally.
//   * If the Go toolchain / native dir / ttsc shim tree is unavailable, the
//     build FAILS by default. A missing toolchain cannot rebuild or verify the
//     wasm against its source, so returning success while leaving whatever
//     artifact is on disk would ship a silently stale playground. The mtime
//     fast-path above is skipped for the same reason: it is a build accelerant
//     only when the toolchain that produced the artifact is present.
//   * To reuse an existing prebuilt artifact deliberately — an explicitly
//     UNVERIFIED, possibly-stale state — set `WEBSITE_WASM_ALLOW_PREBUILT=1`
//     (or pass `--allow-prebuilt`). It logs a notice and does not rebuild.
//
// Inputs (env overrides):
//   TYPIA_NATIVE_DIR             path to packages/typia/native
//   GOROOT                       Go install root (default: `go env GOROOT`)
//   WEBSITE_WASM_FORCE           any truthy value forces a rebuild
//   WEBSITE_WASM_ALLOW_PREBUILT  reuse an existing prebuilt wasm when the Go
//                                toolchain is unavailable, instead of failing

const cp = require("child_process");
const fs = require("fs");
const path = require("path");

const websiteRoot = path.resolve(__dirname, "..");
// The playground wasm entry lives in a website-owned Go module so that
// `packages/typia/native` (the published plugin) never depends on
// `@ttsc/wasm`. `compilerDir` is the module root; it imports typia's native
// adapter (`nativeDir`) and the ttsc packages (`ttscDir`) through go.mod
// replaces, so all three trees feed the wasm and the staleness check.
const compilerDir = path.resolve(websiteRoot, "compiler");
const nativeDir =
  process.env.TYPIA_NATIVE_DIR ??
  path.resolve(websiteRoot, "..", "packages", "typia", "native");
const ttscDir = path.resolve(websiteRoot, "..", "..", "ttsc", "packages", "ttsc");
const outDir = path.join(websiteRoot, "public", "compiler");
const wasmOut = path.join(outDir, "ttsc-typia.wasm");
const wasmExecOut = path.join(outDir, "wasm_exec.js");
const forceRebuild =
  process.argv.includes("--force") || !!process.env.WEBSITE_WASM_FORCE;
// Opt-in to reusing an existing prebuilt wasm when the Go toolchain is
// unavailable. Without it, a missing toolchain is a hard build failure rather
// than a silent success over a possibly-stale artifact.
const allowPrebuilt =
  process.argv.includes("--allow-prebuilt") ||
  !!process.env.WEBSITE_WASM_ALLOW_PREBUILT;

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
      "./cmd/playground",
    ],
    {
      cwd: compilerDir,
      env: { ...process.env, GOOS: "js", GOARCH: "wasm" },
      stdio: "inherit",
    },
  );
}

const wasmExecSrc = locateWasmExec();
const hasNativeDir = fs.existsSync(compilerDir) && fs.existsSync(nativeDir);

// The mtime fast-path only applies when the toolchain that could rebuild the
// artifact is present; otherwise a stale-but-newer-mtime wasm (e.g. after a
// clone or cache restore that stamps every file at restore time) would let a
// toolchain-less run return success. When the toolchain is absent, fall through
// to the single deliberate decision point below.
if (!forceRebuild && hasNativeDir && wasmExecSrc && fs.existsSync(wasmOut)) {
  const wasmMtime = fs.statSync(wasmOut).mtimeMs;
  const sourceMtime = newestMtime(compilerDir, nativeDir, ttscDir);
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
  const prebuiltExists =
    fs.existsSync(wasmOut) && fs.existsSync(wasmExecOut);
  if (prebuiltExists && allowPrebuilt) {
    console.warn(
      "build/wasm.js: Go toolchain or typia native dir missing; " +
        "WEBSITE_WASM_ALLOW_PREBUILT is set, so reusing the existing prebuilt " +
        "artifacts WITHOUT rebuilding. They are unverified and may be stale.",
    );
    return;
  }
  if (!hasNativeDir) {
    console.error(
      `build/wasm.js: playground compiler module or typia native dir not found ` +
        `(compiler: ${compilerDir}, native: ${nativeDir})`,
    );
  }
  if (!wasmExecSrc) {
    console.error(
      "build/wasm.js: wasm_exec.js not located. Install Go 1.26+ or pre-stage `public/compiler/ttsc-typia.wasm` + `wasm_exec.js`.",
    );
  }
  if (prebuiltExists) {
    console.error(
      "build/wasm.js: a prebuilt wasm exists but cannot be verified against " +
        "source without the Go toolchain. Set WEBSITE_WASM_ALLOW_PREBUILT=1 " +
        "(or pass --allow-prebuilt) to reuse it deliberately, or install " +
        "Go 1.26+ to rebuild.",
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
