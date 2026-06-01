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
  { name: "@typia/core", pickDirs: ["lib"] },
  { name: "randexp", pickDirs: [] },
  { name: "ret", pickDirs: [] },
  { name: "drange", pickDirs: [] },
];

const KEEP = /\.js$/;
const SKIP = /(\.mjs|\.map|\.d\.ts|\.test\.js|\.spec\.js)$/;

function resolvePackageRoot(name) {
  const direct = path.join(websiteRoot, "node_modules", ...name.split("/"));
  try {
    return fs.realpathSync(direct);
  } catch {
    return direct;
  }
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
    pack[`${name}/${rel}`] = fs.readFileSync(file, "utf8");
  }
}

fs.mkdirSync(path.dirname(outFile), { recursive: true });

const pack = {};
for (const { name, pickDirs } of SOURCES) {
  const pkgRoot = resolvePackageRoot(name);
  if (!fs.existsSync(pkgRoot)) {
    console.warn(`build/pack-typia-runtime.js: missing ${name} at ${pkgRoot}`);
    continue;
  }
  const pkgJson = path.join(pkgRoot, "package.json");
  if (fs.existsSync(pkgJson)) {
    pack[`${name}/package.json`] = fs.readFileSync(pkgJson, "utf8");
  }
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
