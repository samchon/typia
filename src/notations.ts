import { NoTransformConfigurationError } from "./transformers/NoTransformConfigurationError";

import { CamelCase } from "./CamelCase";
import { IValidation } from "./IValidation";
import { PascalCase } from "./PascalCase";
import { SnakeCase } from "./SnakeCase";
import { TypeGuardError } from "./TypeGuardError";

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
 */
export function camel<T>(input: T): CamelCase<T>;

/** @internal */
export function camel(): never {
  return NoTransformConfigurationError("notations.camel");
}

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
export function assertCamel<T>(
  input: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): CamelCase<T>;

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
export function assertCamel<T>(
  input: unknown,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): CamelCase<T>;

/** @internal */
export function assertCamel(): never {
  return NoTransformConfigurationError("notations.assertCamel");
}

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
export function isCamel<T>(input: unknown): CamelCase<T> | null;

/** @internal */
export function isCamel(): never {
  return NoTransformConfigurationError("notations.isCamel");
}

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
export function validateCamel<T>(input: unknown): IValidation<CamelCase<T>>;

/** @internal */
export function validateCamel(): never {
  return NoTransformConfigurationError("notations.validateCamel");
}

/* -----------------------------------------------------------
    PASCAL CASE
----------------------------------------------------------- */
/**
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
 */
export function pascal<T>(input: T): PascalCase<T>;

/** @internal */
export function pascal(): never {
  return NoTransformConfigurationError("notations.pascal");
}

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
export function assertPascal<T>(
  input: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): PascalCase<T>;

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
export function assertPascal<T>(
  input: unknown,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): PascalCase<T>;

/** @internal */
export function assertPascal(): never {
  return NoTransformConfigurationError("notations.assertPascal");
}

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
export function isPascal<T>(input: unknown): PascalCase<T> | null;

/** @internal */
export function isPascal(): never {
  return NoTransformConfigurationError("notations.isPascal");
}

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
export function validatePascal<T>(input: unknown): IValidation<PascalCase<T>>;

/** @internal */
export function validatePascal(): never {
  return NoTransformConfigurationError("notations.validatePascal");
}

/* -----------------------------------------------------------
    SNAKE CASE
----------------------------------------------------------- */
/**
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
 */
export function snake<T>(input: T): SnakeCase<T>;

/** @internal */
export function snake(): never {
  return NoTransformConfigurationError("notations.snake");
}

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
export function assertSnake<T>(
  input: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): SnakeCase<T>;

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
export function assertSnake<T>(
  input: unknown,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): SnakeCase<T>;

/** @internal */
export function assertSnake(): never {
  return NoTransformConfigurationError("notations.assertSnake");
}

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
export function isSnake<T>(input: unknown): SnakeCase<T> | null;

/** @internal */
export function isSnake(): never {
  return NoTransformConfigurationError("notations.isSnake");
}

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
export function validateSnake<T>(input: unknown): IValidation<SnakeCase<T>>;

/** @internal */
export function validateSnake(): never {
  return NoTransformConfigurationError("notations.validateSnake");
}

/* -----------------------------------------------------------
    FACTORY FUNCTIONS
----------------------------------------------------------- */
/**
 * Creates a reusable {@link camel} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @returns Nothing until be configure the generic argument `T`
 * @throws Compile error
 * @danger You must configure the generic argument `T`
 */
export function createCamel(): never;

/**
 * Creates a reusable {@link camel} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @returns A reusable `camel` function
 */
export function createCamel<T>(): (input: T) => CamelCase<T>;

/** @internal */
export function createCamel(): never {
  NoTransformConfigurationError("notations.createCamel");
}

/**
 * Creates a reusable {@link assertCamel} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Nothing until be configure the generic argument `T`
 * @throws Compile error
 * @danger You must configure the generic argument `T`
 */
export function createAssertCamel(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Creates a reusable {@link assertCamel} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns A reusable `assertCamel` function
 */
export function createAssertCamel<T>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: T) => CamelCase<T>;

/** @internal */
export function createAssertCamel(): never {
  NoTransformConfigurationError("notations.createAssertCamel");
}

/**
 * Creates a reusable {@link isCamel} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @returns Nothing until be configure the generic argument `T`
 * @throws Compile error
 * @danger You must configure the generic argument `T`
 */
export function createIsCamel(): never;

/**
 * Creates a reusable {@link isCamel} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @returns A reusable `isCamel` function
 */
export function createIsCamel<T>(): (input: T) => CamelCase<T> | null;

/** @internal */
export function createIsCamel(): never {
  NoTransformConfigurationError("notations.createIsCamel");
}

/**
 * Creates a reusable {@link validateCamel} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @returns Nothing until be configure the generic argument `T`
 * @throws Compile error
 * @danger You must configure the generic argument `T`
 */
export function createValidateCamel(): never;

/**
 * Creates a reusable {@link validateCamel} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @returns A reusable `validateCamel` function
 */
export function createValidateCamel<T>(): (
  input: T,
) => IValidation<CamelCase<T>>;

/** @internal */
export function createValidateCamel(): never {
  NoTransformConfigurationError("notations.createValidateCamel");
}

/**
 * Creates a reusable {@link pascal} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @returns Nothing until be configure the generic argument `T`
 * @throws Compile error
 * @danger You must configure the generic argument `T`
 */
export function createPascal(): never;

/**
 * Creates a reusable {@link pascal} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @returns A reusable `pascal` function
 */
export function createPascal<T>(): (input: T) => PascalCase<T>;

/** @internal */
export function createPascal(): never {
  NoTransformConfigurationError("notations.createPascal");
}

/**
 * Creates a reusable {@link assertPascal} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Nothing until be configure the generic argument `T`
 * @throws Compile error
 * @danger You must configure the generic argument `T`
 */
export function createAssertPascal(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Creates a reusable {@link assertPascal} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns A reusable `assertPascal` function
 */
export function createAssertPascal<T>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: T) => PascalCase<T>;

/** @internal */
export function createAssertPascal(): never {
  NoTransformConfigurationError("notations.createAssertPascal");
}

/**
 * Creates a reusable {@link isPascal} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @returns Nothing until be configure the generic argument `T`
 * @throws Compile error
 * @danger You must configure the generic argument `T`
 */
export function createIsPascal(): never;

/**
 * Creates a reusable {@link isPascal} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @returns A reusable `isPascal` function
 */
export function createIsPascal<T>(): (input: T) => PascalCase<T> | null;

/** @internal */
export function createIsPascal(): never {
  NoTransformConfigurationError("notations.createIsPascal");
}

/**
 * Creates a reusable {@link validatePascal} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @returns Nothing until be configure the generic argument `T`
 * @throws Compile error
 * @danger You must configure the generic argument `T`
 */
export function createValidatePascal(): never;

/**
 * Creates a reusable {@link validatePascal} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @returns A reusable `validatePascal` function
 */
export function createValidatePascal<T>(): (
  input: T,
) => IValidation<PascalCase<T>>;

/** @internal */
export function createValidatePascal(): never {
  NoTransformConfigurationError("notations.createValidatePascal");
}

/**
 * Creates a reusable {@link snake} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @returns Nothing until be configure the generic argument `T`
 * @throws Compile error
 * @danger You must configure the generic argument `T`
 */
export function createSnake(): never;

/**
 * Creates a reusable {@link snake} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @returns A reusable `snake` function
 */
export function createSnake<T>(): (input: T) => SnakeCase<T>;

/** @internal */
export function createSnake(): never {
  NoTransformConfigurationError("notations.createSnake");
}

/**
 * Creates a reusable {@link assertSnake} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Nothing until be configure the generic argument `T`
 * @throws Compile error
 * @danger You must configure the generic argument `T`
 */
export function createAssertSnake(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Creates a reusable {@link assertSnake} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns A reusable `assertSnake` function
 */
export function createAssertSnake<T>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: T) => SnakeCase<T>;

/** @internal */
export function createAssertSnake(): never {
  NoTransformConfigurationError("notations.createAssertSnake");
}

/**
 * Creates a reusable {@link isSnake} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @returns Nothing until be configure the generic argument `T`
 * @throws Compile error
 * @danger You must configure the generic argument `T`
 */
export function createIsSnake(): never;

/**
 * Creates a reusable {@link isSnake} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @returns A reusable `isSnake` function
 */
export function createIsSnake<T>(): (input: T) => SnakeCase<T> | null;

/** @internal */
export function createIsSnake(): never {
  NoTransformConfigurationError("notations.createIsSnake");
}

/**
 * Creates a reusable {@link validateSnake} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @returns Nothing until be configure the generic argument `T`
 * @throws Compile error
 * @danger You must configure the generic argument `T`
 */
export function createValidateSnake(): never;

/**
 * Creates a reusable {@link validateSnake} function.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the input value
 * @returns A reusable `validateSnake` function
 */
export function createValidateSnake<T>(): (
  input: T,
) => IValidation<SnakeCase<T>>;

/** @internal */
export function createValidateSnake(): never {
  NoTransformConfigurationError("notations.createValidateSnake");
}
