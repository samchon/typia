import { Namespace } from "./functional/Namespace";

import { CamelCase } from "./typings/CamelCase";
import { PascalCase } from "./typings/PascalCase";
import { SnakeCase } from "./typings/SnakeCase";

import { IValidation } from "./IValidation";

/* ===========================================================
    NOTATIONS (NAMING CONVENTIONS)
      - CAMEL CASE
      - PASCAL CASE
      - SNAKE CASE
      - FACTORY FUNCTIONS
==============================================================
    CAMEL CASE
----------------------------------------------------------- */
export function camel<T>(input: T): CamelCase<T>;
export function camel<T>(input: unknown): CamelCase<T>;

/**
 * @internal
 */
export function camel(): never {
    return halt("camel");
}

export function assertCamel<T>(input: T): CamelCase<T>;
export function assertCamel<T>(input: unknown): CamelCase<T>;

/**
 * @internal
 */
export function assertCamel(): never {
    return halt("assertCamel");
}
Object.assign(assertCamel, Namespace.assert("notations.assertCamel"));

export function isCamel<T>(input: T): CamelCase<T> | null;
export function isCamel<T>(input: unknown): CamelCase<T> | null;

/**
 * @internal
 */
export function isCamel(): never {
    return halt("isCamel");
}
Object.assign(isCamel, Namespace.is());

export function validateCamel<T>(input: T): IValidation<CamelCase<T>>;
export function validateCamel<T>(input: unknown): IValidation<CamelCase<T>>;

/**
 * @internal
 */
export function validateCamel(): never {
    return halt("validateCamel");
}
Object.assign(validateCamel, Namespace.validate());

/* -----------------------------------------------------------
    PASCAL CASE
----------------------------------------------------------- */
export function pascal<T>(input: T): PascalCase<T>;
export function pascal<T>(input: unknown): PascalCase<T>;

/**
 * @internal
 */
export function pascal(): never {
    return halt("pascal");
}

export function assertPascal<T>(input: T): PascalCase<T>;
export function assertPascal<T>(input: unknown): PascalCase<T>;

/**
 * @internal
 */
export function assertPascal(): never {
    return halt("assertPascal");
}
Object.assign(assertPascal, Namespace.assert("notations.assertPascal"));

export function isPascal<T>(input: T): PascalCase<T> | null;
export function isPascal<T>(input: unknown): PascalCase<T> | null;

/**
 * @internal
 */
export function isPascal(): never {
    return halt("isPascal");
}
Object.assign(isPascal, Namespace.is());

export function validatePascal<T>(input: T): IValidation<PascalCase<T>>;
export function validatePascal<T>(input: unknown): IValidation<PascalCase<T>>;

/**
 * @internal
 */
export function validatePascal(): never {
    return halt("validatePascal");
}
Object.assign(validatePascal, Namespace.validate());

/* -----------------------------------------------------------
    SNAKE CASE
----------------------------------------------------------- */
export function snake<T>(input: T): SnakeCase<T>;
export function snake<T>(input: unknown): SnakeCase<T>;

/**
 * @internal
 */
export function snake(): never {
    return halt("snake");
}

export function assertSnake<T>(input: T): SnakeCase<T>;
export function assertSnake<T>(input: unknown): SnakeCase<T>;

/**
 * @internal
 */
export function assertSnake(): never {
    return halt("assertSnake");
}
Object.assign(assertSnake, Namespace.assert("notations.assertSnake"));

export function isSnake<T>(input: T): SnakeCase<T> | null;
export function isSnake<T>(input: unknown): SnakeCase<T> | null;

/**
 * @internal
 */
export function isSnake(): never {
    return halt("isSnake");
}
Object.assign(isSnake, Namespace.is());

export function validateSnake<T>(input: T): IValidation<SnakeCase<T>>;
export function validateSnake<T>(input: unknown): IValidation<SnakeCase<T>>;

/**
 * @internal
 */
export function validateSnake(): never {
    return halt("validateSnake");
}
Object.assign(validateSnake, Namespace.validate());

/* -----------------------------------------------------------
    FACTORY FUNCTIONS
----------------------------------------------------------- */
export function createCamel(): never;
export function createCamel<T>(): (input: T) => CamelCase<T>;

/**
 * @internal
 */
export function createCamel(): never {
    halt("createCamel");
}

export function createAssertCamel(): never;
export function createAssertCamel<T>(): (input: T) => CamelCase<T>;

/**
 * @internal
 */
export function createAssertCamel(): never {
    halt("createAssertCamel");
}
Object.assign(
    createAssertCamel,
    Namespace.assert("notations.createAssertCamel"),
);

export function createIsCamel(): never;
export function createIsCamel<T>(): (input: T) => CamelCase<T> | null;

/**
 * @internal
 */
export function createIsCamel(): never {
    halt("createIsCamel");
}

export function createValidateCamel(): never;
export function createValidateCamel<T>(): (
    input: T,
) => IValidation<CamelCase<T>>;

/**
 * @internal
 */
export function createValidateCamel(): never {
    halt("createValidateCamel");
}

export function createPascal(): never;
export function createPascal<T>(): (input: T) => PascalCase<T>;

/**
 * @internal
 */
export function createPascal(): never {
    halt("createPascal");
}

export function createAssertPascal(): never;
export function createAssertPascal<T>(): (input: T) => PascalCase<T>;

/**
 * @internal
 */
export function createAssertPascal(): never {
    halt("createAssertPascal");
}
Object.assign(
    createAssertPascal,
    Namespace.assert("notations.createAssertPascal"),
);

export function createIsPascal(): never;
export function createIsPascal<T>(): (input: T) => PascalCase<T> | null;

/**
 * @internal
 */
export function createIsPascal(): never {
    halt("createIsPascal");
}
Object.assign(createIsPascal, Namespace.is());

export function createValidatePascal(): never;
export function createValidatePascal<T>(): (
    input: T,
) => IValidation<PascalCase<T>>;

/**
 * @internal
 */
export function createValidatePascal(): never {
    halt("createValidatePascal");
}
Object.assign(createValidatePascal, Namespace.validate());

export function createSnake(): never;
export function createSnake<T>(): (input: T) => SnakeCase<T>;

/**
 * @internal
 */
export function createSnake(): never {
    halt("createSnake");
}

export function createAssertSnake(): never;
export function createAssertSnake<T>(): (input: T) => SnakeCase<T>;

/**
 * @internal
 */
export function createAssertSnake(): never {
    halt("createAssertSnake");
}
Object.assign(
    createAssertSnake,
    Namespace.assert("notations.createAssertSnake"),
);

export function createIsSnake(): never;
export function createIsSnake<T>(): (input: T) => SnakeCase<T> | null;

/**
 * @internal
 */
export function createIsSnake(): never {
    halt("createIsSnake");
}
Object.assign(createIsSnake, Namespace.is());

export function createValidateSnake(): never;
export function createValidateSnake<T>(): (
    input: T,
) => IValidation<SnakeCase<T>>;

/**
 * @internal
 */
export function createValidateSnake(): never {
    halt("createValidateSnake");
}
Object.assign(createValidateSnake, Namespace.validate());

/**
 * @internal
 */
function halt(name: string): never {
    throw new Error(
        `Error on typia.notations.${name}(): no transform has been configured. Read and follow https://typia.io/docs/setup please.`,
    );
}
