import { wrap } from '../types.js';
/**
 * Check if a file is a Svelte file.
 */
export function isSvelteFile(file) {
    return file.endsWith('.svelte');
}
/**
 * Check if a script block in Svelte is TypeScript.
 */
function isLangTS(attrs) {
    return attrs.lang === 'ts';
}
export async function preprocess({ source, id, transform }) {
    const { preprocess: sveltePreprocess } = await import('svelte/compiler');
    const { code } = await sveltePreprocess(source, {
        script: async ({ content, filename, attributes }) => {
            if (filename == null) {
                return { code: content };
            }
            if (!isLangTS(attributes)) {
                return { code: content };
            }
            const id = wrap(filename);
            const source = wrap(content);
            const tsID = wrap(`${id}.ts`);
            const { code } = await transform({ source, id: tsID });
            if (code == null) {
                return { code: content };
            }
            return { code };
        },
    }, { filename: id });
    return { code: wrap(code) };
}
