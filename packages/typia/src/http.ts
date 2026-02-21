import {
  Atomic,
  IReadableURLSearchParams,
  IValidation,
  Resolved,
} from "@typia/interface";

import { TypeGuardError } from "./TypeGuardError";
import { NoTransformConfigurationError } from "./transformers/NoTransformConfigurationError";

/* ===========================================================
    HTTP
      - FORM-DATA
      - QUERY
      - HEADERS
      - PARAMETER
      - FACTORY FUNCTIONS
==============================================================
    FORM-DATA
----------------------------------------------------------- */
/**
 * Decodes `FormData` into type `T`.
 *
 * Parses a `FormData` instance with automatic type casting. Properties typed as
 * `boolean` or `Blob` are cast to expected types during decoding.
 *
 * Type `T` constraints:
 *
 * 1. Must be an object type
 * 2. No dynamic properties allowed
 * 3. Only `boolean`, `bigint`, `number`, `string`, `Blob`, `File` or their array
 *    types allowed
 * 4. No union types allowed
 *
 * Does not validate the decoded value. For validation, use:
 *
 * - {@link assertFormData} — Throws on type mismatch
 * - {@link isFormData} — Returns `null` on type mismatch
 * - {@link validateFormData} — Returns detailed validation errors
 *
 * @template T Target object type
 * @param input FormData instance to decode
 * @returns Decoded object of type `T`
 * @danger You must configure the generic argument `T`
 */
export function formData<T extends object>(input: FormData): Resolved<T>;

/** @internal */
export function formData(): never {
  NoTransformConfigurationError("http.formData");
}

/**
 * Decodes `FormData` into type `T` with assertion.
 *
 * Parses a `FormData` instance with automatic type casting, then validates the
 * result via {@link assert}. Throws {@link TypeGuardError} on mismatch.
 *
 * Type `T` constraints:
 *
 * 1. Must be an object type
 * 2. No dynamic properties allowed
 * 3. Only `boolean`, `bigint`, `number`, `string`, `Blob`, `File` or their array
 *    types allowed
 * 4. No union types allowed
 *
 * Related functions:
 *
 * - {@link formData} — No validation
 * - {@link isFormData} — Returns `null` instead of throwing
 * - {@link validateFormData} — Returns detailed validation errors
 *
 * @template T Target object type
 * @param input FormData instance to decode
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Decoded object of type `T`
 * @throws {TypeGuardError} When decoded value doesn't conform to type `T`
 * @danger You must configure the generic argument `T`
 */
export function assertFormData<T extends object>(
  input: FormData,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): Resolved<T>;

/** @internal */
export function assertFormData(): never {
  NoTransformConfigurationError("http.assertFormData");
}

/**
 * Decodes `FormData` into type `T` with type checking.
 *
 * Parses a `FormData` instance with automatic type casting, then validates the
 * result via {@link is}. Returns `null` on type mismatch.
 *
 * Type `T` constraints:
 *
 * 1. Must be an object type
 * 2. No dynamic properties allowed
 * 3. Only `boolean`, `bigint`, `number`, `string`, `Blob`, `File` or their array
 *    types allowed
 * 4. No union types allowed
 *
 * Related functions:
 *
 * - {@link formData} — No validation
 * - {@link assertFormData} — Throws instead of returning `null`
 * - {@link validateFormData} — Returns detailed validation errors
 *
 * @template T Target object type
 * @param input FormData instance to decode
 * @returns Decoded object of type `T`, or `null` if invalid
 * @danger You must configure the generic argument `T`
 */
export function isFormData<T extends object>(
  input: FormData,
): Resolved<T> | null;

/** @internal */
export function isFormData(): never {
  NoTransformConfigurationError("http.isFormData");
}

/**
 * Decodes `FormData` into type `T` with validation.
 *
 * Parses a `FormData` instance with automatic type casting, then validates the
 * result via {@link validate}. Returns {@link IValidation.IFailure} with all
 * errors on mismatch, or {@link IValidation.ISuccess} with decoded value.
 *
 * Type `T` constraints:
 *
 * 1. Must be an object type
 * 2. No dynamic properties allowed
 * 3. Only `boolean`, `bigint`, `number`, `string`, `Blob`, `File` or their array
 *    types allowed
 * 4. No union types allowed
 *
 * Related functions:
 *
 * - {@link formData} — No validation
 * - {@link assertFormData} — Throws on first error
 * - {@link isFormData} — Returns `null` instead of error details
 *
 * @template T Target object type
 * @param input FormData instance to decode
 * @returns Validation result containing decoded value or errors
 * @danger You must configure the generic argument `T`
 */
export function validateFormData<T extends object>(
  input: FormData,
): IValidation<Resolved<T>>;

/** @internal */
export function validateFormData(): never {
  NoTransformConfigurationError("http.validateFormData");
}

/* -----------------------------------------------------------
    QUERY
----------------------------------------------------------- */
/**
 * Decodes URL query string into type `T`.
 *
 * Parses a query string or `URLSearchParams` instance with automatic type
 * casting. Properties typed as `boolean` or `number` are cast to expected types
 * during decoding.
 *
 * Type `T` constraints:
 *
 * 1. Must be an object type
 * 2. No dynamic properties allowed
 * 3. Only `boolean`, `bigint`, `number`, `string` or their array types allowed
 * 4. No union types allowed
 *
 * Does not validate the decoded value. For validation, use:
 *
 * - {@link assertQuery} — Throws on type mismatch
 * - {@link isQuery} — Returns `null` on type mismatch
 * - {@link validateQuery} — Returns detailed validation errors
 *
 * @template T Target object type
 * @param input Query string or URLSearchParams instance
 * @returns Decoded object of type `T`
 * @danger You must configure the generic argument `T`
 */
export function query<T extends object>(
  input: string | IReadableURLSearchParams,
): Resolved<T>;

/** @internal */
export function query(): never {
  NoTransformConfigurationError("http.query");
}

/**
 * Decodes URL query string into type `T` with assertion.
 *
 * Parses a query string or `URLSearchParams` instance with automatic type
 * casting, then validates the result via {@link assert}. Throws
 * {@link TypeGuardError} on mismatch.
 *
 * Type `T` constraints:
 *
 * 1. Must be an object type
 * 2. No dynamic properties allowed
 * 3. Only `boolean`, `bigint`, `number`, `string` or their array types allowed
 * 4. No union types allowed
 *
 * Related functions:
 *
 * - {@link query} — No validation
 * - {@link isQuery} — Returns `null` instead of throwing
 * - {@link validateQuery} — Returns detailed validation errors
 *
 * @template T Target object type
 * @param input Query string or URLSearchParams instance
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Decoded object of type `T`
 * @throws {TypeGuardError} When decoded value doesn't conform to type `T`
 * @danger You must configure the generic argument `T`
 */
export function assertQuery<T extends object>(
  input: string | IReadableURLSearchParams,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): Resolved<T>;

/** @internal */
export function assertQuery(): never {
  NoTransformConfigurationError("http.assertQuery");
}

/**
 * Decodes URL query string into type `T` with type checking.
 *
 * Parses a query string or `URLSearchParams` instance with automatic type
 * casting, then validates the result via {@link is}. Returns `null` on type
 * mismatch.
 *
 * Type `T` constraints:
 *
 * 1. Must be an object type
 * 2. No dynamic properties allowed
 * 3. Only `boolean`, `bigint`, `number`, `string` or their array types allowed
 * 4. No union types allowed
 *
 * Related functions:
 *
 * - {@link query} — No validation
 * - {@link assertQuery} — Throws instead of returning `null`
 * - {@link validateQuery} — Returns detailed validation errors
 *
 * @template T Target object type
 * @param input Query string or URLSearchParams instance
 * @returns Decoded object of type `T`, or `null` if invalid
 * @danger You must configure the generic argument `T`
 */
export function isQuery<T extends object>(
  input: string | IReadableURLSearchParams,
): Resolved<T> | null;

/** @internal */
export function isQuery(): never {
  NoTransformConfigurationError("http.isQuery");
}

/**
 * Decodes URL query string into type `T` with validation.
 *
 * Parses a query string or `URLSearchParams` instance with automatic type
 * casting, then validates the result via {@link validate}. Returns
 * {@link IValidation.IFailure} with all errors on mismatch, or
 * {@link IValidation.ISuccess} with decoded value.
 *
 * Type `T` constraints:
 *
 * 1. Must be an object type
 * 2. No dynamic properties allowed
 * 3. Only `boolean`, `bigint`, `number`, `string` or their array types allowed
 * 4. No union types allowed
 *
 * Related functions:
 *
 * - {@link query} — No validation
 * - {@link assertQuery} — Throws on first error
 * - {@link isQuery} — Returns `null` instead of error details
 *
 * @template T Target object type
 * @param input Query string or URLSearchParams instance
 * @returns Validation result containing decoded value or errors
 * @danger You must configure the generic argument `T`
 */
export function validateQuery<T extends object>(
  input: string | IReadableURLSearchParams,
): IValidation<Resolved<T>>;

/** @internal */
export function validateQuery(): never {
  NoTransformConfigurationError("http.validateQuery");
}

/* -----------------------------------------------------------
    HEADERS
----------------------------------------------------------- */
/**
 * Decodes HTTP headers into type `T`.
 *
 * Parses HTTP headers object with automatic type casting. Properties typed as
 * `boolean` or `number` are cast to expected types during decoding. Compatible
 * with Express and Fastify request headers.
 *
 * Type `T` constraints:
 *
 * 1. Must be an object type
 * 2. No dynamic properties allowed
 * 3. Property keys must be lowercase
 * 4. Property values cannot be `null` (but `undefined` is allowed)
 * 5. Only `boolean`, `bigint`, `number`, `string` or their array types allowed
 * 6. No union types allowed
 * 7. Property `set-cookie` must be array type
 * 8. These properties cannot be array type: `age`, `authorization`,
 *    `content-length`, `content-type`, `etag`, `expires`, `from`, `host`,
 *    `if-modified-since`, `if-unmodified-since`, `last-modified`, `location`,
 *    `max-forwards`, `proxy-authorization`, `referer`, `retry-after`, `server`,
 *    `user-agent`
 *
 * Does not validate the decoded value. For validation, use:
 *
 * - {@link assertHeaders} — Throws on type mismatch
 * - {@link isHeaders} — Returns `null` on type mismatch
 * - {@link validateHeaders} — Returns detailed validation errors
 *
 * @template T Target object type
 * @param input Headers object from HTTP request
 * @returns Decoded object of type `T`
 * @danger You must configure the generic argument `T`
 */
export function headers<T extends object>(
  input: Record<string, string | string[] | undefined>,
): Resolved<T>;

/** @internal */
export function headers(): never {
  NoTransformConfigurationError("http.headers");
}

/**
 * Decodes HTTP headers into type `T` with assertion.
 *
 * Parses HTTP headers object with automatic type casting, then validates the
 * result via {@link assert}. Throws {@link TypeGuardError} on mismatch.
 * Compatible with Express and Fastify request headers.
 *
 * Type `T` constraints:
 *
 * 1. Must be an object type
 * 2. No dynamic properties allowed
 * 3. Property keys must be lowercase
 * 4. Property values cannot be `null` (but `undefined` is allowed)
 * 5. Only `boolean`, `bigint`, `number`, `string` or their array types allowed
 * 6. No union types allowed
 * 7. Property `set-cookie` must be array type
 * 8. These properties cannot be array type: `age`, `authorization`,
 *    `content-length`, `content-type`, `etag`, `expires`, `from`, `host`,
 *    `if-modified-since`, `if-unmodified-since`, `last-modified`, `location`,
 *    `max-forwards`, `proxy-authorization`, `referer`, `retry-after`, `server`,
 *    `user-agent`
 *
 * Related functions:
 *
 * - {@link headers} — No validation
 * - {@link isHeaders} — Returns `null` instead of throwing
 * - {@link validateHeaders} — Returns detailed validation errors
 *
 * @template T Target object type
 * @param input Headers object from HTTP request
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Decoded object of type `T`
 * @throws {TypeGuardError} When decoded value doesn't conform to type `T`
 * @danger You must configure the generic argument `T`
 */
export function assertHeaders<T extends object>(
  input: Record<string, string | string[] | undefined>,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): Resolved<T>;

/** @internal */
export function assertHeaders(): never {
  NoTransformConfigurationError("http.assertHeaders");
}

/**
 * Decodes HTTP headers into type `T` with type checking.
 *
 * Parses HTTP headers object with automatic type casting, then validates the
 * result via {@link is}. Returns `null` on type mismatch. Compatible with
 * Express and Fastify request headers.
 *
 * Type `T` constraints:
 *
 * 1. Must be an object type
 * 2. No dynamic properties allowed
 * 3. Property keys must be lowercase
 * 4. Property values cannot be `null` (but `undefined` is allowed)
 * 5. Only `boolean`, `bigint`, `number`, `string` or their array types allowed
 * 6. No union types allowed
 * 7. Property `set-cookie` must be array type
 * 8. These properties cannot be array type: `age`, `authorization`,
 *    `content-length`, `content-type`, `etag`, `expires`, `from`, `host`,
 *    `if-modified-since`, `if-unmodified-since`, `last-modified`, `location`,
 *    `max-forwards`, `proxy-authorization`, `referer`, `retry-after`, `server`,
 *    `user-agent`
 *
 * Related functions:
 *
 * - {@link headers} — No validation
 * - {@link assertHeaders} — Throws instead of returning `null`
 * - {@link validateHeaders} — Returns detailed validation errors
 *
 * @template T Target object type
 * @param input Headers object from HTTP request
 * @returns Decoded object of type `T`, or `null` if invalid
 * @danger You must configure the generic argument `T`
 */
export function isHeaders<T extends object>(
  input: Record<string, string | string[] | undefined>,
): Resolved<T> | null;

/** @internal */
export function isHeaders(): never {
  NoTransformConfigurationError("http.isHeaders");
}

/**
 * Decodes HTTP headers into type `T` with validation.
 *
 * Parses HTTP headers object with automatic type casting, then validates the
 * result via {@link validate}. Returns {@link IValidation.IFailure} with all
 * errors on mismatch, or {@link IValidation.ISuccess} with decoded value.
 * Compatible with Express and Fastify request headers.
 *
 * Type `T` constraints:
 *
 * 1. Must be an object type
 * 2. No dynamic properties allowed
 * 3. Property keys must be lowercase
 * 4. Property values cannot be `null` (but `undefined` is allowed)
 * 5. Only `boolean`, `bigint`, `number`, `string` or their array types allowed
 * 6. No union types allowed
 * 7. Property `set-cookie` must be array type
 * 8. These properties cannot be array type: `age`, `authorization`,
 *    `content-length`, `content-type`, `etag`, `expires`, `from`, `host`,
 *    `if-modified-since`, `if-unmodified-since`, `last-modified`, `location`,
 *    `max-forwards`, `proxy-authorization`, `referer`, `retry-after`, `server`,
 *    `user-agent`
 *
 * Related functions:
 *
 * - {@link headers} — No validation
 * - {@link assertHeaders} — Throws on first error
 * - {@link isHeaders} — Returns `null` instead of error details
 *
 * @template T Target object type
 * @param input Headers object from HTTP request
 * @returns Validation result containing decoded value or errors
 * @danger You must configure the generic argument `T`
 */
export function validateHeaders<T extends object>(
  input: Record<string, string | string[] | undefined>,
): IValidation<Resolved<T>>;

/** @internal */
export function validateHeaders(): never {
  NoTransformConfigurationError("http.validateHeaders");
}

/* -----------------------------------------------------------
    PARAMETER
----------------------------------------------------------- */
/**
 * Decodes URL path parameter into type `T`.
 *
 * Parses a path parameter string with automatic type casting. When type `T` is
 * `boolean` or `number`, casts the string value to the expected type. Also
 * performs type assertion via {@link assert}, throwing {@link TypeGuardError} on
 * mismatch.
 *
 * @template T Target atomic type (`boolean`, `bigint`, `number`, `string`, or
 *   `null`)
 * @param input Path parameter string
 * @returns Decoded value of type `T`
 * @throws {TypeGuardError} When decoded value doesn't conform to type `T`
 * @danger You must configure the generic argument `T`
 */
export function parameter<T extends Atomic.Type | null>(
  input: string,
): Resolved<T>;

/** @internal */
export function parameter(): never {
  NoTransformConfigurationError("http.parameter");
}

/* -----------------------------------------------------------
    FACTORY FUNCTIONS
----------------------------------------------------------- */
/**
 * Creates reusable {@link formData} function.
 *
 * @template T Target object type
 * @danger You must configure the generic argument `T`
 */
export function createFormData(): never;

/**
 * Creates reusable {@link formData} function.
 *
 * @template T Target object type
 * @returns Reusable decoder function
 */
export function createFormData<T extends object>(): (input: FormData) => T;

/** @internal */
export function createFormData<T>(): (input: FormData) => T {
  NoTransformConfigurationError("http.createFormData");
}

/**
 * Creates reusable {@link assertFormData} function.
 *
 * @template T Target object type
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @danger You must configure the generic argument `T`
 */
export function createAssertFormData(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Creates reusable {@link assertFormData} function.
 *
 * @template T Target object type
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Reusable decoder function
 */
export function createAssertFormData<T extends object>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: FormData) => T;

/** @internal */
export function createAssertFormData<T>(): (input: FormData) => T {
  NoTransformConfigurationError("http.createAssertFormData");
}

/**
 * Creates reusable {@link isFormData} function.
 *
 * @template T Target object type
 * @danger You must configure the generic argument `T`
 */
export function createIsFormData(): never;

/**
 * Creates reusable {@link isFormData} function.
 *
 * @template T Target object type
 * @returns Reusable decoder function
 */
export function createIsFormData<T extends object>(): (
  input: FormData,
) => T | null;

/** @internal */
export function createIsFormData<T>(): (input: FormData) => T | null {
  NoTransformConfigurationError("http.createIsFormData");
}

/**
 * Creates reusable {@link validateFormData} function.
 *
 * @template T Target object type
 * @danger You must configure the generic argument `T`
 */
export function createValidateFormData(): never;

/**
 * Creates reusable {@link validateFormData} function.
 *
 * @template T Target object type
 * @returns Reusable decoder function
 */
export function createValidateFormData<T extends object>(): (
  input: FormData,
) => IValidation<Resolved<T>>;

/** @internal */
export function createValidateFormData<T>(): (
  input: FormData,
) => IValidation<Resolved<T>> {
  NoTransformConfigurationError("http.createValidateFormData");
}

/**
 * Creates reusable {@link query} function.
 *
 * @template T Target object type
 * @danger You must configure the generic argument `T`
 */
export function createQuery(): never;

/**
 * Creates reusable {@link query} function.
 *
 * @template T Target object type
 * @returns Reusable decoder function
 */
export function createQuery<T extends object>(): (
  input: string | IReadableURLSearchParams,
) => T;

/** @internal */
export function createQuery<T>(): (
  input: string | IReadableURLSearchParams,
) => T {
  NoTransformConfigurationError("http.createQuery");
}

/**
 * Creates reusable {@link assertQuery} function.
 *
 * @template T Target object type
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @danger You must configure the generic argument `T`
 */
export function createAssertQuery(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Creates reusable {@link assertQuery} function.
 *
 * @template T Target object type
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Reusable decoder function
 */
export function createAssertQuery<T extends object>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: string | IReadableURLSearchParams) => T;

/** @internal */
export function createAssertQuery<T>(): (
  input: string | IReadableURLSearchParams,
) => T {
  NoTransformConfigurationError("http.createAssertQuery");
}

/**
 * Creates reusable {@link isQuery} function.
 *
 * @template T Target object type
 * @danger You must configure the generic argument `T`
 */
export function createIsQuery(): never;

/**
 * Creates reusable {@link isQuery} function.
 *
 * @template T Target object type
 * @returns Reusable decoder function
 */
export function createIsQuery<T extends object>(): (
  input: string | IReadableURLSearchParams,
) => T | null;

/** @internal */
export function createIsQuery<T>(): (
  input: string | IReadableURLSearchParams,
) => T | null {
  NoTransformConfigurationError("http.createIsQuery");
}

/**
 * Creates reusable {@link validateQuery} function.
 *
 * @template T Target object type
 * @danger You must configure the generic argument `T`
 */
export function createValidateQuery(): never;

/**
 * Creates reusable {@link validateQuery} function.
 *
 * @template T Target object type
 * @returns Reusable decoder function
 */
export function createValidateQuery<T extends object>(): (
  input: string | IReadableURLSearchParams,
) => IValidation<Resolved<T>>;

/** @internal */
export function createValidateQuery<T>(): (
  input: string | IReadableURLSearchParams,
) => IValidation<Resolved<T>> {
  NoTransformConfigurationError("http.createValidateQuery");
}

/**
 * Creates reusable {@link headers} function.
 *
 * @template T Target object type
 * @danger You must configure the generic argument `T`
 */
export function createHeaders(): never;

/**
 * Creates reusable {@link headers} function.
 *
 * @template T Target object type
 * @returns Reusable decoder function
 */
export function createHeaders<T extends object>(): (
  input: Record<string, string | string[] | undefined>,
) => T;

/** @internal */
export function createHeaders<T>(): (
  input: Record<string, string | string[] | undefined>,
) => T {
  NoTransformConfigurationError("http.createHeaders");
}

/**
 * Creates reusable {@link assertHeaders} function.
 *
 * @template T Target object type
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @danger You must configure the generic argument `T`
 */
export function createAssertHeaders(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Creates reusable {@link assertHeaders} function.
 *
 * @template T Target object type
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Reusable decoder function
 */
export function createAssertHeaders<T extends object>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: Record<string, string | string[] | undefined>) => T;

/** @internal */
export function createAssertHeaders<T>(): (
  input: Record<string, string | string[] | undefined>,
) => T {
  NoTransformConfigurationError("http.createAssertHeaders");
}

/**
 * Creates reusable {@link isHeaders} function.
 *
 * @template T Target object type
 * @danger You must configure the generic argument `T`
 */
export function createIsHeaders(): never;

/**
 * Creates reusable {@link isHeaders} function.
 *
 * @template T Target object type
 * @returns Reusable decoder function
 */
export function createIsHeaders<T extends object>(): (
  input: Record<string, string | string[] | undefined>,
) => T | null;

/** @internal */
export function createIsHeaders<T>(): (
  input: Record<string, string | string[] | undefined>,
) => T | null {
  NoTransformConfigurationError("http.createIsHeaders");
}

/**
 * Creates reusable {@link validateHeaders} function.
 *
 * @template T Target object type
 * @danger You must configure the generic argument `T`
 */
export function createValidateHeaders(): never;

/**
 * Creates reusable {@link validateHeaders} function.
 *
 * @template T Target object type
 * @returns Reusable decoder function
 */
export function createValidateHeaders<T extends object>(): (
  input: Record<string, string | string[] | undefined>,
) => IValidation<Resolved<T>>;

/** @internal */
export function createValidateHeaders<T>(): (
  input: Record<string, string | string[] | undefined>,
) => IValidation<Resolved<T>> {
  NoTransformConfigurationError("http.createValidateHeaders");
}

/**
 * Creates reusable {@link parameter} function.
 *
 * @template T Target atomic type
 * @danger You must configure the generic argument `T`
 */
export function createParameter(): never;

/**
 * Creates reusable {@link parameter} function.
 *
 * @template T Target atomic type
 * @returns Reusable decoder function
 */
export function createParameter<T extends Atomic.Type | null>(): (
  input: string,
) => T;

/** @internal */
export function createParameter<T extends Atomic.Type | null>(): (
  input: string,
) => T {
  NoTransformConfigurationError("http.createParameter");
}
