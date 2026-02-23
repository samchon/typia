import type { UnpluginInstance } from 'unplugin';
import { createFilter as rollupCreateFilter } from '@rollup/pluginutils';
import type { Options } from './options.js';
import { resolveOptions } from './options.js';
import { transformTypia } from './typia.js';
/**
 * Create a filter function from the given include and exclude patterns.
 */
declare function createFilter(include: Options['include'], exclude: Options['exclude']): ReturnType<typeof rollupCreateFilter>;
/**
 * This is the unplugin function that is exported.
 *
 * @module
 */
declare const unplugin: UnpluginInstance<Options | undefined, false>;
export type { Options };
export { resolveOptions, createFilter, transformTypia, unplugin, };
export default unplugin;
