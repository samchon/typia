import { Namespace } from "./functional/Namespace";

import { Atomic } from "./typings/Atomic";

import { IValidation } from "./IValidation";
import { Resolved } from "./Resolved";

/* ===========================================================
    HTTP
      - QUERY
      - HEADERS
      - PARAMETER
      - FACTORY FUNCTIONS
==============================================================
    QUERY
----------------------------------------------------------- */
/**
 * > You must configure the generic argument `T`.
 *
 * URL query decoder.
 *
 * `typia.http.query()` is a function decoding a query string or an `URLSearchParams`
 * instance, with automatic type casting to the expected type. When property type be
 * defined as `boolean` or `number` type, `typia.http.query()` will cast the value to
 * the expected type when decoding.
 *
 * By the way, as URL query is not enough to express complex data structures,
 * `typia.http.query()` function has some limitations. If target type `T` is not
 * following those restrictions, compilation errors would be occured.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  4. By the way, union type never be not allowed
 *
 * Also, `typia.http.query()` function does not perform validation about the decoded
 * value. Therefore, if you can't sure that input data is following the `T` type,
 * it would better to call one of below functions intead.
 *
 *  - {@link assertQuery}
 *  - {@link isQuery}
 *  - {@link validateQuery}
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Decoded query object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function query(): never;

/**
 * URL query decoder.
 *
 * `typia.http.query()` is a function decoding a query string or an `URLSearchParams`
 * instance, with automatic type casting to the expected type. When property type be
 * defined as `boolean` or `number` type, `typia.http.query()` will cast the value to
 * the expected type when decoding.
 *
 * By the way, as URL query is not enough to express complex data structures,
 * `typia.http.query()` function has some limitations. If target type `T` is not
 * following those restrictions, compilation errors would be occured.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  4. By the way, union type never be not allowed
 *
 * Also, `typia.http.query()` function does not perform validation about the decoded
 * value. Therefore, if you can't sure that input data is following the `T` type,
 * it would better to call one of below functions intead.
 *
 *  - {@link assertQuery}
 *  - {@link isQuery}
 *  - {@link validateQuery}
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Decoded query object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function query<T extends object>(
  input: string | URLSearchParams,
): Resolved<T>;

/**
 * @internal
 */
export function query(): never {
  halt("query");
}
Object.assign(query, Namespace.http.query());

/**
 * > You must configure the generic argument `T`.
 *
 * URL query decoder with type assertion.
 *
 * `typia.http.assertQuery()` is a function decoding a query string or an
 * `URLSearchParams` instance, with automatic type casting to the expected type.
 * When property type be defined as `boolean` or `number` type,
 * `typia.http.assertQuery()` will cast the value to the expected type when decoding.
 *
 * Also, after decoding, `typia.http.assertQuery()` performs type assertion to the
 * decoded value by combining with {@link assert} function. Therefore, when the
 * decoded value is not following the `T` type, {@link TypeGuardError} would be
 * thrown.
 *
 * By the way, as URL query is not enough to express complex data structures,
 * `typia.http.assertQuery()` function has some limitations. If target type `T` is
 * notfollowing those restrictions, compilation errors would be occured.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  4. By the way, union type never be not allowed
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Decoded query object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertQuery(): never;

/**
 * URL query decoder with type assertion.
 *
 * `typia.http.assertQuery()` is a function decoding a query string or an
 * `URLSearchParams` instance, with automatic type casting to the expected type.
 * When property type be defined as `boolean` or `number` type,
 * `typia.http.assertQuery()` will cast the value to the expected type when decoding.
 *
 * Also, after decoding, `typia.http.assertQuery()` performs type assertion to the
 * decoded value by combining with {@link assert} function. Therefore, when the
 * decoded value is not following the `T` type, {@link TypeGuardError} would be
 * thrown.
 *
 * By the way, as URL query is not enough to express complex data structures,
 * `typia.http.assertQuery()` function has some limitations. If target type `T` is
 * notfollowing those restrictions, compilation errors would be occured.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  4. By the way, union type never be not allowed
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Decoded query object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertQuery<T extends object>(
  input: string | URLSearchParams,
): Resolved<T>;

/**
 * @internal
 */
export function assertQuery(): never {
  halt("assertQuery");
}
Object.assign(assertQuery, Namespace.http.query());
Object.assign(assertQuery, Namespace.assert("http.assertQuery"));

/**
 * > You must configure the generic argument `T`.
 *
 * URL query decoder with type checking.
 *
 * `typia.http.isQuery()` is a function decoding a query string or an
 * `URLSearchParams` instance, with automatic type casting to the expected type.
 * When property type be defined as `boolean` or `number` type,
 * `typia.http.isQuery()` will cast the value to the expected type when decoding.
 *
 * Also, after decoding, `typia.http.isQuery()` performs type checking to the
 * decoded value by combining with {@link is} function. Therefore, when the
 * decoded value is not following the `T` type, `null` value would be returned.
 *
 * By the way, as URL query is not enough to express complex data structures,
 * `typia.http.isQuery()` function has some limitations. If target type `T` is
 * notfollowing those restrictions, compilation errors would be occured.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  4. By the way, union type never be not allowed
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Decoded query object or `null` value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function isQuery(): never;

/**
 * URL query decoder with type checking.
 *
 * `typia.http.isQuery()` is a function decoding a query string or an
 * `URLSearchParams` instance, with automatic type casting to the expected type.
 * When property type be defined as `boolean` or `number` type,
 * `typia.http.isQuery()` will cast the value to the expected type when decoding.
 *
 * Also, after decoding, `typia.http.isQuery()` performs type checking to the
 * decoded value by combining with {@link is} function. Therefore, when the
 * decoded value is not following the `T` type, `null` value would be returned.
 *
 * By the way, as URL query is not enough to express complex data structures,
 * `typia.http.isQuery()` function has some limitations. If target type `T` is
 * notfollowing those restrictions, compilation errors would be occured.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  4. By the way, union type never be not allowed
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Decoded query object or `null` value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function isQuery<T extends object>(
  input: string | URLSearchParams,
): Resolved<T> | null;

/**
 * @internal
 */
export function isQuery(): never {
  halt("isQuery");
}
Object.assign(isQuery, Namespace.http.query());
Object.assign(isQuery, Namespace.is());

/**
 * > You must configure the generic argument `T`.
 *
 * URL query decoder with type validation.
 *
 * `typia.http.validateQuery()` is a function decoding a query string or an
 * `URLSearchParams` instance, with automatic type casting to the expected type.
 * When property type be defined as `boolean` or `number` type,
 * `typia.http.validateQuery()` will cast the value to the expected type when decoding.
 *
 * Also, after decoding, `typia.http.validateQuery()` performs type validation to the
 * decoded value by combining with {@link validate} function. Therefore, when the
 * decoded value is not following the `T` type, {@link IValidation.IFailure} would
 * be returned. Otherwise, {@link IValidation.ISuccess} would be returned.
 *
 * By the way, as URL query is not enough to express complex data structures,
 * `typia.http.validateQuery()` function has some limitations. If target type `T` is
 * notfollowing those restrictions, compilation errors would be occured.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  4. By the way, union type never be not allowed
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Validation result with decoded query object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function validateQuery(): never;

/**
 * URL query decoder with type validation.
 *
 * `typia.http.validateQuery()` is a function decoding a query string or an
 * `URLSearchParams` instance, with automatic type casting to the expected type.
 * When property type be defined as `boolean` or `number` type,
 * `typia.http.validateQuery()` will cast the value to the expected type when decoding.
 *
 * Also, after decoding, `typia.http.validateQuery()` performs type validation to the
 * decoded value by combining with {@link validate} function. Therefore, when the
 * decoded value is not following the `T` type, {@link IValidation.IFailure} would
 * be returned. Otherwise, {@link IValidation.ISuccess} would be returned.
 *
 * By the way, as URL query is not enough to express complex data structures,
 * `typia.http.validateQuery()` function has some limitations. If target type `T` is
 * notfollowing those restrictions, compilation errors would be occured.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  4. By the way, union type never be not allowed
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Validation result with decoded query object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function validateQuery<T extends object>(
  input: string | URLSearchParams,
): IValidation<Resolved<T>>;

/**
 * @internal
 */
export function validateQuery(): never {
  halt("validateQuery");
}
Object.assign(validateQuery, Namespace.http.query());
Object.assign(validateQuery, Namespace.validate());

/* -----------------------------------------------------------
    HEADERS
----------------------------------------------------------- */
/**
 * > You must configure the generic argument `T`.
 *
 * Headers decoder (for express and fastify).
 *
 * `typia.http.headers()` is a function decoding an header instance, with automatic
 * type casting to the expected type. When property type be defined as `boolean` or
 * `number` type, `typia.http.headers()` will cast the value to the expected type.
 *
 * By the way, as HTTP headers are not enough to express complex data structures,
 * `typia.http.headers()` function has some limitations. If target type `T` is not
 * following those restrictions, compilation errors would be occured.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Property key must be lower case
 *  4. Property value cannot be `null`, but `undefined` is possible
 *  5. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  6. By the way, union type never be not allowed
 *  7. Property `set-cookie` must be array type
 *  8. Those properties cannot be array type
 *    - age
 *    - authorization
 *    - content-length
 *    - content-type
 *    - etag
 *    - expires
 *    - from
 *    - host
 *    - if-modified-since
 *    - if-unmodified-since
 *    - last-modified
 *    - location
 *    - max-forwards
 *    - proxy-authorization
 *    - referer
 *    - retry-after
 *    - server
 *    - user-agent
 *
 * Also, `typia.http.headers()` function does not perform validation about the decoded
 * value. Therefore, if you can't sure that input data is following the `T` type,
 * it would better to call one of below functions intead.
 *
 *  - {@link assertHeaders}
 *  - {@link isHeaders}
 *  - {@link validateHeaders}
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Decoded headers object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function headers(): never;

/**
 * Headers decoder (for express and fastify).
 *
 * `typia.http.headers()` is a function decoding an header instance, with automatic
 * type casting to the expected type. When property type be defined as `boolean` or
 * `number` type, `typia.http.headers()` will cast the value to the expected type.
 *
 * By the way, as HTTP headers are not enough to express complex data structures,
 * `typia.http.headers()` function has some limitations. If target type `T` is not
 * following those restrictions, compilation errors would be occured.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Property key must be lower case
 *  4. Property value cannot be `null`, but `undefined` is possible
 *  5. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  6. By the way, union type never be not allowed
 *  7. Property `set-cookie` must be array type
 *  8. Those properties cannot be array type
 *    - age
 *    - authorization
 *    - content-length
 *    - content-type
 *    - etag
 *    - expires
 *    - from
 *    - host
 *    - if-modified-since
 *    - if-unmodified-since
 *    - last-modified
 *    - location
 *    - max-forwards
 *    - proxy-authorization
 *    - referer
 *    - retry-after
 *    - server
 *    - user-agent
 *
 * Also, `typia.http.headers()` function does not perform validation about the decoded
 * value. Therefore, if you can't sure that input data is following the `T` type,
 * it would better to call one of below functions intead.
 *
 *  - {@link assertHeaders}
 *  - {@link isHeaders}
 *  - {@link validateHeaders}
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Decoded headers object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function headers<T extends object>(
  input: Record<string, string | string[] | undefined>,
): Resolved<T>;

/**
 * @internal
 */
export function headers(): never {
  halt("headers");
}
Object.assign(headers, Namespace.http.headers());

/**
 * > You must configure the generic argument `T`.
 *
 * Headers decoder with type assertion (for express and fastify).
 *
 * `typia.http.assertHeaders()` is a function decoding an header instance, with
 * automatic type casting to the expected type. When property type be defined as
 * `boolean` or `number` type, `typia.http.headers()` will cast the value to the
 * expected type.
 *
 * Also, after decoding, `typia.http.assertHeaders()` performs type assertion to the
 * decoded value by combining with {@link assert} function. Therefore, when the
 * decoded value is not following the `T` type, {@link TypeGuardError} would be
 * thrown.
 *
 * By the way, as HTTP headers are not enough to express complex data structures,
 * `typia.http.headers()` function has some limitations. If target type `T` is not
 * following those restrictions, compilation errors would be occured.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Property key must be lower case
 *  4. Property value cannot be `null`, but `undefined` is possible
 *  5. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  6. By the way, union type never be not allowed
 *  7. Property `set-cookie` must be array type
 *  8. Those properties cannot be array type
 *    - age
 *    - authorization
 *    - content-length
 *    - content-type
 *    - etag
 *    - expires
 *    - from
 *    - host
 *    - if-modified-since
 *    - if-unmodified-since
 *    - last-modified
 *    - location
 *    - max-forwards
 *    - proxy-authorization
 *    - referer
 *    - retry-after
 *    - server
 *    - user-agent
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Decoded headers object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertHeaders(): never;

/**
 * Headers decoder with type assertion (for express and fastify).
 *
 * `typia.http.assertHeaders()` is a function decoding an header instance, with
 * automatic type casting to the expected type. When property type be defined as
 * `boolean` or `number` type, `typia.http.headers()` will cast the value to the
 * expected type.
 *
 * Also, after decoding, `typia.http.assertHeaders()` performs type assertion to the
 * decoded value by combining with {@link assert} function. Therefore, when the
 * decoded value is not following the `T` type, {@link TypeGuardError} would be
 * thrown.
 *
 * By the way, as HTTP headers are not enough to express complex data structures,
 * `typia.http.headers()` function has some limitations. If target type `T` is not
 * following those restrictions, compilation errors would be occured.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Property key must be lower case
 *  4. Property value cannot be `null`, but `undefined` is possible
 *  5. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  6. By the way, union type never be not allowed
 *  7. Property `set-cookie` must be array type
 *  8. Those properties cannot be array type
 *    - age
 *    - authorization
 *    - content-length
 *    - content-type
 *    - etag
 *    - expires
 *    - from
 *    - host
 *    - if-modified-since
 *    - if-unmodified-since
 *    - last-modified
 *    - location
 *    - max-forwards
 *    - proxy-authorization
 *    - referer
 *    - retry-after
 *    - server
 *    - user-agent
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Decoded headers object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertHeaders<T extends object>(
  input: Record<string, string | string[] | undefined>,
): Resolved<T>;

/**
 * @internal
 */
export function assertHeaders(): never {
  halt("assertHeaders");
}
Object.assign(assertHeaders, Namespace.http.headers());
Object.assign(assertHeaders, Namespace.assert("http.assertHeaders"));

/**
 * > You must configure the generic argument `T`.
 *
 * Headers decoder with type checking (for express and fastify).
 *
 * `typia.http.isHeaders()` is a function decoding an header instance, with
 * automatic type casting to the expected type. When property type be defined as
 * `boolean` or `number` type, `typia.http.headers()` will cast the value to the
 * expected type.
 *
 * Also, after decoding, `typia.http.isHeaders()` performs type checking to the
 * decoded value by combining with {@link is} function. Therefore, when the
 * decoded value is not following the `T` type, `null` value would be returned.
 *
 * By the way, as HTTP headers are not enough to express complex data structures,
 * `typia.http.headers()` function has some limitations. If target type `T` is not
 * following those restrictions, compilation errors would be occured.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Property key must be lower case
 *  4. Property value cannot be `null`, but `undefined` is possible
 *  5. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  6. By the way, union type never be not allowed
 *  7. Property `set-cookie` must be array type
 *  8. Those properties cannot be array type
 *    - age
 *    - authorization
 *    - content-length
 *    - content-type
 *    - etag
 *    - expires
 *    - from
 *    - host
 *    - if-modified-since
 *    - if-unmodified-since
 *    - last-modified
 *    - location
 *    - max-forwards
 *    - proxy-authorization
 *    - referer
 *    - retry-after
 *    - server
 *    - user-agent
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Decoded headers object or `null` value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function isHeaders(): never;

/**
 * > You must configure the generic argument `T`.
 *
 * Headers decoder with type checking (for express and fastify).
 *
 * `typia.http.isHeaders()` is a function decoding an header instance, with
 * automatic type casting to the expected type. When property type be defined as
 * `boolean` or `number` type, `typia.http.headers()` will cast the value to the
 * expected type.
 *
 * Also, after decoding, `typia.http.isHeaders()` performs type checking to the
 * decoded value by combining with {@link is} function. Therefore, when the
 * decoded value is not following the `T` type, `null` value would be returned.
 *
 * By the way, as HTTP headers are not enough to express complex data structures,
 * `typia.http.headers()` function has some limitations. If target type `T` is not
 * following those restrictions, compilation errors would be occured.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Property key must be lower case
 *  4. Property value cannot be `null`, but `undefined` is possible
 *  5. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  6. By the way, union type never be not allowed
 *  7. Property `set-cookie` must be array type
 *  8. Those properties cannot be array type
 *    - age
 *    - authorization
 *    - content-length
 *    - content-type
 *    - etag
 *    - expires
 *    - from
 *    - host
 *    - if-modified-since
 *    - if-unmodified-since
 *    - last-modified
 *    - location
 *    - max-forwards
 *    - proxy-authorization
 *    - referer
 *    - retry-after
 *    - server
 *    - user-agent
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Decoded headers object or `null` value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function isHeaders<T extends object>(
  input: Record<string, string | string[] | undefined>,
): Resolved<T> | null;

/**
 * @internal
 */
export function isHeaders(): never {
  halt("isHeaders");
}
Object.assign(isHeaders, Namespace.http.headers());
Object.assign(isHeaders, Namespace.is());

/**
 * > You must configure the generic argument `T`.
 *
 * Headers decoder with type validation (for express and fastify).
 *
 * `typia.http.validateHeaders()` is a function decoding an header instance, with
 * automatic type casting to the expected type. When property type be defined as
 * `boolean` or `number` type, `typia.http.headers()` will cast the value to the
 * expected type.
 *
 * Also, after decoding, `typia.http.validateHeaders()` performs type assertion to the
 * decoded value by combining with {@link validate} function. Therefore, when the
 * decoded value is not following the `T` type, {@link IValidation.IError} would be
 * returned. Otherwise, {@link IValidation.ISuccess} be returned.
 *
 * By the way, as HTTP headers are not enough to express complex data structures,
 * `typia.http.headers()` function has some limitations. If target type `T` is not
 * following those restrictions, compilation errors would be occured.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Property key must be lower case
 *  4. Property value cannot be `null`, but `undefined` is possible
 *  5. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  6. By the way, union type never be not allowed
 *  7. Property `set-cookie` must be array type
 *  8. Those properties cannot be array type
 *    - age
 *    - authorization
 *    - content-length
 *    - content-type
 *    - etag
 *    - expires
 *    - from
 *    - host
 *    - if-modified-since
 *    - if-unmodified-since
 *    - last-modified
 *    - location
 *    - max-forwards
 *    - proxy-authorization
 *    - referer
 *    - retry-after
 *    - server
 *    - user-agent
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Decoded headers object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function validateHeaders(): never;

/**
 * Headers decoder with type validation (for express and fastify).
 *
 * `typia.http.validateHeaders()` is a function decoding an header instance, with
 * automatic type casting to the expected type. When property type be defined as
 * `boolean` or `number` type, `typia.http.headers()` will cast the value to the
 * expected type.
 *
 * Also, after decoding, `typia.http.validateHeaders()` performs type assertion to the
 * decoded value by combining with {@link validate} function. Therefore, when the
 * decoded value is not following the `T` type, {@link IValidation.IError} would be
 * returned. Otherwise, {@link IValidation.ISuccess} be returned.
 *
 * By the way, as HTTP headers are not enough to express complex data structures,
 * `typia.http.headers()` function has some limitations. If target type `T` is not
 * following those restrictions, compilation errors would be occured.
 *
 *  1. Type `T` must be an object type
 *  2. Do not allow dynamic property
 *  3. Property key must be lower case
 *  4. Property value cannot be `null`, but `undefined` is possible
 *  5. Only `boolean`, `bigint`, `number`, `string` or their array types are allowed
 *  6. By the way, union type never be not allowed
 *  7. Property `set-cookie` must be array type
 *  8. Those properties cannot be array type
 *    - age
 *    - authorization
 *    - content-length
 *    - content-type
 *    - etag
 *    - expires
 *    - from
 *    - host
 *    - if-modified-since
 *    - if-unmodified-since
 *    - last-modified
 *    - location
 *    - max-forwards
 *    - proxy-authorization
 *    - referer
 *    - retry-after
 *    - server
 *    - user-agent
 *
 * @template T Expected type of decoded value
 * @param input Query string or URLSearchParams instance
 * @returns Decoded headers object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function validateHeaders<T extends object>(
  input: Record<string, string | string[] | undefined>,
): IValidation<Resolved<T>>;

/**
 * @internal
 */
export function validateHeaders(): never {
  halt("validateHeaders");
}
Object.assign(validateHeaders, Namespace.http.headers());
Object.assign(validateHeaders, Namespace.validate());

/* -----------------------------------------------------------
    PARAMETER
----------------------------------------------------------- */
/**
 * > You must configure the generic argument `T`.
 *
 * URL path parameter decoder.
 *
 * `typia.http.parameter()` is a function decoding a path parameter, with automatic
 * type casting to the expected type. When type `T` has beeen defined as `boolean` or
 * `number` type, `typia.http.parameter()` will cast the value to the expected type.
 *
 * Also, `typia.http.parameter()` performs type assertion to the decoded value by
 * combining with {@link assert} function. Therefore, when the decoded value is not
 * following the `T` type, {@link TypeGuardError} would be thrown.
 *
 * @template T Expected type of decoded value
 * @param input Path parameter string
 * @returns Decoded path parameter value
 */
export function parameter(): never;

/**
 * URL path parameter decoder.
 *
 * `typia.http.parameter()` is a function decoding a path parameter, with automatic
 * type casting to the expected type. When type `T` has beeen defined as `boolean` or
 * `number` type, `typia.http.parameter()` will cast the value to the expected type.
 *
 * Also, `typia.http.parameter()` performs type assertion to the decoded value by
 * combining with {@link assert} function. Therefore, when the decoded value is not
 * following the `T` type, {@link TypeGuardError} would be thrown.
 *
 * @template T Expected type of decoded value
 * @param input Path parameter string
 * @returns Decoded path parameter value
 */
export function parameter<T extends Atomic.Type | null>(
  input: string,
): Resolved<T>;

/**
 * @internal
 */
export function parameter(): never {
  halt("parameter");
}
Object.assign(parameter, Namespace.http.parameter());
Object.assign(parameter, Namespace.assert("http.parameter"));

/* -----------------------------------------------------------
    FACTORY FUNCTIONS
----------------------------------------------------------- */
/**
 * Creates a reusable {@link query} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the query object
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createQuery(): never;

/**
 * Creates a reusable {@link query} function.
 *
 * @template T The type of the query object
 * @returns A reusable `query` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createQuery<T extends object>(): (
  input: string | URLSearchParams,
) => T;

/**
 * @internal
 */
export function createQuery<T>(): (input: string | URLSearchParams) => T {
  halt("createQuery");
}
Object.assign(createQuery, Namespace.http.query());

/**
 * Creates a reusable {@link assertQuery} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the query object
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertQuery(): never;

/**
 * Creates a reusable {@link assertQuery} function.
 *
 * @template T The type of the query object
 * @returns A reusable `assertQuery` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertQuery<T extends object>(): (
  input: string | URLSearchParams,
) => T;

/**
 * @internal
 */
export function createAssertQuery<T>(): (input: string | URLSearchParams) => T {
  halt("createAssertQuery");
}
Object.assign(createAssertQuery, Namespace.http.query());
Object.assign(createAssertQuery, Namespace.assert("http.createAssertQuery"));

/**
 * Creates a reusable {@link isQuery} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the query object
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsQuery(): never;

/**
 * Creates a reusable {@link isQuery} function.
 *
 * @template T The type of the query object
 * @returns A reusable `isQuery` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsQuery<T extends object>(): (
  input: string | URLSearchParams,
) => T | null;

/**
 * @internal
 */
export function createIsQuery<T>(): (
  input: string | URLSearchParams,
) => T | null {
  halt("createIsQuery");
}
Object.assign(createIsQuery, Namespace.http.query());
Object.assign(createIsQuery, Namespace.is());

/**
 * Creates a reusable {@link validateQuery} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the query object
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidateQuery(): never;

/**
 * Creates a reusable {@link validateQuery} function.
 *
 * @template T The type of the query object
 * @returns A reusable `validateQuery` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidateQuery<T extends object>(): (
  input: string | URLSearchParams,
) => IValidation<Resolved<T>>;

/**
 * @internal
 */
export function createValidateQuery<T>(): (
  input: string | URLSearchParams,
) => IValidation<Resolved<T>> {
  halt("createValidateQuery");
}
Object.assign(createValidateQuery, Namespace.http.query());
Object.assign(createValidateQuery, Namespace.validate());

/**
 * Creates a reusable {@link headers} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the headers object
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createHeaders(): never;

/**
 * Creates a reusable {@link headers} function.
 *
 * @template T The type of the headers object
 * @returns A reusable `headers` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createHeaders<T extends object>(): (
  input: Record<string, string | string[] | undefined>,
) => T;

/**
 * @internal
 */
export function createHeaders<T>(): (
  input: Record<string, string | string[] | undefined>,
) => T {
  halt("createHeaders");
}
Object.assign(createHeaders, Namespace.http.headers());

/**
 * Creates a reusable {@link assertHeaders} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the headers object
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertHeaders(): never;

/**
 * Creates a reusable {@link assertHeaders} function.
 *
 * @template T The type of the headers object
 * @returns A reusable `assertHeaders` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertHeaders<T extends object>(): (
  input: Record<string, string | string[] | undefined>,
) => T;

/**
 * @internal
 */
export function createAssertHeaders<T>(): (
  input: Record<string, string | string[] | undefined>,
) => T {
  halt("createAssertHeaders");
}
Object.assign(createAssertHeaders, Namespace.http.headers());
Object.assign(
  createAssertHeaders,
  Namespace.assert("http.createAssertHeaders"),
);

/**
 * Creates a reusable {@link isHeaders} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the headers object
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsHeaders(): never;

/**
 * Creates a reusable {@link isHeaders} function.
 *
 * @template T The type of the headers object
 * @returns A reusable `isHeaders` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsHeaders<T extends object>(): (
  input: Record<string, string | string[] | undefined>,
) => T | null;

/**
 * @internal
 */
export function createIsHeaders<T>(): (
  input: Record<string, string | string[] | undefined>,
) => T | null {
  halt("createIsHeaders");
}
Object.assign(createIsHeaders, Namespace.http.headers());
Object.assign(createIsHeaders, Namespace.is());

/**
 * Creates a reusable {@link validateHeaders} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the headers object
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidateHeaders(): never;

/**
 * Creates a reusable {@link validateHeaders} function.
 *
 * @template T The type of the headers object
 * @returns A reusable `validateHeaders` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidateHeaders<T extends object>(): (
  input: Record<string, string | string[] | undefined>,
) => IValidation<Resolved<T>>;

/**
 * @internal
 */
export function createValidateHeaders<T>(): (
  input: Record<string, string | string[] | undefined>,
) => IValidation<Resolved<T>> {
  halt("createValidateHeaders");
}
Object.assign(createValidateHeaders, Namespace.http.headers());
Object.assign(createValidateHeaders, Namespace.validate());

/**
 * Creates a reusable {@link parameter} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the parameter value
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createParameter(): never;

/**
 * Creates a reusable {@link parameter} function.
 *
 * @template T The type of the parameter value
 * @returns A reusable `parameter` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createParameter<T extends Atomic.Type | null>(): (
  input: string,
) => T;

/**
 * @internal
 */
export function createParameter<T extends Atomic.Type | null>(): (
  input: string,
) => T {
  halt("createParameter");
}
Object.assign(createParameter, Namespace.http.parameter());
Object.assign(createParameter, Namespace.assert("http.createParameter"));

/**
 * @internal
 */
function halt(name: string): never {
    throw new Error(
        `Error on typia.http.${name}(): no transform has been configured. Read and follow https://typia.io/docs/setup please.`,
    );
}
