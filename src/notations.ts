import { Namespace } from "./functional/Namespace";

import { CamelCase } from "./CamelCase";
import { IValidation } from "./IValidation";
import { PascalCase } from "./PascalCase";
import { SnakeCase } from "./SnakeCase";

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
Object.assign(camel, Namespace.notations.camel("camel"));

/**
 * Converts to camel case with type assertion.
 *
 * Convert every property names of nested objects to follow the camel case convention.
 * If the input value does not follow the type `T`, it throws {@link TypeGuardError}.
 *
 * @template T Type of the input value
 * @param input Target object
 * @returns Camel case object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertCamel<T>(input: T): CamelCase<T>;

/**
 * Converts to camel case with type assertion.
 *
 * Convert every property names of nested objects to follow the camel case convention.
 * If the input value does not follow the type `T`, it throws {@link TypeGuardError}.
 *
 * @template T Type of the input value
 * @param input Target object
 * @returns Camel case object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertCamel<T>(input: unknown): CamelCase<T>;

/**
 * @internal
 */
export function assertCamel(): never {
    return halt("assertCamel");
}
Object.assign(assertCamel, Namespace.notations.camel("assertCamel"));
Object.assign(assertCamel, Namespace.assert("notations.assertCamel"));

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
Object.assign(isCamel, Namespace.notations.camel("isCamel"));
Object.assign(isCamel, Namespace.is());

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
Object.assign(validateCamel, Namespace.notations.camel("validateCamel"));
Object.assign(validateCamel, Namespace.validate());

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
Object.assign(pascal, Namespace.notations.pascal("pascal"));

/**
 * Converts to pascal case with type assertion.
 *
 * Convert every property names of nested objects to follow the pascal case convention.
 * If the input value does not follow the type `T`, it throws {@link TypeGuardError}.
 *
 * @template T Type of the input value
 * @param input Target object
 * @returns Pascal case object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertPascal<T>(input: T): PascalCase<T>;

/**
 * Converts to pascal case with type assertion.
 *
 * Convert every property names of nested objects to follow the pascal case convention.
 * If the input value does not follow the type `T`, it throws {@link TypeGuardError}.
 *
 * @template T Type of the input value
 * @param input Target object
 * @returns Pascal case object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertPascal<T>(input: unknown): PascalCase<T>;

/**
 * @internal
 */
export function assertPascal(): never {
    return halt("assertPascal");
}
Object.assign(assertPascal, Namespace.notations.pascal("assertPascal"));
Object.assign(assertPascal, Namespace.assert("notations.assertPascal"));

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
Object.assign(isPascal, Namespace.notations.pascal("isPascal"));
Object.assign(isPascal, Namespace.is());

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
Object.assign(validatePascal, Namespace.notations.pascal("validatePascal"));
Object.assign(validatePascal, Namespace.validate());

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
Object.assign(snake, Namespace.notations.snake("snake"));

/**
 * Converts to snake case with type assertion.
 *
 * Convert every property names of nested objects to follow the snake case convention.
 * If the input value does not follow the type `T`, it throws {@link TypeGuardError}.
 *
 * @template T Type of the input value
 * @param input Target object
 * @returns Snake case object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertSnake<T>(input: T): SnakeCase<T>;

/**
 * Converts to snake case with type assertion.
 *
 * Convert every property names of nested objects to follow the snake case convention.
 * If the input value does not follow the type `T`, it throws {@link TypeGuardError}.
 *
 * @template T Type of the input value
 * @param input Target object
 * @returns Snake case object
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertSnake<T>(input: unknown): SnakeCase<T>;

/**
 * @internal
 */
export function assertSnake(): never {
    return halt("assertSnake");
}
Object.assign(assertSnake, Namespace.notations.snake("assertSnake"));
Object.assign(assertSnake, Namespace.assert("notations.assertSnake"));

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
Object.assign(isSnake, Namespace.notations.snake("isSnake"));
Object.assign(isSnake, Namespace.is());

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
Object.assign(validateSnake, Namespace.notations.snake("validateSnake"));
Object.assign(validateSnake, Namespace.validate());

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
Object.assign(createCamel, Namespace.notations.camel("createCamel"));

/**
 * Creates a reusable {@link assertCamel} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until be configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertCamel(): never;

/**
 * Creates a reusable {@link assertCamel} function.
 *
 * @template T Type of the input value
 * @returns A reusable `assertCamel` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertCamel<T>(): (input: T) => CamelCase<T>;

/**
 * @internal
 */
export function createAssertCamel(): never {
    halt("createAssertCamel");
}
Object.assign(
    createAssertCamel,
    Namespace.notations.camel("createAssertCamel"),
);
Object.assign(
    createAssertCamel,
    Namespace.assert("notations.createAssertCamel"),
);

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
Object.assign(createIsCamel, Namespace.notations.camel("createIsCamel"));
Object.assign(createIsCamel, Namespace.is());

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
Object.assign(
    createValidateCamel,
    Namespace.notations.camel("createValidateCamel"),
);
Object.assign(createValidateCamel, Namespace.validate());

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
Object.assign(createPascal, Namespace.notations.pascal("createPascal"));

/**
 * Creates a reusable {@link assertPascal} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until be configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertPascal(): never;

/**
 * Creates a reusable {@link assertPascal} function.
 *
 * @template T Type of the input value
 * @returns A reusable `assertPascal` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertPascal<T>(): (input: T) => PascalCase<T>;

/**
 * @internal
 */
export function createAssertPascal(): never {
    halt("createAssertPascal");
}
Object.assign(
    createAssertPascal,
    Namespace.notations.pascal("createAssertPascal"),
);
Object.assign(
    createAssertPascal,
    Namespace.assert("notations.createAssertPascal"),
);

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
Object.assign(createIsPascal, Namespace.notations.pascal("createIsPascal"));
Object.assign(createIsPascal, Namespace.is());

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
Object.assign(
    createValidatePascal,
    Namespace.notations.pascal("createValidatePascal"),
);
Object.assign(createValidatePascal, Namespace.validate());

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
Object.assign(createSnake, Namespace.notations.snake("createSnake"));

/**
 * Creates a reusable {@link assertSnake} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until be configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertSnake(): never;

/**
 * Creates a reusable {@link assertSnake} function.
 *
 * @template T Type of the input value
 * @returns A reusable `assertSnake` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertSnake<T>(): (input: T) => SnakeCase<T>;

/**
 * @internal
 */
export function createAssertSnake(): never {
    halt("createAssertSnake");
}
Object.assign(
    createAssertSnake,
    Namespace.notations.snake("createAssertSnake"),
);
Object.assign(
    createAssertSnake,
    Namespace.assert("notations.createAssertSnake"),
);

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
Object.assign(createIsSnake, Namespace.notations.snake("createIsSnake"));
Object.assign(createIsSnake, Namespace.is());

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
Object.assign(
    createValidateSnake,
    Namespace.notations.snake("createValidateSnake"),
);
Object.assign(createValidateSnake, Namespace.validate());

/**
 * @internal
 */
function halt(name: string): never {
    throw new Error(
        `Error on typia.notations.${name}(): no transform has been configured. Read and follow https://typia.io/docs/setup please.`,
    );
}
