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
import { type ResolveOptions } from "./platform";
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
 * Transform a single .ts file and return the rewritten JS as a string.
 *
 * Intended for bundler per-file transforms (unplugin `transform()`). The
 * caller passes the absolute path; ttsc loads the enclosing tsconfig,
 * compiles with tsgo, and returns the rewritten JS.
 *
 * Throws when the binary exits non-zero — the error includes stderr so
 * bundler error overlays surface the real cause.
 */
export declare function transform(options: TransformOptions): string;
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
export declare function build(options?: BuildOptions): BuildResult;
/**
 * Run `ttsc check` (build without emit) — CI gate / pre-commit hook use.
 * Resolves with an exit-code record; does not throw.
 */
export declare function check(options?: CheckOptions): BuildResult;
/** Ask the binary for its version banner. Handy for user-agent strings. */
export declare function version(options?: CommonOptions): string;
/**
 * Streaming variant of `transform()` for unplugin frameworks that prefer
 * promise / async pipes (vite's transform, webpack's loader-runner). Emits
 * the same JS string but via `spawn`, so large outputs don't block the
 * event loop.
 */
export declare function transformAsync(options: TransformOptions): Promise<string>;
