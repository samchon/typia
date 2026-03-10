/**
 * This entry file is for rspack plugin.
 *
 * @module
 */
import unplugin from "./core/index.js";

/**
 * Rspack plugin
 *
 * @example
 *   ```ts
 *   // rspack.config.js
 *   module.exports = {
 *    plugins: [require('@typia/unplugin/rspack')()],
 *   }
 *   ```;
 */
const rspack: typeof unplugin.rspack = unplugin.rspack;
export default rspack;
