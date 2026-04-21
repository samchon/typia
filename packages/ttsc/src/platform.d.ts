/**
 * Platform detection and binary resolution for @typia/ttsc.
 *
 * This is the tested implementation used by bin/ttsc.js (after build).
 * Keep it pure and dependency-free so it can be unit-tested without spawning
 * any child process.
 *
 * Resolution order (Phase 0):
 *
 *   1. `TTSC_BINARY` environment variable (absolute path). Highest priority —
 *      lets local devs or CI point at an ad-hoc build without touching
 *      node_modules.
 *   2. `@typia/ttsc-{platform}-{arch}/bin/ttsc{.exe}` optional dependency.
 *      Standard distribution path.
 *   3. A sibling `bin/ttsc-native` binary next to ttsc.js. Used by this
 *      repository's Phase 0 `pnpm go:build` output before the platform
 *      packages exist on npm.
 *
 * If all three fail, `resolveBinary` returns `null` so the caller can print a
 * detailed install hint.
 */
export interface ResolveOptions {
    /**
     * Override `require.resolve` for testing. Takes a module request string and
     * returns an absolute path (or throws).
     */
    resolver?: (request: string) => string;
    /** Override `process.platform` for testing. */
    platform?: NodeJS.Platform;
    /** Override `process.arch` for testing. */
    arch?: string;
    /** Override `process.env` for testing. */
    env?: NodeJS.ProcessEnv;
    /**
     * Override the sibling-directory scan used for the local `bin/ttsc-native`
     * fallback. Returns an absolute path if present, else null.
     */
    localBinaryLookup?: () => string | null;
}
/** Canonical key `{platform}-{arch}` used in the binary package name. */
export declare function platformKey(opts?: ResolveOptions): string;
/** Binary filename for the current platform (`.exe` on Windows, else none). */
export declare function binaryName(opts?: ResolveOptions): string;
/**
 * Resolve the optional-dependency module request string for the current
 * platform. Separated from actual resolution so we can log the request when
 * the dependency is missing.
 */
export declare function platformPackageRequest(opts?: ResolveOptions): string;
/** The list of platform keys Phase 0 will ship. */
export declare const SUPPORTED_PLATFORMS: readonly string[];
/** True if the given platform key is in the supported list. */
export declare function isSupported(key: string): boolean;
/**
 * Resolve an absolute path to the ttsc binary using the documented priority
 * order. Returns `null` when every strategy fails — the launcher then prints
 * the install hint and exits non-zero.
 */
export declare function resolveBinary(opts?: ResolveOptions): string | null;
/**
 * Human-readable message shown when no binary can be located. Pure string —
 * the launcher writes it to stderr.
 */
export declare function installHint(opts?: ResolveOptions): string;
