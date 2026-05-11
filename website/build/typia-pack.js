// Build website/public/compiler/typia-pack.json — a single JSON map of
// {path: contents} for the typia + @typia/interface + @typia/utils source
// trees the in-browser ttsc-typia needs to resolve `import typia from "typia"`.
//
// We pack source `.ts` files (not generated `.d.ts`) because the typescript-go
// compiler embedded in the wasm reads the same code the published package
// uses. The pack is consumed at worker boot time and mounted into MemFS at
// `/work/node_modules/...`.
//
// Important: we DO NOT stage the unpacked .ts files inside `public/compiler/`.
// Next.js's TypeScript checker would otherwise pick them up and fail with
// "Cannot find module '@typia/interface'" because the staged tree has no
// resolvable node_modules. Everything lives in the .json blob only.

const fs = require("fs");
const os = require("os");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..", "..");
const websiteRoot = path.resolve(__dirname, "..");
const outFile = path.join(websiteRoot, "public", "compiler", "typia-pack.json");

const SOURCES = [
  {
    dest: "typia",
    root: path.join(repoRoot, "packages", "typia", "src"),
    skip: (rel) =>
      rel.startsWith("executable") ||
      rel.startsWith("transformers") ||
      rel === "transform.ts",
  },
  {
    dest: "@typia/interface",
    root: path.join(repoRoot, "packages", "interface", "src"),
    skip: () => false,
  },
  {
    dest: "@typia/utils",
    root: path.join(repoRoot, "packages", "utils", "src"),
    skip: () => false,
  },
];

const FILE_FILTER = /\.(ts|tsx|mts|cts)$/;

fs.mkdirSync(path.dirname(outFile), { recursive: true });

const pack = {};

for (const { dest, root, skip } of SOURCES) {
  if (!fs.existsSync(root)) {
    console.log(`build/typia-pack.js: skipping missing source ${root}`);
    continue;
  }
  for (const file of walk(root)) {
    const rel = path.relative(root, file).replace(/\\/g, "/");
    if (skip(rel)) continue;
    if (!FILE_FILTER.test(rel)) continue;
    const key = path.posix.join(dest, "src", rel);
    pack[key] = fs.readFileSync(file, "utf8");
  }
  const srcPkg = JSON.parse(
    fs.readFileSync(path.join(root, "..", "package.json"), "utf8"),
  );
  pack[`${dest}/package.json`] = JSON.stringify(
    {
      name: srcPkg.name,
      version: srcPkg.version,
      main: "src/index.ts",
      types: "src/index.ts",
      exports: srcPkg.exports ?? {
        ".": "./src/index.ts",
        "./package.json": "./package.json",
      },
    },
    null,
    2,
  );
}

fs.writeFileSync(outFile, JSON.stringify(pack));

console.log(
  `build/typia-pack.js: packed ${Object.keys(pack).length} files into typia-pack.json (${(
    fs.statSync(outFile).size /
    1024
  ).toFixed(0)} KiB)`,
);

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else if (entry.isFile()) out.push(p);
  }
  return out;
}
