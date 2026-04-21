import * as crypto from "node:crypto";
import * as fs from "node:fs";
import * as path from "node:path";

export interface ProjectLocatorOptions {
  cwd?: string;
  file?: string;
  tsconfig?: string;
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
  return path.join(projectRoot, "node_modules", ".cache", "@typia", tool);
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
