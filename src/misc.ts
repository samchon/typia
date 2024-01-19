/* ===========================================================
    MISCELLAENOUS
      - LITERALS
      - CLONE
      - PRUNE
      - FACTORY FUNCTIONS
==============================================================
    LITERALS
----------------------------------------------------------- */
import * as Namespace from "./functional/Namespace";

import { Atomic } from "./typings/Atomic";

import { IValidation } from "./IValidation";
import { Resolved } from "./Resolved";

/**
 * > You must configure the generic argument `T`.
 *
 * Union literal type to array.
 *
 * Converts a union literal type to an array of its members.
 *
 * ```typescript
 * literals<"A" | "B" | 1>; // ["A", "B", 1]
 * ```
 *
 * @template T Union literal type
 * @return Array of union literal type's members
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function literals(): never;

/**
 * Union literal type to array.
 *
 * Converts a union literal type to an array of its members.
 *
 * ```typescript
 * literals<"A" | "B" | 1>; // ["A", "B", 1]
 * ```
 *
 * @template T Union literal type
 * @return Array of union literal type's members
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function literals<T extends Atomic.Type | null>(): T[];

/**
 * @internal
 */
export function literals(): never {
  halt("literals");
}

/* -----------------------------------------------------------
    CLONE
----------------------------------------------------------- */
/**
 * Clone a data.
 *
 * Clones an instance following type `T`. If the target *input* value or its member
 * variable contains a class instance having methods, those methods would not be
 * cloned.
 *
 * For reference, this `typia.misc.clone()` function does not validate the input value
 * type. It just believes that the input value is following the type `T`. Therefore,
 * if you can't ensure the input value type, it would be better to call
 * {@link assertClone} function instead.
 *
 * @template T Type of the input value
 * @param input A value to be cloned
 * @return Cloned data
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function clone<T>(input: T): Resolved<T>;

/**
 * @internal
 */
function clone(): never {
  halt("clone");
}
const clonePure = /** @__PURE__ */ Object.assign<typeof clone, {}>(
  clone,
  /** @__PURE__ */ Namespace.misc.clone("clone"),
);
export { clonePure as clone };

/**
 * Clone a data with type assertion.
 *
 * Clones an instance following type `T`, with type assertion. If the target `input`
 * value or its member variable contains a class instance having methods, those
 * methods would not be cloned.
 *
 * In such reason, when `input` value is not matched with the type `T`, it throws an
 * {@link TypeGuardError}. Otherwise, there's no problem on the `input` value, cloned
 * data would be returned.
 *
 * @template T Type of the input value
 * @param input A value to be cloned
 * @return Cloned data
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function assertClone<T>(input: T): Resolved<T>;

/**
 * Clone a data with type assertion.
 *
 * Clones an instance following type `T`, with type assertion. If the target `input`
 * value or its member variable contains a class instance having methods, those
 * methods would not be cloned.
 *
 * In such reason, when `input` value is not matched with the type `T`, it throws an
 * {@link TypeGuardError}. Otherwise, there's no problem on the `input` value, cloned
 * data would be returned.
 *
 * @template T Type of the input value
 * @param input A value to be cloned
 * @return Cloned data
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function assertClone<T>(input: unknown): Resolved<T>;

/**
 * @internal
 */
function assertClone(): never {
  halt("assertClone");
}
const assertClonePure = /** @__PURE__ */ Object.assign<
  typeof assertClone,
  {},
  {}
>(
  assertClone,
  /** @__PURE__ */ Namespace.assert("misc.assertClone"),
  /** @__PURE__ */ Namespace.misc.clone("assertClone"),
);
export { assertClonePure as assertClone };

/**
 * Clone a data with type checking.
 *
 * Clones an instance following type `T`, with type checking. If the target `input`
 * value or its member variable contains a class instance having methods, those
 * methods would not be cloned.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * `null` value instead. Otherwise, there's no problem on the `input` value, cloned
 * data would be returned.
 *
 * @template T Type of the input value
 * @param input A value to be cloned
 * @return Cloned data when exact type, otherwise null
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function isClone<T>(input: T): Resolved<T> | null;

/**
 * Clone a data with type checking.
 *
 * Clones an instance following type `T`, with type checking. If the target `input`
 * value or its member variable contains a class instance having methods, those
 * methods would not be cloned.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * `null` value instead. Otherwise, there's no problem on the `input` value, cloned
 * data would be returned.
 *
 * @template T Type of the input value
 * @param input A value to be cloned
 * @return Cloned data when exact type, otherwise null
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function isClone<T>(input: unknown): Resolved<T> | null;

/**
 * @internal
 */
function isClone(): never {
  halt("isClone");
}
const isClonePure = /** @__PURE__ */ Object.assign<typeof isClone, {}, {}>(
  isClone,
  /** @__PURE__ */ Namespace.is(),
  /** @__PURE__ */ Namespace.misc.clone("isClone"),
);
export { isClonePure as isClone };

/**
 * Clone a data with detailed type validation.
 *
 * Clones an instance following type `T`, with detailed type validation. If the target
 * `input` value or its member variable contains a class instance having methods,
 * those methods would not be cloned.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * {@link IValidation.Failure} value. Otherwise, there's no problem on the `input`
 * value, cloned data would be stored in `data` property of the output
 * {@link IValidation.Success} instance.
 *
 * @template T Type of the input value
 * @param input A value to be cloned
 * @returns Validation result with cloned value
 */
function validateClone<T>(input: T): IValidation<Resolved<T>>;

/**
 * Clone a data with detailed type validation.
 *
 * Clones an instance following type `T`, with detailed type validation. If the target
 * `input` value or its member variable contains a class instance having methods,
 * those methods would not be cloned.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * {@link IValidation.Failure} value. Otherwise, there's no problem on the `input`
 * value, cloned data would be stored in `data` property of the output
 * {@link IValidation.Success} instance.
 *
 * @template T Type of the input value
 * @param input A value to be cloned
 * @returns Validation result with cloned value
 */
function validateClone<T>(input: unknown): IValidation<Resolved<T>>;

/**
 * @internal
 */
function validateClone(): never {
  halt("validateClone");
}
const validateClonePure = /** @__PURE__ */ Object.assign<
  typeof validateClone,
  {},
  {}
>(
  validateClone,
  /** @__PURE__ */ Namespace.validate(),
  /** @__PURE__ */ Namespace.misc.clone("validateClone"),
);
export { validateClonePure as validateClone };

/* -----------------------------------------------------------
    PRUNE
----------------------------------------------------------- */
/**
 * Prune, erase superfluous properties.
 *
 * Remove every superfluous properties from the `input` object, even including nested
 * objects. Note that, as every superfluous properties would be deleted, you never can
 * read those superfluous properties after calling this `prune()` function.
 *
 * For reference, this `typia.misc.prune()` function does not validate the input value
 * type. It just believes that the input value is following the type `T`. Therefore,
 * if you can't ensure the input value type, it would better to call one of below
 * functions instead.
 *
 *   - {@link assertPrune}
 *   - {@link isPrune}
 *   - {@link validatePrune}
 *
 * @template T Type of the input value
 * @param input Target instance to prune
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function prune<T extends object>(input: T): void;

/**
 * @internal
 */
function prune(): never {
  halt("prune");
}
const prunePure = /** @__PURE__ */ Object.assign<typeof prune, {}>(
  prune,
  /** @__PURE__ */ Namespace.misc.prune("prune"),
);
export { prunePure as prune };

/**
 * Prune, erase superfluous properties, with type assertion.
 *
 * `typia.misc.assertPrune()` is a combination function of {@link assert} and
 * {@link prune}. Therefore, it removes every superfluous properties from the `input`
 * object including nested objects, with type assertion.
 *
 * In such reason, when `input` value is not matched with the type `T`, it throws an
 * {@link TypeGuardError}. Otherwise, there's no problem on the `input` value, its
 * every superfluous properties would be removed, including nested objects.
 *
 * @template T Type of the input value
 * @param input Target instance to assert and prune
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function assertPrune<T>(input: T): T;

/**
 * Prune, erase superfluous properties, with type assertion.
 *
 * `typia.misc.assertPrune()` is a combination function of {@link assert} and
 * {@link prune}. Therefore, it removes every superfluous properties from the `input`
 * object including nested objects, with type assertion.
 *
 * In such reason, when `input` value is not matched with the type `T`, it throws an
 * {@link TypeGuardError}. Otherwise, there's no problem on the `input` value, its
 * every superfluous properties would be removed, including nested objects.
 *
 * @template T Type of the input value
 * @param input Target instance to assert and prune
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function assertPrune<T>(input: unknown): T;

/**
 * @internal
 */
function assertPrune(): unknown {
  halt("assertPrune");
}
const assertPrunePure = /** @__PURE__ */ Object.assign<
  typeof assertPrune,
  {},
  {}
>(
  assertPrune,
  /** @__PURE__ */ Namespace.assert("misc.assertPrune"),
  /** @__PURE__ */ Namespace.misc.prune("assertPrune"),
);
export { assertPrunePure as assertPrune };

/**
 * Prune, erase superfluous properties, with type checking.
 *
 * `typia.misc.assertPrune()` is a combination function of {@link is} and
 * {@link prune}. Therefore, it removes every superfluous properties from the `input`
 * object including nested objects, with type checking.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * `false` value. Otherwise, there's no problem on the `input` value, it returns
 * `true` after removing every superfluous properties, including nested objects.
 *
 * @template T Type of the input value
 * @param input Target instance to check and prune
 * @returns Whether the parametric value is following the type `T` or not
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function isPrune<T>(input: T): input is T;

/**
 * Prune, erase superfluous properties, with type checking.
 *
 * `typia.misc.assertPrune()` is a combination function of {@link is} and
 * {@link prune}. Therefore, it removes every superfluous properties from the `input`
 * object including nested objects, with type checking.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * `false` value. Otherwise, there's no problem on the `input` value, it returns
 * `true` after removing every superfluous properties, including nested objects.
 *
 * @template T Type of the input value
 * @param input Target instance to check and prune
 * @returns Whether the parametric value is following the type `T` or not
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function isPrune<T>(input: unknown): input is T;

/**
 * @internal
 */
function isPrune(): never {
  halt("isPrune");
}
const isPrunePure = /** @__PURE__ */ Object.assign<typeof isPrune, {}, {}>(
  isPrune,
  /** @__PURE__ */ Namespace.is(),
  /** @__PURE__ */ Namespace.misc.prune("isPrune"),
);
export { isPrunePure as isPrune };

/**
 * Prune, erase superfluous properties, with type validation.
 *
 * `typia.misc.validatePrune()` is a combination function of {@link validate} and
 * {@link prune}. Therefore, it removes every superfluous properties from the `input`
 * object including nested objects, with type validation.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * {@link IValidation.IFailure} value with detailed error reasons. Otherwise, there's
 * no problem on the `input` value, it returns {@link IValidation.ISucess} value after
 * removing every superfluous properties, including nested objects.
 *
 * @template T Type of the input value
 * @param input Target instance to validate and prune
 * @returns Validation result
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function validatePrune<T>(input: T): IValidation<T>;

/**
 * Prune, erase superfluous properties, with type validation.
 *
 * `typia.misc.validatePrune()` is a combination function of {@link validate} and
 * {@link prune}. Therefore, it removes every superfluous properties from the `input`
 * object including nested objects, with type validation.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * {@link IValidation.IFailure} value with detailed error reasons. Otherwise, there's
 * no problem on the `input` value, it returns {@link IValidation.ISucess} value after
 * removing every superfluous properties, including nested objects.
 *
 * @template T Type of the input value
 * @param input Target instance to validate and prune
 * @returns Validation result
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function validatePrune<T>(input: unknown): IValidation<T>;

/**
 * @internal
 */
function validatePrune<T>(): IValidation<T> {
  halt("validatePrune");
}

const validatePrunePure = /** @__PURE__ */ Object.assign<
  typeof validatePrune,
  {},
  {}
>(
  validatePrune,
  /** @__PURE__ */ Namespace.misc.prune("validatePrune"),
  /** @__PURE__ */ Namespace.validate(),
);
export { validatePrunePure as validatePrune };

/* -----------------------------------------------------------
    FACTORY FUNCTIONS
----------------------------------------------------------- */
/**
 * Creates a reusable {@link clone} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createClone(): never;

/**
 * Creates a resuable {@link clone} function.
 *
 * @template T Type of the input value
 * @returns A reusable `clone` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createClone<T>(): (input: T) => Resolved<T>;

/**
 * @internal
 */
function createClone(): never {
  halt("createClone");
}
const createClonePure = /** @__PURE__ */ Object.assign<typeof createClone, {}>(
  createClone,
  clone,
);
export { createClonePure as createClone };

/**
 * Creates a reusable {@link assertClone} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createAssertClone(): never;

/**
 * Creates a resuable {@link assertClone} function.
 *
 * @template T Type of the input value
 * @returns A reusable `clone` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createAssertClone<T>(): (input: unknown) => Resolved<T>;

/**
 * @internal
 */
function createAssertClone(): never {
  halt("createAssertClone");
}
const createAssertClonePure = /** @__PURE__ */ Object.assign<
  typeof createAssertClone,
  {}
>(createAssertClone, assertClone);
export { createAssertClonePure as createAssertClone };

/**
 * Creates a reusable {@link isClone} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createIsClone(): never;

/**
 * Creates a resuable {@link isClone} function.
 *
 * @template T Type of the input value
 * @returns A reusable `clone` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createIsClone<T>(): (input: unknown) => Resolved<T> | null;

/**
 * @internal
 */
function createIsClone(): never {
  halt("createIsClone");
}
const createIsClonePure = /** @__PURE__ */ Object.assign<
  typeof createIsClone,
  {}
>(createIsClone, isClone);
export { createIsClonePure as createIsClone };

/**
 * Creates a reusable {@link validateClone} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createValidateClone(): never;

/**
 * Creates a resuable {@link validateClone} function.
 *
 * @template T Type of the input value
 * @returns A reusable `clone` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createValidateClone<T>(): (input: unknown) => IValidation<Resolved<T>>;

/**
 * @internal
 */
function createValidateClone(): never {
  halt("createValidateClone");
}
const createValidateClonePure = /** @__PURE__ */ Object.assign<
  typeof createValidateClone,
  {}
>(createValidateClone, validateClone);
export { createValidateClonePure as createValidateClone };

/**
 * Creates a reusable {@link prune} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createPrune(): never;

/**
 * Creates a resuable {@link prune} function.
 *
 * @template T Type of the input value
 * @returns A reusable `prune` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createPrune<T extends object>(): (input: T) => void;

/**
 * @internal
 */
function createPrune<T extends object>(): (input: T) => void {
  halt("createPrune");
}
const createPrunePure = /** @__PURE__ */ Object.assign<typeof createPrune, {}>(
  createPrune,
  prune,
);
export { createPrunePure as createPrune };

/**
 * Creates a reusable {@link assertPrune} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createAssertPrune(): never;

/**
 * Creates a resuable {@link assertPrune} function.
 *
 * @template T Type of the input value
 * @returns A reusable `isPrune` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createAssertPrune<T extends object>(): (input: T) => T;

/**
 * @internal
 */
function createAssertPrune<T extends object>(): (input: T) => T {
  halt("createAssertPrune");
}
const createAssertPrunePure = /** @__PURE__ */ Object.assign<
  typeof createAssertPrune,
  {}
>(createAssertPrune, assertPrune);
export { createAssertPrunePure as createAssertPrune };

/**
 * Creates a reusable {@link isPrune} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createIsPrune(): never;

/**
 * Creates a resuable {@link isPrune} function.
 *
 * @template T Type of the input value
 * @returns A reusable `isPrune` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createIsPrune<T extends object>(): (input: T) => input is T;

/**
 * @internal
 */
function createIsPrune<T extends object>(): (input: T) => input is T {
  halt("createIsPrune");
}
const createIsPrunePure = /** @__PURE__ */ Object.assign<
  typeof createIsPrune,
  {}
>(createIsPrune, isPrune);
export { createIsPrunePure as createIsPrune };

/**
 * Creates a reusable {@link validatePrune} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createValidatePrune(): never;

/**
 * Creates a resuable {@link validatePrune} function.
 *
 * @template T Type of the input value
 * @returns A reusable `validatePrune` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function createValidatePrune<T extends object>(): (input: T) => IValidation<T>;

/**
 * @internal
 */
function createValidatePrune<T extends object>(): (input: T) => IValidation<T> {
  halt("createValidatePrune");
}
const createValidatePrunePure = /** @__PURE__ */ Object.assign<
  typeof createValidatePrune,
  {}
>(createValidatePrune, validatePrune);
export { createValidatePrunePure as createValidatePrune };

/**
 * @internal
 */
function halt(name: string): never {
  throw new Error(
    `Error on typia.misc.${name}(): no transform has been configured. Read and follow https://typia.io/docs/setup please.`,
  );
}
