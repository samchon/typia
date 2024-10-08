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
 * Convert every property names of nested objects to follow the camel case convention.
 *
 * For reference, this `typia.notations.camel()` function does not validate the input value
 * type. It just believes that the input value is following the type `T`. Therefore,
 * if you can't ensure the input value type, it would be better to call one of them below:
 *
 * - {@link assertCamel}
 * - {@link isCamel}
 * - {@link validateCamel}
 *
 * @template T Type of the input value
 * @param input Target object
 * @returns Camel case object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function camel<T>(input: T): CamelCase<T>;

/**
 * @internal
 */
export function camel(): never {
  return halt("camel");
}

/**
 * Converts to camel case with type assertion.
 *
 * Convert every property names of nested objects to follow the camel case convention.
 * If the input value does not follow the type `T`, it throws {@link TypeGuardError}.
 *
 * @template T Type of the input value
 * @param input Target object
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Camel case object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertCamel<T>(
  input: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): CamelCase<T>;

/**
 * Converts to camel case with type assertion.
 *
 * Convert every property names of nested objects to follow the camel case convention.
 * If the input value does not follow the type `T`, it throws {@link TypeGuardError}.
 *
 * @template T Type of the input value
 * @param input Target object
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Camel case object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertCamel<T>(
  input: unknown,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): CamelCase<T>;

/**
 * @internal
 */
export function assertCamel(): never {
  return halt("assertCamel");
}

/**
 * Converts to camel case with type checking.
 *
 * Convert every property names of nested objects to follow the camel case convention.
 * If the input value does not follow the type `T`, it returns `null` value instead.
 *
 * @template T Type of the input value
 * @param input Target object
 * @returns Camel case object when exact type, otherwise null
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function isCamel<T>(input: T): CamelCase<T> | null;

/**
 * Converts to camel case with type checking.
 *
 * Convert every property names of nested objects to follow the camel case convention.
 * If the input value does not follow the type `T`, it returns `null` value instead.
 *
 * @template T Type of the input value
 * @param input Target object
 * @returns Camel case object when exact type, otherwise null
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function isCamel<T>(input: unknown): CamelCase<T> | null;

/**
 * @internal
 */
export function isCamel(): never {
  return halt("isCamel");
}

/**
 * Converts to camel case with type validation.
 *
 * Convert every property names of nested objects to follow the camel case convention.
 * If the input value does not follow the type `T`, it returns {@link IValidation.Failure}
 * object. Otherwise, there's no problem on the input value, camel cased converted data
 * would be stored in the `data` property of the output {@link IValidation.Success} object.
 *
 * @template T Type of the input value
 * @param input Target object
 * @returns Validation result with camel case object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function validateCamel<T>(input: T): IValidation<CamelCase<T>>;

/**
 * Converts to camel case with type validation.
 *
 * Convert every property names of nested objects to follow the camel case convention.
 * If the input value does not follow the type `T`, it returns {@link IValidation.Failure}
 * object. Otherwise, there's no problem on the input value, camel cased converted data
 * would be stored in the `data` property of the output {@link IValidation.Success} object.
 *
 * @template T Type of the input value
 * @param input Target object
 * @returns Validation result with camel case object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function validateCamel<T>(input: unknown): IValidation<CamelCase<T>>;

/**
 * @internal
 */
export function validateCamel(): never {
  return halt("validateCamel");
}

/* -----------------------------------------------------------
    PASCAL CASE
----------------------------------------------------------- */
/**
 * Convert to pascal case.
 *
 * Convert every property names of nested objects to follow the pascal case convention.
 *
 * For reference, this `typia.notations.pascal()` function does not validate the input value
 * type. It just believes that the input value is following the type `T`. Therefore,
 * if you can't ensure the input value type, it would be better to call one of them below:
 *
 * - {@link assertPascal}
 * - {@link isPascal}
 * - {@link validatePascal}
 *
 * @template T Type of the input value
 * @param input Target object
 * @returns Pascal case object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function pascal<T>(input: T): PascalCase<T>;

/**
 * @internal
 */
export function pascal(): never {
  return halt("pascal");
}

/**
 * Converts to pascal case with type assertion.
 *
 * Convert every property names of nested objects to follow the pascal case convention.
 * If the input value does not follow the type `T`, it throws {@link TypeGuardError}.
 *
 * @template T Type of the input value
 * @param input Target object
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Pascal case object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertPascal<T>(
  input: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): PascalCase<T>;

/**
 * Converts to pascal case with type assertion.
 *
 * Convert every property names of nested objects to follow the pascal case convention.
 * If the input value does not follow the type `T`, it throws {@link TypeGuardError}.
 *
 * @template T Type of the input value
 * @param input Target object
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Pascal case object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertPascal<T>(
  input: unknown,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): PascalCase<T>;

/**
 * @internal
 */
export function assertPascal(): never {
  return halt("assertPascal");
}

/**
 * Converts to pascal case with type checking.
 *
 * Convert every property names of nested objects to follow the pascal case convention.
 * If the input value does not follow the type `T`, it returns `null` value instead.
 *
 * @template T Type of the input value
 * @param input Target object
 * @returns Pascal case object when exact type, otherwise null
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function isPascal<T>(input: T): PascalCase<T> | null;

/**
 * Converts to pascal case with type checking.
 *
 * Convert every property names of nested objects to follow the pascal case convention.
 * If the input value does not follow the type `T`, it returns `null` value instead.
 *
 * @template T Type of the input value
 * @param input Target object
 * @returns Pascal case object when exact type, otherwise null
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function isPascal<T>(input: unknown): PascalCase<T> | null;

/**
 * @internal
 */
export function isPascal(): never {
  return halt("isPascal");
}

/**
 * Converts to pascal case with type validation.
 *
 * Convert every property names of nested objects to follow the pascal case convention.
 * If the input value does not follow the type `T`, it returns {@link IValidation.Failure}
 * object. Otherwise, there's no problem on the input value, pascal cased converted data
 * would be stored in the `data` property of the output {@link IValidation.Success} object.
 *
 * @template T Type of the input value
 * @param input Target object
 * @returns Validation result with pascal case object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function validatePascal<T>(input: T): IValidation<PascalCase<T>>;

/**
 * Converts to pascal case with type validation.
 *
 * Convert every property names of nested objects to follow the pascal case convention.
 * If the input value does not follow the type `T`, it returns {@link IValidation.Failure}
 * object. Otherwise, there's no problem on the input value, pascal cased converted data
 * would be stored in the `data` property of the output {@link IValidation.Success} object.
 *
 * @template T Type of the input value
 * @param input Target object
 * @returns Validation result with pascal case object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function validatePascal<T>(input: unknown): IValidation<PascalCase<T>>;

/**
 * @internal
 */
export function validatePascal(): never {
  return halt("validatePascal");
}

/* -----------------------------------------------------------
    SNAKE CASE
----------------------------------------------------------- */
/**
 * Convert to snake case.
 *
 * Convert every property names of nested objects to follow the snake case convention.
 *
 * For reference, this `typia.notations.snake()` function does not validate the input value
 * type. It just believes that the input value is following the type `T`. Therefore,
 * if you can't ensure the input value type, it would be better to call one of them below:
 *
 * - {@link assertSnake}
 * - {@link isSnake}
 * - {@link validateSnake}
 *
 * @template T Type of the input value
 * @param input Target object
 * @returns Snake case object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function snake<T>(input: T): SnakeCase<T>;

/**
 * @internal
 */
export function snake(): never {
  return halt("snake");
}

/**
 * Converts to snake case with type assertion.
 *
 * Convert every property names of nested objects to follow the snake case convention.
 * If the input value does not follow the type `T`, it throws {@link TypeGuardError}.
 *
 * @template T Type of the input value
 * @param input Target object
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Snake case object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertSnake<T>(
  input: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): SnakeCase<T>;

/**
 * Converts to snake case with type assertion.
 *
 * Convert every property names of nested objects to follow the snake case convention.
 * If the input value does not follow the type `T`, it throws {@link TypeGuardError}.
 *
 * @template T Type of the input value
 * @param input Target object
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Snake case object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertSnake<T>(
  input: unknown,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): SnakeCase<T>;

/**
 * @internal
 */
export function assertSnake(): never {
  return halt("assertSnake");
}

/**
 * Converts to snake case with type checking.
 *
 * Convert every property names of nested objects to follow the snake case convention.
 * If the input value does not follow the type `T`, it returns `null` value instead.
 *
 * @template T Type of the input value
 * @param input Target object
 * @returns Snake case object when exact type, otherwise null
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function isSnake<T>(input: T): SnakeCase<T> | null;

/**
 * Converts to snake case with type checking.
 *
 * Convert every property names of nested objects to follow the snake case convention.
 * If the input value does not follow the type `T`, it returns `null` value instead.
 *
 * @template T Type of the input value
 * @param input Target object
 * @returns Snake case object when exact type, otherwise null
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function isSnake<T>(input: unknown): SnakeCase<T> | null;

/**
 * @internal
 */
export function isSnake(): never {
  return halt("isSnake");
}

/**
 * Converts to snake case with type validation.
 *
 * Convert every property names of nested objects to follow the snake case convention.
 * If the input value does not follow the type `T`, it returns {@link IValidation.Failure}
 * object. Otherwise, there's no problem on the input value, snake cased converted data
 * would be stored in the `data` property of the output {@link IValidation.Success} object.
 *
 * @template T Type of the input value
 * @param input Target object
 * @returns Validation result with snake case object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function validateSnake<T>(input: T): IValidation<SnakeCase<T>>;

/**
 * Converts to snake case with type validation.
 *
 * Convert every property names of nested objects to follow the snake case convention.
 * If the input value does not follow the type `T`, it returns {@link IValidation.Failure}
 * object. Otherwise, there's no problem on the input value, snake cased converted data
 * would be stored in the `data` property of the output {@link IValidation.Success} object.
 *
 * @template T Type of the input value
 * @param input Target object
 * @returns Validation result with snake case object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function validateSnake<T>(input: unknown): IValidation<SnakeCase<T>>;

/**
 * @internal
 */
export function validateSnake(): never {
  return halt("validateSnake");
}

/* -----------------------------------------------------------
    FACTORY FUNCTIONS
----------------------------------------------------------- */
/**
 * Creates a reusable {@link camel} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until be configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createCamel(): never;

/**
 * Creates a reusable {@link camel} function.
 *
 * @template T Type of the input value
 * @returns A reusable `camel` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createCamel<T>(): (input: T) => CamelCase<T>;

/**
 * @internal
 */
export function createCamel(): never {
  halt("createCamel");
}

/**
 * Creates a reusable {@link assertCamel} function.
 *
 * @danger You must configure the generic argument `T`
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Nothing until be configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertCamel(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Creates a reusable {@link assertCamel} function.
 *
 * @template T Type of the input value
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns A reusable `assertCamel` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertCamel<T>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: T) => CamelCase<T>;

/**
 * @internal
 */
export function createAssertCamel(): never {
  halt("createAssertCamel");
}

/**
 * Creates a reusable {@link isCamel} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until be configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsCamel(): never;

/**
 * Creates a reusable {@link isCamel} function.
 *
 * @template T Type of the input value
 * @returns A reusable `isCamel` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsCamel<T>(): (input: T) => CamelCase<T> | null;

/**
 * @internal
 */
export function createIsCamel(): never {
  halt("createIsCamel");
}

/**
 * Creates a reusable {@link validateCamel} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until be configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidateCamel(): never;

/**
 * Creates a reusable {@link validateCamel} function.
 *
 * @template T Type of the input value
 * @returns A reusable `validateCamel` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidateCamel<T>(): (
  input: T,
) => IValidation<CamelCase<T>>;

/**
 * @internal
 */
export function createValidateCamel(): never {
  halt("createValidateCamel");
}

/**
 * Creates a reusable {@link pascal} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until be configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createPascal(): never;

/**
 * Creates a reusable {@link pascal} function.
 *
 * @template T Type of the input value
 * @returns A reusable `pascal` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createPascal<T>(): (input: T) => PascalCase<T>;

/**
 * @internal
 */
export function createPascal(): never {
  halt("createPascal");
}

/**
 * Creates a reusable {@link assertPascal} function.
 *
 * @danger You must configure the generic argument `T`
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Nothing until be configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertPascal(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Creates a reusable {@link assertPascal} function.
 *
 * @template T Type of the input value
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns A reusable `assertPascal` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertPascal<T>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: T) => PascalCase<T>;

/**
 * @internal
 */
export function createAssertPascal(): never {
  halt("createAssertPascal");
}

/**
 * Creates a reusable {@link isPascal} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until be configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsPascal(): never;

/**
 * Creates a reusable {@link isPascal} function.
 *
 * @template T Type of the input value
 * @returns A reusable `isPascal` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsPascal<T>(): (input: T) => PascalCase<T> | null;

/**
 * @internal
 */
export function createIsPascal(): never {
  halt("createIsPascal");
}

/**
 * Creates a reusable {@link validatePascal} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until be configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidatePascal(): never;

/**
 * Creates a reusable {@link validatePascal} function.
 *
 * @template T Type of the input value
 * @returns A reusable `validatePascal` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidatePascal<T>(): (
  input: T,
) => IValidation<PascalCase<T>>;

/**
 * @internal
 */
export function createValidatePascal(): never {
  halt("createValidatePascal");
}

/**
 * Creates a reusable {@link snake} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until be configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createSnake(): never;

/**
 * Creates a reusable {@link snake} function.
 *
 * @template T Type of the input value
 * @returns A reusable `snake` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createSnake<T>(): (input: T) => SnakeCase<T>;

/**
 * @internal
 */
export function createSnake(): never {
  halt("createSnake");
}

/**
 * Creates a reusable {@link assertSnake} function.
 *
 * @danger You must configure the generic argument `T`
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Nothing until be configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertSnake(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Creates a reusable {@link assertSnake} function.
 *
 * @template T Type of the input value
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns A reusable `assertSnake` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertSnake<T>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: T) => SnakeCase<T>;

/**
 * @internal
 */
export function createAssertSnake(): never {
  halt("createAssertSnake");
}

/**
 * Creates a reusable {@link isSnake} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until be configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsSnake(): never;

/**
 * Creates a reusable {@link isSnake} function.
 *
 * @template T Type of the input value
 * @returns A reusable `isSnake` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsSnake<T>(): (input: T) => SnakeCase<T> | null;

/**
 * @internal
 */
export function createIsSnake(): never {
  halt("createIsSnake");
}

/**
 * Creates a reusable {@link validateSnake} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until be configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidateSnake(): never;

/**
 * Creates a reusable {@link validateSnake} function.
 *
 * @template T Type of the input value
 * @returns A reusable `validateSnake` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidateSnake<T>(): (
  input: T,
) => IValidation<SnakeCase<T>>;

/**
 * @internal
 */
export function createValidateSnake(): never {
  halt("createValidateSnake");
}

/**
 * @internal
 */
function halt(name: string): never {
  throw new Error(
    `Error on typia.notations.${name}(): no transform has been configured. Read and follow https://typia.io/docs/setup please.`,
  );
}
