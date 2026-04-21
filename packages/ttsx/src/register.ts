import * as fs from "node:fs";
import * as path from "node:path";

import {
  build,
  defaultCacheDirectory,
  resolveProjectConfig,
  resolveProjectRoot,
  type CommonOptions,
} from "@typia/ttsc";

import { buildLegacyProject } from "./legacy";

export interface RegisterOptions extends CommonOptions {
  cacheDir?: string;
  project?: string;
  extensions?: readonly string[];
}

type RequireExtension = (module: NodeJS.Module, filename: string) => void;
type CompilableModule = NodeJS.Module & {
  _compile(code: string, filename: string): void;
};

interface ProjectContext {
  cacheDir: string;
  emitDir: string;
  emittedFiles: string[] | null;
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
      emitDir: path.join(cacheDir, "project", PROCESS_CACHE_KEY),
      emittedFiles: null,
      entryMap: new Map<string, string>(),
    };
    contextCache.set(tsconfig, created);
    return created;
  };

  const compile = (filename: string): string => {
    const context = getContext(filename);
    ensureProjectBuild(context, options);
    const outFile = resolveEmittedFile(context, filename);
    const output = fs.readFileSync(outFile, "utf8");
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
  if (result.status === 0 && !hasPhase0CoverageGap(result.stdout)) {
    context.emittedFiles = listEmittedFiles(context.emitDir);
    return;
  }

  fs.rmSync(context.emitDir, { recursive: true, force: true });
  try {
    buildLegacyProject({
      emitDir: context.emitDir,
      tsconfig: context.tsconfig,
    });
  } catch (error) {
    const detail = [
      `ttsx: project build failed for ${context.tsconfig}`,
      result.stderr || result.stdout,
      error instanceof Error ? error.message : String(error),
    ]
      .filter((line) => line.trim().length !== 0)
      .join("\n");
    throw new Error(detail);
  }
  context.emittedFiles = listEmittedFiles(context.emitDir);
}

function resolveEmittedFile(context: ProjectContext, filename: string): string {
  const normalized = path.resolve(filename);
  const cached = context.entryMap.get(normalized);
  if (cached) return cached;

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
  if (!best) {
    throw new Error(`ttsx: emitted output not found for ${normalized}`);
  }
  context.entryMap.set(normalized, best);
  return best;
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

function hasPhase0CoverageGap(output: string): boolean {
  return /Phase 0|Phase 0 skip|not covered in Phase 0|type not yet supported/.test(output);
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
