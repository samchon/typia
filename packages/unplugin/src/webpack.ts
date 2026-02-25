/**
 * This entry file is for webpack plugin.
 *
 * @module
 */

import unplugin from './core/index.js';

/**
 * Webpack plugin
 *
 * @example
 * ```js
 * // webpack.config.js
 *
 * const { default: UnpluginTypia } = require("@ryoppippi/unplugin-typia/webpack");
 *
 * module.exports = {
 *  plugins: [UnpluginTypia({ /* your config *\/ })],
 * }
 * ```
 *
 */
const webpack: typeof unplugin.webpack = unplugin.webpack;

export default webpack;
