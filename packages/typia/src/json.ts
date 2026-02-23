import {
  IJsonSchemaApplication,
  IJsonSchemaCollection,
  IJsonSchemaUnit,
  IValidation,
  Primitive,
} from "@typia/interface";

import { TypeGuardError } from "./TypeGuardError";
import { NoTransformConfigurationError } from "./transformers/NoTransformConfigurationError";

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
<<<<<<< HEAD
 * > You must configure the generic argument `Type`.
 *
 * JSON schema generator.
 *
 * Creates a JSON schema unit which contains a main JSON schema and its
 * components. Note that, all of the named types are stored in the
 * {@link IJsonSchemaUnit.components} property for the `$ref` referencing.
 *
 * Also, you can specify the OpenAPI version by configuring the second generic
 * argument `Version`. For reference, the default version is `"3.1"`, and key
 * different of `"3.0"` and `"3.1"` is whether supporting the tuple type or
 * not.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Type Target type
 * @template Version Version of OpenAPI specification. Default is 3.1
 * @returns JSON schema unit
=======
 * Generates JSON schema for type `T`.
 *
 * @danger You must configure the generic argument `Type`
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function schema(): never;

/**
<<<<<<< HEAD
 * JSON schema generator.
 *
 * Creates a JSON schema unit which contains a main JSON schema and its
 * components. Note that, all of the named types are stored in the
 * {@link IJsonSchemaUnit.components} property for the `$ref` referencing.
 *
 * Also, you can specify the OpenAPI version by configuring the second generic
 * argument `Version`. For reference, the default version is `"3.1"`, and key
 * different of `"3.0"` and `"3.1"` is whether supporting the tuple type or
 * not.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Type Target type
 * @template Version Version of OpenAPI specification. Default is 3.1
=======
 * Generates JSON schema for type `T`.
 *
 * Creates {@link IJsonSchemaUnit} containing a main schema and shared
 * components. Named types are stored in `components` for `$ref` referencing.
 *
 * Specify OpenAPI version via `Version` generic (`"3.0"` or `"3.1"`). Default
 * is `"3.1"`. Key difference: `"3.1"` supports tuple types.
 *
 * @template Type Target type
 * @template Version OpenAPI version (`"3.0"` | `"3.1"`). Default `"3.1"`
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 * @returns JSON schema unit
 */
export function schema<
  Type extends unknown,
  Version extends "3.0" | "3.1" = "3.1",
>(): IJsonSchemaUnit<Version, Type>;

/** @internal */
export function schema(): never {
  NoTransformConfigurationError("json.schema");
}

/**
<<<<<<< HEAD
 * > You must configure the generic argument `Types`.
 *
 * JSON Schemas Generator.
 *
 * Creates a JSON schema list which contains both main JSON schemas and
 * components. Note that, all of the named types are stored in the
 * {@link IJsonSchemaCollection.components} property for the `$ref` referencing.
 *
 * Also, you can specify the OpenAPI version by configuring the second generic
 * argument `Version`. For reference, the default version is `"3.1"`, and the
 * key difference between `"3.0"` and `"3.1"` is whether supporting the tuple
 * type or not.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Types Tuple of target types
 * @template Version Version of OpenAPI specification. Default is 3.1
 * @returns JSON schema collection
=======
 * Generates JSON schemas for multiple types.
 *
 * @danger You must configure the generic argument `Types`
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function schemas(): never;

/**
<<<<<<< HEAD
 * JSON Schemas Generator.
 *
 * Creates a JSON schema list which contains both main JSON schemas and
 * components. Note that, all of the named types are stored in the
 * {@link IJsonSchemaCollection.components} property for the `$ref` referencing.
 *
 * Also, you can specify the OpenAPI version by configuring the second generic
 * argument `Version`. For reference, the default version is `"3.1"`, and the
 * key difference between `"3.0"` and `"3.1"` is whether supporting the tuple
 * type or not.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Types Tuple of target types
 * @template Version Version of OpenAPI specification. Default is 3.1
=======
 * Generates JSON schemas for multiple types.
 *
 * Creates {@link IJsonSchemaCollection} containing schemas for all types in the
 * tuple. Named types are stored in `components` for `$ref` referencing.
 *
 * Specify OpenAPI version via `Version` generic (`"3.0"` or `"3.1"`). Default
 * is `"3.1"`. Key difference: `"3.1"` supports tuple types.
 *
 * @template Types Tuple of target types
 * @template Version OpenAPI version (`"3.0"` | `"3.1"`). Default `"3.1"`
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 * @returns JSON schema collection
 */
export function schemas<
  Types extends unknown[],
  Version extends "3.0" | "3.1" = "3.1",
>(): IJsonSchemaCollection<Version, Types>;

/** @internal */
export function schemas(): never {
  NoTransformConfigurationError("json.schemas");
}

/**
<<<<<<< HEAD
 * > You must configure the generic argument `Class`.
 *
 * TypeScript class to JSON function schema application.
 *
 * Creates a JSON function schema application from a TypeScript class or
 * interface type containing the target functions. This is an intermediate-level
 * function designed for professional developers who want to build custom LLM
 * function calling schemas or need to transform class methods into structured
 * JSON schema representations.
 *
 * Unlike {@link schema} which creates a schema for a single type, this function
 * analyzes an entire class/interface and generates JSON schemas for all its
 * methods, their parameters, and return types. The returned
 * {@link IJsonSchemaApplication} contains:
 *
 * - {@link IJsonSchemaApplication.functions}: Array of function metadata with
 *   parameter and return type schemas
 * - {@link IJsonSchemaApplication.components}: Shared schema components for `$ref`
 *   referencing
 *
 * This function serves as the underlying implementation for
 * {@link llm.application}, and can be used when you need to:
 *
 * - Create your own custom LLM function calling schema format
 * - Transform class methods into structured JSON schema format
 * - Build API documentation or code generation tools
 * - Develop alternative LLM integrations beyond the built-in providers
 *
 * For direct LLM function calling implementations, consider using
 * {@link llm.application} instead, which provides provider-specific schemas for
 * ChatGPT, Claude, Gemini, and other LLM providers.
 *
 * Also, you can specify the OpenAPI version by configuring the second generic
 * argument `Version`. For reference, the default version is `"3.1"`, and the
 * key difference between `"3.0"` and `"3.1"` is whether supporting the tuple
 * type or not.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Class Target class or interface type containing the functions
 * @template Version Version of OpenAPI specification. Default is 3.1
 * @returns JSON function schema application
=======
 * Generates JSON function schema application.
 *
 * @danger You must configure the generic argument `Class`
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function application(): never;

/**
<<<<<<< HEAD
 * TypeScript class to JSON function schema application.
 *
 * Creates a JSON function schema application from a TypeScript class or
 * interface type containing the target functions. This is an intermediate-level
 * function designed for professional developers who want to build custom LLM
 * function calling schemas or need to transform class methods into structured
 * JSON schema representations.
 *
 * Unlike {@link schema} which creates a schema for a single type, this function
 * analyzes an entire class/interface and generates JSON schemas for all its
 * methods, their parameters, and return types. The returned
 * {@link IJsonSchemaApplication} contains:
 *
 * - {@link IJsonSchemaApplication.functions}: Array of function metadata with
 *   parameter and return type schemas
 * - {@link IJsonSchemaApplication.components}: Shared schema components for `$ref`
 *   referencing
 *
 * This function serves as the underlying implementation for
 * {@link llm.application}, and can be used when you need to:
 *
 * - Create your own custom LLM function calling schema format
 * - Transform class methods into structured JSON schema format
 * - Build API documentation or code generation tools
 * - Develop alternative LLM integrations beyond the built-in providers
 *
 * For direct LLM function calling implementations, consider using
 * {@link llm.application} instead, which provides provider-specific schemas for
 * ChatGPT, Claude, Gemini, and other LLM providers.
 *
 * Also, you can specify the OpenAPI version by configuring the second generic
 * argument `Version`. For reference, the default version is `"3.1"`, and the
 * key difference between `"3.0"` and `"3.1"` is whether supporting the tuple
 * type or not.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Class Target class or interface type containing the functions
 * @template Version Version of OpenAPI specification. Default is 3.1
=======
 * Generates JSON function schema application from class/interface.
 *
 * Creates {@link IJsonSchemaApplication} from a TypeScript class or interface,
 * generating JSON schemas for all methods, parameters, and return types.
 * Designed for building custom LLM function calling schemas.
 *
 * The returned object contains:
 *
 * - `functions`: Array of function metadata with parameter/return schemas
 * - `components`: Shared schema components for `$ref` referencing
 *
 * Use cases:
 *
 * - Custom LLM function calling schema formats
 * - API documentation or code generation tools
 * - Alternative LLM integrations beyond built-in providers
 *
 * For standard LLM function calling, use {@link llm.application} instead, which
 * provides provider-specific schemas (ChatGPT, Claude, Gemini, etc.).
 *
 * @template Class Target class or interface type
 * @template Version OpenAPI version (`"3.0"` | `"3.1"`). Default `"3.1"`
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 * @returns JSON function schema application
 */
export function application<
  Class extends object,
  Version extends "3.0" | "3.1" = "3.1",
>(): IJsonSchemaApplication<Version, Class>;

/** @internal */
export function application(): never {
  NoTransformConfigurationError("json.application");
}

/* -----------------------------------------------------------
    PARSE
----------------------------------------------------------- */
/**
<<<<<<< HEAD
 * > You must configure the generic argument `T`.
 *
 * Safe `JSON.parse()` function with type assertion.
 *
 * `typia.json.assertParse()` is a combination function of `JSON.parse()` and
 * {@link assert}. Therefore, it converts a JSON (JavaScript Object Notation)
 * string to a `T` typed instance with type assertion.
 *
 * In such reason, when parsed JSON string value is not matched with the type
 * `T`, it throws {@link TypeGuardError} or custom error generated by
 * _errorFactory_. Otherwise, if there's no problem with the parsed value, the
 * parsed value will be returned.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Expected type of parsed value
 * @param input JSON string
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Parsed value
=======
 * Parses JSON string with assertion.
 *
 * @danger You must configure the generic argument `T`
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function assertParse(
  input: string,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
<<<<<<< HEAD
 * Safe `JSON.parse()` function with type assertion.
 *
 * `typia.json.assertParse()` is a combination function of `JSON.parse()` and
 * {@link assert}. Therefore, it converts a JSON (JavaScript Object Notation)
 * string to a `T` typed instance with type assertion.
 *
 * In such reason, when parsed JSON string value is not matched with the type
 * `T`, it throws {@link TypeGuardError} or custom error generated by
 * _errorFactory_. Otherwise, there's no problem on the parsed value, the parsed
 * value would be returned.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Expected type of parsed value
 * @param input JSON string
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Parsed value
=======
 * Parses JSON string with assertion.
 *
 * Combines `JSON.parse()` with {@link assert}. Throws {@link TypeGuardError} when
 * parsed value doesn't match type `T`.
 *
 * Related functions:
 *
 * - {@link isParse} — Returns `null` instead of throwing
 * - {@link validateParse} — Returns detailed validation errors
 *
 * @template T Target type for parsed value
 * @param input JSON string to parse
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Parsed value of type `T`
 * @throws {TypeGuardError} When parsed value doesn't conform to type `T`
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function assertParse<T>(
  input: string,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): Primitive<T>;

/** @internal */
export function assertParse<T>(): Primitive<T> {
  NoTransformConfigurationError("json.assertParse");
}

/**
<<<<<<< HEAD
 * > You must configure the generic argument `T`.
 *
 * Safe `JSON.parse()` function with type checking.
 *
 * `typia.json.isParse()` is a combination function of `JSON.parse()` and
 * {@link is}. Therefore, it converts a JSON (JavaScript Object Notation) string
 * to a `T` typed instance with type checking.
 *
 * In such reason, when parsed JSON string value is not matched with the type
 * `T`, it returns `null` value. Otherwise, there's no problem on the parsed
 * value, the parsed value will be returned.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Expected type of parsed value
 * @param input JSON string
 * @returns Parsed value when exact type, otherwise `null`
=======
 * Parses JSON string with type checking.
 *
 * @danger You must configure the generic argument `T`
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function isParse(input: string): never;

/**
<<<<<<< HEAD
 * Safe `JSON.parse()` function with type checking.
 *
 * `typia.json.isParse()` is a combination function of `JSON.parse()` and
 * {@link is}. Therefore, it converts a JSON (JavaScript Object Notation) string
 * to a `T` typed instance with type checking.
 *
 * In such reason, when parsed JSON string value is not matched with the type
 * `T`, it returns `null` value. Otherwise, there's no problem on the parsed
 * value, the parsed value will be returned.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Expected type of parsed value
 * @param input JSON string
 * @returns Parsed value when exact type, otherwise `null`
=======
 * Parses JSON string with type checking.
 *
 * Combines `JSON.parse()` with {@link is}. Returns `null` when parsed value
 * doesn't match type `T`.
 *
 * Related functions:
 *
 * - {@link assertParse} — Throws instead of returning `null`
 * - {@link validateParse} — Returns detailed validation errors
 *
 * @template T Target type for parsed value
 * @param input JSON string to parse
 * @returns Parsed value of type `T`, or `null` if invalid
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function isParse<T>(input: string): Primitive<T> | null;

/** @internal */
export function isParse<T>(): Primitive<T> | null {
  NoTransformConfigurationError("json.isParse");
}

/**
<<<<<<< HEAD
 * > You must configure the generic argument `T`.
 *
 * Safe `JSON.parse()` function with detailed type validation.
 *
 * `typia.json.validateParse()` is a combination function of `JSON.parse()` and
 * {@link validate}. Therefore, it converts a JSON (JavaScript Object Notation)
 * string to a `T` typed instance with detailed type validation.
 *
 * In such reason, when parsed JSON string value is not matched with the type
 * `T`, it returns {@link IValidation.IFailure} value with detailed error
 * reasons. Otherwise, there's no problem on the parsed value, the parsed value
 * will be stored in `data` property of the output {@link IValidation.ISuccess}
 * instance.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Expected type of parsed value
 * @param input JSON string
 * @returns Validation result with JSON parsed value
=======
 * Parses JSON string with validation.
 *
 * @danger You must configure the generic argument `T`
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function validateParse(input: string): never;

/**
<<<<<<< HEAD
 * Safe `JSON.parse()` function with detailed type validation.
 *
 * `typia.json.validateParse()` is a combination function of `JSON.parse()` and
 * {@link validate}. Therefore, it converts a JSON (JavaScript Object Notation)
 * string to a `T` typed instance with detailed type validation.
 *
 * In such reason, when parsed JSON string value is not matched with the type
 * `T`, it returns {@link IValidation.IFailure} value with detailed error
 * reasons. Otherwise, there's no problem on the parsed value, the parsed value
 * will be stored in `data` property of the output {@link IValidation.ISuccess}
 * instance.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Expected type of parsed value
 * @param input JSON string
 * @returns Validation result with JSON parsed value
=======
 * Parses JSON string with validation.
 *
 * Combines `JSON.parse()` with {@link validate}. Returns
 * {@link IValidation.IFailure} with all errors on mismatch, or
 * {@link IValidation.ISuccess} with parsed value.
 *
 * Related functions:
 *
 * - {@link assertParse} — Throws on first error
 * - {@link isParse} — Returns `null` instead of error details
 *
 * @template T Target type for parsed value
 * @param input JSON string to parse
 * @returns Validation result containing parsed value or errors
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function validateParse<T>(input: string): IValidation<Primitive<T>>;

/** @internal */
export function validateParse<T>(): IValidation<Primitive<T>> {
  NoTransformConfigurationError("json.validateParse");
}

/* -----------------------------------------------------------
    STRINGIFY
----------------------------------------------------------- */
/**
<<<<<<< HEAD
 * 8x faster `JSON.stringify()` function.
 *
 * Converts an input value to a JSON (JavaScript Object Notation) string, about
 * 8x faster than the native `JSON.stringify()` function. The 5x faster
 * principle is because it writes an optimized JSON conversion plan, only for
 * the type `T`.
 *
 * For reference, this `typia.json.stringify()` does not validate the input
 * value type. It just believes that the input value is following the type `T`.
 * Therefore, if you can't ensure the input value type, it will be better to
 * call one of below functions instead.
 *
 * - {@link assertStringify}
 * - {@link isStringify}
 * - {@link validateStringify}
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param input A value to be converted
 * @returns JSON string value
=======
 * Converts value to JSON string (8x faster).
 *
 * Generates optimized JSON conversion code specific to type `T`, achieving ~8x
 * faster performance than native `JSON.stringify()`.
 *
 * Does not validate the input. For validation, use:
 *
 * - {@link assertStringify} — Throws on type mismatch
 * - {@link isStringify} — Returns `null` on type mismatch
 * - {@link validateStringify} — Returns detailed validation errors
 *
 * @template T Type of input value
 * @param input Value to stringify
 * @returns JSON string
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function stringify<T>(input: T): string;

/** @internal */
export function stringify(): never {
  NoTransformConfigurationError("json.stringify");
}

/**
<<<<<<< HEAD
 * 5x faster `JSON.stringify()` function with type assertion.
 *
 * `typia.json.assertStringify()` is a combination function of {@link assert} and
 * {@link stringify}. Therefore, it converts an input value to JSON (JavaScript
 * Object Notation) string, with type assertion.
 *
 * In such reason, when `input` value is not matched with the type `T`, it
 * throws an {@link TypeGuardError} or custom error generated by _errorFactory_.
 * Otherwise, there's no problem on the `input` value, JSON string will be
 * returned.
 *
 * For reference, with type assertion, it is even 5x times faster than the
 * native `JSON.stringify()` function. So, just enjoy the safe and fast JSON
 * conversion with confidence.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param input A value to be asserted and converted
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns JSON string value
=======
 * Converts value to JSON string with assertion (5x faster).
 *
 * Combines {@link assert} with {@link stringify}. Throws {@link TypeGuardError}
 * when input doesn't match type `T`. Achieves ~5x faster performance than
 * native `JSON.stringify()`.
 *
 * Related functions:
 *
 * - {@link stringify} — No validation
 * - {@link isStringify} — Returns `null` instead of throwing
 * - {@link validateStringify} — Returns detailed validation errors
 *
 * @template T Type of input value
 * @param input Value to assert and stringify
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns JSON string
 * @throws {TypeGuardError} When input doesn't conform to type `T`
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function assertStringify<T>(
  input: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): string;

/**
<<<<<<< HEAD
 * 5x faster `JSON.stringify()` function with type assertion.
 *
 * `typia.json.assertStringify()` is a combination function of {@link assert} and
 * {@link stringify}. Therefore, it converts an input value to JSON (JavaScript
 * Object Notation) string, with type assertion.
 *
 * In such reason, when `input` value is not matched with the type `T`, it
 * throws an {@link TypeGuardError} or custom error generated by _errorFactory_.
 * Otherwise, there's no problem on the `input` value, JSON string will be
 * returned.
 *
 * For reference, with type assertion, it is even 5x times faster than the
 * native `JSON.stringify()` function. So, just enjoy the safe and fast JSON
 * conversion with confidence.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param input A value to be asserted and converted
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns JSON string value
=======
 * Converts value to JSON string with assertion (5x faster).
 *
 * Combines {@link assert} with {@link stringify}. Throws {@link TypeGuardError}
 * when input doesn't match type `T`. Achieves ~5x faster performance than
 * native `JSON.stringify()`.
 *
 * Related functions:
 *
 * - {@link stringify} — No validation
 * - {@link isStringify} — Returns `null` instead of throwing
 * - {@link validateStringify} — Returns detailed validation errors
 *
 * @template T Type of input value
 * @param input Value to assert and stringify
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns JSON string
 * @throws {TypeGuardError} When input doesn't conform to type `T`
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function assertStringify<T>(
  input: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): unknown;

/** @internal */
export function assertStringify(): string {
  NoTransformConfigurationError("json.assertStringify");
}

/**
<<<<<<< HEAD
 * 7x faster `JSON.stringify()` function with type checking.
 *
 * `typia.json.stringify()` is a combination function of {@link is} and
 * {@link stringify}. Therefore, it converts an input value to JSON (JavaScript
 * Object Notation) string, with type checking.
 *
 * In such reason, when `input` value is not matched with the type `T`, it
 * returns `null` value. Otherwise, there's no problem on the `input` value,
 * JSON string will be returned.
 *
 * For reference, with type checking, it is even 7x times faster than the native
 * `JSON.stringify()` function. So, just enjoy the safe and fast JSON conversion
 * with confidence.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param input A value to be checked and converted
 * @returns JSON string value when exact type, otherwise null
=======
 * Converts value to JSON string with type checking (7x faster).
 *
 * Combines {@link is} with {@link stringify}. Returns `null` when input doesn't
 * match type `T`. Achieves ~7x faster performance than native
 * `JSON.stringify()`.
 *
 * Related functions:
 *
 * - {@link stringify} — No validation
 * - {@link assertStringify} — Throws instead of returning `null`
 * - {@link validateStringify} — Returns detailed validation errors
 *
 * @template T Type of input value
 * @param input Value to check and stringify
 * @returns JSON string, or `null` if type check fails
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function isStringify<T>(input: T): string | null;

/**
<<<<<<< HEAD
 * 7x faster `JSON.stringify()` function with type checking.
 *
 * `typia.json.isStringify()` is a combination function of {@link is} and
 * {@link stringify}. Therefore, it converts an input value to JSON (JavaScript
 * Object Notation) string, with type checking.
 *
 * In such reason, when `input` value is not matched with the type `T`, it
 * returns `null` value. Otherwise, there's no problem on the `input` value,
 * JSON string will be returned.
 *
 * For reference, with type checking, it is even 7x times faster than the native
 * `JSON.stringify()` function. So, just enjoy the safe and fast JSON conversion
 * with confidence.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param input A value to be checked and converted
 * @returns JSON string value when exact type, otherwise null
=======
 * Converts value to JSON string with type checking (7x faster).
 *
 * Combines {@link is} with {@link stringify}. Returns `null` when input doesn't
 * match type `T`. Achieves ~7x faster performance than native
 * `JSON.stringify()`.
 *
 * Related functions:
 *
 * - {@link stringify} — No validation
 * - {@link assertStringify} — Throws instead of returning `null`
 * - {@link validateStringify} — Returns detailed validation errors
 *
 * @template T Type of input value
 * @param input Value to check and stringify
 * @returns JSON string, or `null` if type check fails
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function isStringify<T>(input: unknown): string | null;

/** @internal */
export function isStringify(): string | null {
  NoTransformConfigurationError("json.isStringify");
}

/**
<<<<<<< HEAD
 * 5x faster `JSON.stringify()` function with detailed type validation.
 *
 * `typia.json.validateStringify()` is a combination function of {@link validate}
 * and {@link stringify}. Therefore, it converts an input value to JSON
 * (JavaScript Object Notation) string, with detailed type validation.
 *
 * In such reason, when `input` value is not matched with the type `T`, it
 * returns {@link IValidation.IFailure} value with detailed error reasons.
 * Otherwise, there's no problem on the `input` value, JSON string will be
 * stored in `data` property of the output {@link IValidation.ISuccess}
 * instance.
 *
 * For reference, with detailed type validation, it is even 5x times faster than
 * the native `JSON.stringify()` function. So, just enjoy the safe and fast JSON
 * conversion with confidence.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param input A value to be checked and converted
 * @returns Validation result with JSON string value
=======
 * Converts value to JSON string with validation (5x faster).
 *
 * Combines {@link validate} with {@link stringify}. Returns
 * {@link IValidation.IFailure} with all errors on mismatch, or
 * {@link IValidation.ISuccess} with JSON string. Achieves ~5x faster performance
 * than native `JSON.stringify()`.
 *
 * Related functions:
 *
 * - {@link stringify} — No validation
 * - {@link assertStringify} — Throws on first error
 * - {@link isStringify} — Returns `null` instead of error details
 *
 * @template T Type of input value
 * @param input Value to validate and stringify
 * @returns Validation result containing JSON string or errors
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function validateStringify<T>(input: T): IValidation<string>;

/**
<<<<<<< HEAD
 * 5x faster `JSON.stringify()` function with detailed type validation.
 *
 * `typia.json.validateStringify()` is a combination function of {@link validate}
 * and {@link stringify}. Therefore, it converts an input value to JSON
 * (JavaScript Object Notation) string, with detailed type validation.
 *
 * In such reason, when `input` value is not matched with the type `T`, it
 * returns {@link IValidation.IFailure} value with detailed error reasons.
 * Otherwise, there's no problem on the `input` value, JSON string will be
 * stored in `data` property of the output {@link IValidation.ISuccess}
 * instance.
 *
 * For reference, with detailed type validation, it is even 5x times faster than
 * the native `JSON.stringify()` function. So, just enjoy the safe and fast JSON
 * conversion with confidence.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param input A value to be checked and converted
 * @returns Validation result with JSON string value
=======
 * Converts value to JSON string with validation (5x faster).
 *
 * Combines {@link validate} with {@link stringify}. Returns
 * {@link IValidation.IFailure} with all errors on mismatch, or
 * {@link IValidation.ISuccess} with JSON string. Achieves ~5x faster performance
 * than native `JSON.stringify()`.
 *
 * Related functions:
 *
 * - {@link stringify} — No validation
 * - {@link assertStringify} — Throws on first error
 * - {@link isStringify} — Returns `null` instead of error details
 *
 * @template T Type of input value
 * @param input Value to validate and stringify
 * @returns Validation result containing JSON string or errors
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function validateStringify<T>(input: unknown): IValidation<string>;

/** @internal */
export function validateStringify(): IValidation<string> {
  NoTransformConfigurationError("json.validateStringify");
}

/* -----------------------------------------------------------
    FACTORY FUNCTIONS
----------------------------------------------------------- */
/**
<<<<<<< HEAD
 * Creates a reusable {@link isParse} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @returns Nothing until you configure the generic argument `T`
 * @throws Compile error
=======
 * Creates reusable {@link isParse} function.
 *
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 * @danger You must configure the generic argument `T`
 */
export function createIsParse(): never;

/**
<<<<<<< HEAD
 * Creates a reusable {@link isParse} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Expected type of parsed value
 * @returns A reusable `isParse` function
=======
 * Creates reusable {@link isParse} function.
 *
 * @template T Target type for parsed value
 * @returns Reusable parser function
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function createIsParse<T>(): (input: string) => Primitive<T> | null;

/** @internal */
export function createIsParse<T>(): (input: string) => Primitive<T> | null {
  NoTransformConfigurationError("json.createIsParse");
}

/**
<<<<<<< HEAD
 * Creates a reusable {@link assertParse} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Nothing until you configure the generic argument `T`
 * @throws Compile error
=======
 * Creates reusable {@link assertParse} function.
 *
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 * @danger You must configure the generic argument `T`
 */
export function createAssertParse(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
<<<<<<< HEAD
 * Creates a reusable {@link assertParse} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Expected type of parsed value
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns A reusable `assertParse` function
=======
 * Creates reusable {@link assertParse} function.
 *
 * @template T Target type for parsed value
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Reusable parser function
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function createAssertParse<T>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: string) => Primitive<T>;

/** @internal */
export function createAssertParse<T>(): (input: string) => Primitive<T> {
  NoTransformConfigurationError("json.createAssertParse");
}

/**
<<<<<<< HEAD
 * Creates a reusable {@link validateParse} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @returns Nothing until you configure the generic argument `T`
 * @throws Compile error
=======
 * Creates reusable {@link validateParse} function.
 *
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 * @danger You must configure the generic argument `T`
 */
export function createValidateParse(): never;

/**
<<<<<<< HEAD
 * Creates a reusable {@link validateParse} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Expected type of parsed value
 * @returns A reusable `validateParse` function
=======
 * Creates reusable {@link validateParse} function.
 *
 * @template T Target type for parsed value
 * @returns Reusable parser function
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function createValidateParse<T>(): (
  input: string,
) => IValidation<Primitive<T>>;

/** @internal */
export function createValidateParse<T>(): (
  input: string,
) => IValidation<Primitive<T>> {
  NoTransformConfigurationError("json.createValidateParse");
}

/**
<<<<<<< HEAD
 * Creates a reusable {@link stringify} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @returns Nothing until you configure the generic argument `T`
 * @throws Compile error
=======
 * Creates reusable {@link stringify} function.
 *
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 * @danger You must configure the generic argument `T`
 */
export function createStringify(): never;

/**
<<<<<<< HEAD
 * Creates a reusable {@link stringify} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @returns A reusable `stringify` function
=======
 * Creates reusable {@link stringify} function.
 *
 * @template T Type of input value
 * @returns Reusable stringify function
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function createStringify<T>(): (input: T) => string;

/** @internal */
export function createStringify<T>(): (input: T) => string {
  NoTransformConfigurationError("json.createStringify");
}

/**
<<<<<<< HEAD
 * Creates a reusable {@link assertStringify} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Nothing until you configure the generic argument `T`
 * @throws Compile error
=======
 * Creates reusable {@link assertStringify} function.
 *
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 * @danger You must configure the generic argument `T`
 */
export function createAssertStringify(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
<<<<<<< HEAD
 * Creates a reusable {@link assertStringify} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns A reusable `assertStringify` function
=======
 * Creates reusable {@link assertStringify} function.
 *
 * @template T Type of input value
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Reusable stringify function
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function createAssertStringify<T>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: unknown) => string;

/** @internal */
export function createAssertStringify(): (input: unknown) => string {
  NoTransformConfigurationError("json.createAssertStringify");
}

/**
<<<<<<< HEAD
 * Creates a reusable {@link isStringify} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @returns Nothing until you configure the generic argument `T`
 * @throws Compile error
=======
 * Creates reusable {@link isStringify} function.
 *
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 * @danger You must configure the generic argument `T`
 */
export function createIsStringify(): never;

/**
<<<<<<< HEAD
 * Creates a reusable {@link isStringify} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @returns A reusable `isStringify` function
=======
 * Creates reusable {@link isStringify} function.
 *
 * @template T Type of input value
 * @returns Reusable stringify function
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function createIsStringify<T>(): (input: unknown) => string | null;

/** @internal */
export function createIsStringify(): (input: unknown) => string | null {
  NoTransformConfigurationError("json.createIsStringify");
}

/**
<<<<<<< HEAD
 * Creates a reusable {@link validateStringify} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @returns Nothing until you configure the generic argument `T`
 * @throws Compile error
=======
 * Creates reusable {@link validateStringify} function.
 *
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 * @danger You must configure the generic argument `T`
 */
export function createValidateStringify(): never;

/**
<<<<<<< HEAD
 * Creates a reusable {@link validateStringify} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @returns A reusable `validateStringify` function
=======
 * Creates reusable {@link validateStringify} function.
 *
 * @template T Type of input value
 * @returns Reusable stringify function
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function createValidateStringify<T>(): (
  input: unknown,
) => IValidation<string>;

/** @internal */
export function createValidateStringify(): (
  input: unknown,
) => IValidation<string> {
  NoTransformConfigurationError("json.createValidateStringify");
}
