/**
 * This entry file is for esbuild plugin. Requires esbuild >= 0.15
 *
 * @module
 */

import unplugin from './core/index.js';

/**
 * esbuild plugin
 *
 * @example
 * ```ts
 * // esbuild.config.js
 * import { build } from 'esbuild'
 * import UnpluginTypia from '@ryoppippi/unplugin-typia/esbuild';
 *
 * build({
 *   plugins: [
 *     UnpluginTypia({}),
 *   ],
 * })
 * ```
 */
const esbuild: typeof unplugin.esbuild = unplugin.esbuild;
export default esbuild;
