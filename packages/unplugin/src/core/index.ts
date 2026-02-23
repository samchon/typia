import type { UnpluginFactory, UnpluginInstance } from 'unplugin';
import { createUnplugin } from 'unplugin';
import { createFilter as rollupCreateFilter } from '@rollup/pluginutils';
import MagicString from 'magic-string';
import * as Diff from 'diff-match-patch-es';
import { resolve } from 'pathe';

import type { ResolvedConfig } from 'vite';
import type { Options, ResolvedOptions } from './options.js';
import { resolveOptions } from './options.js';
import { transformTypia } from './typia.js';
import { log } from './utils.js';
import type { Data, ID, Source, UnContext } from './types.js';
import { wrap } from './types.js';
import { Cache } from './cache.js';
import { isSvelteFile, preprocess as sveltePreprocess } from './languages/svelte.js';

const name = `unplugin-typia`;

function removeRslibPrefix(id: string) {
	if (id.endsWith('?__rslib_entry__')) {
		return id.replace('?__rslib_entry__', '');
	}
	return id;
}

/**
 * Create a filter function from the given include and exclude patterns.
 */
function createFilter(
	include: Options['include'],
	exclude: Options['exclude'],
): ReturnType<typeof rollupCreateFilter> {
	return rollupCreateFilter(include, exclude);
}

/**
 * The main unplugin instance.
 */
const unpluginFactory: UnpluginFactory<
  Options | undefined,
	false
> = (rawOptions = {}) => {
	const options = resolveOptions(rawOptions);
	const filter = createFilter(options.include, options.exclude);

	const { cache: cacheOptions, log: logOption } = options;

	const showLog = logOption === 'verbose' && cacheOptions;

	let viteConfig: ResolvedConfig | undefined;

	/**
	 * Generate code with source map.
	 */
	function generateCodeWithMap({ source, code, id }: { source: Source; code: Data; id: ID }) {
		/** generate Magic string */
		const s = new MagicString(source);

		/** generate diff */
		const diff = Diff.diff(source, code);

		/** cleanup diff */
		Diff.diffCleanupSemantic(diff);

		let offset = 0;
		for (let index = 0; index < diff.length; index++) {
			const [type, text] = diff[index];
			const textLength = text.length;
			/** skip */
			if (type === 0) {
				/* offset is increased  */
				offset += textLength;
			}

			/** add text */
			else if (type === 1) {
				s.prependLeft(offset, text);

				/* offset is not increased because text is prepended */
			}

			/** remove text */
			else if (type === -1) {
				const next = diff.at(index + 1);

				/** if next is equal to 1, then overwrite */
				if (next != null && next[0] === 1) {
					const replaceText = next[1];

					/**
					 * get first non-whitespace character of text (maybe bug of magic-string)
					 * text.search(/\S/) ignore `\n`, but it is important (https://github.com/ryoppippi/unplugin-typia/issues/434)
					 */
					const firstNonWhitespaceIndexOfText = text.startsWith('\n') ? 0 : text.search(/\S/);

					const offsetStart = offset + (firstNonWhitespaceIndexOfText > 0 ? firstNonWhitespaceIndexOfText : 0);

					s.update(offsetStart, offset + textLength, replaceText);

					/** skip next */
					index += 1;
				}
				else {
					s.remove(offset, offset + textLength);
				}

				/* offset is increased  */
				offset += textLength;
			}
		}

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

	async function transformCodeWithTypiaTransform(
		{ id, source, ctx, options }:
		{ id: ID; source: Source; ctx: UnContext; options: ResolvedOptions },
	): Promise<{ code?: Data }> {
		/** get cache */
		using cache = cacheOptions ? new Cache(id, source) : undefined;
		let code = cache?.data;

		if (showLog) {
			if (code != null) {
				log('success', `Cache hit: ${id}`);
			}
			else {
				log('warn', `Cache miss: ${id}`);
			}
		}

		/** transform if cache not exists */
		if (code == null) {
			code = await transformTypia(id, source, ctx, options, viteConfig?.resolve?.alias);

			if (showLog) {
				if (code != null) {
					log('success', `Transformed: ${id}`);
				}
				else {
					log('error', `Transform is null: ${id}`);
				}
			}

			/** save cache */
			if (cache != null) {
				cache.data = code;
			}

			if (showLog) {
				log('success', `Cache set: ${id}`);
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
				log(
					'box',
					cacheOptions ? `Cache enabled` : `Cache disabled`,
				);
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

			/** skip if source does not include typia */
			if (!source.includes('typia')) {
				return;
			}

			const _transform = async ({ source, id }: { source: Source; id: ID }) => transformCodeWithTypiaTransform({ id, source, ctx: this, options });

			/** transform code */
			let code: Data | undefined;
			// eslint-disable-next-line ts/switch-exhaustiveness-check
			switch (true) {
				case isSvelteFile(id):
					({ code } = await sveltePreprocess({ id, source, transform: _transform }));
					break;
				default:
					({ code } = await _transform({ source, id }));
					break;
			}

			/** skip if code is null */
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
const unplugin: UnpluginInstance<Options | undefined, false>
/* #__PURE__ */ = createUnplugin(unpluginFactory);

export type { Options };
export {
	resolveOptions,
	createFilter,
	transformTypia,
	unplugin,
};

export default unplugin;
