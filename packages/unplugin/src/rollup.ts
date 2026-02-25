/**
 * This entry file is for Rollup plugin.
 *
 * @module
 */

import unplugin from './core/index.js';

/**
 * Rollup plugin
 *
 * @example
 * ```ts
 * // rollup.config.js
 * import UnpluginTypia from '@ryoppippi/unplugin-typia/rollup'
 *
 * export default {
 *   plugins: [UnpluginTypia()],
 * }
 * ```
 */
const rollup: typeof unplugin.rollup = unplugin.rollup;
export default rollup;
