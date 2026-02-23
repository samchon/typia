import { createDefu } from 'defu';
/** Default options */
const defaultOptions = ({
    include: [/\.[cm]?tsx?$/, /\.svelte$/],
    exclude: [/node_modules/],
    enforce: 'pre',
    typia: {},
    cache: false,
    log: true,
    tsconfig: undefined,
});
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
export function resolveOptions(options) {
    return defu(options, defaultOptions);
}
if (import.meta.vitest != null) {
    test('return default options if empty object is passed', () => {
        const options = resolveOptions({});
        expect(options).toMatchObject(defaultOptions);
    });
    test('return default options if include option is passed', () => {
        const options = resolveOptions({ include: [/\.js$/] });
        expect(options.include).not.toBe(defaultOptions.include);
        expect(options.include).toEqual([/\.js$/]);
        expect(options).toMatchObject({ ...defaultOptions, include: [/\.js$/] });
    });
    test('return default options if log option is passed', () => {
        const options = resolveOptions({ log: 'verbose' });
        expect(options.log).toBe('verbose');
        expect(options).toMatchObject({ ...defaultOptions, log: 'verbose' });
    });
    test('return default options if enforce option is passed', () => {
        const options = resolveOptions({ enforce: 'post' });
        expect(options.enforce).toBe('post');
        expect(options).toMatchObject({ ...defaultOptions, enforce: 'post' });
    });
    test('return cache is false if cache key is false', () => {
        const options = resolveOptions({ cache: false });
        expect(options).toMatchObject({ ...defaultOptions, cache: false });
    });
    test('return cache is true if cache key is true', () => {
        const options = resolveOptions({ cache: true });
        expect(options).toMatchObject({ ...defaultOptions, cache: true });
    });
    test('return cache is false if cache key is not passed', () => {
        const options = resolveOptions({});
        expect(options).toMatchObject({ ...defaultOptions, cache: false });
    });
}
