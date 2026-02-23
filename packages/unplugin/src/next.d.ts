/**
 * This entry file is for Next.js plugin.
 *
 * @module
 */
import type { NextConfig } from 'next';
import type { Options } from './core/options.js';
/**
 * Next.js plugin
 *
 * @example
 * ```js
 * // next.config.mjs
 * import unTypiaNext from "@ryoppippi/unplugin-typia/next";
 *
 * /** @type {import("next").NextConfig} *\/
 * const nextConfig = { /* your next.js config *\/ };
 *
 * /** @type {import("unplugin-typia").Options} *\/
 * const unpluginTypiaOptions = { /* your unplugin-typia options *\/ };
 *
 * // Export the next.js config
 * export default unTypiaNext(
 *	 nextConfig,
 *   unpluginTypiaOptions // you can omit this when you don't need to customize it
 * );
 * ```
 */
declare function next(nextConfig?: NextConfig, options?: Options): NextConfig;
export default next;
