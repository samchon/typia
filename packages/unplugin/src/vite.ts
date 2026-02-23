/**
 * This entry file is for Vite plugin.
 *
 * @module
 */

import unplugin from './core/index.js';

/**
 * Vite plugin
 *
 * @example
 * ```ts
 * // vite.config.ts
 * import UnpluginTypia from '@ryoppippi/unplugin-typia/vite'
 *
 * export default defineConfig({
 *   plugins: [UnpluginTypia()],
 * })
 * ```
 */
const vite: typeof unplugin.vite = unplugin.vite;
export default vite;
