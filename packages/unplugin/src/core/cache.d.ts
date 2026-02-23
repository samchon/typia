import type { Data, ID, Source } from './types.js';
/**
 * Cache class
 *
 * @caution: CacheOptions.enable is ignored
 */
export declare class Cache {
    #private;
    constructor(id: ID, source: Source);
    [Symbol.dispose](): void;
    /**
     * Get cache data
     */
    get data(): Data | undefined;
    /**
     * Set cache data
     */
    set data(value: Data | undefined);
    private getCache;
    private setCache;
    private getHashKey;
    private hash;
    private get hashComment();
    private isWritable;
}
