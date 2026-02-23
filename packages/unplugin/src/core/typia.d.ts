import type { Alias } from 'vite';
import type { ResolvedOptions } from './options.js';
import type { Data, ID, Source, UnContext } from './types.js';
/**
 * Transform a TypeScript file with Typia.
 *
 * @param _id - The file path.
 * @param _source - The source code.
 * @param unpluginContext - The unplugin context.
 * @param options - The resolved options.
 * @param aliases - Path aliases to be resolved
 * @returns The transformed code.
 */
export declare function transformTypia(_id: ID, _source: Source, 
/**
 * **Use with caution.**
 *
 */
unpluginContext: UnContext, options: ResolvedOptions, aliases?: Alias[]): Promise<Data>;
