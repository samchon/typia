import { MetadataFactory } from "@typia/core";
/**
 * Error thrown during typia transformation.
 *
 * `TransformerError` is thrown when `typia.*<T>()` receives unsupported types
 * or invalid configurations at compile time. The error message details which
 * types failed and why.
 *
 * Common causes:
 *
 * - Tuples in LLM schema (not supported by most LLMs)
 * - Recursive types without `$ref` support
 * - `any` types without explicit handling
 * - Native classes not serializable to JSON
 *
 * Use {@link from} to create from {@link MetadataFactory.IError} instances.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare class TransformerError extends Error {
    /** Error code identifying the error type. */
    readonly code: string;
    constructor(props: TransformerError.IProps);
}
export declare namespace TransformerError {
    /** Constructor properties for TransformerError. */
    interface IProps {
        /** Error code identifying the error type. */
        code: string;
        /** Human-readable error message. */
        message: string;
    }
    /**
     * Create error from metadata factory errors.
     *
     * Formats multiple type errors into a single TransformerError.
     */
    const from: (props: {
        code: string;
        errors: MetadataFactory.IError[];
    }) => TransformerError;
}
