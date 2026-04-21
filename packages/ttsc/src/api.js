"use strict";
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
exports.transform = transform;
exports.build = build;
exports.check = check;
exports.version = version;
exports.transformAsync = transformAsync;
const node_child_process_1 = require("node:child_process");
const fs = __importStar(require("node:fs"));
const path = __importStar(require("node:path"));
const platform_1 = require("./platform");
/**
 * Resolve the binary or throw a user-friendly error. Extracted so every
 * API helper shares the same failure mode.
 */
function resolveOrThrow(opts) {
    if (opts.binary && path.isAbsolute(opts.binary) && fs.existsSync(opts.binary)) {
        return opts.binary;
    }
    const bin = (0, platform_1.resolveBinary)(opts);
    if (!bin) {
        throw new Error((0, platform_1.installHint)(opts));
    }
    return bin;
}
/** Merge spawn env without clobbering unrelated vars. */
function mergeEnv(extra) {
    if (!extra)
        return process.env;
    return Object.assign(Object.assign({}, process.env), extra);
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
function transform(options) {
    const bin = resolveOrThrow(options);
    const args = ["transform", "--file=" + options.file];
    if (options.tsconfig)
        args.push("--tsconfig=" + options.tsconfig);
    if (options.out)
        args.push("--out=" + options.out);
    const res = (0, node_child_process_1.spawnSync)(bin, args, {
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
/**
 * Run `ttsc build` against a tsconfig. Returns once the binary exits so the
 * caller can decide how to surface diagnostics. Does not throw on non-zero
 * exit — bundler pipelines often want to continue and collect errors.
 */
function build(options = {}) {
    var _a, _b, _c;
    const bin = resolveOrThrow(options);
    const args = ["build"];
    if (options.tsconfig)
        args.push("--tsconfig=" + options.tsconfig);
    if (options.emit !== false)
        args.push("--emit");
    if (options.outDir)
        args.push("--outDir=" + options.outDir);
    if (options.quiet)
        args.push("--quiet");
    const res = (0, node_child_process_1.spawnSync)(bin, args, {
        cwd: options.cwd,
        env: mergeEnv(options.env),
        encoding: "utf8",
        windowsHide: true,
    });
    if (res.error) {
        throw new Error("ttsc.build: failed to spawn " + bin + ": " + res.error.message);
    }
    return { status: (_a = res.status) !== null && _a !== void 0 ? _a : 1, stdout: (_b = res.stdout) !== null && _b !== void 0 ? _b : "", stderr: (_c = res.stderr) !== null && _c !== void 0 ? _c : "" };
}
/**
 * Run `ttsc check` (build without emit) — CI gate / pre-commit hook use.
 * Resolves with an exit-code record; does not throw.
 */
function check(options = {}) {
    return build(Object.assign(Object.assign({}, options), { emit: false }));
}
/** Ask the binary for its version banner. Handy for user-agent strings. */
function version(options = {}) {
    var _a;
    const bin = resolveOrThrow(options);
    const res = (0, node_child_process_1.spawnSync)(bin, ["version"], {
        encoding: "utf8",
        windowsHide: true,
    });
    if (res.error || res.status !== 0) {
        throw new Error("ttsc.version: failed: " + (res.stderr || ((_a = res.error) === null || _a === void 0 ? void 0 : _a.message)));
    }
    return res.stdout.trim();
}
/**
 * Streaming variant of `transform()` for unplugin frameworks that prefer
 * promise / async pipes (vite's transform, webpack's loader-runner). Emits
 * the same JS string but via `spawn`, so large outputs don't block the
 * event loop.
 */
function transformAsync(options) {
    const bin = resolveOrThrow(options);
    const args = ["transform", "--file=" + options.file];
    if (options.tsconfig)
        args.push("--tsconfig=" + options.tsconfig);
    if (options.out)
        args.push("--out=" + options.out);
    return new Promise((resolve, reject) => {
        const child = (0, node_child_process_1.spawn)(bin, args, {
            cwd: options.cwd,
            env: mergeEnv(options.env),
            windowsHide: true,
        });
        const out = [];
        const err = [];
        child.stdout.on("data", (b) => out.push(b));
        child.stderr.on("data", (b) => err.push(b));
        child.on("error", reject);
        child.on("close", (code) => {
            if (code !== 0) {
                reject(new Error("ttsc.transformAsync exited " + code + "\n" + Buffer.concat(err).toString()));
                return;
            }
            if (options.out) {
                try {
                    resolve(fs.readFileSync(options.out, "utf8"));
                }
                catch (readErr) {
                    reject(readErr);
                }
                return;
            }
            resolve(Buffer.concat(out).toString("utf8"));
        });
    });
}
//# sourceMappingURL=api.js.map