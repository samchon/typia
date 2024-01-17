import * as Namespace from "./functional/Namespace";

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
function camel<T>(input: T): CamelCase<T>;

/**
 * @internal
 */
function camel(): never {
  return halt("camel");
}
const camelPure = /** @__PURE__ */ Object.assign(camel, /** @__PURE__ */ Namespace.notations.camel("camel"));
export { camelPure as camel };

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
function assertCamel<T>(input: T): CamelCase<T>;

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
function assertCamel<T>(input: unknown): CamelCase<T>;

/**
 * @internal
 */
function assertCamel(): never {
  return halt("assertCamel");
}
const assertCamelPure = /** @__PURE__ */ Object.assign(
  assertCamel,
  /** @__PURE__ */ Namespace.notations.camel("assertCamel"),
  /** @__PURE__ */ Namespace.assert("notations.assertCamel")
);
export { assertCamelPure as assertCamel };

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
function isCamel<T>(input: T): CamelCase<T> | null;

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
function isCamel<T>(input: unknown): CamelCase<T> | null;

/**
 * @internal
 */
function isCamel(): never {
  return halt("isCamel");
}
const isCamelPure = /** @__PURE__ */ Object.assign(
  isCamel,
  /** @__PURE__ */ Namespace.notations.camel("isCamel"),
  /** @__PURE__ */ Namespace.is()
);
export { isCamelPure as isCamel };

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
function validateCamel<T>(input: T): IValidation<CamelCase<T>>;

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
function validateCamel<T>(input: unknown): IValidation<CamelCase<T>>;

/**
 * @internal
 */
function validateCamel(): never {
  return halt("validateCamel");
}
const validateCamelPure = /** @__PURE__ */ Object.assign(
  validateCamel,
  /** @__PURE__ */ Namespace.notations.camel("validateCamel"),
  /** @__PURE__ */ Namespace.validate()
);
export { validateCamelPure as validateCamel };

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
function pascal<T>(input: T): PascalCase<T>;

/**
 * @internal
 */
function pascal(): never {
  return halt("pascal");
}
const pascalPure = /** @__PURE__ */ Object.assign(
  pascal,
  /** @__PURE__ */ Namespace.notations.pascal("pascal")
);
export { pascalPure as pascal };

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
function assertPascal<T>(input: T): PascalCase<T>;

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
function assertPascal<T>(input: unknown): PascalCase<T>;

/**
 * @internal
 */
function assertPascal(): never {
  return halt("assertPascal");
}
const assertPascalPure = /** @__PURE__ */ Object.assign(
  assertPascal,
  /** @__PURE__ */ Namespace.notations.pascal("assertPascal"),
  /** @__PURE__ */ Namespace.assert("notations.assertPascal")
);
export { assertPascalPure as assertPascal };

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
function isPascal<T>(input: T): PascalCase<T> | null;

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
function isPascal<T>(input: unknown): PascalCase<T> | null;

/**
 * @internal
 */
function isPascal(): never {
  return halt("isPascal");
}
const isPascalPure = /** @__PURE__ */ Object.assign(
  isPascal,
  /** @__PURE__ */ Namespace.notations.pascal("isPascal"),
  /** @__PURE__ */ Namespace.is()
);
export { isPascalPure as isPascal };

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
function validatePascal<T>(input: T): IValidation<PascalCase<T>>;

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
function validatePascal<T>(input: unknown): IValidation<PascalCase<T>>;

/**
 * @internal
 */
function validatePascal(): never {
  return halt("validatePascal");
}
const validatePascalPure = /** @__PURE__ */Object.assign(
  validatePascal,
  /** @__PURE__ */ Namespace.notations.pascal("validatePascal"),
  /** @__PURE__ */ Namespace.validate()
);
export { validatePascalPure as validatePascal };

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
function snake<T>(input: T): SnakeCase<T>;

/**
 * @internal
 */
function snake(): never {
  return halt("snake");
}
const snakePure = /** @__PURE__ */ Object.assign(snake, /** @__PURE__ */ Namespace.notations.snake("snake"));
export { snakePure as snake };

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
function assertSnake<T>(input: T): SnakeCase<T>;

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
function assertSnake<T>(input: unknown): SnakeCase<T>;

/**
 * @internal
 */
function assertSnake(): never {
  return halt("assertSnake");
}
const assertSnakePure = /** @__PURE__ */ Object.assign(
  assertSnake,
  /** @__PURE__ */ Namespace.notations.snake("assertSnake"),
  /** @__PURE__ */ Namespace.assert("notations.assertSnake"),
);
export { assertSnakePure as assertSnake };

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
function isSnake<T>(input: T): SnakeCase<T> | null;

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
function isSnake<T>(input: unknown): SnakeCase<T> | null;

/**
 * @internal
 */
function isSnake(): never {
  return halt("isSnake");
}
const isSnakePure = /** @__PURE__ */ Object.assign(
  isSnake,
  /** @__PURE__ */ Namespace.notations.snake("isSnake"),
  /** @__PURE__ */ Namespace.is()
);
export { isSnakePure as isSnake };

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
function validateSnake<T>(input: T): IValidation<SnakeCase<T>>;

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
function validateSnake<T>(input: unknown): IValidation<SnakeCase<T>>;

/**
 * @internal
 */
function validateSnake(): never {
  return halt("validateSnake");
}
const validateSnakePure = /** @__PURE__ */ Object.assign(
  validateSnake,
  /** @__PURE__ */ Namespace.notations.snake("validateSnake"),
  /** @__PURE__ */ Namespace.validate()
);
export { validateSnakePure as validateSnake };
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
function createCamel(): never;

/**
 * Creates a reusable {@link camel} function.
 *
 * @template T Type of the input value
 * @returns A reusable `camel` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createCamel<T>(): (input: T) => CamelCase<T>;

/**
 * @internal
 */
function createCamel(): never {
  halt("createCamel");
}
const createCamelPure = /** @__PURE__ */ Object.assign(
  createCamel,
  /** @__PURE__ */ Namespace.notations.camel("createCamel")
);
export { createCamelPure as createCamel };

/**
 * Creates a reusable {@link assertCamel} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until be configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createAssertCamel(): never;

/**
 * Creates a reusable {@link assertCamel} function.
 *
 * @template T Type of the input value
 * @returns A reusable `assertCamel` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createAssertCamel<T>(): (input: T) => CamelCase<T>;

/**
 * @internal
 */
function createAssertCamel(): never {
  halt("createAssertCamel");
}
const createAssertCamelPure = /** @__PURE__ */ Object.assign(
  createAssertCamel,
  /** @__PURE__ */ Namespace.notations.camel("createAssertCamel"),
  /** @__PURE__ */ Namespace.assert("notations.createAssertCamel"),
);
export { createAssertCamelPure as createAssertCamel };

/**
 * Creates a reusable {@link isCamel} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until be configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createIsCamel(): never;

/**
 * Creates a reusable {@link isCamel} function.
 *
 * @template T Type of the input value
 * @returns A reusable `isCamel` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createIsCamel<T>(): (input: T) => CamelCase<T> | null;

/**
 * @internal
 */
function createIsCamel(): never {
  halt("createIsCamel");
}
const createIsCamelPure = /** @__PURE__ */ Object.assign(
  createIsCamel,
  /** @__PURE__ */ Namespace.notations.camel("createIsCamel"),
  /** @__PURE__ */ Namespace.is()
);
export { createIsCamelPure as createIsCamel };

/**
 * Creates a reusable {@link validateCamel} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until be configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createValidateCamel(): never;

/**
 * Creates a reusable {@link validateCamel} function.
 *
 * @template T Type of the input value
 * @returns A reusable `validateCamel` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createValidateCamel<T>(): (
  input: T,
) => IValidation<CamelCase<T>>;

/**
 * @internal
 */
function createValidateCamel(): never {
  halt("createValidateCamel");
}
const createValidateCamelPure = /** @__PURE__ */ Object.assign(
  createValidateCamel,
  /** @__PURE__ */ Namespace.notations.camel("createValidateCamel"),
  /** @__PURE__ */ Namespace.validate()
);
export { createValidateCamelPure as createValidateCamel };

/**
 * Creates a reusable {@link pascal} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until be configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createPascal(): never;

/**
 * Creates a reusable {@link pascal} function.
 *
 * @template T Type of the input value
 * @returns A reusable `pascal` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createPascal<T>(): (input: T) => PascalCase<T>;

/**
 * @internal
 */
function createPascal(): never {
  halt("createPascal");
}
const createPascalPure = /** @__PURE__ */ Object.assign(
  createPascal,
  /** @__PURE__ */ Namespace.notations.pascal("createPascal")
);
export { createPascalPure as createPascal };

/**
 * Creates a reusable {@link assertPascal} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until be configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createAssertPascal(): never;

/**
 * Creates a reusable {@link assertPascal} function.
 *
 * @template T Type of the input value
 * @returns A reusable `assertPascal` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createAssertPascal<T>(): (input: T) => PascalCase<T>;

/**
 * @internal
 */
function createAssertPascal(): never {
  halt("createAssertPascal");
}
const createAssertPascalPure = /** @__PURE__ */ Object.assign(
  createAssertPascal,
  /** @__PURE__ */ Namespace.notations.pascal("createAssertPascal"),
  /** @__PURE__ */ Namespace.assert("notations.createAssertPascal"),
);
export { createAssertPascalPure as createAssertPascal };

/**
 * Creates a reusable {@link isPascal} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until be configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createIsPascal(): never;

/**
 * Creates a reusable {@link isPascal} function.
 *
 * @template T Type of the input value
 * @returns A reusable `isPascal` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createIsPascal<T>(): (input: T) => PascalCase<T> | null;

/**
 * @internal
 */
function createIsPascal(): never {
  halt("createIsPascal");
}
const createIsPascalPure = /** @__PURE__ */ Object.assign(
  createIsPascal,
  /** @__PURE__ */ Namespace.notations.pascal("createIsPascal"),
  /** @__PURE__ */ Namespace.is()
);
export { createIsPascalPure as createIsPascal };

/**
 * Creates a reusable {@link validatePascal} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until be configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createValidatePascal(): never;

/**
 * Creates a reusable {@link validatePascal} function.
 *
 * @template T Type of the input value
 * @returns A reusable `validatePascal` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createValidatePascal<T>(): (
  input: T,
) => IValidation<PascalCase<T>>;

/**
 * @internal
 */
function createValidatePascal(): never {
  halt("createValidatePascal");
}
const createValidatePascalPure = /** @__PURE__ */ Object.assign(
  createValidatePascal,
  /** @__PURE__ */ Namespace.notations.pascal("createValidatePascal"),
  /** @__PURE__ */ Namespace.validate(),
);
export { createValidatePascalPure as createValidatePascal };

/**
 * Creates a reusable {@link snake} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until be configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createSnake(): never;

/**
 * Creates a reusable {@link snake} function.
 *
 * @template T Type of the input value
 * @returns A reusable `snake` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createSnake<T>(): (input: T) => SnakeCase<T>;

/**
 * @internal
 */
function createSnake(): never {
  halt("createSnake");
}
const createSnakePure = /** @__PURE__ */ Object.assign(
  createSnake,
  /** @__PURE__ */ Namespace.notations.snake("createSnake")
);
export { createSnakePure as createSnake };

/**
 * Creates a reusable {@link assertSnake} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until be configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createAssertSnake(): never;

/**
 * Creates a reusable {@link assertSnake} function.
 *
 * @template T Type of the input value
 * @returns A reusable `assertSnake` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createAssertSnake<T>(): (input: T) => SnakeCase<T>;

/**
 * @internal
 */
function createAssertSnake(): never {
  halt("createAssertSnake");
}
const createAssertSnakePure = /** @__PURE__ */ Object.assign(
  createAssertSnake,
  /** @__PURE__ */ Namespace.notations.snake("createAssertSnake"),
  /** @__PURE__ */ Namespace.assert("notations.createAssertSnake"),
);
export { createAssertSnakePure as createAssertSnake };

/**
 * Creates a reusable {@link isSnake} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until be configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createIsSnake(): never;

/**
 * Creates a reusable {@link isSnake} function.
 *
 * @template T Type of the input value
 * @returns A reusable `isSnake` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createIsSnake<T>(): (input: T) => SnakeCase<T> | null;

/**
 * @internal
 */
function createIsSnake(): never {
  halt("createIsSnake");
}
const createIsSnakePure = /** @__PURE__ */ Object.assign(
  createIsSnake,
  /** @__PURE__ */ Namespace.notations.snake("createIsSnake"),
  /** @__PURE__ */ Namespace.is()
);
export { createIsSnakePure as createIsSnake };

/**
 * Creates a reusable {@link validateSnake} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until be configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createValidateSnake(): never;

/**
 * Creates a reusable {@link validateSnake} function.
 *
 * @template T Type of the input value
 * @returns A reusable `validateSnake` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createValidateSnake<T>(): (
  input: T,
) => IValidation<SnakeCase<T>>;

/**
 * @internal
 */
function createValidateSnake(): never {
  halt("createValidateSnake");
}
const createValidateSnakePure = /** @__PURE__ */ Object.assign(
  createValidateSnake,
  /** @__PURE__ */ Namespace.notations.snake("createValidateSnake"),
  /** @__PURE__ */ Namespace.validate(),
);
export { createValidateSnakePure as createValidateSnake };

/**
 * @internal
 */
function halt(name: string): never {
  throw new Error(
    `Error on typia.notations.${name}(): no transform has been configured. Read and follow https://typia.io/docs/setup please.`,
  );
}
