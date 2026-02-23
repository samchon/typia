import type { Data, ID, Source } from '../types.js';
import { wrap } from '../types.js';

/**
 * Check if a file is a Svelte file.
 */
export function isSvelteFile(file: string): boolean {
	return file.endsWith('.svelte');
}

/**
 * Check if a script block in Svelte is TypeScript.
 */
function isLangTS(attrs: Record<string, string | boolean>) {
	return attrs.lang === 'ts';
}

type MaybePromise<T> = T | Promise<T>;

type TransformFunction = ({ source, id }: { source: Source; id: ID }) => MaybePromise<{ code?: Data } >;

export async function preprocess(
	{ source, id, transform }:
	{ source: Source; id: ID; transform: TransformFunction },
): Promise<{ code: Data }> {
	const { preprocess: sveltePreprocess } = await import('svelte/compiler');
	const { code } = await sveltePreprocess(source, {
		script: async ({ content, filename, attributes }) => {
			if (filename == null) {
				return { code: content };
			}

			if (!isLangTS(attributes)) {
				return { code: content };
			}

			const id = wrap<ID>(filename);
			const source = wrap<Source>(content);

			const tsID = wrap<ID>(`${id}.ts`);

			const { code } = await transform({ source, id: tsID });

			if (code == null) {
				return { code: content };
			}

			return { code };
		},
	}, { filename: id });

	return { code: wrap<Data>(code) };
}
