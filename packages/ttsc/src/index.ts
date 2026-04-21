/**
 * @typia/ttsc — public TypeScript entry.
 *
 * Exports:
 *   - platform helpers (`resolveBinary`, `installHint`, …) — used by the
 *     `bin/ttsc.js` launcher and any external tool that wants to know where
 *     the native binary lives without spawning it.
 *   - programmatic API (`transform`, `build`, `check`, `version`) — a thin
 *     TS wrapper around the Go binary that bundler adapters (unplugin, vite,
 *     webpack, rollup, esbuild, rspack, farm) delegate to. Adapters never
 *     have to shell out themselves; they call these helpers and get back
 *     a string or a result record.
 */

export * from "./platform";
export * from "./api";
export * from "./project";
