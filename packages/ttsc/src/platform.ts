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

import * as path from "node:path";

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
export function platformKey(opts: ResolveOptions = {}): string {
  const platform = opts.platform ?? process.platform;
  const arch = opts.arch ?? process.arch;
  return `${platform}-${arch}`;
}

/** Binary filename for the current platform (`.exe` on Windows, else none). */
export function binaryName(opts: ResolveOptions = {}): string {
  const platform = opts.platform ?? process.platform;
  return platform === "win32" ? "ttsc.exe" : "ttsc";
}

/**
 * Resolve the optional-dependency module request string for the current
 * platform. Separated from actual resolution so we can log the request when
 * the dependency is missing.
 */
export function platformPackageRequest(opts: ResolveOptions = {}): string {
  const key = platformKey(opts);
  const bin = binaryName(opts);
  return `@typia/ttsc-${key}/bin/${bin}`;
}

/** The list of platform keys Phase 0 will ship. */
export const SUPPORTED_PLATFORMS: readonly string[] = Object.freeze([
  "linux-x64",
  "linux-arm64",
  "darwin-x64",
  "darwin-arm64",
  "win32-x64",
  "win32-arm64",
]);

/** True if the given platform key is in the supported list. */
export function isSupported(key: string): boolean {
  return SUPPORTED_PLATFORMS.includes(key);
}

/**
 * Resolve an absolute path to the ttsc binary using the documented priority
 * order. Returns `null` when every strategy fails — the launcher then prints
 * the install hint and exits non-zero.
 */
export function resolveBinary(opts: ResolveOptions = {}): string | null {
  const env = opts.env ?? process.env;

  // 1. Env override. Absolute path is required; a relative value is ignored so
  //    tests can't accidentally resolve something outside the intended tree.
  if (env.TTSC_BINARY && path.isAbsolute(env.TTSC_BINARY)) {
    return env.TTSC_BINARY;
  }

  // 2. Platform-specific optional dependency (the published distribution path).
  const resolver = opts.resolver ?? ((req: string) => require.resolve(req));
  try {
    return resolver(platformPackageRequest(opts));
  } catch {
    /* fall through */
  }

  // 3. Local Phase 0 fallback: <package>/bin/ttsc-native.
  if (opts.localBinaryLookup) {
    const local = opts.localBinaryLookup();
    if (local) return local;
  }

  return null;
}

/**
 * Human-readable message shown when no binary can be located. Pure string —
 * the launcher writes it to stderr.
 */
export function installHint(opts: ResolveOptions = {}): string {
  const key = platformKey(opts);
  const pkg = `@typia/ttsc-${key}`;
  const supported = SUPPORTED_PLATFORMS.join(", ");
  return [
    `ttsc: platform-specific binary not found (${pkg}).`,
    `Platform: ${opts.platform ?? process.platform}/${opts.arch ?? process.arch}.`,
    ``,
    `Resolution order:`,
    `  1. TTSC_BINARY env var (absolute path)`,
    `  2. ${pkg} optional dependency`,
    `  3. ./bin/ttsc-native (Phase 0 local build)`,
    ``,
    `Try:`,
    `  npm install --include=optional ${pkg}`,
    `  pnpm install --shamefully-hoist`,
    ``,
    `Supported platforms (Phase 0): ${supported}.`,
    `If your platform is not in that list, open an issue at`,
    `https://github.com/samchon/typia/issues.`,
  ].join("\n");
}
