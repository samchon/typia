import { createHash } from "node:crypto";
import * as fs from "node:fs";
import * as path from "node:path";

import {
  build,
  check,
  defaultCacheDirectory,
  resolveProjectConfig,
  resolveProjectRoot,
  resolveBinary,
  transform,
  type CommonOptions,
} from "@typia/ttsc";

export interface RegisterOptions extends CommonOptions {
  cacheDir?: string;
  project?: string;
  extensions?: readonly string[];
}

export interface PreparedExecution {
  emitDir: string;
  entryFile: string;
  moduleKind: "cjs" | "esm";
}

type RequireExtension = (module: NodeJS.Module, filename: string) => void;
type CompilableModule = NodeJS.Module & {
  _compile(code: string, filename: string): void;
};

interface ProjectContext {
  cacheDir: string;
  cacheSalt: string;
  compiledText: Map<string, string>;
  emitDir: string;
  emittedFiles: string[] | null;
  diagnosticsChecked: boolean;
  entryMap: Map<string, string>;
  root: string;
  tsconfig: string;
}

const DEFAULT_EXTENSIONS: readonly string[] = Object.freeze([
  ".ts",
  ".tsx",
  ".cts",
  ".mts",
]);

const PROCESS_CACHE_KEY = String(process.pid);
const SINGLE_FILE_CACHE_VERSION = "v4";

export function register(options: RegisterOptions = {}): () => void {
  const cwd = path.resolve(options.cwd ?? process.cwd());
  const extensions = [...(options.extensions ?? DEFAULT_EXTENSIONS)];
  const contextCache = new Map<string, ProjectContext>();
  const previous = new Map<string, RequireExtension | undefined>();

  const getContext = (filename: string): ProjectContext => {
    if (options.project) {
      const key = path.resolve(cwd, options.project);
      const cached = contextCache.get(key);
      if (cached) return cached;
      const tsconfig = resolveProjectConfig({ cwd, tsconfig: key });
      const root = resolveProjectRoot({ cwd, tsconfig });
      const cacheDir = options.cacheDir ?? defaultCacheDirectory(root, "ttsx");
      const created = {
        tsconfig,
        root,
        cacheDir,
        cacheSalt: createCompilerCacheSalt(options),
        compiledText: new Map<string, string>(),
        diagnosticsChecked: false,
        emitDir: path.join(cacheDir, "project", PROCESS_CACHE_KEY),
        emittedFiles: null,
        entryMap: new Map<string, string>(),
      };
      contextCache.set(key, created);
      return created;
    }

    const tsconfig = resolveProjectConfig({ cwd, file: filename });
    const cached = contextCache.get(tsconfig);
    if (cached) return cached;
    const root = resolveProjectRoot({ cwd, tsconfig });
    const cacheDir = options.cacheDir ?? defaultCacheDirectory(root, "ttsx");
    const created = {
      tsconfig,
      root,
      cacheDir,
      cacheSalt: createCompilerCacheSalt(options),
      compiledText: new Map<string, string>(),
      diagnosticsChecked: false,
      emitDir: path.join(cacheDir, "project", PROCESS_CACHE_KEY),
      emittedFiles: null,
      entryMap: new Map<string, string>(),
    };
    contextCache.set(tsconfig, created);
    return created;
  };

  const compile = (filename: string): string => {
    const context = getContext(filename);
    ensureProjectDiagnostics(context, options);
    const output = readCompiledOutput(context, filename, options);
    if (looksLikeESM(output)) {
      throw new Error(
        `ttsx: ESM output is not yet supported by the in-process CJS runner (${filename}).`,
      );
    }
    return output;
  };

  for (const extension of extensions) {
    previous.set(extension, require.extensions[extension]);
    require.extensions[extension] = (module: NodeJS.Module, filename: string) => {
      const compiled = compile(filename);
      (module as CompilableModule)._compile(compiled, filename);
    };
  }

  return () => {
    for (const extension of extensions) {
      const handler = previous.get(extension);
      if (handler) {
        require.extensions[extension] = handler;
      } else {
        delete require.extensions[extension];
      }
    }
  };
}

export function prepareExecution(
  entryFile: string,
  options: RegisterOptions = {},
): PreparedExecution {
  const cwd = path.resolve(options.cwd ?? process.cwd());
  const context = resolveProjectContext(cwd, entryFile, options);
  ensureProjectDiagnostics(context, options);
  const entryOutput = transformSingleFile(context, entryFile, options);
  if (!looksLikeESM(entryOutput)) {
    return {
      emitDir: context.emitDir,
      entryFile,
      moduleKind: "cjs",
    };
  }
  ensureProjectBuild(context, options);
  const resolvedEntry = resolveEmittedFile(context, entryFile);
  if (resolvedEntry === null) {
    throw new Error(`ttsx: emitted entry not found for ${entryFile}`);
  }
  const output = fs.readFileSync(resolvedEntry, "utf8");
  return {
    emitDir: context.emitDir,
    entryFile: resolvedEntry,
    moduleKind: looksLikeESM(output) ? "esm" : "cjs",
  };
}

function ensureProjectBuild(context: ProjectContext, options: RegisterOptions): void {
  if (context.emittedFiles !== null) return;

  fs.mkdirSync(context.cacheDir, { recursive: true });
  fs.rmSync(context.emitDir, { recursive: true, force: true });
  const result = build({
    binary: options.binary,
    cwd: context.root,
    env: options.env,
    emit: true,
    outDir: context.emitDir,
    quiet: true,
    tsconfig: context.tsconfig,
  });
  if (result.status === 0) {
    context.emittedFiles = listEmittedFiles(context.emitDir);
    return;
  }

  fs.rmSync(context.emitDir, { recursive: true, force: true });
  const detail = [
    `ttsx: native project build failed for ${context.tsconfig}`,
    result.stderr || result.stdout,
  ]
    .filter((line) => line.trim().length !== 0)
    .join("\n");
  throw new Error(detail);
}

function readCompiledOutput(
  context: ProjectContext,
  filename: string,
  options: RegisterOptions,
): string {
  return transformSingleFile(context, filename, options);
}

function resolveProjectContext(
  cwd: string,
  filename: string,
  options: RegisterOptions,
): ProjectContext {
  if (options.project) {
    const tsconfig = resolveProjectConfig({
      cwd,
      tsconfig: path.resolve(cwd, options.project),
    });
    return createProjectContext(cwd, tsconfig, options);
  }
  const tsconfig = resolveProjectConfig({ cwd, file: filename });
  return createProjectContext(cwd, tsconfig, options);
}

function createProjectContext(
  cwd: string,
  tsconfig: string,
  options: RegisterOptions,
): ProjectContext {
  const root = resolveProjectRoot({ cwd, tsconfig });
  const cacheDir = options.cacheDir ?? defaultCacheDirectory(root, "ttsx");
  return {
    tsconfig,
    root,
    cacheDir,
    cacheSalt: createCompilerCacheSalt(options),
    compiledText: new Map<string, string>(),
    diagnosticsChecked: false,
    emitDir: path.join(cacheDir, "project", PROCESS_CACHE_KEY),
    emittedFiles: null,
    entryMap: new Map<string, string>(),
  };
}

function ensureProjectDiagnostics(
  context: ProjectContext,
  options: RegisterOptions,
): void {
  if (context.diagnosticsChecked) {
    return;
  }
  const result = check({
    binary: options.binary,
    cwd: context.root,
    env: options.env,
    plugins: options.plugins,
    quiet: true,
    rewriteMode: options.rewriteMode,
    tsconfig: context.tsconfig,
  });
  if (result.status !== 0) {
    const detail = [result.stderr.trim(), result.stdout.trim()]
      .filter(Boolean)
      .join("\n");
    throw new Error(
      `ttsx: project check failed for ${context.tsconfig}` +
        (detail ? `\n${detail}` : ""),
    );
  }
  context.diagnosticsChecked = true;
}

function transformSingleFile(
  context: ProjectContext,
  filename: string,
  options: RegisterOptions,
): string {
  const normalized = path.resolve(filename);
  const cached = context.compiledText.get(normalized);
  if (cached !== undefined) return cached;

  const cacheFile = singleFileCachePath(context, normalized);
  const sourceStat = safeStat(normalized);
  const cacheStat = safeStat(cacheFile);
  if (
    sourceStat &&
    cacheStat &&
    cacheStat.isFile() &&
    cacheStat.mtimeMs >= sourceStat.mtimeMs
  ) {
    const output = fs.readFileSync(cacheFile, "utf8");
    context.compiledText.set(normalized, output);
    return output;
  }

  const output = transform({
    binary: options.binary,
    cwd: context.root,
    env: options.env,
    file: normalized,
    rewriteMode: options.rewriteMode,
    tsconfig: context.tsconfig,
  });
  fs.mkdirSync(path.dirname(cacheFile), { recursive: true });
  fs.writeFileSync(cacheFile, output, "utf8");
  context.compiledText.set(normalized, output);
  return output;
}

function singleFileCachePath(context: ProjectContext, filename: string): string {
  const digest = createHash("sha1")
    .update(context.cacheSalt)
    .update("\0")
    .update(filename)
    .digest("hex");
  return path.join(
    context.cacheDir,
    "single",
    SINGLE_FILE_CACHE_VERSION,
    `${digest}.js`,
  );
}

function createCompilerCacheSalt(options: RegisterOptions): string {
  const parts = [SINGLE_FILE_CACHE_VERSION];
  const binary = resolveBinary(options);
  if (binary) {
    parts.push(fileSignature(binary));
    for (const location of workspaceCompilerLocations(binary)) {
      const signature = treeSignature(location);
      if (signature) {
        parts.push(signature);
      }
    }
  }
  return parts.join("|");
}

function workspaceCompilerLocations(binary: string): string[] {
  const resolved = path.resolve(binary);
  const packageRoot = path.resolve(path.dirname(resolved), "..");
  const candidates = [
    path.resolve(packageRoot, "cmd"),
    path.resolve(packageRoot, "src"),
    path.resolve(packageRoot, "..", "core", "native"),
    path.resolve(packageRoot, "..", "transform", "native"),
    path.resolve(packageRoot, "..", "transform", "bin"),
    path.resolve(packageRoot, "..", "typia", "bin"),
  ];
  return candidates.filter((location) => fs.existsSync(location));
}

function fileSignature(file: string): string {
  const stat = safeStat(file);
  if (!stat) return `missing:${path.resolve(file)}`;
  return `file:${path.resolve(file)}:${stat.size}:${stat.mtimeMs}`;
}

function treeSignature(root: string): string | null {
  if (!fs.existsSync(root)) return null;
  let latest = 0;
  let count = 0;
  const stack = [root];
  while (stack.length !== 0) {
    const current = stack.pop()!;
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const next = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(next);
        continue;
      }
      if (!entry.isFile()) continue;
      if (!/\.(?:go|[cm]?js|ts)$/.test(entry.name)) continue;
      const stat = safeStat(next);
      if (!stat) continue;
      latest = Math.max(latest, stat.mtimeMs);
      count += 1;
    }
  }
  return `tree:${path.resolve(root)}:${count}:${latest}`;
}

function safeStat(file: string): fs.Stats | null {
  try {
    return fs.statSync(file);
  } catch {
    return null;
  }
}

function resolveEmittedFile(context: ProjectContext, filename: string): string | null {
  const normalized = path.resolve(filename);
  const cached = context.entryMap.get(normalized);
  if (cached && fs.existsSync(cached)) return cached;

  const exact = resolveExactEmittedFile(context, normalized);
  if (exact && fs.existsSync(exact)) {
    context.entryMap.set(normalized, exact);
    return exact;
  }

  const files = context.emittedFiles ?? [];
  let best: string | null = null;
  let bestScore = 0;
  for (const file of files) {
    const score = sharedSourceStemSegments(file, normalized);
    if (score > bestScore) {
      best = file;
      bestScore = score;
    }
  }
  if (!best || !fs.existsSync(best)) {
    return null;
  }
  context.entryMap.set(normalized, best);
  return best;
}

function resolveExactEmittedFile(
  context: ProjectContext,
  filename: string,
): string | null {
  const relative = path.relative(context.root, filename);
  if (relative === "" || relative.startsWith("..") || path.isAbsolute(relative)) {
    return null;
  }
  return path.resolve(
    context.emitDir,
    relative.slice(0, relative.length - path.extname(relative).length) + ".js",
  );
}

function listEmittedFiles(root: string): string[] {
  if (!fs.existsSync(root)) return [];
  const output: string[] = [];
  const stack = [root];
  while (stack.length !== 0) {
    const current = stack.pop()!;
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const next = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(next);
      } else if (entry.isFile() && next.endsWith(".js")) {
        output.push(path.resolve(next));
      }
    }
  }
  return output;
}

function sharedSourceStemSegments(outPath: string, srcPath: string): number {
  const trim = (location: string): string[] => {
    const normalized = location.split(path.sep).join("/");
    return normalized
      .slice(0, normalized.length - path.extname(normalized).length)
      .split("/");
  };
  const a = trim(outPath);
  const b = trim(srcPath);
  const count = Math.min(a.length, b.length);
  let shared = 0;
  for (let i = 1; i <= count; i += 1) {
    if (a[a.length - i] !== b[b.length - i]) break;
    shared += 1;
  }
  return shared;
}

function looksLikeESM(output: string): boolean {
  if (
    /\bObject\.defineProperty\(exports\b/.test(output) ||
    /\bmodule\.exports\b/.test(output) ||
    /\brequire\(/.test(output) ||
    /\bexports\./.test(output)
  ) {
    return false;
  }
  return /^\s*(import|export)\s/m.test(output);
}
