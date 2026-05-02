const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const configPath = path.join(__dirname, "tsconfig.json");
const parsed = ts.parseJsonConfigFileContent(
  ts.readConfigFile(configPath, ts.sys.readFile).config,
  ts.sys,
  __dirname,
);

const repoRoot = path.resolve(__dirname, "../..");
const pkgEntries = (() => {
  const entries = {};
  for (const name of fs.readdirSync(path.join(repoRoot, "packages"))) {
    const dir = path.join(repoRoot, "packages", name);
    const pkg = JSON.parse(
      fs.readFileSync(path.join(dir, "package.json"), "utf8"),
    );
    entries[pkg.name] = [path.join(dir, "src/index.ts")];
    entries[`${pkg.name}/*`] = [path.join(dir, "src/*")];
    if (pkg.exports) {
      for (const [key, val] of Object.entries(pkg.exports)) {
        if (typeof val !== "string" || key === "./package.json") continue;
        const k = key === "." ? pkg.name : `${pkg.name}/${key.slice(2)}`;
        entries[k] = [path.resolve(dir, val)];
      }
    }
  }
  for (const name of ["template", "utils"]) {
    const dir = path.join(repoRoot, "tests", name);
    entries[`@typia/${name}`] = [path.join(dir, "src/index.ts")];
    entries[`@typia/${name}/*`] = [path.join(dir, "src/*")];
  }
  return entries;
})();

const compilerOptions = {
  ...parsed.options,
  module: ts.ModuleKind.CommonJS,
  moduleResolution: ts.ModuleResolutionKind.Node10,
  sourceMap: false,
  declaration: false,
  declarationMap: false,
  inlineSourceMap: false,
  noEmit: false,
  skipLibCheck: true,
  rootDir: undefined,
  outDir: undefined,
  baseUrl: __dirname,
  paths: { ...(parsed.options.paths || {}), ...pkgEntries },
};

const sourceCache = new Map();
const baseHost = ts.createCompilerHost(compilerOptions);
const origGetSourceFile = baseHost.getSourceFile.bind(baseHost);
baseHost.getSourceFile = (fname, ...args) => {
  const cached = sourceCache.get(fname);
  if (cached) return cached;
  const sf = origGetSourceFile(fname, ...args);
  if (sf) sourceCache.set(fname, sf);
  return sf;
};

const entryFile = path.resolve(__dirname, "src/index.ts");
const servantFile = path.resolve(__dirname, "src/servant/index.ts");
const rootSet = new Set([entryFile, servantFile]);
let program = ts.createProgram([...rootSet], compilerOptions, baseHost);

const transpileFallback = (m, filename) => {
  const source = fs.readFileSync(filename, "utf8");
  const { outputText } = ts.transpileModule(source, {
    fileName: filename,
    compilerOptions,
  });
  m._compile(outputText, filename);
};

const compile = (m, filename) => {
  let sourceFile = program.getSourceFile(filename);
  if (!sourceFile) {
    rootSet.add(filename);
    program = ts.createProgram(
      [...rootSet],
      compilerOptions,
      baseHost,
      program,
    );
    sourceFile = program.getSourceFile(filename);
    if (!sourceFile) return transpileFallback(m, filename);
  }

  if (program.isSourceFileFromExternalLibrary(sourceFile))
    return transpileFallback(m, filename);

  let outputText;
  const writeFile = (fname, data) => {
    if (/\.[cm]?js$/.test(fname)) outputText = data;
  };
  program.emit(sourceFile, writeFile);
  if (outputText === undefined)
    return transpileFallback(m, filename);

  m._compile(outputText, filename);
};

require.extensions[".ts"] = compile;
require.extensions[".tsx"] = compile;
