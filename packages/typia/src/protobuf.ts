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
<<<<<<< HEAD
 * > You must configure the generic argument `T`.
 *
 * Protocol Buffer Message Schema.
 *
 * Creates a Protocol Buffer Message Schema from a TypeScript type. The message
 * schema would be returned as a string value, and it can be used to share with
 * other developers/languages/frameworks.
 *
 * For reference, Protocol Buffer has lots of restrictions, so that expression
 * power of Protocol Buffer is not enough strong to fully meet the TypeScript
 * type specs. In such reason, if you put a TypeScript type that is not
 * compatible with Protocol Buffer, this function would throw compilation
 * errors.
 *
 * - [Restrictions of Protocol
 *   Buffer](https://typia.io/docs/protobuf/message/#restrictions)
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Target type
 * @returns Protocol Buffer Message Schema.
=======
 * Generates Protocol Buffer message schema.
 *
 * @danger You must configure the generic argument `T`
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function message(): never;

/**
<<<<<<< HEAD
 * Protocol Buffer Message Schema.
 *
 * Creates a Protocol Buffer Message Schema from a TypeScript type. The message
 * schema would be returned as a string value, and it can be used to share with
 * other developers/languages/frameworks.
 *
 * For reference, Protocol Buffer has lots of restrictions, so that expression
 * power of Protocol Buffer is not enough strong to fully meet the TypeScript
 * type specs. In such reason, if you put a TypeScript type that is not
 * compatible with Protocol Buffer, this function would throw compilation
 * errors.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Target type
 * @returns Protocol Buffer Message Schema.
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
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
<<<<<<< HEAD
 * > You must configure the generic argument `T`.
 *
 * Protocol Buffer Decoder.
 *
 * `typia.protobuf.decode()` is a function decoding a binary data of Protocol
 * Buffer format to a TypeScript instance.
 *
 * For reference, as Protocol Buffer handles binary data directly, there's no
 * way when `input` binary data was not encoded from the `T` typed value. In
 * that case, unexpected behavior or internal error would be occurred.
 * Therefore, I recommend you to encode binary data of Protocol Buffer from type
 * safe encode functions like below. Use {@link encode} function only when you
 * can ensure it.
 *
 * - {@link assertEncode}
 * - {@link isEncode}
 * - {@link validateEncode}
 *
 * Also, `typia` is providing type safe decoders like {@link assertDecode}, but
 * it is just for additional type validation like `number & Minimum<7>` or
 * `string & Format<"uuid">` cases, that are represented by [custom
 * tags](https://typia.io/docs/validators/tags). Thus, I repeat that, you've to
 * ensure the type safety when using decoder functions.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Expected type of decoded value
 * @param input Protobuf Buffer binary data
 * @returns Decoded value
=======
 * Decodes Protocol Buffer binary.
 *
 * @danger You must configure the generic argument `T`
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function decode(input: Uint8Array): never;

/**
<<<<<<< HEAD
 * Protocol Buffer Decoder.
 *
 * `typia.protobuf.decode()` is a function decoding a binary data of Protocol
 * Buffer format to a TypeScript instance.
 *
 * For reference, as Protocol Buffer handles binary data directly, there's no
 * way when `input` binary data was not encoded from the `T` typed value. In
 * that case, unexpected behavior or internal error would be occurred.
 * Therefore, I recommend you to encode binary data of Protocol Buffer from type
 * safe encode functions like below. Use {@link encode} function only when you
 * can ensure it.
 *
 * - {@link assertEncode}
 * - {@link isEncode}
 * - {@link validateEncode}
 *
 * Also, `typia` is providing type safe decoders like {@link assertDecode}, but
 * it is just for additional type validation like `number & Minimum<7>` or
 * `string & Format<"uuid">` cases, that are represented by [custom
 * tags](https://typia.io/docs/validators/tags). Thus, I repeat that, you've to
 * ensure the type safety when using decoder functions.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Expected type of decoded value
 * @param input Protobuf Buffer binary data
 * @returns Decoded value
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function decode<T>(input: Uint8Array): Resolved<T>;

/** @internal */
export function decode(): never {
  NoTransformConfigurationError("protobuf.decode");
}

/**
<<<<<<< HEAD
 * > You must configure the generic argument `T`.
 *
 * Protocol Buffer Decoder wity type assertion, but not safe.
 *
 * `typia.protobuf.assertDecode()` is a combination function of {@link decode}
 * and {@link assert} function. Therefore, it decodes a binary data of Protocol
 * Buffer to a TypeScript instance, and performs type assertion process. If
 * decoded value is following the type `T`, it returns the decoded value.
 * Otherwise, it throws {@link TypeGuardError} instead.
 *
 * However, note that, this validation is not always safe. It just performs
 * additional type assertion like `number & Minimum<7>` or `string &
 * Format<"uuid">` cases, that are represented by [custom
 * tags](https://typia.io/docs/validators/tags). Therefore, when using
 * `typia.protobuf.assertDecode<T>()` function, you have to ensure the type
 * safety by yourself.
 *
 * In such type safety reason, I recommend you to use type safe encode
 * functions.
 *
 * - {@link assertEncode}
 * - {@link isEncode}
 * - {@link validateEncode}
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Expected type of decoded value
 * @param input Protobuf Buffer binary data
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Decoded value
=======
 * Decodes Protocol Buffer binary with assertion.
 *
 * @danger You must configure the generic argument `T`
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function assertDecode(
  input: Uint8Array,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
<<<<<<< HEAD
 * Protocol Buffer Decoder wity type assertion, but not safe.
 *
 * `typia.protobuf.assertDecode()` is a combination function of {@link decode}
 * and {@link assert} function. Therefore, it decodes a binary data of Protocol
 * Buffer to a TypeScript instance, and performs type assertion process. If
 * decoded value is following the type `T`, it returns the decoded value.
 * Otherwise, it throws {@link TypeGuardError} instead.
 *
 * However, note that, this validation is not always safe. It just performs
 * additional type assertion like `number & Minimum<7>` or `string &
 * Format<"uuid">` cases, that are represented by [custom
 * tags](https://typia.io/docs/validators/tags). Therefore, when using
 * `typia.protobuf.assertDecode<T>()` function, you have to ensure the type
 * safety by yourself.
 *
 * In such type safety reason, I recommend you to use type safe encode
 * functions.
 *
 * - {@link assertEncode}
 * - {@link isEncode}
 * - {@link validateEncode}
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Expected type of decoded value
 * @param input Protobuf Buffer binary data
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Decoded value
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
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
<<<<<<< HEAD
 * > You must configure the generic argument `T`.
 *
 * Protocol Buffer Decoder wity type checking, but not safe.
 *
 * `typia.protobuf.isDecode()` is a combination function of {@link decode} and
 * {@link is} function. Therefore, it decodes a binary data of Protocol Buffer to
 * a TypeScript instance, and performs type checking process. If decoded value
 * is following the type `T`, it returns the decoded value. Otherwise, it
 * returns `null` value instead.
 *
 * However, note that, this validation is not always safe. It just performs
 * additional type checking like `number & Minimum<7>` or `string &
 * Format<"uuid">` cases, that are represented by [custom
 * tags](https://typia.io/docs/validators/tags). Therefore, when using
 * `typia.protobuf.isDecode<T>()` function, you have to ensure the type safety
 * by yourself.
 *
 * In such type safety reason, I recommend you to use type safe encode
 * functions.
 *
 * - {@link assertEncode}
 * - {@link isEncode}
 * - {@link validateEncode}
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Expected type of decoded value
 * @param input Protobuf Buffer binary data
 * @returns Decoded value
=======
 * Decodes Protocol Buffer binary with type checking.
 *
 * @danger You must configure the generic argument `T`
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function isDecode(input: Uint8Array): never;

/**
<<<<<<< HEAD
 * Protocol Buffer Decoder wity type checking, but not safe.
 *
 * `typia.protobuf.isDecode()` is a combination function of {@link decode} and
 * {@link is} function. Therefore, it decodes a binary data of Protocol Buffer to
 * a TypeScript instance, and performs type checking process. If decoded value
 * is following the type `T`, it returns the decoded value. Otherwise, it
 * returns `null` value instead.
 *
 * However, note that, this validation is not always safe. It just performs
 * additional type checking like `number & Minimum<7>` or `string &
 * Format<"uuid">` cases, that are represented by [custom
 * tags](https://typia.io/docs/validators/tags). Therefore, when using
 * `typia.protobuf.isDecode<T>()` function, you have to ensure the type safety
 * by yourself.
 *
 * In such type safety reason, I recommend you to use type safe encode
 * functions.
 *
 * - {@link assertEncode}
 * - {@link isEncode}
 * - {@link validateEncode}
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Expected type of decoded value
 * @param input Protobuf Buffer binary data
 * @returns Decoded value
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function isDecode<T>(input: Uint8Array): Resolved<T> | null;

/** @internal */
export function isDecode(): never {
  NoTransformConfigurationError("protobuf.isDecode");
}

/**
<<<<<<< HEAD
 * > You must configure the generic argument `T`.
 *
 * Protocol Buffer Decoder wity type validation, but not safe.
 *
 * `typia.protobuf.validateDecode()` is a combination function of {@link decode}
 * and {@link validate} function. Therefore, it decodes a binary data of Protocol
 * Buffer to a TypeScript instance, and performs type validation process. If
 * decoded value is following the type `T`, it returns the decoded value with
 * {@link IValidation.ISuccess} typed instance. Otherwise, it returns
 * {@link IValidation.IFailure} value instead with detailed error reasons.
 *
 * However, note that, this validation is not always safe. It just performs
 * additional type validation like `number & Minimum<7>` or `string &
 * Format<"uuid">` cases, that are represented by [custom
 * tags](https://typia.io/docs/validators/tags). Therefore, when using
 * `typia.protobuf.validateDecode<T>()` function, you have to ensure the type
 * safety by yourself.
 *
 * In such type safety reason, I recommend you to use type safe encode
 * functions.
 *
 * - {@link assertEncode}
 * - {@link isEncode}
 * - {@link validateEncode}
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Expected type of decoded value
 * @param input Protobuf Buffer binary data
 * @returns Decoded value
=======
 * Decodes Protocol Buffer binary with validation.
 *
 * @danger You must configure the generic argument `T`
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function validateDecode(input: Uint8Array): never;

/**
<<<<<<< HEAD
 * Protocol Buffer Decoder wity type validation, but not safe.
 *
 * `typia.protobuf.validateDecode()` is a combination function of {@link decode}
 * and {@link validate} function. Therefore, it decodes a binary data of Protocol
 * Buffer to a TypeScript instance, and performs type validation process. If
 * decoded value is following the type `T`, it returns the decoded value with
 * {@link IValidation.ISuccess} typed instance. Otherwise, it returns
 * {@link IValidation.IFailure} value instead with detailed error reasons.
 *
 * However, note that, this validation is not always safe. It just performs
 * additional type validation like `number & Minimum<7>` or `string &
 * Format<"uuid">` cases, that are represented by [custom
 * tags](https://typia.io/docs/validators/tags). Therefore, when using
 * `typia.protobuf.validateDecode<T>()` function, you have to ensure the type
 * safety by yourself.
 *
 * In such type safety reason, I recommend you to use type safe encode
 * functions.
 *
 * - {@link assertEncode}
 * - {@link isEncode}
 * - {@link validateEncode}
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Expected type of decoded value
 * @param input Protobuf Buffer binary data
 * @returns Decoded value
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
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
<<<<<<< HEAD
 * Protocol Buffer Encoder.
 *
 * Converts an input value to a binary data of Protocol Buffer format.
 *
 * For reference, this `typia.protobuf.encode()` does not validate the `input`
 * value. It just believes that the `input` value is valid and converts it to a
 * binary data directly. Therefore, if you can't ensure the `input` value type,
 * it would better to call one of below functions instead.
 *
 * - {@link assertEncode}
 * - {@link isEncode}
 * - {@link validateEncode}
 *
 * By the way, you know what? Expression power of Protocol Buffer is not enough
 * strong to fully meet the TypeScript type specs. In such reason, if you put a
 * TypeScript type that is not compatible with Protocol Buffer, this function
 * would throw compilation errors.
 *
 * - [Restrictions of Protocol
 *   Buffer](https://typia.io/docs/protobuf/message/#restrictions)
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the value input
 * @param input A value to encode
 * @returns Encoded binary data
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function encode<T>(input: T): Uint8Array;

/** @internal */
export function encode(): never {
  NoTransformConfigurationError("protobuf.encode");
}

/**
<<<<<<< HEAD
 * Protocol Buffer Encoder with type assertion.
 *
 * `typia.protobuf.assertEncode()` is a combination function of {@link assert}
 * and {@link encode}.
 *
 * Therefore, it converts an `input` value to a binary data of Protocol Buffer,
 * with type assertion. If `input` value is not valid, it throws
 * {@link TypeGuardError}. Otherwise, there's no problem on the `input` value,
 * Protocol Buffer binary data would be returned.
 *
 * If you can trust `input` value, or want to perform other type of validation,
 * use below functions instead.
 *
 * - {@link encode}
 * - {@link isEncode}
 * - {@link validateEncode}
 *
 * By the way, you know what? Expression power of Protocol Buffer is not enough
 * strong to fully meet the TypeScript type specs. In such reason, if you put a
 * TypeScript type that is not compatible with Protocol Buffer, this function
 * would throw compilation errors.
 *
 * - [Restrictions of Protocol
 *   Buffer](https://typia.io/docs/protobuf/message/#restrictions)
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the value input
 * @param input A value to encode
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Encoded binary data
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function assertEncode<T>(
  input: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): Uint8Array;

<<<<<<< HEAD
/**
 * Protocol Buffer Encoder with type assertion.
 *
 * `typia.protobuf.assertEncode()` is a combination function of {@link assert}
 * and {@link encode}.
 *
 * Therefore, it converts an `input` value to a binary data of Protocol Buffer,
 * with type assertion. If `input` value is not valid, it throws
 * {@link TypeGuardError}. Otherwise, there's no problem on the `input` value,
 * Protocol Buffer binary data would be returned.
 *
 * If you can trust `input` value, or want to perform other type of validation,
 * use below functions instead.
 *
 * - {@link encode}
 * - {@link isEncode}
 * - {@link validateEncode}
 *
 * By the way, you know what? Expression power of Protocol Buffer is not enough
 * strong to fully meet the TypeScript type specs. In such reason, if you put a
 * TypeScript type that is not compatible with Protocol Buffer, this function
 * would throw compilation errors.
 *
 * - [Restrictions of Protocol
 *   Buffer](https://typia.io/docs/protobuf/message/#restrictions)
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the value input
 * @param input A value to encode
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Encoded binary data
 */
=======
/** @internal */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
export function assertEncode<T>(
  input: unknown,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): Uint8Array;

/** @internal */
export function assertEncode(): never {
  NoTransformConfigurationError("protobuf.assertEncode");
}

/**
<<<<<<< HEAD
 * Protocol Buffer Encoder with type checking.
 *
 * `typia.protobuf.isEncode()` is a combination function of {@link is} and
 * {@link encode}.
 *
 * Therefore, it converts an `input` value to a binary data of Protocol Buffer,
 * with type checking. If `input` value is not valid, it returns `null` value.
 * Otherwise, there's no problem on the `input` value, Protocol Buffer binary
 * data would be returned.
 *
 * If you can trust `input` value, or want to perform other type of validation,
 * use below functions instead.
 *
 * - {@link encode}
 * - {@link assertEncode}
 * - {@link validateEncode}
 *
 * By the way, you know what? Expression power of Protocol Buffer is not enough
 * strong to fully meet the TypeScript type specs. In such reason, if you put a
 * TypeScript type that is not compatible with Protocol Buffer, this function
 * would throw compilation errors.
 *
 * - [Restrictions of Protocol
 *   Buffer](https://typia.io/docs/protobuf/message/#restrictions)
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the value input
 * @param input A value to encode
 * @returns Encoded binary data
 */
export function isEncode<T>(input: T): Uint8Array | null;

/**
 * Protocol Buffer Encoder with type checking.
 *
 * `typia.protobuf.isEncode()` is a combination function of {@link is} and
 * {@link encode}.
 *
 * Therefore, it converts an `input` value to a binary data of Protocol Buffer,
 * with type checking. If `input` value is not valid, it returns `null` value.
 * Otherwise, there's no problem on the `input` value, Protocol Buffer binary
 * data would be returned.
 *
 * If you can trust `input` value, or want to perform other type of validation,
 * use below functions instead.
 *
 * - {@link encode}
 * - {@link assertEncode}
 * - {@link validateEncode}
 *
 * By the way, you know what? Expression power of Protocol Buffer is not enough
 * strong to fully meet the TypeScript type specs. In such reason, if you put a
 * TypeScript type that is not compatible with Protocol Buffer, this function
 * would throw compilation errors.
 *
 * - [Restrictions of Protocol
 *   Buffer](https://typia.io/docs/protobuf/message/#restrictions)
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the value input
 * @param input A value to encode
 * @returns Encoded binary data
 */
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
export function isEncode<T>(input: unknown): Uint8Array | null;

/** @internal */
export function isEncode(): never {
  NoTransformConfigurationError("protobuf.isEncode");
}

/**
<<<<<<< HEAD
 * Protocol Buffer Encoder with type validation.
 *
 * `typia.protobuf.validateEncode()` is a combination function of
 * {@link validation} and {@link encode}.
 *
 * Therefore, it converts an `input` value to a binary data of Protocol Buffer,
 * with type validation. If `input` value is not valid, it returns
 * {@link IValidation.IFailure} value with detailed error reasons. Otherwise,
 * there's no problem on the `input` value, Protocol Buffer binary data would be
 * stored in `data` property of the output {@link IValidation.ISuccess}
 * instance.
 *
 * If you can trust `input` value, or want to perform other type of validation,
 * use below functions instead.
 *
 * - {@link encode}
 * - {@link assertEncode}
 * - {@link isEncode}
 *
 * By the way, you know what? Expression power of Protocol Buffer is not enough
 * strong to fully meet the TypeScript type specs. In such reason, if you put a
 * TypeScript type that is not compatible with Protocol Buffer, this function
 * would throw compilation errors.
 *
 * - [Restrictions of Protocol
 *   Buffer](https://typia.io/docs/protobuf/message/#restrictions)
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the value input
 * @param input A value to encode
 * @returns Encoded binary data
 */
export function validateEncode<T>(input: T): IValidation<Uint8Array>;

/**
 * Protocol Buffer Encoder with type validation.
 *
 * `typia.protobuf.validateEncode()` is a combination function of
 * {@link validation} and {@link encode}.
 *
 * Therefore, it converts an `input` value to a binary data of Protocol Buffer,
 * with type validation. If `input` value is not valid, it returns
 * {@link IValidation.IFailure} value with detailed error reasons. Otherwise,
 * there's no problem on the `input` value, Protocol Buffer binary data would be
 * stored in `data` property of the output {@link IValidation.ISuccess}
 * instance.
 *
 * If you can trust `input` value, or want to perform other type of validation,
 * use below functions instead.
 *
 * - {@link encode}
 * - {@link assertEncode}
 * - {@link isEncode}
 *
 * By the way, you know what? Expression power of Protocol Buffer is not enough
 * strong to fully meet the TypeScript type specs. In such reason, if you put a
 * TypeScript type that is not compatible with Protocol Buffer, this function
 * would throw compilation errors.
 *
 * - [Restrictions of Protocol
 *   Buffer](https://typia.io/docs/protobuf/message/#restrictions)
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the value input
 * @param input A value to encode
 * @returns Encoded binary data
 */
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
export function validateEncode<T>(input: unknown): IValidation<Uint8Array>;

/** @internal */
export function validateEncode(): never {
  NoTransformConfigurationError("protobuf.validateEncode");
}

/* -----------------------------------------------------------
    FACTORY FUNCTIONS
----------------------------------------------------------- */
/**
<<<<<<< HEAD
 * Creates a reusable {@link decode} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @returns Nothing until you configure the generic argument `T`
 * @throws Compile error
=======
 * Creates reusable {@link decode} function.
 *
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 * @danger You must configure the generic argument `T`
 */
export function createDecode(): never;

/**
<<<<<<< HEAD
 * Creates a reusable {@link decode} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Target type
 * @returns A reusable `decode` function
=======
 * Creates reusable {@link decode} function.
 *
 * @template T Target type
 * @returns Reusable decoder function
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function createDecode<T>(): (input: Uint8Array) => Resolved<T>;

/** @internal */
export function createDecode<T>(): (input: Uint8Array) => Resolved<T> {
  NoTransformConfigurationError("protobuf.createDecode");
}

/**
<<<<<<< HEAD
 * Creates a reusable {@link isDecode} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @returns Nothing until you configure the generic argument `T`
 * @throws Compile error
=======
 * Creates reusable {@link isDecode} function.
 *
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 * @danger You must configure the generic argument `T`
 */
export function createIsDecode(): never;

/**
<<<<<<< HEAD
 * Creates a reusable {@link isDecode} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Target type
 * @returns A reusable `isDecode` function
=======
 * Creates reusable {@link isDecode} function.
 *
 * @template T Target type
 * @returns Reusable decoder function
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function createIsDecode<T>(): (input: Uint8Array) => Resolved<T> | null;

/** @internal */
export function createIsDecode<T>(): (input: Uint8Array) => Resolved<T> | null {
  NoTransformConfigurationError("protobuf.createIsDecode");
}

/**
<<<<<<< HEAD
 * Creates a reusable {@link assertDecode} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Nothing until you configure the generic argument `T`
 * @throws Compile error
=======
 * Creates reusable {@link assertDecode} function.
 *
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 * @danger You must configure the generic argument `T`
 */
export function createAssertDecode(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
<<<<<<< HEAD
 * Creates a reusable {@link assertDecode} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Target type
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns A reusable `assertDecode` function
=======
 * Creates reusable {@link assertDecode} function.
 *
 * @template T Target type
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Reusable decoder function
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function createAssertDecode<T>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: Uint8Array) => Resolved<T>;

/** @internal */
export function createAssertDecode<T>(): (input: Uint8Array) => Resolved<T> {
  NoTransformConfigurationError("protobuf.createAssertDecode");
}

/**
<<<<<<< HEAD
 * Creates a reusable {@link validateDecode} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @returns Nothing until you configure the generic argument `T`
 * @throws Compile error
=======
 * Creates reusable {@link validateDecode} function.
 *
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 * @danger You must configure the generic argument `T`
 */
export function createValidateDecode(): never;

/**
<<<<<<< HEAD
 * Creates a reusable {@link validateDecode} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Target type
 * @returns A reusable `validateDecode` function
=======
 * Creates reusable {@link validateDecode} function.
 *
 * @template T Target type
 * @returns Reusable decoder function
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
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
<<<<<<< HEAD
 * Creates a reusable {@link encode} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @returns Nothing until you configure the generic argument `T`
 * @throws Compile error
=======
 * Creates reusable {@link encode} function.
 *
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 * @danger You must configure the generic argument `T`
 */
export function createEncode(): never;

/**
<<<<<<< HEAD
 * Creates a reusable {@link encode} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Target type
 * @returns A reusable `encode` function
=======
 * Creates reusable {@link encode} function.
 *
 * @template T Type of input value
 * @returns Reusable encoder function
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function createEncode<T>(): (input: T) => Uint8Array;

/** @internal */
export function createEncode<T>(): (input: T) => Uint8Array {
  NoTransformConfigurationError("protobuf.createEncode");
}

/**
<<<<<<< HEAD
 * Creates a reusable {@link isEncode} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @returns Nothing until you configure the generic argument `T`
 * @throws Compile error
=======
 * Creates reusable {@link isEncode} function.
 *
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 * @danger You must configure the generic argument `T`
 */
export function createIsEncode(): never;

/**
<<<<<<< HEAD
 * Creates a reusable {@link isEncode} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Target type
 * @returns A reusable `isEncode` function
=======
 * Creates reusable {@link isEncode} function.
 *
 * @template T Type of input value
 * @returns Reusable encoder function
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function createIsEncode<T>(): (input: T) => Uint8Array | null;

/** @internal */
export function createIsEncode<T>(): (input: T) => Uint8Array | null {
  NoTransformConfigurationError("protobuf.createIsEncode");
}

/**
<<<<<<< HEAD
 * Creates a reusable {@link assertEncode} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Nothing until you configure the generic argument `T`
 * @throws Compile error
=======
 * Creates reusable {@link assertEncode} function.
 *
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 * @danger You must configure the generic argument `T`
 */
export function createAssertEncode(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
<<<<<<< HEAD
 * Creates a reusable {@link assertEncode} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Target type
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns A reusable `assertEncode` function
=======
 * Creates reusable {@link assertEncode} function.
 *
 * @template T Type of input value
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Reusable encoder function
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function createAssertEncode<T>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: T) => Uint8Array;

/** @internal */
export function createAssertEncode<T>(): (input: T) => Uint8Array {
  NoTransformConfigurationError("protobuf.createAssertEncode");
}

/**
<<<<<<< HEAD
 * Creates a reusable {@link validateEncode} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @returns Nothing until you configure the generic argument `T`
 * @throws Compile error
=======
 * Creates reusable {@link validateEncode} function.
 *
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 * @danger You must configure the generic argument `T`
 */
export function createValidateEncode(): never;

/**
<<<<<<< HEAD
 * Creates a reusable {@link validateEncode} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Target type
 * @returns A reusable `validateEncode` function
=======
 * Creates reusable {@link validateEncode} function.
 *
 * @template T Type of input value
 * @returns Reusable encoder function
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
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
