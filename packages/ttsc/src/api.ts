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

import { spawnSync } from "node:child_process";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";

import {
  applyPluginTransforms,
  loadProjectPlugins,
  type TtscPlugin,
} from "./plugin";
import { resolveBinary, installHint, type ResolveOptions } from "./platform";
import {
  resolveProjectConfig,
  resolveProjectRoot,
  type ProjectPluginConfig,
} from "./project";

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
  /**
   * Override project plugin loading. `false` disables tsconfig plugins;
   * an array replaces the tsconfig `compilerOptions.plugins` list.
   */
  plugins?: readonly ProjectPluginConfig[] | false;
  /** Override the native rewrite backend. Defaults to the loaded plugin mode. */
  rewriteMode?: string;
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

function spawnBinary(
  binary: string,
  args: readonly string[],
  options: {
    cwd?: string;
    env?: NodeJS.ProcessEnv;
    encoding?: BufferEncoding;
  },
) {
  const viaNode = shouldSpawnViaNode(binary);
  return spawnSync(viaNode ? process.execPath : binary, viaNode ? [binary, ...args] : [...args], {
    cwd: options.cwd,
    env: options.env,
    encoding: options.encoding,
    maxBuffer: 1024 * 1024 * 256,
    windowsHide: true,
  });
}

function shouldSpawnViaNode(binary: string): boolean {
  return /\.(?:[cm]?js|ts)$/i.test(binary);
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
  const execution = resolveExecutionContext(options);
  const args = [
    "transform",
    "--file=" + options.file,
    "--rewrite-mode=" + execution.nativeMode,
  ];
  if (options.tsconfig) args.push("--tsconfig=" + options.tsconfig);

  const res = spawnBinary(execution.bin, args, {
    cwd: options.cwd,
    env: mergeEnv(options.env),
    encoding: "utf8",
  });
  if (res.error) {
    throw new Error(
      "ttsc.transform: failed to spawn " + execution.bin + ": " + res.error.message,
    );
  }
  if (res.status !== 0) {
    throw new Error("ttsc.transform exited " + res.status + "\n" + (res.stderr || ""));
  }
  const sourceFile = path.isAbsolute(options.file)
    ? options.file
    : path.resolve(options.cwd ?? process.cwd(), options.file);
  const transformed = finalizeTransformText(
    execution.plugins,
    {
      command: "transform",
      cwd: execution.cwd,
      projectRoot: execution.projectRoot,
      sourceFile,
      tsconfig: execution.tsconfig,
    },
    res.stdout,
  );
  if (options.out) {
    fs.mkdirSync(path.dirname(options.out), { recursive: true });
    fs.writeFileSync(options.out, transformed, "utf8");
  }
  return transformed;
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
  const execution = resolveExecutionContext(options);
  const args = ["build", "--rewrite-mode=" + execution.nativeMode];
  if (options.tsconfig) args.push("--tsconfig=" + options.tsconfig);
  if (options.emit !== false) args.push("--emit");
  if (options.outDir) args.push("--outDir=" + options.outDir);
  if (options.quiet) args.push("--quiet");
  const needsManifest = options.emit !== false && execution.plugins.length > 0;
  const manifest = needsManifest ? createTempManifestPath() : null;
  if (manifest) args.push("--manifest=" + manifest);

  const res = spawnBinary(execution.bin, args, {
    cwd: options.cwd,
    env: mergeEnv(options.env),
    encoding: "utf8",
  });
  if (res.error) {
    throw new Error("ttsc.build: failed to spawn " + execution.bin + ": " + res.error.message);
  }
  if ((res.status ?? 1) === 0 && manifest) {
    try {
      const emittedFiles = JSON.parse(fs.readFileSync(manifest, "utf8")) as string[];
      applyBuildPlugins(execution.plugins, execution, emittedFiles);
    } finally {
      fs.rmSync(path.dirname(manifest), { recursive: true, force: true });
    }
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
  const res = spawnBinary(bin, ["version"], {
    encoding: "utf8",
  });
  if (res.error || res.status !== 0) {
    throw new Error("ttsc.version: failed: " + (res.stderr || res.error?.message));
  }
  return res.stdout.trim();
}

/**
 * Promise-facing variant of `transform()`. The plugin host keeps the
 * transform pipeline synchronous so plugin modules can stay dependency-free,
 * but many adapter surfaces still prefer a Promise-returning function.
 */
export function transformAsync(options: TransformOptions): Promise<string> {
  return Promise.resolve().then(() => transform(options));
}

interface ExecutionContext {
  bin: string;
  cwd: string;
  nativeMode: string;
  plugins: readonly TtscPlugin[];
  projectRoot: string;
  tsconfig: string;
}

function resolveExecutionContext(
  options: CommonOptions & { tsconfig?: string },
): ExecutionContext {
  const cwd = path.resolve(options.cwd ?? process.cwd());
  const fallbackBinary =
    options.binary && path.isAbsolute(options.binary) && fs.existsSync(options.binary)
      ? options.binary
      : resolveBinary(options);
  const tsconfig = resolveProjectConfig({
    cwd,
    tsconfig: options.tsconfig,
  });
  const projectRoot = resolveProjectRoot({ cwd, tsconfig });
  const loaded = loadProjectPlugins({
    binary: fallbackBinary ?? "",
    cwd,
    entries: options.plugins,
    tsconfig,
  });
  const bin = options.binary ?? loaded.nativeBinary ?? fallbackBinary;
  if (!bin) {
    throw new Error(installHint(options));
  }
  return {
    bin,
    cwd,
    nativeMode: options.rewriteMode ?? loaded.nativeMode,
    plugins: loaded.plugins.filter((plugin) => plugin.transformOutput),
    projectRoot,
    tsconfig,
  };
}

function finalizeTransformText(
  plugins: readonly TtscPlugin[],
  context: Omit<Parameters<typeof applyPluginTransforms>[1], "code">,
  text: string,
): string {
  if (plugins.length === 0) {
    return text;
  }
  return applyPluginTransforms(plugins, {
    ...context,
    code: text,
  });
}

function applyBuildPlugins(
  plugins: readonly TtscPlugin[],
  execution: ExecutionContext,
  emittedFiles: readonly string[],
): void {
  if (plugins.length === 0) {
    return;
  }
  for (const file of emittedFiles) {
    if (!file.endsWith(".js") || !fs.existsSync(file)) {
      continue;
    }
    const current = fs.readFileSync(file, "utf8");
    const next = applyPluginTransforms(plugins, {
      code: current,
      command: "build",
      cwd: execution.cwd,
      outputFile: file,
      projectRoot: execution.projectRoot,
      tsconfig: execution.tsconfig,
    });
    if (next !== current) {
      fs.writeFileSync(file, next, "utf8");
    }
  }
}

function createTempManifestPath(): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "ttsc-build-"));
  return path.join(dir, "manifest.json");
}
