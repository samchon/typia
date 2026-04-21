import * as crypto from "node:crypto";
import * as fs from "node:fs";
import * as path from "node:path";

export interface ProjectLocatorOptions {
  cwd?: string;
  file?: string;
  tsconfig?: string;
}

export interface ProjectPluginConfig {
  enabled?: boolean;
  transform?: string;
  [key: string]: unknown;
}

export interface ParsedProjectConfig {
  compilerOptions: {
    outDir?: string;
    plugins: ProjectPluginConfig[];
  };
  path: string;
  root: string;
}

export function resolveWorkingDirectory(cwd?: string): string {
  return path.resolve(cwd ?? process.cwd());
}

export function resolveAbsolutePath(cwd: string, target: string): string {
  return path.isAbsolute(target) ? target : path.resolve(cwd, target);
}

export function resolveProjectConfig(opts: ProjectLocatorOptions = {}): string {
  const cwd = resolveWorkingDirectory(opts.cwd);
  if (opts.tsconfig) {
    const resolved = resolveAbsolutePath(cwd, opts.tsconfig);
    if (!fs.existsSync(resolved)) {
      throw new Error(`ttsc: tsconfig not found: ${resolved}`);
    }
    return resolved;
  }

  const start = opts.file ? resolveAbsolutePath(cwd, opts.file) : cwd;
  const from = isDirectory(start) ? start : path.dirname(start);
  const found = findUp(from, ["tsconfig.json", "jsconfig.json"]);
  if (!found) {
    throw new Error(
      `ttsc: could not find tsconfig.json or jsconfig.json starting from ${from}`,
    );
  }
  return found;
}

export function resolveProjectRoot(opts: ProjectLocatorOptions = {}): string {
  return path.dirname(resolveProjectConfig(opts));
}

export function defaultCacheDirectory(projectRoot: string, tool: string): string {
  return path.join(projectRoot, "node_modules", ".cache", "ttsc", tool);
}

export function readProjectConfig(opts: ProjectLocatorOptions = {}): ParsedProjectConfig {
  const tsconfig = resolveProjectConfig(opts);
  const root = path.dirname(tsconfig);
  const parsed = parseJsonc(fs.readFileSync(tsconfig, "utf8")) as {
    compilerOptions?: {
      outDir?: unknown;
      plugins?: unknown;
    };
  };
  const compilerOptions = parsed.compilerOptions;
  const plugins = Array.isArray(compilerOptions?.plugins)
    ? compilerOptions.plugins.filter(isProjectPluginConfig)
    : [];
  const outDir =
    typeof compilerOptions?.outDir === "string"
      ? resolveAbsolutePath(root, compilerOptions.outDir)
      : undefined;
  return {
    compilerOptions: {
      outDir,
      plugins,
    },
    path: tsconfig,
    root,
  };
}

export interface CacheKeyInput {
  file: string;
  tsconfig: string;
  version: string;
  mode?: string;
  extra?: readonly string[];
}

export function createTransformCacheKey(input: CacheKeyInput): string {
  const hash = crypto.createHash("sha256");
  hash.update("file\0");
  hash.update(fs.readFileSync(input.file));
  hash.update("\0tsconfig\0");
  hash.update(fs.readFileSync(input.tsconfig));
  hash.update(`\0version\0${input.version}`);
  hash.update(`\0mode\0${input.mode ?? ""}`);
  for (const item of input.extra ?? []) {
    hash.update(`\0extra\0${item}`);
  }
  return hash.digest("hex");
}

function findUp(from: string, names: readonly string[]): string | null {
  let current = path.resolve(from);
  while (true) {
    for (const name of names) {
      const candidate = path.join(current, name);
      if (fs.existsSync(candidate)) {
        return candidate;
      }
    }
    const parent = path.dirname(current);
    if (parent === current) {
      return null;
    }
    current = parent;
  }
}

function isDirectory(location: string): boolean {
  try {
    return fs.statSync(location).isDirectory();
  } catch {
    return false;
  }
}

function isProjectPluginConfig(value: unknown): value is ProjectPluginConfig {
  return typeof value === "object" && value !== null;
}

function parseJsonc(input: string): unknown {
  return JSON.parse(stripTrailingCommas(stripComments(input)));
}

function stripComments(input: string): string {
  let output = "";
  let inBlockComment = false;
  let inLineComment = false;
  let inString = false;
  let quote = "";
  let escape = false;

  for (let i = 0; i < input.length; i += 1) {
    const current = input[i]!;
    const next = input[i + 1];

    if (inBlockComment) {
      if (current === "*" && next === "/") {
        inBlockComment = false;
        i += 1;
      }
      continue;
    }
    if (inLineComment) {
      if (current === "\n") {
        inLineComment = false;
        output += current;
      }
      continue;
    }
    if (inString) {
      output += current;
      if (escape) {
        escape = false;
      } else if (current === "\\") {
        escape = true;
      } else if (current === quote) {
        inString = false;
        quote = "";
      }
      continue;
    }

    if ((current === '"' || current === "'") && !inString) {
      inString = true;
      quote = current;
      output += current;
      continue;
    }
    if (current == "/" && next === "/") {
      inLineComment = true;
      i += 1;
      continue;
    }
    if (current == "/" && next === "*") {
      inBlockComment = true;
      i += 1;
      continue;
    }
    output += current;
  }
  return output;
}

function stripTrailingCommas(input: string): string {
  let output = "";
  let inString = false;
  let quote = "";
  let escape = false;

  for (let i = 0; i < input.length; i += 1) {
    const current = input[i]!;
    if (inString) {
      output += current;
      if (escape) {
        escape = false;
      } else if (current === "\\") {
        escape = true;
      } else if (current === quote) {
        inString = false;
        quote = "";
      }
      continue;
    }

    if (current === '"' || current === "'") {
      inString = true;
      quote = current;
      output += current;
      continue;
    }
    if (current === ",") {
      const next = nextNonWhitespace(input, i + 1);
      if (next === "}" || next === "]") {
        continue;
      }
    }
    output += current;
  }
  return output;
}

function nextNonWhitespace(input: string, from: number): string | undefined {
  for (let i = from; i < input.length; i += 1) {
    const current = input[i]!;
    if (/\s/.test(current) === false) {
      return current;
    }
  }
  return undefined;
}
