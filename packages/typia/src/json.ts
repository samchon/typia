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
 * Generates JSON schema for type `T`.
 *
 * @danger You must configure the generic argument `Type`
 */
export function schema(): never;

/**
 * Generates JSON schema for type `T`.
 *
 * Creates {@link IJsonSchemaUnit} containing a main schema and shared
 * components. Named types are stored in `components` for `$ref` referencing.
 *
 * Specify OpenAPI version via `Version` generic (`"3.0"` or `"3.1"`).
 * Default is `"3.1"`. Key difference: `"3.1"` supports tuple types.
 *
 * @template Type Target type
 * @template Version OpenAPI version (`"3.0"` | `"3.1"`). Default `"3.1"`
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
 * Generates JSON schemas for multiple types.
 *
 * @danger You must configure the generic argument `Types`
 */
export function schemas(): never;

/**
 * Generates JSON schemas for multiple types.
 *
 * Creates {@link IJsonSchemaCollection} containing schemas for all types in
 * the tuple. Named types are stored in `components` for `$ref` referencing.
 *
 * Specify OpenAPI version via `Version` generic (`"3.0"` or `"3.1"`).
 * Default is `"3.1"`. Key difference: `"3.1"` supports tuple types.
 *
 * @template Types Tuple of target types
 * @template Version OpenAPI version (`"3.0"` | `"3.1"`). Default `"3.1"`
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
 * Generates JSON function schema application.
 *
 * @danger You must configure the generic argument `Class`
 */
export function application(): never;

/**
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
 * For standard LLM function calling, use {@link llm.application} instead,
 * which provides provider-specific schemas (ChatGPT, Claude, Gemini, etc.).
 *
 * @template Class Target class or interface type
 * @template Version OpenAPI version (`"3.0"` | `"3.1"`). Default `"3.1"`
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
 * Parses JSON string with assertion.
 *
 * @danger You must configure the generic argument `T`
 */
export function assertParse(
  input: string,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Parses JSON string with assertion.
 *
 * Combines `JSON.parse()` with {@link assert}. Throws {@link TypeGuardError}
 * when parsed value doesn't match type `T`.
 *
 * Related functions:
 *
 * - {@link isParse} — Returns `null` instead of throwing
 * - {@link validateParse} — Returns detailed validation errors
 *
 * @template T Target type for parsed value
 * @param input JSON string to parse
 * @param errorFactory Custom error factory receiving {@link TypeGuardError.IProps}
 * @returns Parsed value of type `T`
 * @throws {TypeGuardError} When parsed value doesn't conform to type `T`
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
 * Parses JSON string with type checking.
 *
 * @danger You must configure the generic argument `T`
 */
export function isParse(input: string): never;

/**
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
 */
export function isParse<T>(input: string): Primitive<T> | null;

/** @internal */
export function isParse<T>(): Primitive<T> | null {
  NoTransformConfigurationError("json.isParse");
}

/**
 * Parses JSON string with validation.
 *
 * @danger You must configure the generic argument `T`
 */
export function validateParse(input: string): never;

/**
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
 * Converts value to JSON string (8x faster).
 *
 * Generates optimized JSON conversion code specific to type `T`, achieving
 * ~8x faster performance than native `JSON.stringify()`.
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
 */
export function stringify<T>(input: T): string;

/** @internal */
export function stringify(): never {
  NoTransformConfigurationError("json.stringify");
}

/**
 * Converts value to JSON string with assertion (5x faster).
 *
 * Combines {@link assert} with {@link stringify}. Throws
 * {@link TypeGuardError} when input doesn't match type `T`. Achieves ~5x
 * faster performance than native `JSON.stringify()`.
 *
 * Related functions:
 *
 * - {@link stringify} — No validation
 * - {@link isStringify} — Returns `null` instead of throwing
 * - {@link validateStringify} — Returns detailed validation errors
 *
 * @template T Type of input value
 * @param input Value to assert and stringify
 * @param errorFactory Custom error factory receiving {@link TypeGuardError.IProps}
 * @returns JSON string
 * @throws {TypeGuardError} When input doesn't conform to type `T`
 */
export function assertStringify<T>(
  input: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): string;

/**
 * Converts value to JSON string with assertion (5x faster).
 *
 * Combines {@link assert} with {@link stringify}. Throws
 * {@link TypeGuardError} when input doesn't match type `T`. Achieves ~5x
 * faster performance than native `JSON.stringify()`.
 *
 * Related functions:
 *
 * - {@link stringify} — No validation
 * - {@link isStringify} — Returns `null` instead of throwing
 * - {@link validateStringify} — Returns detailed validation errors
 *
 * @template T Type of input value
 * @param input Value to assert and stringify
 * @param errorFactory Custom error factory receiving {@link TypeGuardError.IProps}
 * @returns JSON string
 * @throws {TypeGuardError} When input doesn't conform to type `T`
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
 * Converts value to JSON string with type checking (7x faster).
 *
 * Combines {@link is} with {@link stringify}. Returns `null` when input
 * doesn't match type `T`. Achieves ~7x faster performance than native
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
 */
export function isStringify<T>(input: T): string | null;

/**
 * Converts value to JSON string with type checking (7x faster).
 *
 * Combines {@link is} with {@link stringify}. Returns `null` when input
 * doesn't match type `T`. Achieves ~7x faster performance than native
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
 */
export function isStringify<T>(input: unknown): string | null;

/** @internal */
export function isStringify(): string | null {
  NoTransformConfigurationError("json.isStringify");
}

/**
 * Converts value to JSON string with validation (5x faster).
 *
 * Combines {@link validate} with {@link stringify}. Returns
 * {@link IValidation.IFailure} with all errors on mismatch, or
 * {@link IValidation.ISuccess} with JSON string. Achieves ~5x faster
 * performance than native `JSON.stringify()`.
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
 */
export function validateStringify<T>(input: T): IValidation<string>;

/**
 * Converts value to JSON string with validation (5x faster).
 *
 * Combines {@link validate} with {@link stringify}. Returns
 * {@link IValidation.IFailure} with all errors on mismatch, or
 * {@link IValidation.ISuccess} with JSON string. Achieves ~5x faster
 * performance than native `JSON.stringify()`.
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
 * Creates reusable {@link isParse} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createIsParse(): never;

/**
 * Creates reusable {@link isParse} function.
 *
 * @template T Target type for parsed value
 * @returns Reusable parser function
 */
export function createIsParse<T>(): (input: string) => Primitive<T> | null;

/** @internal */
export function createIsParse<T>(): (input: string) => Primitive<T> | null {
  NoTransformConfigurationError("json.createIsParse");
}

/**
 * Creates reusable {@link assertParse} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createAssertParse(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Creates reusable {@link assertParse} function.
 *
 * @template T Target type for parsed value
 * @param errorFactory Custom error factory receiving {@link TypeGuardError.IProps}
 * @returns Reusable parser function
 */
export function createAssertParse<T>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: string) => Primitive<T>;

/** @internal */
export function createAssertParse<T>(): (input: string) => Primitive<T> {
  NoTransformConfigurationError("json.createAssertParse");
}

/**
 * Creates reusable {@link validateParse} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createValidateParse(): never;

/**
 * Creates reusable {@link validateParse} function.
 *
 * @template T Target type for parsed value
 * @returns Reusable parser function
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
 * Creates reusable {@link stringify} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createStringify(): never;

/**
 * Creates reusable {@link stringify} function.
 *
 * @template T Type of input value
 * @returns Reusable stringify function
 */
export function createStringify<T>(): (input: T) => string;

/** @internal */
export function createStringify<T>(): (input: T) => string {
  NoTransformConfigurationError("json.createStringify");
}

/**
 * Creates reusable {@link assertStringify} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createAssertStringify(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Creates reusable {@link assertStringify} function.
 *
 * @template T Type of input value
 * @param errorFactory Custom error factory receiving {@link TypeGuardError.IProps}
 * @returns Reusable stringify function
 */
export function createAssertStringify<T>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: unknown) => string;

/** @internal */
export function createAssertStringify(): (input: unknown) => string {
  NoTransformConfigurationError("json.createAssertStringify");
}

/**
 * Creates reusable {@link isStringify} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createIsStringify(): never;

/**
 * Creates reusable {@link isStringify} function.
 *
 * @template T Type of input value
 * @returns Reusable stringify function
 */
export function createIsStringify<T>(): (input: unknown) => string | null;

/** @internal */
export function createIsStringify(): (input: unknown) => string | null {
  NoTransformConfigurationError("json.createIsStringify");
}

/**
 * Creates reusable {@link validateStringify} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createValidateStringify(): never;

/**
 * Creates reusable {@link validateStringify} function.
 *
 * @template T Type of input value
 * @returns Reusable stringify function
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
