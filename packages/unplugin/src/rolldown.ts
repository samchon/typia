/**
 * This entry file is for Rolldown plugin.
 *
 * @module
 */

import unplugin from './core/index.js';

/**
 * Rolldown plugin
 *
 * @example
 * ```ts
 * // rollup.config.js
 * import UnpluginTypia from '@ryoppippi/unplugin-typia/rolldown'
 *
 * export default {
 *   plugins: [UnpluginTypia()],
 * }
 * ```
 */
const rolldown: typeof unplugin.rolldown = unplugin.rolldown;
export default rolldown;
