import type { OverrideProperties, RequiredDeep } from "type-fest";
import { createDefu } from "defu";
import type { FilterPattern } from "@rollup/pluginutils";
import type { ITransformOptions } from "typia/lib/transform.js";

/**
 * Represents the options for the plugin.
 */
export type Options = {
  /**
   * The patterns of files to include.
   * This options is not merged but overridden.
   * @default [/\.[cm]?[jt]sx?$/]
   */
  include?: FilterPattern;

  /**
   * The patterns of files to exclude.
   * This options is not merged but overridden.
   * @default [/node_modules/]
   */
  exclude?: FilterPattern;

  /**
   * Adjusts the plugin order (only works for Vite and Webpack).
   * @default 'pre'
   */
  enforce?: "pre" | "post" | undefined;

  /**
   * The path to the tsconfig file.
   * If not specified, the plugin will try to find it automatically.
   * @default undefined
   */
  tsconfig?: string;

  /**
   * The options for the typia transformer.
   */
  typia?: ITransformOptions;

  /**
   * The options for cache.
   * The cache-dir-searching feature is powered by [find-cache-dir](https://github.com/sindresorhus/find-cache-dir). If you want to change cache dir, set an environment variable `CACHE_DIR`.
   * if `true`, it will enable cache with and will use node_modules/.cache/unplugin_typia.
   * if `false`, it will disable cache.
   * @default false
   */
  cache?: true | false;

  /**
   * Enable debug mode.
   * @default true
   */
  log?: boolean | "verbose";
};

export type ResolvedOptions = OverrideProperties<
  RequiredDeep<Options>,
  {
    typia: Options["typia"];
    tsconfig: Options["tsconfig"];
  }
>;

/** Default options */
const defaultOptions = {
  include: [/\.[cm]?tsx?$/, /\.svelte$/],
  exclude: [/node_modules/],
  enforce: "pre",
  typia: {},
  cache: false,
  log: true,
  tsconfig: undefined,
} as const satisfies ResolvedOptions;

/** Create custom defu instance */
const defu = createDefu((obj, key, value) => {
  /** replace array instead of concat */
  if (Array.isArray(obj[key])) {
    obj[key] = value;
    return true;
  }
});

/**
 * Resolves the options for the plugin.
 *
 * @param options - The options to resolve.
 * @returns The resolved options.
 */
export function resolveOptions(options: Options): ResolvedOptions {
  return defu(options, defaultOptions);
}
