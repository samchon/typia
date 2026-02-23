import { accessSync, constants, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import process from 'node:process';
import { createHash } from 'node:crypto';
import { createRequire } from 'node:module';
import { createFixture } from 'fs-fixture';
import { basename, dirname, join } from 'pathe';
import findCacheDirectory from 'find-cache-dir';
import { wrap } from './types.js';
import { isBun } from './utils.js';
/** get typia version */
let typiaVersion;
try {
    if (typiaVersion == null) {
        typiaVersion = createRequire(import.meta.url)('typia/package.json').version;
    }
}
catch { }
/**
 * Cache class
 *
 * @caution: CacheOptions.enable is ignored
 */
export class Cache {
    #data;
    #hashKey;
    #hashPath;
    constructor(id, source) {
        this.#hashKey = this.getHashKey(id, source);
        this.#hashPath = wrap(join(getCacheDir(), this.#hashKey));
        this.#data = this.getCache();
    }
    [Symbol.dispose]() {
        this.setCache();
    }
    /**
     * Get cache data
     */
    get data() {
        return this.#data;
    }
    /**
     * Set cache data
     */
    set data(value) {
        this.#data = value;
    }
    getCache() {
        if (!(existsSync(this.#hashPath))) {
            return undefined;
        }
        const data = readFileSync(this.#hashPath, { encoding: 'utf8' });
        /* if data does not end with hashComment, the cache is invalid */
        if (!data.endsWith(this.hashComment)) {
            return undefined;
        }
        return wrap(data);
    }
    setCache() {
        const cacheDir = dirname(this.#hashPath);
        if (this.#data == null && existsSync(this.#hashPath)) {
            rmSync(this.#hashPath);
            return;
        }
        if (!existsSync(cacheDir)) {
            mkdirSync(cacheDir, { recursive: true });
        }
        if (!this.isWritable(cacheDir)) {
            throw new Error('Cache directory is not writable.');
        }
        const cache = this.#data + this.hashComment;
        writeFileSync(this.#hashPath, cache, { encoding: 'utf8' });
    }
    getHashKey(id, source) {
        const h = this.hash(source);
        const filebase = `${basename(dirname(id))}_${basename(id)}`;
        return wrap(`${filebase}_${h}`);
    }
    hash(input) {
        if (isBun()) {
            return Bun.hash(input).toString();
        }
        return createHash('md5').update(input).digest('hex');
    }
    get hashComment() {
        return `/* unplugin-typia-${typiaVersion ?? ''}-${this.#hashKey} */\n`;
    }
    isWritable(filename) {
        try {
            accessSync(filename, constants.W_OK);
            return true;
        }
        catch {
            return false;
        }
    }
}
/**
 * Get cache directory
 * copy from https://github.com/unjs/jiti/blob/690b727d7c0c0fa721b80f8085cafe640c6c2a40/src/cache.ts
 */
function getCacheDir() {
    const cacheDir = findCacheDirectory({ name: 'unplugin_typia', create: true });
    if (cacheDir == null) {
        throw new Error('Cache directory is not found.');
    }
    return wrap(cacheDir);
}
if (import.meta.vitest != null) {
    await using fixture = await createFixture();
    process.env.CACHE_DIR = fixture.path;
    function removeComments(data) {
        if (data == null) {
            return data;
        }
        // eslint-disable-next-line regexp/no-unused-capturing-group
        return data.replace(/\/\*[\s\S]*?\*\/\n?|([^\\:]|^)\/\/.*$/gm, '');
    }
    it('return null if cache is not found', async () => {
        const random = Math.random().toString();
        const source = wrap(random);
        using cache = new Cache(wrap(random), source);
        expect(cache.data).toBe(undefined);
    });
    it('set and get cache', async () => {
        const random = Math.random().toString();
        const source = wrap(random);
        const filename = wrap(`${random}-${random}.json`);
        const data = wrap(`${random};`);
        /* set cache */
        {
            using cache = new Cache(filename, source);
            cache.data = data;
        }
        /* get cache */
        using cache = new Cache(filename, source);
        /* delete js asterisk comments */
        const cacheDataStr = removeComments(cache.data);
        expect(cacheDataStr).toBe(data);
    });
    it('set and get null with different id', async () => {
        const random = Math.random().toString();
        const source = wrap(random);
        const filename = wrap(`${random}-${random}.json`);
        const data = wrap(`${random};`);
        /* set cache */
        {
            using cache = new Cache(filename, source);
            cache.data = data;
        }
        /* get cache */
        using cache = new Cache(wrap(`111;${random}`), source);
        /* delete js asterisk comments */
        const cacheDataStr = removeComments(cache.data);
        expect(cacheDataStr).toBe(undefined);
        expect(cacheDataStr).not.toBe(data);
    });
}
