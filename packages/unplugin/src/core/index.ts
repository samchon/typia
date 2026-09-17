import { createFilter as rollupCreateFilter } from "@rollup/pluginutils";
import { resolve } from "pathe";
import type { UnpluginFactory, UnpluginInstance } from "unplugin";
import { createUnplugin } from "unplugin";
import type { ResolvedConfig } from "vite";

import { Cache } from "./cache.js";
import {
  isSvelteFile,
  preprocess as sveltePreprocess,
} from "./languages/svelte.js";
import { buildMagicString } from "./magicString.js";
import type { Options, ResolvedOptions } from "./options.js";
import { resolveOptions } from "./options.js";
import type { Data, ID, Source, UnContext } from "./types.js";
import { wrap } from "./types.js";
import { transformTypia } from "./typia.js";
import { log } from "./utils.js";

const name = `unplugin-typia`;

function removeRslibPrefix(id: string) {
  if (id.endsWith("?__rslib_entry__")) {
    return id.replace("?__rslib_entry__", "");
  }
  return id;
}

/** Create a filter function from the given include and exclude patterns. */
function createFilter(
  include: Options["include"],
  exclude: Options["exclude"],
): ReturnType<typeof rollupCreateFilter> {
  return rollupCreateFilter(include, exclude);
}

/** The main unplugin instance. */
const unpluginFactory: UnpluginFactory<Options | undefined, false> = (
  rawOptions = {},
) => {
  const options = resolveOptions(rawOptions);
  const filter = createFilter(options.include, options.exclude);

  const { cache: cacheOptions, log: logOption } = options;

  const showLog = logOption === "verbose" && cacheOptions;

  let viteConfig: ResolvedConfig | undefined;

  /** Generate code with source map. */
  function generateCodeWithMap({
    source,
    code,
    id,
  }: {
    source: Source;
    code: Data;
    id: ID;
  }) {
    const s = buildMagicString(source, code);

    if (!s.hasChanged()) {
      return;
    }

    return {
      code: s.toString(),
      map: s.generateMap({
        source: id,
        file: `${id}.map`,
        includeContent: true,
      }),
    };
  }

  async function transformCodeWithTypiaTransform({
    id,
    source,
    ctx,
    options,
  }: {
    id: ID;
    source: Source;
    ctx: UnContext;
    options: ResolvedOptions;
  }): Promise<{ code?: Data }> {
    /** Get cache */
    using cache = cacheOptions ? new Cache(id, source) : undefined;
    let code = cache?.data;

    if (showLog) {
      if (code != null) {
        log("success", `Cache hit: ${id}`);
      } else {
        log("warn", `Cache miss: ${id}`);
      }
    }

    /** Transform if cache not exists */
    if (code == null) {
      code = await transformTypia(
        id,
        source,
        ctx,
        options,
        viteConfig?.resolve?.alias,
      );

      if (showLog) {
        if (code != null) {
          log("success", `Transformed: ${id}`);
        } else {
          log("error", `Transform is null: ${id}`);
        }
      }

      /** Save cache */
      if (cache != null) {
        cache.data = code;
      }

      if (showLog) {
        log("success", `Cache set: ${id}`);
      }
    }

    return { code };
  }

  return {
    name,
    enforce: options.enforce,

    vite: {
      configResolved(config) {
        viteConfig = config;
      },
    },

    buildStart() {
      if (logOption !== false) {
        log("box", cacheOptions ? `Cache enabled` : `Cache disabled`);
      }
    },

    transformInclude(id) {
      const _id = removeRslibPrefix(id);
      return filter(_id);
    },

    async transform(_source, _id) {
      const source = wrap<Source>(_source);
      const resolvedId = resolve(_id);
      const removeRslibPrefixId = removeRslibPrefix(resolvedId);
      const id = wrap<ID>(removeRslibPrefixId);

      /** Skip if source does not include typia */
      if (!source.includes("typia")) {
        return;
      }

      const _transform = async ({ source, id }: { source: Source; id: ID }) =>
        transformCodeWithTypiaTransform({ id, source, ctx: this, options });

      /** Transform code */
      let code: Data | undefined;
      // eslint-disable-next-line ts/switch-exhaustiveness-check
      switch (true) {
        case isSvelteFile(id):
          ({ code } = await sveltePreprocess({
            id,
            source,
            transform: _transform,
          }));
          break;
        default:
          ({ code } = await _transform({ source, id }));
          break;
      }

      /** Skip if code is null */
      if (code == null) {
        return;
      }

      return generateCodeWithMap({ source, code, id });
    },
  };
};

/**
 * This is the unplugin function that is exported.
 *
 * @module
 */
const unplugin: UnpluginInstance<Options | undefined, false> =
  /* #__PURE__ */ createUnplugin(unpluginFactory);

export type { Options };
export { resolveOptions, createFilter, transformTypia, unplugin };

export default unplugin;
