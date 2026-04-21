"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUPPORTED_PLATFORMS = void 0;
exports.platformKey = platformKey;
exports.binaryName = binaryName;
exports.platformPackageRequest = platformPackageRequest;
exports.isSupported = isSupported;
exports.resolveBinary = resolveBinary;
exports.installHint = installHint;
const fs = __importStar(require("node:fs"));
const path = __importStar(require("node:path"));
/** Canonical key `{platform}-{arch}` used in the binary package name. */
function platformKey(opts = {}) {
    var _a, _b;
    const platform = (_a = opts.platform) !== null && _a !== void 0 ? _a : process.platform;
    const arch = (_b = opts.arch) !== null && _b !== void 0 ? _b : process.arch;
    return `${platform}-${arch}`;
}
/** Binary filename for the current platform (`.exe` on Windows, else none). */
function binaryName(opts = {}) {
    var _a;
    const platform = (_a = opts.platform) !== null && _a !== void 0 ? _a : process.platform;
    return platform === "win32" ? "ttsc.exe" : "ttsc";
}
/**
 * Resolve the optional-dependency module request string for the current
 * platform. Separated from actual resolution so we can log the request when
 * the dependency is missing.
 */
function platformPackageRequest(opts = {}) {
    const key = platformKey(opts);
    const bin = binaryName(opts);
    return `@typia/ttsc-${key}/bin/${bin}`;
}
/** The list of platform keys Phase 0 will ship. */
exports.SUPPORTED_PLATFORMS = Object.freeze([
    "linux-x64",
    "linux-arm64",
    "darwin-x64",
    "darwin-arm64",
    "win32-x64",
    "win32-arm64",
]);
/** True if the given platform key is in the supported list. */
function isSupported(key) {
    return exports.SUPPORTED_PLATFORMS.includes(key);
}
/**
 * Resolve an absolute path to the ttsc binary using the documented priority
 * order. Returns `null` when every strategy fails — the launcher then prints
 * the install hint and exits non-zero.
 */
function resolveBinary(opts = {}) {
    var _a, _b;
    const env = (_a = opts.env) !== null && _a !== void 0 ? _a : process.env;
    // 1. Env override. Absolute path is required; a relative value is ignored so
    //    tests can't accidentally resolve something outside the intended tree.
    if (env.TTSC_BINARY && path.isAbsolute(env.TTSC_BINARY)) {
        return env.TTSC_BINARY;
    }
    // 2. Platform-specific optional dependency (the published distribution path).
    const resolver = (_b = opts.resolver) !== null && _b !== void 0 ? _b : ((req) => require.resolve(req));
    try {
        return resolver(platformPackageRequest(opts));
    }
    catch (_c) {
        /* fall through */
    }
    // 3. Local Phase 0 fallback: <package>/bin/ttsc-native.
    if (opts.localBinaryLookup) {
        const local = opts.localBinaryLookup();
        if (local)
            return local;
    }
    else {
        const local = defaultLocalBinaryPath(opts);
        if (local)
            return local;
    }
    return null;
}
/**
 * Human-readable message shown when no binary can be located. Pure string —
 * the launcher writes it to stderr.
 */
function installHint(opts = {}) {
    var _a, _b;
    const key = platformKey(opts);
    const pkg = `@typia/ttsc-${key}`;
    const supported = exports.SUPPORTED_PLATFORMS.join(", ");
    return [
        `ttsc: platform-specific binary not found (${pkg}).`,
        `Platform: ${(_a = opts.platform) !== null && _a !== void 0 ? _a : process.platform}/${(_b = opts.arch) !== null && _b !== void 0 ? _b : process.arch}.`,
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
function defaultLocalBinaryPath(opts) {
    var _a;
    const candidate = path.resolve(__dirname, "..", "bin", ((_a = opts.platform) !== null && _a !== void 0 ? _a : process.platform) === "win32" ? "ttsc-native.exe" : "ttsc-native");
    return fs.existsSync(candidate) ? candidate : null;
}
//# sourceMappingURL=platform.js.map