// Build website/public/compiler/typia-pack.json — a single JSON map of
// {path: contents} for the typia + @typia/interface + @typia/utils source
// trees the in-browser ttsc-typia needs to resolve `import typia from "typia"`.
//
// We pack source `.ts` files (not generated `.d.ts`) because the typescript-go
// compiler embedded in the wasm reads the same code the published package
// uses. The pack is consumed at worker boot time and mounted into MemFS at
// `/work/node_modules/...`.
//
// As a side effect we also patch `website/src/raw/external.json` (produced by
// the preceding `embed-typescript external` step in build/compiler.js).
// The local tarballs in `experiments/tarballs/` only contain placeholder
// `package.json` files, so embed-typescript produces broken entries with no
// `types` field and zero source files for typia and friends — that's why the
// Monaco editor in the playground shows no autocomplete or type errors for
// `import typia from "typia"`. We replace those entries with the same
// source-based map we use for the wasm worker, just under `node_modules/`.
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
const externalJsonFile = path.join(
  websiteRoot,
  "src",
  "raw",
  "external.json",
);

const SOURCES = [
  {
    dest: "typia",
    root: path.join(repoRoot, "packages", "typia", "src"),
    // Skip only the build-tool-only entries. `transformers/` is NOT skipped:
    // typia's runtime entries (functional.ts, json.ts, http.ts, misc.ts,
    // module.ts, llm.ts, protobuf.ts, notations.ts, reflect.ts) all import
    // `./transformers/NoTransformConfigurationError`. Dropping it leaves those
    // imports dangling, which the wasm's tsgo reports as TS2307 and the cascade
    // poisons the type checker the typia adapter relies on — every typia.X()
    // call site falls out, and the playground floods with type errors.
    skip: (rel) => rel.startsWith("executable") || rel === "transform.ts",
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

// typia 13 imports `StandardSchemaV1` from `@standard-schema/spec` in
// `_createStandardSchema.ts` and `module.ts`. Without the package on the MemFS
// those imports emit TS2307 and poison the type checker → the typia adapter
// can't resolve typia.X() call sites. The package ships its declarations under
// `dist/` already, so we mount that tree (and its own package.json) verbatim
// instead of the src→exports rewrite the typia packages get.
const STANDARD_SCHEMA_ROOT = path.join(
  websiteRoot,
  "node_modules",
  "@standard-schema",
  "spec",
);

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

// Mount @standard-schema/spec's published dist tree (declarations + JS) plus
// its own package.json so `import { StandardSchemaV1 } from "@standard-schema/spec"`
// resolves inside the wasm's tsgo.
if (fs.existsSync(STANDARD_SCHEMA_ROOT)) {
  const distRoot = path.join(STANDARD_SCHEMA_ROOT, "dist");
  if (fs.existsSync(distRoot)) {
    for (const file of walk(distRoot)) {
      const rel = path.relative(distRoot, file).replace(/\\/g, "/");
      if (!/\.(d\.ts|d\.cts|d\.mts|js|cjs|mjs|ts)$/.test(rel)) continue;
      pack[path.posix.join("@standard-schema/spec", "dist", rel)] =
        fs.readFileSync(file, "utf8");
    }
  }
  const pkgJson = path.join(STANDARD_SCHEMA_ROOT, "package.json");
  if (fs.existsSync(pkgJson)) {
    pack["@standard-schema/spec/package.json"] = fs.readFileSync(pkgJson, "utf8");
  }
} else {
  console.log(
    `build/typia-pack.js: @standard-schema/spec not found at ${STANDARD_SCHEMA_ROOT}; skipping`,
  );
}

fs.writeFileSync(outFile, JSON.stringify(pack));

console.log(
  `build/typia-pack.js: packed ${Object.keys(pack).length} files into typia-pack.json (${(
    fs.statSync(outFile).size /
    1024
  ).toFixed(0)} KiB)`,
);

// Patch external.json (used by the Monaco editor) with the same source-based
// entries under `node_modules/...`. embed-typescript runs before us in
// build/compiler.js, so the file is already on disk; we strip its broken
// placeholder entries for typia/@typia/interface/@typia/utils and inject the
// real source files plus a publish-style package.json with a `types` field.
if (fs.existsSync(externalJsonFile)) {
  const external = JSON.parse(fs.readFileSync(externalJsonFile, "utf8"));
  const patched = { ...external };
  const prefixes = SOURCES.map(({ dest }) => `node_modules/${dest}/`);
  for (const key of Object.keys(patched)) {
    if (prefixes.some((p) => key.startsWith(p))) delete patched[key];
  }
  for (const [key, content] of Object.entries(pack)) {
    patched[`node_modules/${key}`] = content;
  }
  fs.writeFileSync(externalJsonFile, JSON.stringify(patched));
  console.log(
    `build/typia-pack.js: patched ${Object.keys(pack).length} entries into ${path.relative(websiteRoot, externalJsonFile)}`,
  );
} else {
  console.log(
    `build/typia-pack.js: ${path.relative(websiteRoot, externalJsonFile)} not found; skipping Monaco patch`,
  );
}

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else if (entry.isFile()) out.push(p);
  }
  return out;
}
