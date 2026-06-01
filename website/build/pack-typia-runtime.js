// Build website/public/compiler/typia-runtime-pack.json — a CommonJS bundle the
// playground's Execute sandbox uses to resolve the typia / randexp requires the
// transform emits.
//
// Unlike build/typia-pack.js (which ships TypeScript SOURCE so the wasm's tsgo
// can typecheck `import typia, { tags } from "typia"`), this pack ships the
// published JS so the Execute sandbox can actually call typia helpers at
// runtime. The typia transform lowers `typia.is<T>(x)` into calls like
//   require("typia/lib/internal/_isFormatUuid")
// in the CommonJS bundle the sandbox runs; without those modules resolvable,
// every Execute throws "require(...) is not available in the sandbox".
//
// Mirrors ttsc.dev's `website/build/pack-typia-runtime.cjs`. Source roots are
// `website/node_modules/` — the typia install (from experiments/tarballs/) whose
// SOURCE build/typia-pack.js packs, so the runtime JS matches the compiled JS.
//
// Output shape: { [packageRelativePath]: jsCode }, e.g.
// `typia/lib/internal/_isFormatUuid.js`. `@ttsc/playground`'s
// `createSandboxRequire` resolves requires against this map.

const fs = require("fs");
const path = require("path");

const websiteRoot = path.resolve(__dirname, "..");
const repoRoot = path.resolve(websiteRoot, "..");
const outFile = path.join(
  websiteRoot,
  "public",
  "compiler",
  "typia-runtime-pack.json",
);

// Each entry packs a package's runtime JS. typia + the @typia/* packages keep
// their JS under `lib/`; randexp and its transitive deps (ret, drange — the
// regex generators behind typia.random) ship JS at the package root.
const SOURCES = [
  { name: "typia", pickDirs: ["lib"] },
  { name: "@typia/utils", pickDirs: ["lib"] },
  { name: "@typia/interface", pickDirs: ["lib"] },
  { name: "randexp", pickDirs: [] },
  { name: "ret", pickDirs: [] },
  { name: "drange", pickDirs: [] },
];
// `@typia/core` is intentionally excluded: it is the compile-time code
// generator (`lib/programmers/*` all `require("typescript")`) and is never
// loaded by typia's runtime validators. Including it would only drag a
// `typescript` require into the Execute sandbox that can never be satisfied.

const KEEP = /\.js$/;
const SKIP = /(\.mjs|\.map|\.d\.ts|\.test\.js|\.spec\.js)$/;

// typia ships its CLI (`lib/executable/*` → commander / inquirer) and its
// compile-time transformer (`lib/transform.js`, `lib/transformers/*` → ttsc /
// typescript) inside the same package. The Execute sandbox only ever runs the
// emitted validators, which never require any of these, so packing them would
// just carry unsatisfiable external requires (commander, inquirer, ttsc,
// typescript) into the runtime pack. Drop them — the sandbox stays reachable-
// code only.
const RUNTIME_SKIP = /^typia\/lib\/(executable\/|transform\.js$|transformers\/)/;

// Resolve a package's install root across both layouts the website builds in:
//   - npm-hoisted (`website/node_modules/<name>`), and
//   - the pnpm workspace, where typia's transitive runtime deps (randexp, ret,
//     drange, @typia/core, …) are NOT hoisted into website/node_modules but live
//     under the repo-root pnpm virtual store (`node_modules/.pnpm/<pkg>@<ver>/
//     node_modules/<name>`). Workspace packages (typia, @typia/*) resolve via
//     their website/node_modules symlink.
function resolvePackageRoot(name) {
  const segs = name.split("/");
  const candidates = [path.join(websiteRoot, "node_modules", ...segs)];
  const pnpmStore = path.join(repoRoot, "node_modules", ".pnpm");
  if (fs.existsSync(pnpmStore)) {
    for (const entry of fs.readdirSync(pnpmStore)) {
      candidates.push(path.join(pnpmStore, entry, "node_modules", ...segs));
    }
  }
  for (const c of candidates) {
    try {
      const real = fs.realpathSync(c);
      if (fs.existsSync(path.join(real, "package.json"))) return real;
    } catch {
      /* keep trying */
    }
  }
  return candidates[0];
}

function walk(dir) {
  const out = [];
  const stack = [dir];
  while (stack.length > 0) {
    const cur = stack.pop();
    let entries;
    try {
      entries = fs.readdirSync(cur, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const entry of entries) {
      if (entry.name === "node_modules") continue;
      const full = path.join(cur, entry.name);
      if (entry.isDirectory()) stack.push(full);
      else if (entry.isFile()) out.push(full);
    }
  }
  return out;
}

function packTree(pack, name, pkgRoot, root) {
  if (!fs.existsSync(root)) return;
  for (const file of walk(root)) {
    if (SKIP.test(file)) continue;
    if (!KEEP.test(file)) continue;
    const rel = path.relative(pkgRoot, file).split(path.sep).join("/");
    const key = `${name}/${rel}`;
    if (RUNTIME_SKIP.test(key)) continue;
    pack[key] = fs.readFileSync(file, "utf8");
  }
}

// `./src/foo.ts` → `./lib/foo.js`. Already-`lib/`/`.js` paths (and wildcards)
// pass through, so published deps (randexp, ret, drange) whose package.json
// already points at JS are unchanged.
function mapSrcToLib(value) {
  return value.replace(/^(\.\/)?src\//, "$1lib/").replace(/\.ts$/, ".js");
}

function rewriteExportsToLib(exportsValue) {
  if (typeof exportsValue === "string") return mapSrcToLib(exportsValue);
  if (exportsValue && typeof exportsValue === "object") {
    const out = {};
    for (const [key, val] of Object.entries(exportsValue)) {
      if (typeof val === "string") out[key] = mapSrcToLib(val);
      else if (val && typeof val === "object") {
        const cond = {};
        for (const [c, v] of Object.entries(val))
          cond[c] = typeof v === "string" ? mapSrcToLib(v) : v;
        out[key] = cond;
      } else out[key] = val;
    }
    return out;
  }
  return exportsValue;
}

// Pack a package's package.json with `main` / `types` / `module` / `exports`
// rewritten from the workspace's src-pointing form to the lib JS this pack
// ships. Published deps already point at lib/JS so the rewrite is a no-op for
// them; it only matters for the workspace @typia/* packages, whose source
// package.json resolves `require("@typia/utils")` to `src/index.ts` — a file
// the runtime pack (lib JS only) does not carry, which made the sandbox
// `require` throw "@typia/utils is not available".
function packPackageJson(pack, name, pkgRoot) {
  const pj = path.join(pkgRoot, "package.json");
  if (!fs.existsSync(pj)) return;
  let json;
  try {
    json = JSON.parse(fs.readFileSync(pj, "utf8"));
  } catch {
    pack[`${name}/package.json`] = fs.readFileSync(pj, "utf8");
    return;
  }
  if (typeof json.main === "string") json.main = mapSrcToLib(json.main);
  if (typeof json.types === "string") json.types = mapSrcToLib(json.types);
  if (typeof json.module === "string") json.module = mapSrcToLib(json.module);
  if (json.exports !== undefined)
    json.exports = rewriteExportsToLib(json.exports);
  pack[`${name}/package.json`] = JSON.stringify(json, null, 2);
}

fs.mkdirSync(path.dirname(outFile), { recursive: true });

const pack = {};
for (const { name, pickDirs } of SOURCES) {
  const pkgRoot = resolvePackageRoot(name);
  if (!fs.existsSync(pkgRoot)) {
    console.warn(`build/pack-typia-runtime.js: missing ${name} at ${pkgRoot}`);
    continue;
  }
  packPackageJson(pack, name, pkgRoot);
  if (pickDirs.length === 0) packTree(pack, name, pkgRoot, pkgRoot);
  else
    for (const sub of pickDirs)
      packTree(pack, name, pkgRoot, path.join(pkgRoot, sub));
}

fs.writeFileSync(outFile, JSON.stringify(pack));

console.log(
  `build/pack-typia-runtime.js: packed ${Object.keys(pack).length} files into typia-runtime-pack.json (${(
    fs.statSync(outFile).size /
    1024
  ).toFixed(0)} KiB)`,
);
