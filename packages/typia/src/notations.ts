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
 */
export function camel<T>(input: T): CamelCase<T>;

/** @internal */
export function camel(): never {
  return NoTransformConfigurationError("notations.camel");
}

/**
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
 * @param errorFactory Custom error factory receiving {@link TypeGuardError.IProps}
 * @returns New object with camelCase property names
 * @throws {TypeGuardError} When input doesn't conform to type `T`
 */
export function assertCamel<T>(
  input: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): CamelCase<T>;

/** @internal */
export function assertCamel<T>(
  input: unknown,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): CamelCase<T>;

/** @internal */
export function assertCamel(): never {
  return NoTransformConfigurationError("notations.assertCamel");
}

/**
 * Converts property names to camelCase with type checking.
 *
 * Transforms all property names to camelCase with {@link is} validation.
 * Returns `null` on type mismatch.
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
export function isCamel<T>(input: unknown): CamelCase<T> | null;

/** @internal */
export function isCamel(): never {
  return NoTransformConfigurationError("notations.isCamel");
}

/**
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
export function validateCamel<T>(input: unknown): IValidation<CamelCase<T>>;

/** @internal */
export function validateCamel(): never {
  return NoTransformConfigurationError("notations.validateCamel");
}

/* -----------------------------------------------------------
    PASCAL CASE
----------------------------------------------------------- */
/**
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
 */
export function pascal<T>(input: T): PascalCase<T>;

/** @internal */
export function pascal(): never {
  return NoTransformConfigurationError("notations.pascal");
}

/**
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
 * @param errorFactory Custom error factory receiving {@link TypeGuardError.IProps}
 * @returns New object with PascalCase property names
 * @throws {TypeGuardError} When input doesn't conform to type `T`
 */
export function assertPascal<T>(
  input: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): PascalCase<T>;

/** @internal */
export function assertPascal<T>(
  input: unknown,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): PascalCase<T>;

/** @internal */
export function assertPascal(): never {
  return NoTransformConfigurationError("notations.assertPascal");
}

/**
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
export function isPascal<T>(input: unknown): PascalCase<T> | null;

/** @internal */
export function isPascal(): never {
  return NoTransformConfigurationError("notations.isPascal");
}

/**
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
export function validatePascal<T>(input: unknown): IValidation<PascalCase<T>>;

/** @internal */
export function validatePascal(): never {
  return NoTransformConfigurationError("notations.validatePascal");
}

/* -----------------------------------------------------------
    SNAKE CASE
----------------------------------------------------------- */
/**
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
 */
export function snake<T>(input: T): SnakeCase<T>;

/** @internal */
export function snake(): never {
  return NoTransformConfigurationError("notations.snake");
}

/**
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
 * @param errorFactory Custom error factory receiving {@link TypeGuardError.IProps}
 * @returns New object with snake_case property names
 * @throws {TypeGuardError} When input doesn't conform to type `T`
 */
export function assertSnake<T>(
  input: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): SnakeCase<T>;

/** @internal */
export function assertSnake<T>(
  input: unknown,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): SnakeCase<T>;

/** @internal */
export function assertSnake(): never {
  return NoTransformConfigurationError("notations.assertSnake");
}

/**
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
export function isSnake<T>(input: unknown): SnakeCase<T> | null;

/** @internal */
export function isSnake(): never {
  return NoTransformConfigurationError("notations.isSnake");
}

/**
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
export function validateSnake<T>(input: unknown): IValidation<SnakeCase<T>>;

/** @internal */
export function validateSnake(): never {
  return NoTransformConfigurationError("notations.validateSnake");
}

/* -----------------------------------------------------------
    FACTORY FUNCTIONS
----------------------------------------------------------- */
/**
 * Creates reusable {@link camel} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createCamel(): never;

/**
 * Creates reusable {@link camel} function.
 *
 * @template T Type of input value
 * @returns Reusable conversion function
 */
export function createCamel<T>(): (input: T) => CamelCase<T>;

/** @internal */
export function createCamel(): never {
  NoTransformConfigurationError("notations.createCamel");
}

/**
 * Creates reusable {@link assertCamel} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createAssertCamel(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Creates reusable {@link assertCamel} function.
 *
 * @template T Type of input value
 * @param errorFactory Custom error factory receiving {@link TypeGuardError.IProps}
 * @returns Reusable conversion function
 */
export function createAssertCamel<T>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: T) => CamelCase<T>;

/** @internal */
export function createAssertCamel(): never {
  NoTransformConfigurationError("notations.createAssertCamel");
}

/**
 * Creates reusable {@link isCamel} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createIsCamel(): never;

/**
 * Creates reusable {@link isCamel} function.
 *
 * @template T Type of input value
 * @returns Reusable conversion function
 */
export function createIsCamel<T>(): (input: T) => CamelCase<T> | null;

/** @internal */
export function createIsCamel(): never {
  NoTransformConfigurationError("notations.createIsCamel");
}

/**
 * Creates reusable {@link validateCamel} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createValidateCamel(): never;

/**
 * Creates reusable {@link validateCamel} function.
 *
 * @template T Type of input value
 * @returns Reusable conversion function
 */
export function createValidateCamel<T>(): (
  input: T,
) => IValidation<CamelCase<T>>;

/** @internal */
export function createValidateCamel(): never {
  NoTransformConfigurationError("notations.createValidateCamel");
}

/**
 * Creates reusable {@link pascal} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createPascal(): never;

/**
 * Creates reusable {@link pascal} function.
 *
 * @template T Type of input value
 * @returns Reusable conversion function
 */
export function createPascal<T>(): (input: T) => PascalCase<T>;

/** @internal */
export function createPascal(): never {
  NoTransformConfigurationError("notations.createPascal");
}

/**
 * Creates reusable {@link assertPascal} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createAssertPascal(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Creates reusable {@link assertPascal} function.
 *
 * @template T Type of input value
 * @param errorFactory Custom error factory receiving {@link TypeGuardError.IProps}
 * @returns Reusable conversion function
 */
export function createAssertPascal<T>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: T) => PascalCase<T>;

/** @internal */
export function createAssertPascal(): never {
  NoTransformConfigurationError("notations.createAssertPascal");
}

/**
 * Creates reusable {@link isPascal} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createIsPascal(): never;

/**
 * Creates reusable {@link isPascal} function.
 *
 * @template T Type of input value
 * @returns Reusable conversion function
 */
export function createIsPascal<T>(): (input: T) => PascalCase<T> | null;

/** @internal */
export function createIsPascal(): never {
  NoTransformConfigurationError("notations.createIsPascal");
}

/**
 * Creates reusable {@link validatePascal} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createValidatePascal(): never;

/**
 * Creates reusable {@link validatePascal} function.
 *
 * @template T Type of input value
 * @returns Reusable conversion function
 */
export function createValidatePascal<T>(): (
  input: T,
) => IValidation<PascalCase<T>>;

/** @internal */
export function createValidatePascal(): never {
  NoTransformConfigurationError("notations.createValidatePascal");
}

/**
 * Creates reusable {@link snake} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createSnake(): never;

/**
 * Creates reusable {@link snake} function.
 *
 * @template T Type of input value
 * @returns Reusable conversion function
 */
export function createSnake<T>(): (input: T) => SnakeCase<T>;

/** @internal */
export function createSnake(): never {
  NoTransformConfigurationError("notations.createSnake");
}

/**
 * Creates reusable {@link assertSnake} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createAssertSnake(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Creates reusable {@link assertSnake} function.
 *
 * @template T Type of input value
 * @param errorFactory Custom error factory receiving {@link TypeGuardError.IProps}
 * @returns Reusable conversion function
 */
export function createAssertSnake<T>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: T) => SnakeCase<T>;

/** @internal */
export function createAssertSnake(): never {
  NoTransformConfigurationError("notations.createAssertSnake");
}

/**
 * Creates reusable {@link isSnake} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createIsSnake(): never;

/**
 * Creates reusable {@link isSnake} function.
 *
 * @template T Type of input value
 * @returns Reusable conversion function
 */
export function createIsSnake<T>(): (input: T) => SnakeCase<T> | null;

/** @internal */
export function createIsSnake(): never {
  NoTransformConfigurationError("notations.createIsSnake");
}

/**
 * Creates reusable {@link validateSnake} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createValidateSnake(): never;

/**
 * Creates reusable {@link validateSnake} function.
 *
 * @template T Type of input value
 * @returns Reusable conversion function
 */
export function createValidateSnake<T>(): (
  input: T,
) => IValidation<SnakeCase<T>>;

/** @internal */
export function createValidateSnake(): never {
  NoTransformConfigurationError("notations.createValidateSnake");
}
