import type { Data, ID, Source } from '../types.js';
/**
 * Check if a file is a Svelte file.
 */
export declare function isSvelteFile(file: string): boolean;
type MaybePromise<T> = T | Promise<T>;
type TransformFunction = ({ source, id }: {
    source: Source;
    id: ID;
}) => MaybePromise<{
    code?: Data;
}>;
export declare function preprocess({ source, id, transform }: {
    source: Source;
    id: ID;
    transform: TransformFunction;
}): Promise<{
    code: Data;
}>;
export {};
