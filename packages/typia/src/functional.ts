import { IValidation } from "@typia/interface";

import { TypeGuardError } from "./TypeGuardError";
import { NoTransformConfigurationError } from "./transformers/NoTransformConfigurationError";

/* ===========================================================
  FUNCTIONAL
    - ASSERT
    - IS
    - VALIDATE
==============================================================
  ASSERT
----------------------------------------------------------- */
/**
 * Wraps function to assert both parameters and return value.
 *
 * Wraps the target function and validates all parameters before calling and
 * return value after calling through {@link assert}. Throws on first mismatch.
 *
 * Error path format:
 *
 * - Parameter errors: `$input.parameters[0].property`
 * - Return errors: `$input.return.property`
 *
 * Related functions:
 *
 * - {@link assertParameters} — Validates parameters only
 * - {@link assertReturn} — Validates return value only
 * - {@link validateFunction} — Collects all errors instead of throwing
 * - {@link assertEqualsFunction} — Also rejects extra properties
 *
 * @template T Target function type
 * @param func Function to wrap
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Wrapped function with same signature
 * @throws {TypeGuardError} When parameter or return value type mismatch
 */
export function assertFunction<T extends (...args: any[]) => any>(
  func: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): T;

/** @internal */
export function assertFunction(): never {
  NoTransformConfigurationError("functional.assertFunction");
}

/**
 * Wraps function to assert parameters only.
 *
 * Wraps the target function and validates all parameters before calling through
 * {@link assert}. Return value is not validated. Throws on first mismatch.
 *
 * Error path format: `$input.parameters[0].property`
 *
 * Related functions:
 *
 * - {@link assertFunction} — Also validates return value
 * - {@link assertReturn} — Validates return value only
 * - {@link validateParameters} — Collects all errors instead of throwing
 * - {@link assertEqualsParameters} — Also rejects extra properties
 *
 * @template T Target function type
 * @param func Function to wrap
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Wrapped function with same signature
 * @throws {TypeGuardError} When parameter type mismatch
 */
export function assertParameters<T extends (...args: any[]) => any>(
  func: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): T;

/** @internal */
export function assertParameters(): never {
  NoTransformConfigurationError("functional.assertParameters");
}

/**
 * Wraps function to assert return value only.
 *
 * Wraps the target function and validates return value after calling through
 * {@link assert}. Parameters are not validated. Throws on mismatch.
 *
 * Error path format: `$input.return.property`
 *
 * Related functions:
 *
 * - {@link assertFunction} — Also validates parameters
 * - {@link assertParameters} — Validates parameters only
 * - {@link validateReturn} — Collects all errors instead of throwing
 * - {@link assertEqualsReturn} — Also rejects extra properties
 *
 * @template T Target function type
 * @param func Function to wrap
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Wrapped function with same signature
 * @throws {TypeGuardError} When return value type mismatch
 */
export function assertReturn<T extends (...args: any[]) => any>(
  func: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): T;

/** @internal */
export function assertReturn(): never {
  NoTransformConfigurationError("functional.assertReturn");
}

/**
 * Wraps function to assert parameters and return value with strict equality.
 *
 * Wraps the target function and validates through {@link assertEquals}. Also
 * rejects extra properties not defined in type. Throws on first mismatch.
 *
 * Error path format:
 *
 * - Parameter errors: `$input.parameters[0].property`
 * - Return errors: `$input.return.property`
 *
 * Related functions:
 *
 * - {@link assertFunction} — Allows extra properties
 * - {@link assertEqualsParameters} — Validates parameters only
 * - {@link assertEqualsReturn} — Validates return value only
 * - {@link validateEqualsFunction} — Collects all errors instead of throwing
 *
 * @template T Target function type
 * @param func Function to wrap
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Wrapped function with same signature
 * @throws {TypeGuardError} When type mismatch or extra property detected
 */
export function assertEqualsFunction<T extends (...args: any[]) => any>(
  func: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): T;

/** @internal */
export function assertEqualsFunction(): never {
  NoTransformConfigurationError("functional.assertEqualsFunction");
}

/**
 * Wraps function to assert parameters with strict equality.
 *
 * Wraps the target function and validates parameters through
 * {@link assertEquals}. Also rejects extra properties. Return value is not
 * validated.
 *
 * Error path format: `$input.parameters[0].property`
 *
 * Related functions:
 *
 * - {@link assertParameters} — Allows extra properties
 * - {@link assertEqualsFunction} — Also validates return value
 * - {@link validateEqualsParameters} — Collects all errors instead of throwing
 *
 * @template T Target function type
 * @param func Function to wrap
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Wrapped function with same signature
 * @throws {TypeGuardError} When type mismatch or extra property detected
 */
export function assertEqualsParameters<T extends (...args: any[]) => any>(
  func: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): T;

/** @internal */
export function assertEqualsParameters(): never {
  NoTransformConfigurationError("functional.assertEqualsParameters");
}

/**
 * Wraps function to assert return value with strict equality.
 *
 * Wraps the target function and validates return value through
 * {@link assertEquals}. Also rejects extra properties. Parameters are not
 * validated.
 *
 * Error path format: `$input.return.property`
 *
 * Related functions:
 *
 * - {@link assertReturn} — Allows extra properties
 * - {@link assertEqualsFunction} — Also validates parameters
 * - {@link validateEqualsReturn} — Collects all errors instead of throwing
 *
 * @template T Target function type
 * @param func Function to wrap
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Wrapped function with same signature
 * @throws {TypeGuardError} When type mismatch or extra property detected
 */
export function assertEqualsReturn<T extends (...args: any[]) => any>(
  func: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): T;

/** @internal */
export function assertEqualsReturn(): never {
  NoTransformConfigurationError("functional.assertEqualsReturn");
}

/* -----------------------------------------------------------
  IS
----------------------------------------------------------- */
/**
 * Wraps function to test both parameters and return value.
 *
 * Wraps the target function and checks all parameters before calling and return
 * value after calling through {@link is}. Returns `null` on mismatch.
 *
 * Related functions:
 *
 * - {@link isParameters} — Tests parameters only
 * - {@link isReturn} — Tests return value only
 * - {@link assertFunction} — Throws with error details on mismatch
 * - {@link validateFunction} — Returns all error details
 * - {@link equalsFunction} — Also rejects extra properties
 *
 * @template T Target function type
 * @param func Function to wrap
 * @returns Wrapped function returning `Output | null`
 */
export function isFunction<T extends (...args: any[]) => any>(
  func: T,
): T extends (...args: infer Arguments) => infer Output
  ? Output extends Promise<infer R>
    ? (...args: Arguments) => Promise<R | null>
    : (...args: Arguments) => Output | null
  : never;

/** @internal */
export function isFunction(): never {
  NoTransformConfigurationError("functional.isFunction");
}

/**
 * Wraps function to test parameters only.
 *
 * Wraps the target function and checks all parameters before calling through
 * {@link is}. Return value is not checked. Returns `null` on mismatch.
 *
 * Related functions:
 *
 * - {@link isFunction} — Also tests return value
 * - {@link isReturn} — Tests return value only
 * - {@link assertParameters} — Throws with error details
 * - {@link validateParameters} — Returns all error details
 * - {@link equalsParameters} — Also rejects extra properties
 *
 * @template T Target function type
 * @param func Function to wrap
 * @returns Wrapped function returning `Output | null`
 */
export function isParameters<T extends (...args: any[]) => any>(
  func: T,
): T extends (...args: infer Arguments) => infer Output
  ? Output extends Promise<infer R>
    ? (...args: Arguments) => Promise<R | null>
    : (...args: Arguments) => Output | null
  : never;

/** @internal */
export function isParameters(): never {
  NoTransformConfigurationError("functional.isParameters");
}

/**
 * Wraps function to test return value only.
 *
 * Wraps the target function and checks return value after calling through
 * {@link is}. Parameters are not checked. Returns `null` on mismatch.
 *
 * Related functions:
 *
 * - {@link isFunction} — Also tests parameters
 * - {@link isParameters} — Tests parameters only
 * - {@link assertReturn} — Throws with error details
 * - {@link validateReturn} — Returns all error details
 * - {@link equalsReturn} — Also rejects extra properties
 *
 * @template T Target function type
 * @param func Function to wrap
 * @returns Wrapped function returning `Output | null`
 */
export function isReturn<T extends (...args: any[]) => any>(
  func: T,
): T extends (...args: infer Arguments) => infer Output
  ? Output extends Promise<infer R>
    ? (...args: Arguments) => Promise<R | null>
    : (...args: Arguments) => Output | null
  : never;

/** @internal */
export function isReturn(): never {
  NoTransformConfigurationError("functional.isReturn");
}

/**
 * Wraps function to test parameters and return value with strict equality.
 *
 * Wraps the target function and checks through {@link equals}. Also rejects
 * extra properties not defined in type. Returns `null` on mismatch.
 *
 * Related functions:
 *
 * - {@link isFunction} — Allows extra properties
 * - {@link equalsParameters} — Tests parameters only
 * - {@link equalsReturn} — Tests return value only
 * - {@link assertEqualsFunction} — Throws with error details
 * - {@link validateEqualsFunction} — Returns all error details
 *
 * @template T Target function type
 * @param func Function to wrap
 * @returns Wrapped function returning `Output | null`
 */
export function equalsFunction<T extends (...args: any[]) => any>(
  func: T,
): T extends (...args: infer Arguments) => infer Output
  ? Output extends Promise<infer R>
    ? (...args: Arguments) => Promise<R | null>
    : (...args: Arguments) => Output | null
  : never;

/** @internal */
export function equalsFunction(): never {
  NoTransformConfigurationError("functional.equalsFunction");
}

/**
 * Wraps function to test parameters with strict equality.
 *
 * Wraps the target function and checks parameters through {@link equals}. Also
 * rejects extra properties. Return value is not checked.
 *
 * Related functions:
 *
 * - {@link isParameters} — Allows extra properties
 * - {@link equalsFunction} — Also tests return value
 * - {@link equalsReturn} — Tests return value only
 * - {@link assertEqualsParameters} — Throws with error details
 * - {@link validateEqualsParameters} — Returns all error details
 *
 * @template T Target function type
 * @param func Function to wrap
 * @returns Wrapped function returning `Output | null`
 */
export function equalsParameters<T extends (...args: any[]) => any>(
  func: T,
): T extends (...args: infer Arguments) => infer Output
  ? Output extends Promise<infer R>
    ? (...args: Arguments) => Promise<R | null>
    : (...args: Arguments) => Output | null
  : never;

/** @internal */
export function equalsParameters(): never {
  NoTransformConfigurationError("functional.equalsParameters");
}

/**
 * Wraps function to test return value with strict equality.
 *
 * Wraps the target function and checks return value through {@link equals}. Also
 * rejects extra properties. Parameters are not checked.
 *
 * Related functions:
 *
 * - {@link isReturn} — Allows extra properties
 * - {@link equalsFunction} — Also tests parameters
 * - {@link equalsParameters} — Tests parameters only
 * - {@link assertEqualsReturn} — Throws with error details
 * - {@link validateEqualsReturn} — Returns all error details
 *
 * @template T Target function type
 * @param func Function to wrap
 * @returns Wrapped function returning `Output | null`
 */
export function equalsReturn<T extends (...args: any[]) => any>(
  func: T,
): T extends (...args: infer Arguments) => infer Output
  ? Output extends Promise<infer R>
    ? (...args: Arguments) => Promise<R | null>
    : (...args: Arguments) => Output | null
  : never;

/** @internal */
export function equalsReturn(): never {
  NoTransformConfigurationError("functional.equalsReturn");
}

/* -----------------------------------------------------------
  VALIDATE
----------------------------------------------------------- */
/**
 * Wraps function to validate both parameters and return value.
 *
 * Wraps the target function and validates all parameters before calling and
 * return value after calling through {@link validate}. Collects all errors.
 *
 * Error path format:
 *
 * - Parameter errors: `$input.parameters[0].property`
 * - Return errors: `$input.return.property`
 *
 * Related functions:
 *
 * - {@link validateParameters} — Validates parameters only
 * - {@link validateReturn} — Validates return value only
 * - {@link assertFunction} — Throws on first error
 * - {@link validateEqualsFunction} — Also rejects extra properties
 *
 * @template T Target function type
 * @param func Function to wrap
 * @returns Wrapped function returning {@link IValidation}
 */
export function validateFunction<T extends (...args: any[]) => any>(
  func: T,
): T extends (...args: infer Arguments) => infer Output
  ? Output extends Promise<infer R>
    ? (...args: Arguments) => Promise<IValidation<R>>
    : (...args: Arguments) => IValidation<Output>
  : never;

/** @internal */
export function validateFunction(): never {
  NoTransformConfigurationError("functional.validateFunction");
}

/**
 * Wraps function to validate parameters only.
 *
 * Wraps the target function and validates all parameters before calling through
 * {@link validate}. Return value is not validated. Collects all errors.
 *
 * Error path format: `$input.parameters[0].property`
 *
 * Related functions:
 *
 * - {@link validateFunction} — Also validates return value
 * - {@link validateReturn} — Validates return value only
 * - {@link assertParameters} — Throws on first error
 * - {@link validateEqualsParameters} — Also rejects extra properties
 *
 * @template T Target function type
 * @param func Function to wrap
 * @returns Wrapped function returning {@link IValidation}
 */
export function validateParameters<T extends (...args: any[]) => any>(
  func: T,
): T extends (...args: infer Arguments) => infer Output
  ? Output extends Promise<infer R>
    ? (...args: Arguments) => Promise<IValidation<R>>
    : (...args: Arguments) => IValidation<Output>
  : never;

/** @internal */
export function validateParameters(): never {
  NoTransformConfigurationError("functional.validateParameters");
}

/**
 * Wraps function to validate return value only.
 *
 * Wraps the target function and validates return value after calling through
 * {@link validate}. Parameters are not validated. Collects all errors.
 *
 * Error path format: `$input.return.property`
 *
 * Related functions:
 *
 * - {@link validateFunction} — Also validates parameters
 * - {@link validateParameters} — Validates parameters only
 * - {@link assertReturn} — Throws on first error
 * - {@link validateEqualsReturn} — Also rejects extra properties
 *
 * @template T Target function type
 * @param func Function to wrap
 * @returns Wrapped function returning {@link IValidation}
 */
export function validateReturn<T extends (...args: any[]) => any>(
  func: T,
): T extends (...args: infer Arguments) => infer Output
  ? Output extends Promise<infer R>
    ? (...args: Arguments) => Promise<IValidation<R>>
    : (...args: Arguments) => IValidation<Output>
  : never;

/** @internal */
export function validateReturn(): never {
  NoTransformConfigurationError("functional.validateReturn");
}

/**
 * Wraps function to validate parameters and return value with strict equality.
 *
 * Wraps the target function and validates through {@link validateEquals}. Also
 * rejects extra properties not defined in type. Collects all errors.
 *
 * Error path format:
 *
 * - Parameter errors: `$input.parameters[0].property`
 * - Return errors: `$input.return.property`
 *
 * Related functions:
 *
 * - {@link validateFunction} — Allows extra properties
 * - {@link validateEqualsParameters} — Validates parameters only
 * - {@link validateEqualsReturn} — Validates return value only
 * - {@link assertEqualsFunction} — Throws on first error
 *
 * @template T Target function type
 * @param func Function to wrap
 * @returns Wrapped function returning {@link IValidation}
 */
export function validateEqualsFunction<T extends (...args: any[]) => any>(
  func: T,
): T extends (...args: infer Arguments) => infer Output
  ? Output extends Promise<infer R>
    ? (...args: Arguments) => Promise<IValidation<R>>
    : (...args: Arguments) => IValidation<Output>
  : never;

/** @internal */
export function validateEqualsFunction(): never {
  NoTransformConfigurationError("functional.validateEqualsFunction");
}

/**
 * Wraps function to validate parameters with strict equality.
 *
 * Wraps the target function and validates parameters through
 * {@link validateEquals}. Also rejects extra properties. Return value is not
 * validated.
 *
 * Error path format: `$input.parameters[0].property`
 *
 * Related functions:
 *
 * - {@link validateParameters} — Allows extra properties
 * - {@link validateEqualsFunction} — Also validates return value
 * - {@link assertEqualsParameters} — Throws on first error
 *
 * @template T Target function type
 * @param func Function to wrap
 * @returns Wrapped function returning {@link IValidation}
 */
export function validateEqualsParameters<T extends (...args: any[]) => any>(
  func: T,
): T extends (...args: infer Arguments) => infer Output
  ? Output extends Promise<infer R>
    ? (...args: Arguments) => Promise<IValidation<R>>
    : (...args: Arguments) => IValidation<Output>
  : never;

/** @internal */
export function validateEqualsParameters(): never {
  NoTransformConfigurationError("functional.validateEqualsParameters");
}

/**
 * Wraps function to validate return value with strict equality.
 *
 * Wraps the target function and validates return value through
 * {@link validateEquals}. Also rejects extra properties. Parameters are not
 * validated.
 *
 * Error path format: `$input.return.property`
 *
 * Related functions:
 *
 * - {@link validateReturn} — Allows extra properties
 * - {@link validateEqualsFunction} — Also validates parameters
 * - {@link assertEqualsReturn} — Throws on first error
 *
 * @template T Target function type
 * @param func Function to wrap
 * @returns Wrapped function returning {@link IValidation}
 */
export function validateEqualsReturn<T extends (...args: any[]) => any>(
  func: T,
): T extends (...args: infer Arguments) => infer Output
  ? Output extends Promise<infer R>
    ? (...args: Arguments) => Promise<IValidation<R>>
    : (...args: Arguments) => IValidation<Output>
  : never;

/** @internal */
export function validateEqualsReturn(): never {
  NoTransformConfigurationError("functional.validateEqualsReturn");
}
