/**
 * Programmatic API for @typia/ttsc.
 *
 * This module is the TypeScript surface bundler adapters (unplugin, vite,
 * webpack, rollup, esbuild, rspack, farm, next/swc, bun) consume. Everything
 * here is a thin wrapper around the Go binary resolved by `platform.ts` —
 * adapters never have to spawn the process themselves.
 *
 * Contract:
 *   - `transform()` emits one file's rewritten JS, returning the text.
 *   - `build()` runs the whole project (tsgo + ttsc rewrite + --emit).
 *   - `check()` runs the analysis pass without emitting (CI gate use).
 *   - `version()` returns the binary's version banner for user-agent logs.
 *
 * All helpers accept a `binary` override so tests can point at a specific
 * executable without touching PATH or node_modules.
 */

import { spawn, spawnSync } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";

import { resolveBinary, installHint, type ResolveOptions } from "./platform";

/**
 * Options shared by every API call. `binary` takes precedence over platform
 * resolution; `cwd` defaults to `process.cwd()`; `env` layers on top of
 * the current process env.
 */
export interface CommonOptions extends ResolveOptions {
  /** Absolute path to an already-resolved ttsc binary. Skips resolution. */
  binary?: string;
  /** Working directory passed to the child process. */
  cwd?: string;
  /** Extra environment variables; merged onto `process.env`. */
  env?: NodeJS.ProcessEnv;
}

/** Options for `transform()`. */
export interface TransformOptions extends CommonOptions {
  /** Path to the .ts file to transform. Absolute or `cwd`-relative. */
  file: string;
  /** Path to the tsconfig owning `file`. Default: `tsconfig.json`. */
  tsconfig?: string;
  /**
   * When provided, the binary writes JS directly to this path instead of
   * piping stdout. Useful when the emitted text is large.
   */
  out?: string;
}

/** Options for `build()`. */
export interface BuildOptions extends CommonOptions {
  /** Path to tsconfig.json. Default: `tsconfig.json`. */
  tsconfig?: string;
  /** Emit .js files to disk. Default: `true`. */
  emit?: boolean;
  /** Override compilerOptions.outDir for this invocation. */
  outDir?: string;
  /** Suppress the per-call summary banner. Default: `false`. */
  quiet?: boolean;
}

/** Options for `check()`. */
export type CheckOptions = Omit<BuildOptions, "emit">;

/**
 * Resolve the binary or throw a user-friendly error. Extracted so every
 * API helper shares the same failure mode.
 */
function resolveOrThrow(opts: CommonOptions): string {
  if (opts.binary && path.isAbsolute(opts.binary) && fs.existsSync(opts.binary)) {
    return opts.binary;
  }
  const bin = resolveBinary(opts);
  if (!bin) {
    throw new Error(installHint(opts));
  }
  return bin;
}

/** Merge spawn env without clobbering unrelated vars. */
function mergeEnv(extra?: NodeJS.ProcessEnv): NodeJS.ProcessEnv {
  if (!extra) return process.env;
  return { ...process.env, ...extra };
}

/**
 * Transform a single .ts file and return the rewritten JS as a string.
 *
 * Intended for bundler per-file transforms (unplugin `transform()`). The
 * caller passes the absolute path; ttsc loads the enclosing tsconfig,
 * compiles with tsgo, and returns the rewritten JS.
 *
 * Throws when the binary exits non-zero — the error includes stderr so
 * bundler error overlays surface the real cause.
 */
export function transform(options: TransformOptions): string {
  const bin = resolveOrThrow(options);
  const args = ["transform", "--file=" + options.file];
  if (options.tsconfig) args.push("--tsconfig=" + options.tsconfig);
  if (options.out) args.push("--out=" + options.out);

  const res = spawnSync(bin, args, {
    cwd: options.cwd,
    env: mergeEnv(options.env),
    encoding: "utf8",
    windowsHide: true,
  });
  if (res.error) {
    throw new Error("ttsc.transform: failed to spawn " + bin + ": " + res.error.message);
  }
  if (res.status !== 0) {
    throw new Error("ttsc.transform exited " + res.status + "\n" + (res.stderr || ""));
  }
  return options.out ? fs.readFileSync(options.out, "utf8") : res.stdout;
}

/** Result of `build()`. Non-zero `status` means the build failed. */
export interface BuildResult {
  status: number;
  stdout: string;
  stderr: string;
}

/**
 * Run `ttsc build` against a tsconfig. Returns once the binary exits so the
 * caller can decide how to surface diagnostics. Does not throw on non-zero
 * exit — bundler pipelines often want to continue and collect errors.
 */
export function build(options: BuildOptions = {}): BuildResult {
  const bin = resolveOrThrow(options);
  const args = ["build"];
  if (options.tsconfig) args.push("--tsconfig=" + options.tsconfig);
  if (options.emit !== false) args.push("--emit");
  if (options.outDir) args.push("--outDir=" + options.outDir);
  if (options.quiet) args.push("--quiet");

  const res = spawnSync(bin, args, {
    cwd: options.cwd,
    env: mergeEnv(options.env),
    encoding: "utf8",
    windowsHide: true,
  });
  if (res.error) {
    throw new Error("ttsc.build: failed to spawn " + bin + ": " + res.error.message);
  }
  return { status: res.status ?? 1, stdout: res.stdout ?? "", stderr: res.stderr ?? "" };
}

/**
 * Run `ttsc check` (build without emit) — CI gate / pre-commit hook use.
 * Resolves with an exit-code record; does not throw.
 */
export function check(options: CheckOptions = {}): BuildResult {
  return build({ ...options, emit: false });
}

/** Ask the binary for its version banner. Handy for user-agent strings. */
export function version(options: CommonOptions = {}): string {
  const bin = resolveOrThrow(options);
  const res = spawnSync(bin, ["version"], {
    encoding: "utf8",
    windowsHide: true,
  });
  if (res.error || res.status !== 0) {
    throw new Error("ttsc.version: failed: " + (res.stderr || res.error?.message));
  }
  return res.stdout.trim();
}

/**
 * Streaming variant of `transform()` for unplugin frameworks that prefer
 * promise / async pipes (vite's transform, webpack's loader-runner). Emits
 * the same JS string but via `spawn`, so large outputs don't block the
 * event loop.
 */
export function transformAsync(options: TransformOptions): Promise<string> {
  const bin = resolveOrThrow(options);
  const args = ["transform", "--file=" + options.file];
  if (options.tsconfig) args.push("--tsconfig=" + options.tsconfig);
  if (options.out) args.push("--out=" + options.out);

  return new Promise((resolve, reject) => {
    const child = spawn(bin, args, {
      cwd: options.cwd,
      env: mergeEnv(options.env),
      windowsHide: true,
    });
    const out: Buffer[] = [];
    const err: Buffer[] = [];
    child.stdout.on("data", (b: Buffer) => out.push(b));
    child.stderr.on("data", (b: Buffer) => err.push(b));
    child.on("error", reject);
    child.on("close", (code) => {
      if (code !== 0) {
        reject(
          new Error(
            "ttsc.transformAsync exited " + code + "\n" + Buffer.concat(err).toString(),
          ),
        );
        return;
      }
      if (options.out) {
        try {
          resolve(fs.readFileSync(options.out, "utf8"));
        } catch (readErr) {
          reject(readErr as Error);
        }
        return;
      }
      resolve(Buffer.concat(out).toString("utf8"));
    });
  });
}
