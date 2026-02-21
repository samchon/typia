import { IValidation, Resolved } from "@typia/interface";

import { TypeGuardError } from "./TypeGuardError";
import { NoTransformConfigurationError } from "./transformers/NoTransformConfigurationError";

/* ===========================================================
    PROTOCOL BUFFER
      - MESSAGE
      - DECODE
      - ENCODE
      - FACTORY FUNCTIONS
==============================================================
    SCHEMA
----------------------------------------------------------- */
/**
 * Generates Protocol Buffer message schema.
 *
 * @danger You must configure the generic argument `T`
 */
export function message(): never;

/**
 * Generates Protocol Buffer message schema for type `T`.
 *
 * Creates a `.proto` message definition string from a TypeScript type. Use for
 * sharing schemas with other languages/frameworks.
 *
 * Protocol Buffer has limited expressiveness compared to TypeScript.
 * Incompatible types cause compilation errors.
 *
 * @template T Target type
 * @returns Protocol Buffer message schema string
 * @see https://typia.io/docs/protobuf/message/#restrictions
 */
export function message<T>(): string;

/** @internal */
export function message(): never {
  NoTransformConfigurationError("protobuf.message");
}

/* -----------------------------------------------------------
    DECODE
----------------------------------------------------------- */
/**
 * Decodes Protocol Buffer binary.
 *
 * @danger You must configure the generic argument `T`
 */
export function decode(input: Uint8Array): never;

/**
 * Decodes Protocol Buffer binary to type `T`.
 *
 * Converts Protocol Buffer binary data to a TypeScript instance. Binary data
 * must have been encoded from a `T`-typed value—invalid data causes undefined
 * behavior or errors.
 *
 * For type safety, ensure data was encoded via:
 *
 * - {@link assertEncode} — Encodes with type assertion
 * - {@link isEncode} — Encodes with type checking
 * - {@link validateEncode} — Encodes with validation
 *
 * Note: Decoder validation ({@link assertDecode}, etc.) only checks custom tags
 * like `number & Minimum<7>`, not structural type safety.
 *
 * @template T Target type
 * @param input Protocol Buffer binary data
 * @returns Decoded value of type `T`
 */
export function decode<T>(input: Uint8Array): Resolved<T>;

/** @internal */
export function decode(): never {
  NoTransformConfigurationError("protobuf.decode");
}

/**
 * Decodes Protocol Buffer binary with assertion.
 *
 * @danger You must configure the generic argument `T`
 */
export function assertDecode(
  input: Uint8Array,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Decodes Protocol Buffer binary with assertion (partial safety).
 *
 * Combines {@link decode} with {@link assert}. Throws {@link TypeGuardError} on
 * validation failure.
 *
 * Warning: Only validates custom tags (e.g., `number & Minimum<7>`, `string &
 * Format<"uuid">`), not structural type correctness. Ensure source data was
 * encoded with type-safe encoders.
 *
 * Related functions:
 *
 * - {@link decode} — No validation
 * - {@link isDecode} — Returns `null` instead of throwing
 * - {@link validateDecode} — Returns detailed validation errors
 *
 * @template T Target type
 * @param input Protocol Buffer binary data
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Decoded value of type `T`
 * @throws {TypeGuardError} When custom tag validation fails
 */
export function assertDecode<T>(
  input: Uint8Array,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): Resolved<T>;

/** @internal */
export function assertDecode(): never {
  NoTransformConfigurationError("protobuf.assertDecode");
}

/**
 * Decodes Protocol Buffer binary with type checking.
 *
 * @danger You must configure the generic argument `T`
 */
export function isDecode(input: Uint8Array): never;

/**
 * Decodes Protocol Buffer binary with type checking (partial safety).
 *
 * Combines {@link decode} with {@link is}. Returns `null` on validation failure.
 *
 * Warning: Only validates custom tags (e.g., `number & Minimum<7>`, `string &
 * Format<"uuid">`), not structural type correctness. Ensure source data was
 * encoded with type-safe encoders.
 *
 * Related functions:
 *
 * - {@link decode} — No validation
 * - {@link assertDecode} — Throws instead of returning `null`
 * - {@link validateDecode} — Returns detailed validation errors
 *
 * @template T Target type
 * @param input Protocol Buffer binary data
 * @returns Decoded value of type `T`, or `null` if invalid
 */
export function isDecode<T>(input: Uint8Array): Resolved<T> | null;

/** @internal */
export function isDecode(): never {
  NoTransformConfigurationError("protobuf.isDecode");
}

/**
 * Decodes Protocol Buffer binary with validation.
 *
 * @danger You must configure the generic argument `T`
 */
export function validateDecode(input: Uint8Array): never;

/**
 * Decodes Protocol Buffer binary with validation (partial safety).
 *
 * Combines {@link decode} with {@link validate}. Returns
 * {@link IValidation.IFailure} with errors on mismatch, or
 * {@link IValidation.ISuccess} with decoded value.
 *
 * Warning: Only validates custom tags (e.g., `number & Minimum<7>`, `string &
 * Format<"uuid">`), not structural type correctness. Ensure source data was
 * encoded with type-safe encoders.
 *
 * Related functions:
 *
 * - {@link decode} — No validation
 * - {@link assertDecode} — Throws on first error
 * - {@link isDecode} — Returns `null` instead of error details
 *
 * @template T Target type
 * @param input Protocol Buffer binary data
 * @returns Validation result containing decoded value or errors
 */
export function validateDecode<T>(input: Uint8Array): IValidation<Resolved<T>>;

/** @internal */
export function validateDecode(): never {
  NoTransformConfigurationError("protobuf.validateDecode");
}

/* -----------------------------------------------------------
    ENCODE
----------------------------------------------------------- */
/**
 * Encodes value to Protocol Buffer binary.
 *
 * Converts a TypeScript value to Protocol Buffer binary format.
 *
 * Does not validate the input. For validation, use:
 *
 * - {@link assertEncode} — Throws on type mismatch
 * - {@link isEncode} — Returns `null` on type mismatch
 * - {@link validateEncode} — Returns detailed validation errors
 *
 * Protocol Buffer has limited expressiveness compared to TypeScript.
 * Incompatible types cause compilation errors.
 *
 * @template T Type of input value
 * @param input Value to encode
 * @returns Protocol Buffer binary data
 * @see https://typia.io/docs/protobuf/message/#restrictions
 */
export function encode<T>(input: T): Uint8Array;

/** @internal */
export function encode(): never {
  NoTransformConfigurationError("protobuf.encode");
}

/**
 * Encodes value to Protocol Buffer binary with assertion.
 *
 * Combines {@link assert} with {@link encode}. Throws {@link TypeGuardError} on
 * type mismatch.
 *
 * Related functions:
 *
 * - {@link encode} — No validation
 * - {@link isEncode} — Returns `null` instead of throwing
 * - {@link validateEncode} — Returns detailed validation errors
 *
 * Protocol Buffer has limited expressiveness compared to TypeScript.
 * Incompatible types cause compilation errors.
 *
 * @template T Type of input value
 * @param input Value to encode
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Protocol Buffer binary data
 * @throws {TypeGuardError} When input doesn't conform to type `T`
 * @see https://typia.io/docs/protobuf/message/#restrictions
 */
export function assertEncode<T>(
  input: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): Uint8Array;

/** @internal */
export function assertEncode<T>(
  input: unknown,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): Uint8Array;

/** @internal */
export function assertEncode(): never {
  NoTransformConfigurationError("protobuf.assertEncode");
}

/**
 * Encodes value to Protocol Buffer binary with type checking.
 *
 * Combines {@link is} with {@link encode}. Returns `null` on type mismatch.
 *
 * Related functions:
 *
 * - {@link encode} — No validation
 * - {@link assertEncode} — Throws instead of returning `null`
 * - {@link validateEncode} — Returns detailed validation errors
 *
 * Protocol Buffer has limited expressiveness compared to TypeScript.
 * Incompatible types cause compilation errors.
 *
 * @template T Type of input value
 * @param input Value to encode
 * @returns Protocol Buffer binary data, or `null` if invalid
 * @see https://typia.io/docs/protobuf/message/#restrictions
 */
export function isEncode<T>(input: T): Uint8Array | null;

/** @internal */
export function isEncode<T>(input: unknown): Uint8Array | null;

/** @internal */
export function isEncode(): never {
  NoTransformConfigurationError("protobuf.isEncode");
}

/**
 * Encodes value to Protocol Buffer binary with validation.
 *
 * Combines {@link validate} with {@link encode}. Returns
 * {@link IValidation.IFailure} with all errors on mismatch, or
 * {@link IValidation.ISuccess} with binary data.
 *
 * Related functions:
 *
 * - {@link encode} — No validation
 * - {@link assertEncode} — Throws on first error
 * - {@link isEncode} — Returns `null` instead of error details
 *
 * Protocol Buffer has limited expressiveness compared to TypeScript.
 * Incompatible types cause compilation errors.
 *
 * @template T Type of input value
 * @param input Value to encode
 * @returns Validation result containing binary data or errors
 * @see https://typia.io/docs/protobuf/message/#restrictions
 */
export function validateEncode<T>(input: T): IValidation<Uint8Array>;

/** @internal */
export function validateEncode<T>(input: unknown): IValidation<Uint8Array>;

/** @internal */
export function validateEncode(): never {
  NoTransformConfigurationError("protobuf.validateEncode");
}

/* -----------------------------------------------------------
    FACTORY FUNCTIONS
----------------------------------------------------------- */
/**
 * Creates reusable {@link decode} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createDecode(): never;

/**
 * Creates reusable {@link decode} function.
 *
 * @template T Target type
 * @returns Reusable decoder function
 */
export function createDecode<T>(): (input: Uint8Array) => Resolved<T>;

/** @internal */
export function createDecode<T>(): (input: Uint8Array) => Resolved<T> {
  NoTransformConfigurationError("protobuf.createDecode");
}

/**
 * Creates reusable {@link isDecode} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createIsDecode(): never;

/**
 * Creates reusable {@link isDecode} function.
 *
 * @template T Target type
 * @returns Reusable decoder function
 */
export function createIsDecode<T>(): (input: Uint8Array) => Resolved<T> | null;

/** @internal */
export function createIsDecode<T>(): (input: Uint8Array) => Resolved<T> | null {
  NoTransformConfigurationError("protobuf.createIsDecode");
}

/**
 * Creates reusable {@link assertDecode} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createAssertDecode(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Creates reusable {@link assertDecode} function.
 *
 * @template T Target type
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Reusable decoder function
 */
export function createAssertDecode<T>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: Uint8Array) => Resolved<T>;

/** @internal */
export function createAssertDecode<T>(): (input: Uint8Array) => Resolved<T> {
  NoTransformConfigurationError("protobuf.createAssertDecode");
}

/**
 * Creates reusable {@link validateDecode} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createValidateDecode(): never;

/**
 * Creates reusable {@link validateDecode} function.
 *
 * @template T Target type
 * @returns Reusable decoder function
 */
export function createValidateDecode<T>(): (
  input: Uint8Array,
) => IValidation<Resolved<T>>;

/** @internal */
export function createValidateDecode<T>(): (
  input: Uint8Array,
) => IValidation<Resolved<T>> {
  NoTransformConfigurationError("protobuf.createValidateDecode");
}

/**
 * Creates reusable {@link encode} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createEncode(): never;

/**
 * Creates reusable {@link encode} function.
 *
 * @template T Type of input value
 * @returns Reusable encoder function
 */
export function createEncode<T>(): (input: T) => Uint8Array;

/** @internal */
export function createEncode<T>(): (input: T) => Uint8Array {
  NoTransformConfigurationError("protobuf.createEncode");
}

/**
 * Creates reusable {@link isEncode} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createIsEncode(): never;

/**
 * Creates reusable {@link isEncode} function.
 *
 * @template T Type of input value
 * @returns Reusable encoder function
 */
export function createIsEncode<T>(): (input: T) => Uint8Array | null;

/** @internal */
export function createIsEncode<T>(): (input: T) => Uint8Array | null {
  NoTransformConfigurationError("protobuf.createIsEncode");
}

/**
 * Creates reusable {@link assertEncode} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createAssertEncode(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Creates reusable {@link assertEncode} function.
 *
 * @template T Type of input value
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Reusable encoder function
 */
export function createAssertEncode<T>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: T) => Uint8Array;

/** @internal */
export function createAssertEncode<T>(): (input: T) => Uint8Array {
  NoTransformConfigurationError("protobuf.createAssertEncode");
}

/**
 * Creates reusable {@link validateEncode} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createValidateEncode(): never;

/**
 * Creates reusable {@link validateEncode} function.
 *
 * @template T Type of input value
 * @returns Reusable encoder function
 */
export function createValidateEncode<T>(): (
  input: T,
) => IValidation<Uint8Array>;

/** @internal */
export function createValidateEncode<T>(): (
  input: T,
) => IValidation<Uint8Array> {
  NoTransformConfigurationError("protobuf.createValidateEncode");
}
