/* ===========================================================
    MISCELLANEOUS
      - LITERALS
      - CLONE
      - PRUNE
      - FACTORY FUNCTIONS
==============================================================
    LITERALS
----------------------------------------------------------- */
import { Atomic, IValidation, Resolved } from "@typia/interface";

import { TypeGuardError } from "./TypeGuardError";
import { NoTransformConfigurationError } from "./transformers/NoTransformConfigurationError";

/**
 * Converts union literal type to array.
 *
 * @danger You must configure the generic argument `T`
 */
export function literals(): never;

/**
 * Converts union literal type to array.
 *
 * Extracts all members of a union literal type `T` into an array at runtime.
 *
 * @template T Union literal type (e.g., `"A" | "B" | 1`)
 * @returns Array containing all union members
 */
export function literals<T extends Atomic.Type | null>(): T[];

/** @internal */
export function literals(): never {
  NoTransformConfigurationError("misc.literals");
}

/* -----------------------------------------------------------
    CLONE
----------------------------------------------------------- */
/**
 * Deep clones value of type `T`.
 *
 * Creates a deep copy of the input value. Class instances with methods are
 * cloned as plain objects (methods are not copied).
 *
 * Does not validate the input. For validation, use:
 *
 * - {@link assertClone} — Throws on type mismatch
 * - {@link isClone} — Returns `null` on type mismatch
 * - {@link validateClone} — Returns detailed validation errors
 *
 * @template T Type of input value
 * @param input Value to clone
 * @returns Deep cloned value
 */
export function clone<T>(input: T): Resolved<T>;

/** @internal */
export function clone(): never {
  NoTransformConfigurationError("misc.clone");
}

/**
 * Deep clones value with assertion.
 *
 * Creates a deep copy with {@link assert} validation. Throws
 * {@link TypeGuardError} on type mismatch. Class instances with methods are
 * cloned as plain objects.
 *
 * Related functions:
 *
 * - {@link clone} — No validation
 * - {@link isClone} — Returns `null` instead of throwing
 * - {@link validateClone} — Returns detailed validation errors
 *
 * @template T Type of input value
 * @param input Value to clone
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Deep cloned value
 * @throws {TypeGuardError} When input doesn't conform to type `T`
 */
export function assertClone<T>(
  input: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): Resolved<T>;

/** @internal */
export function assertClone<T>(
  input: unknown,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): Resolved<T>;

/** @internal */
export function assertClone(): never {
  NoTransformConfigurationError("misc.assertClone");
}

/**
 * Deep clones value with type checking.
 *
 * Creates a deep copy with {@link is} validation. Returns `null` on type
 * mismatch. Class instances with methods are cloned as plain objects.
 *
 * Related functions:
 *
 * - {@link clone} — No validation
 * - {@link assertClone} — Throws instead of returning `null`
 * - {@link validateClone} — Returns detailed validation errors
 *
 * @template T Type of input value
 * @param input Value to clone
 * @returns Deep cloned value, or `null` if invalid
 */
export function isClone<T>(input: T): Resolved<T> | null;

/** @internal */
export function isClone<T>(input: unknown): Resolved<T> | null;

/** @internal */
export function isClone(): never {
  NoTransformConfigurationError("misc.isClone");
}

/**
 * Deep clones value with validation.
 *
 * Creates a deep copy with {@link validate} validation. Returns
 * {@link IValidation.IFailure} with all errors on mismatch, or
 * {@link IValidation.ISuccess} with cloned value. Class instances with methods
 * are cloned as plain objects.
 *
 * Related functions:
 *
 * - {@link clone} — No validation
 * - {@link assertClone} — Throws on first error
 * - {@link isClone} — Returns `null` instead of error details
 *
 * @template T Type of input value
 * @param input Value to clone
 * @returns Validation result containing cloned value or errors
 */
export function validateClone<T>(input: T): IValidation<Resolved<T>>;

/** @internal */
export function validateClone<T>(input: unknown): IValidation<Resolved<T>>;

/** @internal */
export function validateClone(): never {
  NoTransformConfigurationError("misc.validateClone");
}

/* -----------------------------------------------------------
    PRUNE
----------------------------------------------------------- */
/**
 * Removes superfluous properties from object.
 *
 * Deletes all properties not defined in type `T`, including in nested objects.
 * Mutates the input directly—removed properties cannot be recovered.
 *
 * Does not validate the input. For validation, use:
 *
 * - {@link assertPrune} — Throws on type mismatch
 * - {@link isPrune} — Returns `false` on type mismatch
 * - {@link validatePrune} — Returns detailed validation errors
 *
 * @template T Type of input value
 * @param input Object to prune
 */
export function prune<T extends object>(input: T): void;

/** @internal */
export function prune(): never {
  NoTransformConfigurationError("misc.prune");
}

/**
 * Removes superfluous properties with assertion.
 *
 * Combines {@link assert} with {@link prune}. Throws {@link TypeGuardError} on
 * type mismatch. Mutates the input directly—removed properties cannot be
 * recovered.
 *
 * Related functions:
 *
 * - {@link prune} — No validation
 * - {@link isPrune} — Returns `false` instead of throwing
 * - {@link validatePrune} — Returns detailed validation errors
 *
 * @template T Type of input value
 * @param input Object to assert and prune
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns The pruned input
 * @throws {TypeGuardError} When input doesn't conform to type `T`
 */
export function assertPrune<T>(
  input: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): T;

/** @internal */
export function assertPrune<T>(
  input: unknown,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): T;

/** @internal */
export function assertPrune(): unknown {
  NoTransformConfigurationError("misc.assertPrune");
}

/**
 * Removes superfluous properties with type checking.
 *
 * Combines {@link is} with {@link prune}. Returns `false` on type mismatch (no
 * pruning occurs). Returns `true` after successful pruning. Mutates the input
 * directly.
 *
 * Related functions:
 *
 * - {@link prune} — No validation
 * - {@link assertPrune} — Throws instead of returning `false`
 * - {@link validatePrune} — Returns detailed validation errors
 *
 * @template T Type of input value
 * @param input Object to check and prune
 * @returns `true` if valid and pruned, `false` if type mismatch
 */
export function isPrune<T>(input: T): input is T;

/** @internal */
export function isPrune<T>(input: unknown): input is T;

/** @internal */
export function isPrune(): never {
  NoTransformConfigurationError("misc.isPrune");
}

/**
 * Removes superfluous properties with validation.
 *
 * Combines {@link validate} with {@link prune}. Returns
 * {@link IValidation.IFailure} with all errors on mismatch (no pruning occurs),
 * or {@link IValidation.ISuccess} after successful pruning. Mutates the input
 * directly.
 *
 * Related functions:
 *
 * - {@link prune} — No validation
 * - {@link assertPrune} — Throws on first error
 * - {@link isPrune} — Returns `false` instead of error details
 *
 * @template T Type of input value
 * @param input Object to validate and prune
 * @returns Validation result
 */
export function validatePrune<T>(input: T): IValidation<T>;

/** @internal */
export function validatePrune<T>(input: unknown): IValidation<T>;

/** @internal */
export function validatePrune<T>(): IValidation<T> {
  NoTransformConfigurationError("misc.validatePrune");
}

/* -----------------------------------------------------------
    FACTORY FUNCTIONS
----------------------------------------------------------- */
/**
 * Creates reusable {@link clone} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createClone(): never;

/**
 * Creates reusable {@link clone} function.
 *
 * @template T Type of input value
 * @returns Reusable clone function
 */
export function createClone<T>(): (input: T) => Resolved<T>;

/** @internal */
export function createClone(): never {
  NoTransformConfigurationError("misc.createClone");
}

/**
 * Creates reusable {@link assertClone} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createAssertClone(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Creates reusable {@link assertClone} function.
 *
 * @template T Type of input value
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Reusable clone function
 */
export function createAssertClone<T>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: unknown) => Resolved<T>;

/** @internal */
export function createAssertClone(): never {
  NoTransformConfigurationError("misc.createAssertClone");
}

/**
 * Creates reusable {@link isClone} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createIsClone(): never;

/**
 * Creates reusable {@link isClone} function.
 *
 * @template T Type of input value
 * @returns Reusable clone function
 */
export function createIsClone<T>(): (input: unknown) => Resolved<T> | null;

/** @internal */
export function createIsClone(): never {
  NoTransformConfigurationError("misc.createIsClone");
}

/**
 * Creates reusable {@link validateClone} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createValidateClone(): never;

/**
 * Creates reusable {@link validateClone} function.
 *
 * @template T Type of input value
 * @returns Reusable clone function
 */
export function createValidateClone<T>(): (
  input: unknown,
) => IValidation<Resolved<T>>;

/** @internal */
export function createValidateClone(): never {
  NoTransformConfigurationError("misc.createValidateClone");
}

/**
 * Creates reusable {@link prune} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createPrune(): never;

/**
 * Creates reusable {@link prune} function.
 *
 * @template T Type of input value
 * @returns Reusable prune function
 */
export function createPrune<T extends object>(): (input: T) => void;

/** @internal */
export function createPrune(): never {
  NoTransformConfigurationError("misc.createPrune");
}

/**
 * Creates reusable {@link assertPrune} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createAssertPrune(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Creates reusable {@link assertPrune} function.
 *
 * @template T Type of input value
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Reusable prune function
 */
export function createAssertPrune<T extends object>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: unknown) => T;

/** @internal */
export function createAssertPrune(): never {
  NoTransformConfigurationError("misc.createAssertPrune");
}

/**
 * Creates reusable {@link isPrune} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createIsPrune(): never;

/**
 * Creates reusable {@link isPrune} function.
 *
 * @template T Type of input value
 * @returns Reusable prune function
 */
export function createIsPrune<T extends object>(): (
  input: unknown,
) => input is T;

/** @internal */
export function createIsPrune(): never {
  NoTransformConfigurationError("misc.createIsPrune");
}

/**
 * Creates reusable {@link validatePrune} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createValidatePrune(): never;

/**
 * Creates reusable {@link validatePrune} function.
 *
 * @template T Type of input value
 * @returns Reusable prune function
 */
export function createValidatePrune<T extends object>(): (
  input: unknown,
) => IValidation<T>;

/** @internal */
export function createValidatePrune(): never {
  NoTransformConfigurationError("misc.createValidatePrune");
}
