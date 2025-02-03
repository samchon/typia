import { IJsonSchemaCollection } from "./schemas/json/IJsonSchemaCollection";

import { IValidation } from "./IValidation";
import { Primitive } from "./Primitive";
import { TypeGuardError } from "./TypeGuardError";

/* ===========================================================
    JSON
      - METADATA
      - PARSE
      - STRINGIFY
      - FACTORY FUNCTIONS
==============================================================
    METADATA
----------------------------------------------------------- */
/**
 * > You must configure the generic argument `Types`.
 *
 * JSON Schemas generator.
 *
 * Creates a JSON schema list which contains both main JSON schemas
 * and components. Note that, all of the named types are stored in the
 * {@link IJsonSchemaCollection.components} property for the `$ref` referencing.
 *
 * Also, you can specify the OpenAPI version by configuring the second generic
 * argument `Version`. For reference, the default version is `"3.1"`, and key
 * different of `"3.0"` and `"3.1"` is whether supporting the tuple type or not.
 *
 * @template Types Tuple of target types
 * @template Version Version of OpenAPI specification. Default is 3.1
 * @return JSON schema list
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function schemas(): never;

/**
 * JSON Schemas generator.
 *
 * Creates a JSON schema list which contains both main JSON schemas
 * and components. Note that, all of the named types are stored in the
 * {@link IJsonSchemaCollection.components} property for the `$ref` referencing.
 *
 * Also, you can specify the OpenAPI version by configuring the second generic
 * argument `Version`. For reference, the default version is `"3.1"`, and key
 * different of `"3.0"` and `"3.1"` is whether supporting the tuple type or not.
 *
 * @template Types Tuple of target types
 * @template Version Version of OpenAPI specification. Default is 3.1
 * @return JSON schema list
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function schemas<
  Types extends unknown[],
  Version extends "3.0" | "3.1" = "3.1",
>(): IJsonSchemaCollection<Version, Types>;

/**
 * @internal
 */
export function schemas(): never {
  halt("schemas");
}

/**
 * > You must configure the generic argument `Types`.
 *
 * JSON Schemas generator.
 *
 * Creates a JSON schema list which contains both main JSON schemas
 * and components. Note that, all of the named types are stored in the
 * {@link IJsonSchemaCollection.components} property for the `$ref` referencing.
 *
 * Also, you can specify the OpenAPI version by configuring the second generic
 * argument `Version`. For reference, the default version is `"3.1"`, and key
 * different of `"3.0"` and `"3.1"` is whether supporting the tuple type or not.
 *
 * @template Types Tuple of target types
 * @template Version Version of OpenAPI specification. Default is 3.1
 * @return JSON schema list
 *
 * @deprcated Use {@link schemas} function instead please.
 *            This function would be changed to return {@linkk ILlmApplication} like
 *            structure in the future version (maybe next v8 major update).
 * @author Jeongho Nam - https://github.com/samchon
 */
export function application(): never;

/**
 * JSON Schemas generator.
 *
 * Creates a JSON schema list which contains both main JSON schemas
 * and components. Note that, all of the named types are stored in the
 * {@link IJsonSchemaCollection.components} property for the `$ref` referencing.
 *
 * Also, you can specify the OpenAPI version by configuring the second generic
 * argument `Version`. For reference, the default version is `"3.1"`, and key
 * different of `"3.0"` and `"3.1"` is whether supporting the tuple type or not.
 *
 * @template Types Tuple of target types
 * @template Version Version of OpenAPI specification. Default is 3.1
 * @return JSON schema list
 *
 * @deprcated Use {@link schemas} function instead please.
 *            This function would be changed to return {@linkk ILlmApplication} like
 *            structure in the future version (maybe next v8 major update).
 * @author Jeongho Nam - https://github.com/samchon
 */
export function application<
  Types extends unknown[],
  Version extends "3.0" | "3.1" = "3.1",
>(): IJsonSchemaCollection<Version, Types>;

/**
 * @internal
 */
export function application(): never {
  halt("application");
}

// /**
//  * > You must configure the generic argument `App`.
//  *
//  * TypeScript functions to JSON schema based application schema.
//  *
//  * Creates an application schema collecting the functions' schema based on the
//  * JSON schema specification.
//  *
//  * The default version of the OpenAPI specification is `"3.1"`, but you can
//  * specify the version by configuring the second generic argument `Version`.
//  *
//  * @template App Target class or interface type collecting the functions
//  * @template Version Version of OpenAPI specification. Default is 3.1
//  * @returns Application schema of JSON schema based
//  *
//  * @author Jeongho Nam - https://github.com/samchon
//  */
// export function application(): never;

// /**
//  * TypeScript functions to JSON schema based application schema.
//  *
//  * Creates an application schema collecting the functions' schema based on the
//  * JSON schema specification.
//  *
//  * The default version of the OpenAPI specification is `"3.1"`, but you can
//  * specify the version by configuring the second generic argument `Version`.
//  *
//  * @template App Target class or interface type collecting the functions
//  * @template Version Version of OpenAPI specification. Default is 3.1
//  * @returns Application schema of JSON schema based
//  *
//  * @author Jeongho Nam - https://github.com/samchon
//  */
// export function application<
//   App extends object,
//   Version extends "3.0" | "3.1" = "3.1",
// >(): IJsonApplication<Version, App>;

// /**
//  * @internal
//  */
// export function application(): never {
//   halt("application");
// }

/* -----------------------------------------------------------
    PARSE
----------------------------------------------------------- */
/**
 * > You must configure the generic argument `T`.
 *
 * Safe `JSON.parse()` function with type assertion.
 *
 * `typia.json.assertParse()` is a combination function of `JSON.parse()` and
 * {@link assert}. Therefore, it converts a JSON (JavaScript Object Notation) string
 * to a `T` typed instance with type assertion.
 *
 * In such reason, when parsed JSON string value is not matched with the type `T`, it
 * throws {@link TypeGuardError} or custom error generated by *errorFactory*. Otherwise,
 * there's no problem on the parsed value, the parsed value would be returned.
 *
 * @template T Expected type of parsed value
 * @param input JSON string
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Parsed value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertParse(
  input: string,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Safe `JSON.parse()` function with type assertion.
 *
 * `typia.json.assertParse()` is a combination function of `JSON.parse()` and
 * {@link assert}. Therefore, it converts a JSON (JavaScript Object Notation) string
 * to a `T` typed instance with type assertion.
 *
 * In such reason, when parsed JSON string value is not matched with the type `T`,
 * it throws {@link TypeGuardError} or custom error generated by *errorFactory*.
 * Otherwise, there's no problem on the parsed value, the parsed value would be
 * returned.
 *
 * @template T Expected type of parsed value
 * @param input JSON string
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Parsed value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertParse<T>(
  input: string,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): Primitive<T>;

/**
 * @internal
 */
export function assertParse<T>(): Primitive<T> {
  halt("assertParse");
}

/**
 * > You must configure the generic argument `T`.
 *
 * Safe `JSON.parse()` function with type checking.
 *
 * `typia.json.isParse()` is a combination function of `JSON.parse()` and {@link is}.
 * Therefore, it converts a JSON (JavaScript Object Notation) string to a `T` typed
 * instance with type checking.
 *
 * In such reason, when parsed JSON string value is not matched with the type `T`, it
 * returns `null` value. Otherwise, there's no problem on the parsed value, the parsed
 * value would be returned.
 *
 * @template T Expected type of parsed value
 * @param input JSON string
 * @returns Parsed value when exact type, otherwise `null`
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function isParse(input: string): never;

/**
 * Safe `JSON.parse()` function with type checking.
 *
 * `typia.json.isParse()` is a combination function of `JSON.parse()` and {@link is}.
 * Therefore, it converts a JSON (JavaScript Object Notation) string to a `T` typed
 * instance with type checking.
 *
 * In such reason, when parsed JSON string value is not matched with the type `T`, it
 * returns `null` value. Otherwise, there's no problem on the parsed value, the parsed
 * value would be returned.
 *
 * @template T Expected type of parsed value
 * @param input JSON string
 * @returns Parsed value when exact type, otherwise `null`
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function isParse<T>(input: string): Primitive<T> | null;

/**
 * @internal
 */
export function isParse<T>(): Primitive<T> | null {
  halt("isParse");
}

/**
 * > You must configure the generic argument `T`.
 *
 * Safe `JSON.parse()` function with detailed type validation.
 *
 * `typia.json.validateParse()` is a combination function of `JSON.parse()` and
 * {@link validate}. Therefore, it converts a JSON (JavaScript Object Notation) string
 * to a `T` typed instance with detailed type validation.
 *
 * In such reason, when parsed JSON string value is not matched with the type `T`, it
 * returns {@link IValidation.IFailure} value with detailed error reasons. Otherwise,
 * there's no problem on the parsed value, the parsed value would be stored in `data`
 * property of the output {@link IValidation.ISuccess} instance.
 *
 * @template T Expected type of parsed value
 * @param input JSON string
 * @returns Validation result with JSON parsed value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function validateParse(input: string): never;

/**
 * Safe `JSON.parse()` function with detailed type validation.
 *
 * `typia.json.validateParse()` is a combination function of `JSON.parse()` and
 * {@link validate}. Therefore, it converts a JSON (JavaScript Object Notation) string
 * to a `T` typed instance with detailed type validation.
 *
 * In such reason, when parsed JSON string value is not matched with the type `T`, it
 * returns {@link IValidation.IFailure} value with detailed error reasons. Otherwise,
 * there's no problem on the parsed value, the parsed value would be stored in `data`
 * property of the output {@link IValidation.ISuccess} instance.
 *
 * @template T Expected type of parsed value
 * @param input JSON string
 * @returns Validation result with JSON parsed value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function validateParse<T>(input: string): IValidation<Primitive<T>>;

/**
 * @internal
 */
export function validateParse<T>(): IValidation<Primitive<T>> {
  halt("validateParse");
}

/* -----------------------------------------------------------
    STRINGIFY
----------------------------------------------------------- */
/**
 * 8x faster `JSON.stringify()` function.
 *
 * Converts an input value to a JSON (JavaScript Object Notation) string, about 8x
 * faster than the native `JSON.stringify()` function. The 5x faster principle is
 * because it writes an optimized JSON conversion plan, only for the type `T`.
 *
 * For reference, this `typia.json.stringify()` does not validate the input value type.
 * It just believes that the input value is following the type `T`. Therefore, if you
 * can't ensure the input value type, it would be better to call one of below
 * functions instead.
 *
 *  - {@link assertStringify}
 *  - {@link isStringify}
 *  - {@link validateStringify}
 *
 * @template T Type of the input value
 * @param input A value to be converted
 * @return JSON string value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function stringify<T>(input: T): string;

/**
 * @internal
 */
export function stringify(): never {
  halt("stringify");
}

/**
 * 5x faster `JSON.stringify()` function with type assertion.
 *
 * `typia.json.assertStringify()` is a combination function of {@link assert} and
 * {@link stringify}. Therefore, it converts an input value to
 * JSON (JavaScript Object Notation) string, with type assertion.
 *
 * In such reason, when `input` value is not matched with the type `T`, it throws an
 * {@link TypeGuardError} or custom error generated by *errorFactory*. Otherwise,
 * there's no problem on the `input` value, JSON string would be returned.
 *
 * For reference, with type assertion, it is even 5x times faster than the native
 * `JSON.stringify()` function. So, just enjoy the safe and fast JSON conversion
 * with confidence.
 *
 * @template T Type of the input value
 * @param input A value to be asserted and converted
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @return JSON string value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertStringify<T>(
  input: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): string;

/**
 * 5x faster `JSON.stringify()` function with type assertion.
 *
 * `typia.json.assertStringify()` is a combination function of {@link assert} and
 * {@link stringify}. Therefore, it converts an input value to
 * JSON (JavaScript Object Notation) string, with type assertion.
 *
 * In such reason, when `input` value is not matched with the type `T`, it throws an
 * {@link TypeGuardError} or custom error generated by *errorFactory*. Otherwise,
 * there's no problem on the `input` value, JSON string would be returned.
 *
 * For reference, with type assertion, it is even 5x times faster than the native
 * `JSON.stringify()` function. So, just enjoy the safe and fast JSON conversion
 * with confidence.
 *
 * @template T Type of the input value
 * @param input A value to be asserted and converted
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @return JSON string value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertStringify<T>(
  input: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): unknown;

/**
 * @internal
 */
export function assertStringify(): string {
  halt("assertStringify");
}

/**
 * 7x faster `JSON.stringify()` function with type checking.
 *
 * `typia.json.stringify()` is a combination function of {@link is} and
 * {@link stringify}. Therefore, it converts an input value to JSON
 * (JavaScript Object Notation) string, with type checking.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * `null` value. Otherwise, there's no problem on the `input` value, JSON string
 * would be returned.
 *
 * For reference, with type checking, it is even 7x times faster than the native
 * `JSON.stringify()` function. So, just enjoy the safe and fast JSON conversion
 * with confidence.
 *
 * @template T Type of the input value
 * @param input A value to be checked and converted
 * @return JSON string value when exact type, otherwise null
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function isStringify<T>(input: T): string | null;

/**
 * 7x faster `JSON.stringify()` function with type checking.
 *
 * `typia.json.isStringify()` is a combination function of {@link is} and
 * {@link stringify}. Therefore, it converts an input value to JSON
 * (JavaScript Object Notation) string, with type checking.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * `null` value. Otherwise, there's no problem on the `input` value, JSON string
 * would be returned.
 *
 * For reference, with type checking, it is even 7x times faster than the native
 * `JSON.stringify()` function. So, just enjoy the safe and fast JSON conversion
 * with confidence.
 *
 * @template T Type of the input value
 * @param input A value to be checked and converted
 * @return JSON string value when exact type, otherwise null
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function isStringify<T>(input: unknown): string | null;

/**
 * @internal
 */
export function isStringify(): string | null {
  halt("isStringify");
}

/**
 * 5x faster `JSON.stringify()` function with detailed type validation.
 *
 * `typia.json.validateStringify()` is a combination function of {@link validate} and
 * {@link stringify}. Therefore, it converts an input value to JSON (JavaScript Object
 * Notation) string, with detailed type validation.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * {@link IValidation.IFailure} value with detailed error reasons. Otherwise,
 * there's no problem on the `input` value, JSON string would be stored in `data`
 * property of the output {@link IValidation.ISuccess} instance.
 *
 * For reference, with detailed type validation, it is even 5x times faster than the
 * native `JSON.stringify()` function. So, just enjoy the safe and fast JSON
 * conversion with confidence.
 *
 * @template T Type of the input value
 * @param input A value to be checked and converted
 * @returns Validation result with JSON string value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function validateStringify<T>(input: T): IValidation<string>;

/**
 * 5x faster `JSON.stringify()` function with detailed type validation.
 *
 * `typia.json.validateStringify()` is a combination function of {@link validate} and
 * {@link stringify}. Therefore, it converts an input value to JSON (JavaScript Object
 * Notation) string, with detailed type validation.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * {@link IValidation.IFailure} value with detailed error reasons. Otherwise,
 * there's no problem on the `input` value, JSON string would be stored in `data`
 * property of the output {@link IValidation.ISuccess} instance.
 *
 * For reference, with detailed type validation, it is even 5x times faster than the
 * native `JSON.stringify()` function. So, just enjoy the safe and fast JSON
 * conversion with confidence.
 *
 * @template T Type of the input value
 * @param input A value to be checked and converted
 * @returns Validation result with JSON string value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function validateStringify<T>(input: unknown): IValidation<string>;

/**
 * @internal
 */
export function validateStringify(): IValidation<string> {
  halt("validateStringify");
}

/* -----------------------------------------------------------
    FACTORY FUNCTIONS
----------------------------------------------------------- */
/**
 * Creates a reusable {@link isParse} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsParse(): never;

/**
 * Creates a reusable {@link isParse} function.
 *
 * @template T Expected type of parsed value
 * @returns A reusable `isParse` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsParse<T>(): (input: string) => Primitive<T> | null;

/**
 * @internal
 */
export function createIsParse<T>(): (input: string) => Primitive<T> | null {
  halt("createIsParse");
}

/**
 * Creates a reusable {@link assertParse} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertParse(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Creates a reusable {@link assertParse} function.
 *
 * @template T Expected type of parsed value
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns A reusable `assertParse` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertParse<T>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: string) => Primitive<T>;

/**
 * @internal
 */
export function createAssertParse<T>(): (input: string) => Primitive<T> {
  halt("createAssertParse");
}

/**
 * Creates a reusable {@link validateParse} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidateParse(): never;

/**
 * Creates a reusable {@link validateParse} function.
 *
 * @template T Expected type of parsed value
 * @returns A reusable `validateParse` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidateParse<T>(): (
  input: string,
) => IValidation<Primitive<T>>;

/**
 * @internal
 */
export function createValidateParse<T>(): (
  input: string,
) => IValidation<Primitive<T>> {
  halt("createValidateParse");
}

/**
 * Creates a reusable {@link stringify} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createStringify(): never;

/**
 * Creates a reusable {@link stringify} function.
 *
 * @template T Type of the input value
 * @returns A reusable `stringify` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createStringify<T>(): (input: T) => string;

/**
 * @internal
 */
export function createStringify<T>(): (input: T) => string {
  halt("createStringify");
}

/**
 * Creates a reusable {@link assertStringify} function.
 *
 * @danger You must configure the generic argument `T`
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertStringify(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Creates a reusable {@link assertStringify} function.
 *
 * @template T Type of the input value
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns A reusable `assertStringify` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertStringify<T>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: unknown) => string;

/**
 * @internal
 */
export function createAssertStringify(): (input: unknown) => string {
  halt("createAssertStringify");
}

/**
 * Creates a reusable {@link isStringify} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsStringify(): never;

/**
 * Creates a reusable {@link isStringify} function.
 *
 * @template T Type of the input value
 * @returns A reusable `isStringify` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsStringify<T>(): (input: unknown) => string | null;

/**
 * @internal
 */
export function createIsStringify(): (input: unknown) => string | null {
  halt("createIsStringify");
}

/**
 * Creates a reusable {@link validateStringify} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidateStringify(): never;

/**
 * Creates a reusable {@link validateStringify} function.
 *
 * @template T Type of the input value
 * @returns A reusable `validateStringify` function

 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidateStringify<T>(): (
  input: unknown,
) => IValidation<string>;

/**
 * @internal
 */
export function createValidateStringify(): (
  input: unknown,
) => IValidation<string> {
  halt("createValidateStringify");
}

/**
 * @internal
 */
function halt(name: string): never {
  throw new Error(
    `Error on typia.json.${name}(): no transform has been configured. Read and follow https://typia.io/docs/setup please.`,
  );
}
