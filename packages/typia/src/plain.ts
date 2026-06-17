/* ===========================================================
    PLAIN
      - CLONE
      - PRUNE
      - CLASSIFY
      - FACTORY FUNCTIONS
=========================================================== */
import { Classifiable, IValidation, Resolved } from "@typia/interface";

import { TypeGuardError } from "./TypeGuardError";
import { NoTransformConfigurationError } from "./transformers/NoTransformConfigurationError";

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
  NoTransformConfigurationError("plain.clone");
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
  NoTransformConfigurationError("plain.assertClone");
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
  NoTransformConfigurationError("plain.isClone");
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
  NoTransformConfigurationError("plain.validateClone");
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
  NoTransformConfigurationError("plain.prune");
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
  NoTransformConfigurationError("plain.assertPrune");
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
  NoTransformConfigurationError("plain.isPrune");
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
  NoTransformConfigurationError("plain.validatePrune");
}

/* -----------------------------------------------------------
    CLASSIFY
----------------------------------------------------------- */
/**
 * Reconstructs a class instance from plain data.
 *
 * Builds a real instance of class type `T` from a plain object, driven by
 * typia's compile-time type information — no decorators required (unlike
 * `class-transformer`). Each class is constructed by exactly one strategy, in
 * precedence order: a static factory `T.from(x)`, then `new T(x)` (single
 * argument), then field copy onto the prototype. Nested classes and containers
 * are reconstructed recursively, and methods come from the prototype.
 *
 * Does not validate the input. For validation, use:
 *
 * - {@link assertClassify} — Throws on type mismatch
 * - {@link validateClassify} — Returns detailed validation errors
 *
 * @template T Target class type to reconstruct
 * @param input Plain data to classify
 * @returns A real instance of type `T`
 */
export function classify<T>(input: Classifiable<T>): T;

/** @internal */
export function classify(): never {
  NoTransformConfigurationError("plain.classify");
}

/**
 * Reconstructs a class instance with assertion.
 *
 * Combines {@link assert} with {@link classify}: validates the plain input
 * against type `T`, throwing {@link TypeGuardError} on mismatch, then builds a
 * real instance of `T`.
 *
 * Related functions:
 *
 * - {@link classify} — No validation
 * - {@link validateClassify} — Returns detailed validation errors
 *
 * @template T Target class type to reconstruct
 * @param input Plain data to validate and classify
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns A real instance of type `T`
 * @throws {TypeGuardError} When input doesn't conform to type `T`
 */
export function assertClassify<T>(
  input: Classifiable<T>,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): T;

/** @internal */
export function assertClassify<T>(
  input: unknown,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): T;

/** @internal */
export function assertClassify(): never {
  NoTransformConfigurationError("plain.assertClassify");
}

/**
 * Reconstructs a class instance with validation.
 *
 * Combines {@link validate} with {@link classify}: validates the plain input
 * against type `T`, returning {@link IValidation.IFailure} with all errors on
 * mismatch, or {@link IValidation.ISuccess} holding a real instance of `T`.
 *
 * Related functions:
 *
 * - {@link classify} — No validation
 * - {@link assertClassify} — Throws on first error
 *
 * @template T Target class type to reconstruct
 * @param input Plain data to validate and classify
 * @returns Validation result containing the instance or errors
 */
export function validateClassify<T>(input: Classifiable<T>): IValidation<T>;

/** @internal */
export function validateClassify<T>(input: unknown): IValidation<T>;

/** @internal */
export function validateClassify(): never {
  NoTransformConfigurationError("plain.validateClassify");
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
  NoTransformConfigurationError("plain.createClone");
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
  NoTransformConfigurationError("plain.createAssertClone");
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
  NoTransformConfigurationError("plain.createIsClone");
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
  NoTransformConfigurationError("plain.createValidateClone");
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
  NoTransformConfigurationError("plain.createPrune");
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
  NoTransformConfigurationError("plain.createAssertPrune");
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
  NoTransformConfigurationError("plain.createIsPrune");
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
  NoTransformConfigurationError("plain.createValidatePrune");
}

/**
 * Creates reusable {@link classify} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createClassify(): never;

/**
 * Creates reusable {@link classify} function.
 *
 * @template T Target class type to reconstruct
 * @returns Reusable classify function
 */
export function createClassify<T>(): (input: Classifiable<T>) => T;

/** @internal */
export function createClassify(): never {
  NoTransformConfigurationError("plain.createClassify");
}

/**
 * Creates reusable {@link assertClassify} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createAssertClassify(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Creates reusable {@link assertClassify} function.
 *
 * @template T Target class type to reconstruct
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Reusable classify function
 */
export function createAssertClassify<T>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: unknown) => T;

/** @internal */
export function createAssertClassify(): never {
  NoTransformConfigurationError("plain.createAssertClassify");
}

/**
 * Creates reusable {@link validateClassify} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createValidateClassify(): never;

/**
 * Creates reusable {@link validateClassify} function.
 *
 * @template T Target class type to reconstruct
 * @returns Reusable classify function
 */
export function createValidateClassify<T>(): (input: unknown) => IValidation<T>;

/** @internal */
export function createValidateClassify(): never {
  NoTransformConfigurationError("plain.createValidateClassify");
}
