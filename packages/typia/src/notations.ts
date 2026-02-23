import {
  CamelCase,
  IValidation,
  PascalCase,
  SnakeCase,
} from "@typia/interface";

import { TypeGuardError } from "./TypeGuardError";
import { NoTransformConfigurationError } from "./transformers/NoTransformConfigurationError";

/* ===========================================================
    NOTATIONS (NAMING CONVENTIONS)
      - CAMEL CASE
      - PASCAL CASE
      - SNAKE CASE
      - FACTORY FUNCTIONS
==============================================================
    CAMEL CASE
----------------------------------------------------------- */
/**
<<<<<<< HEAD
 * Convert to camel case.
 *
 * Convert every property names of nested objects to follow the camel case
 * convention.
 *
 * For reference, this `typia.notations.camel()` function does not validate the
 * input value type. It just believes that the input value is following the type
 * `T`. Therefore, if you can't ensure the input value type, it would be better
 * to call one of them below:
 *
 * - {@link assertCamel}
 * - {@link isCamel}
 * - {@link validateCamel}
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param input Target object
 * @returns Camel case object
=======
 * Converts property names to camelCase.
 *
 * Transforms all property names in the object (including nested) to camelCase
 * convention. Creates a new object with renamed properties.
 *
 * Does not validate the input. For validation, use:
 *
 * - {@link assertCamel} — Throws on type mismatch
 * - {@link isCamel} — Returns `null` on type mismatch
 * - {@link validateCamel} — Returns detailed validation errors
 *
 * @template T Type of input value
 * @param input Object to convert
 * @returns New object with camelCase property names
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function camel<T>(input: T): CamelCase<T>;

/** @internal */
export function camel(): never {
  return NoTransformConfigurationError("notations.camel");
}

/**
<<<<<<< HEAD
 * Converts to camel case with type assertion.
 *
 * Convert every property names of nested objects to follow the camel case
 * convention. If the input value does not follow the type `T`, it throws
 * {@link TypeGuardError}.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param input Target object
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Camel case object
=======
 * Converts property names to camelCase with assertion.
 *
 * Transforms all property names to camelCase with {@link assert} validation.
 * Throws {@link TypeGuardError} on type mismatch.
 *
 * Related functions:
 *
 * - {@link camel} — No validation
 * - {@link isCamel} — Returns `null` instead of throwing
 * - {@link validateCamel} — Returns detailed validation errors
 *
 * @template T Type of input value
 * @param input Object to convert
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns New object with camelCase property names
 * @throws {TypeGuardError} When input doesn't conform to type `T`
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function assertCamel<T>(
  input: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): CamelCase<T>;

<<<<<<< HEAD
/**
 * Converts to camel case with type assertion.
 *
 * Convert every property names of nested objects to follow the camel case
 * convention. If the input value does not follow the type `T`, it throws
 * {@link TypeGuardError}.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param input Target object
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Camel case object
 */
=======
/** @internal */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
export function assertCamel<T>(
  input: unknown,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): CamelCase<T>;

/** @internal */
export function assertCamel(): never {
  return NoTransformConfigurationError("notations.assertCamel");
}

/**
<<<<<<< HEAD
 * Converts to camel case with type checking.
 *
 * Convert every property names of nested objects to follow the camel case
 * convention. If the input value does not follow the type `T`, it returns
 * `null` value instead.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param input Target object
 * @returns Camel case object when exact type, otherwise null
 */
export function isCamel<T>(input: T): CamelCase<T> | null;

/**
 * Converts to camel case with type checking.
 *
 * Convert every property names of nested objects to follow the camel case
 * convention. If the input value does not follow the type `T`, it returns
 * `null` value instead.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param input Target object
 * @returns Camel case object when exact type, otherwise null
 */
=======
 * Converts property names to camelCase with type checking.
 *
 * Transforms all property names to camelCase with {@link is} validation. Returns
 * `null` on type mismatch.
 *
 * Related functions:
 *
 * - {@link camel} — No validation
 * - {@link assertCamel} — Throws instead of returning `null`
 * - {@link validateCamel} — Returns detailed validation errors
 *
 * @template T Type of input value
 * @param input Object to convert
 * @returns New object with camelCase property names, or `null` if invalid
 */
export function isCamel<T>(input: T): CamelCase<T> | null;

/** @internal */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
export function isCamel<T>(input: unknown): CamelCase<T> | null;

/** @internal */
export function isCamel(): never {
  return NoTransformConfigurationError("notations.isCamel");
}

/**
<<<<<<< HEAD
 * Converts to camel case with type validation.
 *
 * Convert every property names of nested objects to follow the camel case
 * convention. If the input value does not follow the type `T`, it returns
 * {@link IValidation.Failure} object. Otherwise, there's no problem on the input
 * value, camel cased converted data would be stored in the `data` property of
 * the output {@link IValidation.Success} object.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param input Target object
 * @returns Validation result with camel case object
 */
export function validateCamel<T>(input: T): IValidation<CamelCase<T>>;

/**
 * Converts to camel case with type validation.
 *
 * Convert every property names of nested objects to follow the camel case
 * convention. If the input value does not follow the type `T`, it returns
 * {@link IValidation.Failure} object. Otherwise, there's no problem on the input
 * value, camel cased converted data would be stored in the `data` property of
 * the output {@link IValidation.Success} object.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param input Target object
 * @returns Validation result with camel case object
 */
=======
 * Converts property names to camelCase with validation.
 *
 * Transforms all property names to camelCase with {@link validate} validation.
 * Returns {@link IValidation.IFailure} with all errors on mismatch, or
 * {@link IValidation.ISuccess} with converted object.
 *
 * Related functions:
 *
 * - {@link camel} — No validation
 * - {@link assertCamel} — Throws on first error
 * - {@link isCamel} — Returns `null` instead of error details
 *
 * @template T Type of input value
 * @param input Object to convert
 * @returns Validation result containing converted object or errors
 */
export function validateCamel<T>(input: T): IValidation<CamelCase<T>>;

/** @internal */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
export function validateCamel<T>(input: unknown): IValidation<CamelCase<T>>;

/** @internal */
export function validateCamel(): never {
  return NoTransformConfigurationError("notations.validateCamel");
}

/* -----------------------------------------------------------
    PASCAL CASE
----------------------------------------------------------- */
/**
<<<<<<< HEAD
 * Convert to pascal case.
 *
 * Convert every property names of nested objects to follow the pascal case
 * convention.
 *
 * For reference, this `typia.notations.pascal()` function does not validate the
 * input value type. It just believes that the input value is following the type
 * `T`. Therefore, if you can't ensure the input value type, it would be better
 * to call one of them below:
 *
 * - {@link assertPascal}
 * - {@link isPascal}
 * - {@link validatePascal}
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param input Target object
 * @returns Pascal case object
=======
 * Converts property names to PascalCase.
 *
 * Transforms all property names in the object (including nested) to PascalCase
 * convention. Creates a new object with renamed properties.
 *
 * Does not validate the input. For validation, use:
 *
 * - {@link assertPascal} — Throws on type mismatch
 * - {@link isPascal} — Returns `null` on type mismatch
 * - {@link validatePascal} — Returns detailed validation errors
 *
 * @template T Type of input value
 * @param input Object to convert
 * @returns New object with PascalCase property names
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function pascal<T>(input: T): PascalCase<T>;

/** @internal */
export function pascal(): never {
  return NoTransformConfigurationError("notations.pascal");
}

/**
<<<<<<< HEAD
 * Converts to pascal case with type assertion.
 *
 * Convert every property names of nested objects to follow the pascal case
 * convention. If the input value does not follow the type `T`, it throws
 * {@link TypeGuardError}.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param input Target object
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Pascal case object
=======
 * Converts property names to PascalCase with assertion.
 *
 * Transforms all property names to PascalCase with {@link assert} validation.
 * Throws {@link TypeGuardError} on type mismatch.
 *
 * Related functions:
 *
 * - {@link pascal} — No validation
 * - {@link isPascal} — Returns `null` instead of throwing
 * - {@link validatePascal} — Returns detailed validation errors
 *
 * @template T Type of input value
 * @param input Object to convert
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns New object with PascalCase property names
 * @throws {TypeGuardError} When input doesn't conform to type `T`
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function assertPascal<T>(
  input: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): PascalCase<T>;

<<<<<<< HEAD
/**
 * Converts to pascal case with type assertion.
 *
 * Convert every property names of nested objects to follow the pascal case
 * convention. If the input value does not follow the type `T`, it throws
 * {@link TypeGuardError}.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param input Target object
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Pascal case object
 */
=======
/** @internal */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
export function assertPascal<T>(
  input: unknown,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): PascalCase<T>;

/** @internal */
export function assertPascal(): never {
  return NoTransformConfigurationError("notations.assertPascal");
}

/**
<<<<<<< HEAD
 * Converts to pascal case with type checking.
 *
 * Convert every property names of nested objects to follow the pascal case
 * convention. If the input value does not follow the type `T`, it returns
 * `null` value instead.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param input Target object
 * @returns Pascal case object when exact type, otherwise null
 */
export function isPascal<T>(input: T): PascalCase<T> | null;

/**
 * Converts to pascal case with type checking.
 *
 * Convert every property names of nested objects to follow the pascal case
 * convention. If the input value does not follow the type `T`, it returns
 * `null` value instead.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param input Target object
 * @returns Pascal case object when exact type, otherwise null
 */
=======
 * Converts property names to PascalCase with type checking.
 *
 * Transforms all property names to PascalCase with {@link is} validation.
 * Returns `null` on type mismatch.
 *
 * Related functions:
 *
 * - {@link pascal} — No validation
 * - {@link assertPascal} — Throws instead of returning `null`
 * - {@link validatePascal} — Returns detailed validation errors
 *
 * @template T Type of input value
 * @param input Object to convert
 * @returns New object with PascalCase property names, or `null` if invalid
 */
export function isPascal<T>(input: T): PascalCase<T> | null;

/** @internal */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
export function isPascal<T>(input: unknown): PascalCase<T> | null;

/** @internal */
export function isPascal(): never {
  return NoTransformConfigurationError("notations.isPascal");
}

/**
<<<<<<< HEAD
 * Converts to pascal case with type validation.
 *
 * Convert every property names of nested objects to follow the pascal case
 * convention. If the input value does not follow the type `T`, it returns
 * {@link IValidation.Failure} object. Otherwise, there's no problem on the input
 * value, pascal cased converted data would be stored in the `data` property of
 * the output {@link IValidation.Success} object.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param input Target object
 * @returns Validation result with pascal case object
 */
export function validatePascal<T>(input: T): IValidation<PascalCase<T>>;

/**
 * Converts to pascal case with type validation.
 *
 * Convert every property names of nested objects to follow the pascal case
 * convention. If the input value does not follow the type `T`, it returns
 * {@link IValidation.Failure} object. Otherwise, there's no problem on the input
 * value, pascal cased converted data would be stored in the `data` property of
 * the output {@link IValidation.Success} object.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param input Target object
 * @returns Validation result with pascal case object
 */
=======
 * Converts property names to PascalCase with validation.
 *
 * Transforms all property names to PascalCase with {@link validate} validation.
 * Returns {@link IValidation.IFailure} with all errors on mismatch, or
 * {@link IValidation.ISuccess} with converted object.
 *
 * Related functions:
 *
 * - {@link pascal} — No validation
 * - {@link assertPascal} — Throws on first error
 * - {@link isPascal} — Returns `null` instead of error details
 *
 * @template T Type of input value
 * @param input Object to convert
 * @returns Validation result containing converted object or errors
 */
export function validatePascal<T>(input: T): IValidation<PascalCase<T>>;

/** @internal */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
export function validatePascal<T>(input: unknown): IValidation<PascalCase<T>>;

/** @internal */
export function validatePascal(): never {
  return NoTransformConfigurationError("notations.validatePascal");
}

/* -----------------------------------------------------------
    SNAKE CASE
----------------------------------------------------------- */
/**
<<<<<<< HEAD
 * Convert to snake case.
 *
 * Convert every property names of nested objects to follow the snake case
 * convention.
 *
 * For reference, this `typia.notations.snake()` function does not validate the
 * input value type. It just believes that the input value is following the type
 * `T`. Therefore, if you can't ensure the input value type, it would be better
 * to call one of them below:
 *
 * - {@link assertSnake}
 * - {@link isSnake}
 * - {@link validateSnake}
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param input Target object
 * @returns Snake case object
=======
 * Converts property names to snake_case.
 *
 * Transforms all property names in the object (including nested) to snake_case
 * convention. Creates a new object with renamed properties.
 *
 * Does not validate the input. For validation, use:
 *
 * - {@link assertSnake} — Throws on type mismatch
 * - {@link isSnake} — Returns `null` on type mismatch
 * - {@link validateSnake} — Returns detailed validation errors
 *
 * @template T Type of input value
 * @param input Object to convert
 * @returns New object with snake_case property names
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function snake<T>(input: T): SnakeCase<T>;

/** @internal */
export function snake(): never {
  return NoTransformConfigurationError("notations.snake");
}

/**
<<<<<<< HEAD
 * Converts to snake case with type assertion.
 *
 * Convert every property names of nested objects to follow the snake case
 * convention. If the input value does not follow the type `T`, it throws
 * {@link TypeGuardError}.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param input Target object
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Snake case object
=======
 * Converts property names to snake_case with assertion.
 *
 * Transforms all property names to snake_case with {@link assert} validation.
 * Throws {@link TypeGuardError} on type mismatch.
 *
 * Related functions:
 *
 * - {@link snake} — No validation
 * - {@link isSnake} — Returns `null` instead of throwing
 * - {@link validateSnake} — Returns detailed validation errors
 *
 * @template T Type of input value
 * @param input Object to convert
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns New object with snake_case property names
 * @throws {TypeGuardError} When input doesn't conform to type `T`
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function assertSnake<T>(
  input: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): SnakeCase<T>;

<<<<<<< HEAD
/**
 * Converts to snake case with type assertion.
 *
 * Convert every property names of nested objects to follow the snake case
 * convention. If the input value does not follow the type `T`, it throws
 * {@link TypeGuardError}.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param input Target object
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Snake case object
 */
=======
/** @internal */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
export function assertSnake<T>(
  input: unknown,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): SnakeCase<T>;

/** @internal */
export function assertSnake(): never {
  return NoTransformConfigurationError("notations.assertSnake");
}

/**
<<<<<<< HEAD
 * Converts to snake case with type checking.
 *
 * Convert every property names of nested objects to follow the snake case
 * convention. If the input value does not follow the type `T`, it returns
 * `null` value instead.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param input Target object
 * @returns Snake case object when exact type, otherwise null
 */
export function isSnake<T>(input: T): SnakeCase<T> | null;

/**
 * Converts to snake case with type checking.
 *
 * Convert every property names of nested objects to follow the snake case
 * convention. If the input value does not follow the type `T`, it returns
 * `null` value instead.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param input Target object
 * @returns Snake case object when exact type, otherwise null
 */
=======
 * Converts property names to snake_case with type checking.
 *
 * Transforms all property names to snake_case with {@link is} validation.
 * Returns `null` on type mismatch.
 *
 * Related functions:
 *
 * - {@link snake} — No validation
 * - {@link assertSnake} — Throws instead of returning `null`
 * - {@link validateSnake} — Returns detailed validation errors
 *
 * @template T Type of input value
 * @param input Object to convert
 * @returns New object with snake_case property names, or `null` if invalid
 */
export function isSnake<T>(input: T): SnakeCase<T> | null;

/** @internal */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
export function isSnake<T>(input: unknown): SnakeCase<T> | null;

/** @internal */
export function isSnake(): never {
  return NoTransformConfigurationError("notations.isSnake");
}

/**
<<<<<<< HEAD
 * Converts to snake case with type validation.
 *
 * Convert every property names of nested objects to follow the snake case
 * convention. If the input value does not follow the type `T`, it returns
 * {@link IValidation.Failure} object. Otherwise, there's no problem on the input
 * value, snake cased converted data would be stored in the `data` property of
 * the output {@link IValidation.Success} object.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param input Target object
 * @returns Validation result with snake case object
 */
export function validateSnake<T>(input: T): IValidation<SnakeCase<T>>;

/**
 * Converts to snake case with type validation.
 *
 * Convert every property names of nested objects to follow the snake case
 * convention. If the input value does not follow the type `T`, it returns
 * {@link IValidation.Failure} object. Otherwise, there's no problem on the input
 * value, snake cased converted data would be stored in the `data` property of
 * the output {@link IValidation.Success} object.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param input Target object
 * @returns Validation result with snake case object
 */
=======
 * Converts property names to snake_case with validation.
 *
 * Transforms all property names to snake_case with {@link validate} validation.
 * Returns {@link IValidation.IFailure} with all errors on mismatch, or
 * {@link IValidation.ISuccess} with converted object.
 *
 * Related functions:
 *
 * - {@link snake} — No validation
 * - {@link assertSnake} — Throws on first error
 * - {@link isSnake} — Returns `null` instead of error details
 *
 * @template T Type of input value
 * @param input Object to convert
 * @returns Validation result containing converted object or errors
 */
export function validateSnake<T>(input: T): IValidation<SnakeCase<T>>;

/** @internal */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
export function validateSnake<T>(input: unknown): IValidation<SnakeCase<T>>;

/** @internal */
export function validateSnake(): never {
  return NoTransformConfigurationError("notations.validateSnake");
}

/* -----------------------------------------------------------
    FACTORY FUNCTIONS
----------------------------------------------------------- */
/**
<<<<<<< HEAD
 * Creates a reusable {@link camel} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @returns Nothing until be configure the generic argument `T`
 * @throws Compile error
=======
 * Creates reusable {@link camel} function.
 *
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 * @danger You must configure the generic argument `T`
 */
export function createCamel(): never;

/**
<<<<<<< HEAD
 * Creates a reusable {@link camel} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @returns A reusable `camel` function
=======
 * Creates reusable {@link camel} function.
 *
 * @template T Type of input value
 * @returns Reusable conversion function
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function createCamel<T>(): (input: T) => CamelCase<T>;

/** @internal */
export function createCamel(): never {
  NoTransformConfigurationError("notations.createCamel");
}

/**
<<<<<<< HEAD
 * Creates a reusable {@link assertCamel} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Nothing until be configure the generic argument `T`
 * @throws Compile error
=======
 * Creates reusable {@link assertCamel} function.
 *
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 * @danger You must configure the generic argument `T`
 */
export function createAssertCamel(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
<<<<<<< HEAD
 * Creates a reusable {@link assertCamel} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns A reusable `assertCamel` function
=======
 * Creates reusable {@link assertCamel} function.
 *
 * @template T Type of input value
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Reusable conversion function
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function createAssertCamel<T>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: T) => CamelCase<T>;

/** @internal */
export function createAssertCamel(): never {
  NoTransformConfigurationError("notations.createAssertCamel");
}

/**
<<<<<<< HEAD
 * Creates a reusable {@link isCamel} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @returns Nothing until be configure the generic argument `T`
 * @throws Compile error
=======
 * Creates reusable {@link isCamel} function.
 *
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 * @danger You must configure the generic argument `T`
 */
export function createIsCamel(): never;

/**
<<<<<<< HEAD
 * Creates a reusable {@link isCamel} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @returns A reusable `isCamel` function
=======
 * Creates reusable {@link isCamel} function.
 *
 * @template T Type of input value
 * @returns Reusable conversion function
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function createIsCamel<T>(): (input: T) => CamelCase<T> | null;

/** @internal */
export function createIsCamel(): never {
  NoTransformConfigurationError("notations.createIsCamel");
}

/**
<<<<<<< HEAD
 * Creates a reusable {@link validateCamel} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @returns Nothing until be configure the generic argument `T`
 * @throws Compile error
=======
 * Creates reusable {@link validateCamel} function.
 *
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 * @danger You must configure the generic argument `T`
 */
export function createValidateCamel(): never;

/**
<<<<<<< HEAD
 * Creates a reusable {@link validateCamel} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @returns A reusable `validateCamel` function
=======
 * Creates reusable {@link validateCamel} function.
 *
 * @template T Type of input value
 * @returns Reusable conversion function
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function createValidateCamel<T>(): (
  input: T,
) => IValidation<CamelCase<T>>;

/** @internal */
export function createValidateCamel(): never {
  NoTransformConfigurationError("notations.createValidateCamel");
}

/**
<<<<<<< HEAD
 * Creates a reusable {@link pascal} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @returns Nothing until be configure the generic argument `T`
 * @throws Compile error
=======
 * Creates reusable {@link pascal} function.
 *
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 * @danger You must configure the generic argument `T`
 */
export function createPascal(): never;

/**
<<<<<<< HEAD
 * Creates a reusable {@link pascal} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @returns A reusable `pascal` function
=======
 * Creates reusable {@link pascal} function.
 *
 * @template T Type of input value
 * @returns Reusable conversion function
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function createPascal<T>(): (input: T) => PascalCase<T>;

/** @internal */
export function createPascal(): never {
  NoTransformConfigurationError("notations.createPascal");
}

/**
<<<<<<< HEAD
 * Creates a reusable {@link assertPascal} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Nothing until be configure the generic argument `T`
 * @throws Compile error
=======
 * Creates reusable {@link assertPascal} function.
 *
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 * @danger You must configure the generic argument `T`
 */
export function createAssertPascal(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
<<<<<<< HEAD
 * Creates a reusable {@link assertPascal} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns A reusable `assertPascal` function
=======
 * Creates reusable {@link assertPascal} function.
 *
 * @template T Type of input value
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Reusable conversion function
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function createAssertPascal<T>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: T) => PascalCase<T>;

/** @internal */
export function createAssertPascal(): never {
  NoTransformConfigurationError("notations.createAssertPascal");
}

/**
<<<<<<< HEAD
 * Creates a reusable {@link isPascal} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @returns Nothing until be configure the generic argument `T`
 * @throws Compile error
=======
 * Creates reusable {@link isPascal} function.
 *
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 * @danger You must configure the generic argument `T`
 */
export function createIsPascal(): never;

/**
<<<<<<< HEAD
 * Creates a reusable {@link isPascal} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @returns A reusable `isPascal` function
=======
 * Creates reusable {@link isPascal} function.
 *
 * @template T Type of input value
 * @returns Reusable conversion function
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function createIsPascal<T>(): (input: T) => PascalCase<T> | null;

/** @internal */
export function createIsPascal(): never {
  NoTransformConfigurationError("notations.createIsPascal");
}

/**
<<<<<<< HEAD
 * Creates a reusable {@link validatePascal} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @returns Nothing until be configure the generic argument `T`
 * @throws Compile error
=======
 * Creates reusable {@link validatePascal} function.
 *
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 * @danger You must configure the generic argument `T`
 */
export function createValidatePascal(): never;

/**
<<<<<<< HEAD
 * Creates a reusable {@link validatePascal} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @returns A reusable `validatePascal` function
=======
 * Creates reusable {@link validatePascal} function.
 *
 * @template T Type of input value
 * @returns Reusable conversion function
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function createValidatePascal<T>(): (
  input: T,
) => IValidation<PascalCase<T>>;

/** @internal */
export function createValidatePascal(): never {
  NoTransformConfigurationError("notations.createValidatePascal");
}

/**
<<<<<<< HEAD
 * Creates a reusable {@link snake} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @returns Nothing until be configure the generic argument `T`
 * @throws Compile error
=======
 * Creates reusable {@link snake} function.
 *
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 * @danger You must configure the generic argument `T`
 */
export function createSnake(): never;

/**
<<<<<<< HEAD
 * Creates a reusable {@link snake} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @returns A reusable `snake` function
=======
 * Creates reusable {@link snake} function.
 *
 * @template T Type of input value
 * @returns Reusable conversion function
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function createSnake<T>(): (input: T) => SnakeCase<T>;

/** @internal */
export function createSnake(): never {
  NoTransformConfigurationError("notations.createSnake");
}

/**
<<<<<<< HEAD
 * Creates a reusable {@link assertSnake} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Nothing until be configure the generic argument `T`
 * @throws Compile error
=======
 * Creates reusable {@link assertSnake} function.
 *
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 * @danger You must configure the generic argument `T`
 */
export function createAssertSnake(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
<<<<<<< HEAD
 * Creates a reusable {@link assertSnake} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns A reusable `assertSnake` function
=======
 * Creates reusable {@link assertSnake} function.
 *
 * @template T Type of input value
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Reusable conversion function
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function createAssertSnake<T>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: T) => SnakeCase<T>;

/** @internal */
export function createAssertSnake(): never {
  NoTransformConfigurationError("notations.createAssertSnake");
}

/**
<<<<<<< HEAD
 * Creates a reusable {@link isSnake} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @returns Nothing until be configure the generic argument `T`
 * @throws Compile error
=======
 * Creates reusable {@link isSnake} function.
 *
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 * @danger You must configure the generic argument `T`
 */
export function createIsSnake(): never;

/**
<<<<<<< HEAD
 * Creates a reusable {@link isSnake} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @returns A reusable `isSnake` function
=======
 * Creates reusable {@link isSnake} function.
 *
 * @template T Type of input value
 * @returns Reusable conversion function
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function createIsSnake<T>(): (input: T) => SnakeCase<T> | null;

/** @internal */
export function createIsSnake(): never {
  NoTransformConfigurationError("notations.createIsSnake");
}

/**
<<<<<<< HEAD
 * Creates a reusable {@link validateSnake} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @returns Nothing until be configure the generic argument `T`
 * @throws Compile error
=======
 * Creates reusable {@link validateSnake} function.
 *
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 * @danger You must configure the generic argument `T`
 */
export function createValidateSnake(): never;

/**
<<<<<<< HEAD
 * Creates a reusable {@link validateSnake} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @returns A reusable `validateSnake` function
=======
 * Creates reusable {@link validateSnake} function.
 *
 * @template T Type of input value
 * @returns Reusable conversion function
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function createValidateSnake<T>(): (
  input: T,
) => IValidation<SnakeCase<T>>;

/** @internal */
export function createValidateSnake(): never {
  NoTransformConfigurationError("notations.createValidateSnake");
}
