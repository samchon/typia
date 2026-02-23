/**
 * This entry file is for bun plugin.
 *
 * @module
 */

import 'bun-only';
import type { BunPlugin } from 'bun';
import type { UnpluginContextMeta, UnpluginOptions } from 'unplugin';
import type { Options } from './core/options.js';
import { resolveOptions, unplugin } from './api.js';
import { type ID, type Source, wrap } from './core/types.js';

/**
 * Options for bun plugin
 */
export type BunOptions = Options;

/** typia transform function with tagged types */
async function taggedTransform(
	id: ID,
	source: Source,
	unpluginRaw: UnpluginOptions,
): Promise<undefined | Source> {
	const { transform } = unpluginRaw;

	if (transform == null) {
		throw new Error('transform is not defined');
	}

	// @ts-expect-error type of this function is not correct
	const _transform = async (source: Source, id: ID) => transform(source, id) as Promise<string | { code: string }>;

	const result = await _transform(source, id);

	// eslint-disable-next-line ts/switch-exhaustiveness-check
	switch (true) {
		case result == null:
			return undefined;
		case typeof result === 'string':
			return undefined;
		case typeof result === 'object':
			return wrap<Source>(result.code);
		default:
			return result satisfies never;
	}
}

/**
 * bun plugin
 *
 * Also, check the [Plugins – Runtime | Bun Docs](https://bun.sh/docs/runtime/plugins) & [Plugins – Bundler | Bun Docs](https://bun.sh/docs/bundler/plugins) for more details.
 *
 * @example
 * ```ts
 * // build.ts
 *
 * import UnpluginTypia from '@ryoppippi/unplugin-typia/bun'
 *
 * Bun.build({
 *   entrypoints: ['./index.ts'],
 *   outdir: './out',
 *   plugins: [
 *     UnpluginTypia({ /* your options *\/})
 *  ]
 * })
 * ```
 *
 * ```sh
 * $ node build.ts
 * ```
 *
 * @example
 *
 * ```ts
 * // preload.ts
 * import { plugin } from 'bun';
 * import UnpluginTypia from '@ryoppippi/unplugin-typia/bun'
 *
 * plugin(UnpluginTypia({ /* your options *\/}))
 * ```
 *
 * ```toml
 * # bunfig.toml
 * preload = ["./preload.ts"]
 *
 * [test]
 * preload = ["./preload.ts"]
 * ```
 *
 * ```sh
 * $ bun run ./index.ts
 * ```
 *
 * When you run your scripts on Bun.runtime, You cannot use named import for typia value in the source code. Check out the README.md.
 */
function bunTypiaPlugin(
	bunOptions?: BunOptions,
): BunPlugin {
	const bunPlugin = ({
		name: 'unplugin-typia',
		async setup(build) {
			const { ...options } = bunOptions ?? {};
			const resolvedOptions = resolveOptions(options ?? {});
			const { include } = resolvedOptions;

			const unpluginRaw = unplugin.raw(options, {} as UnpluginContextMeta);

			const filters: readonly RegExp[] | undefined
				= include instanceof RegExp
					? [include]
					: typeof include === 'string'
						? [new RegExp(include)]
						: Array.isArray(include) && include.every(i => i instanceof RegExp) && include.length > 0
							? include
							: undefined;

			if (filters == null) {
				throw new Error('include option should be a string, RegExp, or an array of RegExp with at least one element');
			}

			if (unpluginRaw?.buildStart != null) {
				// @ts-expect-error context type is invalid
				await unpluginRaw?.buildStart();
			}

			for (const filter of filters) {
				build.onLoad({ filter }, async (args) => {
					const id = wrap<ID>(args.path);

					const source = wrap<Source>(await Bun.file(id).text());

					const code = await taggedTransform(
						id,
						source,
						unpluginRaw,
					);

					return { contents: code ?? source };
				});
			}
		},
	}) as const satisfies BunPlugin;

	return bunPlugin;
}

export default bunTypiaPlugin;
