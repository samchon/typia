import {
  accessSync,
  constants,
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { createHash } from "node:crypto";
import { createRequire } from "node:module";
import { basename, dirname, join } from "pathe";
import findCacheDirectory from "find-cache-dir";
import type { CacheKey, CachePath, Data, FilePath, ID, Source } from "./types.js";
import { wrap } from "./types.js";
import { isBun } from "./utils.js";

// Bun types - only available when running in Bun
declare const Bun: {
  hash: (input: string) => number;
};

/** get typia version */
let typiaVersion: string | undefined;

try {
  if (typiaVersion == null) {
    typiaVersion = (
      createRequire(import.meta.url)(
        "typia/package.json",
      ) as typeof import("typia/package.json")
    ).version;
  }
} catch {
  // typia version could not be determined
}

/**
 * Cache class
 *
 * @caution: CacheOptions.enable is ignored
 */
export class Cache {
  #data: Data | undefined;
  #hashKey: CacheKey;
  #hashPath: CachePath;

  constructor(id: ID, source: Source) {
    this.#hashKey = this.getHashKey(id, source);
    this.#hashPath = wrap<CachePath>(join(getCacheDir(), this.#hashKey));
    this.#data = this.getCache();
  }

  [Symbol.dispose](): void {
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
  set data(value: Data | undefined) {
    this.#data = value;
  }

  private getCache() {
    if (!existsSync(this.#hashPath)) {
      return undefined;
    }

    const data = readFileSync(this.#hashPath, { encoding: "utf8" });

    /* if data does not end with hashComment, the cache is invalid */
    if (!data.endsWith(this.hashComment)) {
      return undefined;
    }

    return wrap<Data>(data);
  }

  private setCache() {
    const cacheDir = dirname(this.#hashPath);
    if (this.#data == null && existsSync(this.#hashPath)) {
      rmSync(this.#hashPath);
      return;
    }

    if (!existsSync(cacheDir)) {
      mkdirSync(cacheDir, { recursive: true });
    }

    if (!this.isWritable(cacheDir)) {
      throw new Error("Cache directory is not writable.");
    }

    const cache = this.#data + this.hashComment;
    writeFileSync(this.#hashPath, cache, { encoding: "utf8" });
  }

  private getHashKey(id: ID, source: Source): CacheKey {
    const h = this.hash(source);
    const filebase = `${basename(dirname(id))}_${basename(id)}`;

    return wrap<CacheKey>(`${filebase}_${h}`);
  }

  private hash(input: string): string {
    if (isBun()) {
      return Bun.hash(input).toString();
    }
    return createHash("md5").update(input).digest("hex");
  }

  private get hashComment() {
    return `/* typia-unplugin-${typiaVersion ?? ""}-${this.#hashKey} */\n`;
  }

  private isWritable(filename: string): boolean {
    try {
      accessSync(filename, constants.W_OK);
      return true;
    } catch {
      return false;
    }
  }
}

/**
 * Get cache directory
 * copy from https://github.com/unjs/jiti/blob/690b727d7c0c0fa721b80f8085cafe640c6c2a40/src/cache.ts
 */
function getCacheDir(): FilePath {
  const cacheDir = findCacheDirectory({ name: "typia_unplugin", create: true });

  if (cacheDir == null) {
    throw new Error("Cache directory is not found.");
  }

  return wrap<FilePath>(cacheDir);
}
