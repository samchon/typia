/**
 * This entry file is for Farm plugin.
 *
 * @module
 */

import unplugin from './core/index.js';

/**
 * Farm plugin
 *
 * @example
 * ```ts
 * // farm.config.ts
 * import UnpluginTypia from '@ryoppippi/unplugin-typia/farm'
 *
 * export default defineConfig({
 *   plugins: [UnpluginTypia()],
 * })
 * ```
 */
const farm: typeof unplugin.farm = unplugin.farm;
export default farm;
