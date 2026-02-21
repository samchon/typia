import { StandardSchemaV1 } from "@standard-schema/spec";
import {
  AssertionGuard,
  IRandomGenerator,
  IValidation,
  Resolved,
} from "@typia/interface";

import { TypeGuardError } from "./TypeGuardError";
import { NoTransformConfigurationError } from "./transformers/NoTransformConfigurationError";

export * as functional from "./functional";
export * as http from "./http";
export * as llm from "./llm";
export * as json from "./json";
export * as misc from "./misc";
export * as notations from "./notations";
export * as protobuf from "./protobuf";
export * as reflect from "./reflect";

export * from "./TypeGuardError";

export * from "./re-exports";

/* -----------------------------------------------------------
    BASIC VALIDATORS
----------------------------------------------------------- */
/**
 * Asserts type `T`.
 *
 * Performs runtime type checking against compile-time type `T`. Stops at first
 * mismatch and throws {@link TypeGuardError} containing:
 *
 * - `path`: Property path where error occurred (e.g., `"input.user.age"`)
 * - `expected`: Expected type string (e.g., `"number & ExclusiveMinimum<19>"`)
 * - `value`: Actual value that failed validation
 *
 * Related functions:
 *
 * - {@link is} — Returns `boolean` instead of throwing
 * - {@link validate} — Collects all errors instead of stopping at first
 * - {@link assertGuard} — Type guard with no return value (narrows type only)
 * - {@link assertEquals} — Also rejects properties not defined in `T`
 *
 * @template T Target type to validate against
 * @param input Value to assert
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns The input value typed as `T`
 * @throws {TypeGuardError} When input doesn't conform to type `T`
 */
export function assert<T>(
  input: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): T;

/**
 * Asserts type `T`.
 *
 * Performs runtime type checking against compile-time type `T`. Stops at first
 * mismatch and throws {@link TypeGuardError} containing:
 *
 * - `path`: Property path where error occurred (e.g., `"input.user.age"`)
 * - `expected`: Expected type string (e.g., `"number & ExclusiveMinimum<19>"`)
 * - `value`: Actual value that failed validation
 *
 * Related functions:
 *
 * - {@link is} — Returns `boolean` instead of throwing
 * - {@link validate} — Collects all errors instead of stopping at first
 * - {@link assertGuard} — Type guard with no return value (narrows type only)
 * - {@link assertEquals} — Also rejects properties not defined in `T`
 *
 * @template T Target type to validate against
 * @param input Value to assert
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns The input value typed as `T`
 * @throws {TypeGuardError} When input doesn't conform to type `T`
 */
export function assert<T>(
  input: unknown,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): T;

/** @internal */
export function assert(): never {
  NoTransformConfigurationError("assert");
}

/**
 * Asserts type `T` as assertion guard.
 *
 * Unlike {@link assert}, returns nothing (`asserts input is T`). After this
 * call, TypeScript narrows `input` to type `T` in subsequent code. Useful when
 * you need type narrowing with runtime validation but don't need the return
 * value.
 *
 * Throws {@link TypeGuardError} on first mismatch with `path`, `expected`, and
 * `value`.
 *
 * Related functions:
 *
 * - {@link assert} — Same validation but returns the input value
 * - {@link is} — Returns `boolean` instead of throwing
 * - {@link validate} — Collects all errors instead of throwing
 * - {@link assertGuardEquals} — Also rejects properties not defined in `T`
 *
 * @template T Target type to validate against
 * @param input Value to assert (narrowed to `T` after call)
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @throws {TypeGuardError} When input doesn't conform to type `T`
 */
export function assertGuard<T>(
  input: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): asserts input is T;

/**
 * Asserts type `T` as assertion guard.
 *
 * Unlike {@link assert}, returns nothing (`asserts input is T`). After this
 * call, TypeScript narrows `input` to type `T` in subsequent code. Useful when
 * you need type narrowing with runtime validation but don't need the return
 * value.
 *
 * Throws {@link TypeGuardError} on first mismatch with `path`, `expected`, and
 * `value`.
 *
 * Related functions:
 *
 * - {@link assert} — Same validation but returns the input value
 * - {@link is} — Returns `boolean` instead of throwing
 * - {@link validate} — Collects all errors instead of throwing
 * - {@link assertGuardEquals} — Also rejects properties not defined in `T`
 *
 * @template T Target type to validate against
 * @param input Value to assert (narrowed to `T` after call)
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @throws {TypeGuardError} When input doesn't conform to type `T`
 */
export function assertGuard<T>(
  input: unknown,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): asserts input is T;

/** @internal */
export function assertGuard(): never {
  NoTransformConfigurationError("assertGuard");
}

/**
 * Tests type `T`.
 *
 * Performs runtime type checking without throwing exceptions. Acts as
 * TypeScript type guard, narrowing the input type in conditional branches when
 * result is `true`.
 *
 * Related functions:
 *
 * - {@link assert} — Throws {@link TypeGuardError} with detailed error info on
 *   mismatch
 * - {@link validate} — Returns all errors without throwing
 * - {@link equals} — Also rejects properties not defined in `T`
 *
 * @template T Target type to check
 * @param input Value to test
 * @returns `true` if valid, `false` otherwise (type predicate `input is T`)
 */
export function is<T>(input: T): input is T;

/**
 * Tests type `T`.
 *
 * Performs runtime type checking without throwing exceptions. Acts as
 * TypeScript type guard, narrowing the input type in conditional branches when
 * result is `true`.
 *
 * Related functions:
 *
 * - {@link assert} — Throws {@link TypeGuardError} with detailed error info on
 *   mismatch
 * - {@link validate} — Returns all errors without throwing
 * - {@link equals} — Also rejects properties not defined in `T`
 *
 * @template T Target type to check
 * @param input Value to test
 * @returns `true` if valid, `false` otherwise (type predicate `input is T`)
 */
export function is<T>(input: unknown): input is T;

/** @internal */
export function is(): never {
  NoTransformConfigurationError("is");
}

/**
 * Validates type `T`.
 *
 * Unlike {@link assert} which throws on first error, this function continues
 * checking and collects all type mismatches into {@link IValidation.errors}
 * array. Never throws.
 *
 * Return structure:
 *
 * - `success: true` → `data` contains validated input as `T`
 * - `success: false` → `errors` array of {@link IValidation.IError} with `path`,
 *   `expected`, `value`
 *
 * Related functions:
 *
 * - {@link assert} — Throws on first error instead of collecting all
 * - {@link is} — Simple boolean check
 * - {@link validateEquals} — Also rejects properties not defined in `T`
 *
 * @template T Target type to validate against
 * @param input Value to validate
 * @returns {@link IValidation} <T> containing either `data` or `errors`
 */
export function validate<T>(input: T): IValidation<T>;

/**
 * Validates type `T`.
 *
 * Unlike {@link assert} which throws on first error, this function continues
 * checking and collects all type mismatches into {@link IValidation.errors}
 * array. Never throws.
 *
 * Return structure:
 *
 * - `success: true` → `data` contains validated input as `T`
 * - `success: false` → `errors` array of {@link IValidation.IError} with `path`,
 *   `expected`, `value`
 *
 * Related functions:
 *
 * - {@link assert} — Throws on first error instead of collecting all
 * - {@link is} — Simple boolean check
 * - {@link validateEquals} — Also rejects properties not defined in `T`
 *
 * @template T Target type to validate against
 * @param input Value to validate
 * @returns {@link IValidation} <T> containing either `data` or `errors`
 */
export function validate<T>(input: unknown): IValidation<T>;

/** @internal */
export function validate(): never {
  NoTransformConfigurationError("validate");
}

/* -----------------------------------------------------------
    STRICT VALIDATORS
----------------------------------------------------------- */
/**
 * Asserts type `T` with strict equality.
 *
 * Stricter than {@link assert}: also fails when input contains any property not
 * defined in type `T`. For extra property errors, `expected` will be
 * `"undefined"`.
 *
 * Related functions:
 *
 * - {@link assert} — Allows extra properties
 * - {@link equals} — Boolean result without throwing
 * - {@link validateEquals} — Collects all errors without throwing
 * - {@link assertGuardEquals} — Type guard version with no return value
 *
 * @template T Target type for exact match
 * @param input Value to validate
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns The input value typed as `T`
 * @throws {TypeGuardError} When type mismatch or extra property detected
 */
export function assertEquals<T>(
  input: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): T;

/**
 * Asserts type `T` with strict equality.
 *
 * Stricter than {@link assert}: also fails when input contains any property not
 * defined in type `T`. For extra property errors, `expected` will be
 * `"undefined"`.
 *
 * Related functions:
 *
 * - {@link assert} — Allows extra properties
 * - {@link equals} — Boolean result without throwing
 * - {@link validateEquals} — Collects all errors without throwing
 * - {@link assertGuardEquals} — Type guard version with no return value
 *
 * @template T Target type for exact match
 * @param input Value to validate
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns The input value typed as `T`
 * @throws {TypeGuardError} When type mismatch or extra property detected
 */
export function assertEquals<T>(
  input: unknown,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): T;

/** @internal */
export function assertEquals(): never {
  NoTransformConfigurationError("assertEquals");
}

/**
 * Asserts type `T` with strict equality as assertion guard.
 *
 * Combines {@link assertGuard} with strict equality checking. Returns nothing
 * but narrows input to type `T`. Also fails when input contains properties not
 * in `T`.
 *
 * Related functions:
 *
 * - {@link assertGuard} — Allows extra properties
 * - {@link assertEquals} — Returns value instead of type guard
 * - {@link equals} — Boolean result without throwing
 * - {@link validateEquals} — Collects all errors without throwing
 *
 * @template T Target type for exact match
 * @param input Value to assert (narrowed to `T` after call)
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @throws {TypeGuardError} When type mismatch or extra property detected
 */
export function assertGuardEquals<T>(
  input: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): asserts input is T;

/**
 * Asserts type `T` with strict equality as assertion guard.
 *
 * Combines {@link assertGuard} with strict equality checking. Returns nothing
 * but narrows input to type `T`. Also fails when input contains properties not
 * in `T`.
 *
 * Related functions:
 *
 * - {@link assertGuard} — Allows extra properties
 * - {@link assertEquals} — Returns value instead of type guard
 * - {@link equals} — Boolean result without throwing
 * - {@link validateEquals} — Collects all errors without throwing
 *
 * @template T Target type for exact match
 * @param input Value to assert (narrowed to `T` after call)
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @throws {TypeGuardError} When type mismatch or extra property detected
 */
export function assertGuardEquals<T>(
  input: unknown,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): asserts input is T;

/** @internal */
export function assertGuardEquals(): never {
  NoTransformConfigurationError("assertGuardEquals");
}

/**
 * Tests type `T` with strict equality.
 *
 * Stricter than {@link is}: also returns `false` when input contains any
 * property not defined in type `T`. Useful for detecting unexpected data or
 * typos.
 *
 * Related functions:
 *
 * - {@link is} — Allows extra properties
 * - {@link assertEquals} — Throws with detailed error info on mismatch
 * - {@link validateEquals} — Returns all errors without throwing
 *
 * @template T Target type for exact match
 * @param input Value to test
 * @returns `true` if valid, `false` otherwise (type predicate `input is T`)
 */
export function equals<T>(input: T): input is T;

/**
 * Tests type `T` with strict equality.
 *
 * Stricter than {@link is}: also returns `false` when input contains any
 * property not defined in type `T`. Useful for detecting unexpected data or
 * typos.
 *
 * Related functions:
 *
 * - {@link is} — Allows extra properties
 * - {@link assertEquals} — Throws with detailed error info on mismatch
 * - {@link validateEquals} — Returns all errors without throwing
 *
 * @template T Target type for exact match
 * @param input Value to test
 * @returns `true` if valid, `false` otherwise (type predicate `input is T`)
 */
export function equals<T>(input: unknown): input is T;

/** @internal */
export function equals(): never {
  NoTransformConfigurationError("equals");
}

/**
 * Validates type `T` with strict equality.
 *
 * Combines {@link validate} with strict equality checking. Collects all errors
 * including extra property violations into {@link IValidation.errors} array.
 *
 * Return structure:
 *
 * - `success: true` → `data` contains validated input as `T`
 * - `success: false` → `errors` array with `path`, `expected`, `value` for each
 *   mismatch
 *
 * Related functions:
 *
 * - {@link validate} — Allows extra properties
 * - {@link assertEquals} — Throws on first error
 * - {@link equals} — Simple boolean check
 *
 * @template T Target type for exact match
 * @param input Value to validate
 * @returns {@link IValidation} <T> containing either `data` or `errors`
 */
export function validateEquals<T>(input: T): IValidation<T>;

/**
 * Validates type `T` with strict equality.
 *
 * Combines {@link validate} with strict equality checking. Collects all errors
 * including extra property violations into {@link IValidation.errors} array.
 *
 * Return structure:
 *
 * - `success: true` → `data` contains validated input as `T`
 * - `success: false` → `errors` array with `path`, `expected`, `value` for each
 *   mismatch
 *
 * Related functions:
 *
 * - {@link validate} — Allows extra properties
 * - {@link assertEquals} — Throws on first error
 * - {@link equals} — Simple boolean check
 *
 * @template T Target type for exact match
 * @param input Value to validate
 * @returns {@link IValidation} <T> containing either `data` or `errors`
 */
export function validateEquals<T>(input: unknown): IValidation<T>;

/** @internal */
export function validateEquals(): never {
  NoTransformConfigurationError("validateEquals");
}

/* -----------------------------------------------------------
    RANDOM
----------------------------------------------------------- */
/**
 * Generates random data of type `T`.
 *
 * Creates random instance conforming to compile-time type `T`. Generates only
 * primitive data; methods in `T` are ignored. If `T` has `toJSON()` method,
 * generates its return type instead.
 *
 * @template T Type of data to generate
 * @param generator Custom random generator implementing {@link IRandomGenerator}
 * @returns Randomly generated data as `Resolved<T>`
 * @danger You must configure the generic argument `T`
 */
export function random(generator?: Partial<IRandomGenerator>): never;

/**
 * Generates random data of type `T`.
 *
 * Creates random instance conforming to compile-time type `T`. Generates only
 * primitive data; methods in `T` are ignored. If `T` has `toJSON()` method,
 * generates its return type instead.
 *
 * @template T Type of data to generate
 * @param generator Custom random generator implementing {@link IRandomGenerator}
 * @returns Randomly generated data as `Resolved<T>`
 */
export function random<T>(generator?: Partial<IRandomGenerator>): Resolved<T>;

/** @internal */
export function random(): never {
  NoTransformConfigurationError("random");
}

/* -----------------------------------------------------------
    FACTORY FUNCTIONS
----------------------------------------------------------- */
/**
 * Creates reusable {@link assert} function.
 *
 * Returns a function that can be called multiple times without recompilation.
 * Useful when the same type validation is needed repeatedly.
 *
 * @template T Target type to validate against
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Reusable assert function `(input: unknown) => T`
 * @danger You must configure the generic argument `T`
 */
export function createAssert(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Creates reusable {@link assert} function.
 *
 * Returns a function that can be called multiple times without recompilation.
 * Useful when the same type validation is needed repeatedly.
 *
 * @template T Target type to validate against
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Reusable assert function `(input: unknown) => T`
 */
export function createAssert<T>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: unknown) => T;

/** @internal */
export function createAssert<T>(): (input: unknown) => T {
  NoTransformConfigurationError("createAssert");
}

/**
 * Creates reusable {@link assertGuard} function.
 *
 * Returns a reusable type guard assertion function.
 *
 * TypeScript requirement: You must declare the variable type explicitly. `const
 * fn: AssertionGuard<T> = createAssertGuard<T>()` — otherwise compile error.
 *
 * @template T Target type to validate against
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Reusable assertion guard function
 * @danger You must configure the generic argument `T`
 */
export function createAssertGuard(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Creates reusable {@link assertGuard} function.
 *
 * Returns a reusable type guard assertion function.
 *
 * TypeScript requirement: You must declare the variable type explicitly. `const
 * fn: AssertionGuard<T> = createAssertGuard<T>()` — otherwise compile error.
 *
 * @template T Target type to validate against
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Reusable assertion guard function
 */
export function createAssertGuard<T>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: unknown) => AssertionGuard<T>;

/** @internal */
export function createAssertGuard<T>(): (input: unknown) => AssertionGuard<T> {
  NoTransformConfigurationError("createAssertGuard");
}

/**
 * Creates reusable {@link is} function.
 *
 * Returns a type guard function that can be called multiple times without
 * recompilation.
 *
 * @template T Target type to check
 * @returns Reusable type guard function `(input: unknown) => input is T`
 * @danger You must configure the generic argument `T`
 */
export function createIs(): never;

/**
 * Creates reusable {@link is} function.
 *
 * Returns a type guard function that can be called multiple times without
 * recompilation.
 *
 * @template T Target type to check
 * @returns Reusable type guard function `(input: unknown) => input is T`
 */
export function createIs<T>(): (input: unknown) => input is T;

/** @internal */
export function createIs<T>(): (input: unknown) => input is T {
  NoTransformConfigurationError("createIs");
}

/**
 * Creates reusable {@link validate} function.
 *
 * Returns a validation function that can be called multiple times without
 * recompilation. Also implements {@link StandardSchemaV1} interface for
 * interoperability.
 *
 * @template T Target type to validate against
 * @returns Reusable validate function `(input: unknown) => IValidation<T>`
 * @danger You must configure the generic argument `T`
 */
export function createValidate(): never;

/**
 * Creates reusable {@link validate} function.
 *
 * Returns a validation function that can be called multiple times without
 * recompilation. Also implements {@link StandardSchemaV1} interface for
 * interoperability.
 *
 * @template T Target type to validate against
 * @returns Reusable validate function `(input: unknown) => IValidation<T>`
 */
export function createValidate<T>(): ((input: unknown) => IValidation<T>) &
  StandardSchemaV1<T, T>;

/** @internal */
export function createValidate(): ((input: unknown) => IValidation) &
  StandardSchemaV1<unknown, unknown> {
  NoTransformConfigurationError("createValidate");
}

/**
 * Creates reusable {@link assertEquals} function.
 *
 * Returns a strict assertion function that rejects superfluous properties. Can
 * be called multiple times without recompilation.
 *
 * @template T Target type for exact match
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Reusable assertEquals function `(input: unknown) => T`
 * @danger You must configure the generic argument `T`
 */
export function createAssertEquals(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Creates reusable {@link assertEquals} function.
 *
 * Returns a strict assertion function that rejects superfluous properties. Can
 * be called multiple times without recompilation.
 *
 * @template T Target type for exact match
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Reusable assertEquals function `(input: unknown) => T`
 */
export function createAssertEquals<T>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: unknown) => T;

/** @internal */
export function createAssertEquals<T>(): (input: unknown) => T {
  NoTransformConfigurationError("createAssertEquals");
}

/**
 * Creates reusable {@link assertGuardEquals} function.
 *
 * Returns a strict assertion guard that rejects superfluous properties.
 *
 * TypeScript requirement: You must declare the variable type explicitly. `const
 * fn: AssertionGuard<T> = createAssertGuardEquals<T>()` — otherwise compile
 * error.
 *
 * @template T Target type for exact match
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Reusable assertion guard function
 * @danger You must configure the generic argument `T`
 */
export function createAssertGuardEquals(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Creates reusable {@link assertGuardEquals} function.
 *
 * Returns a strict assertion guard that rejects superfluous properties.
 *
 * TypeScript requirement: You must declare the variable type explicitly. `const
 * fn: AssertionGuard<T> = createAssertGuardEquals<T>()` — otherwise compile
 * error.
 *
 * @template T Target type for exact match
 * @param errorFactory Custom error factory receiving
 *   {@link TypeGuardError.IProps}
 * @returns Reusable assertion guard function
 */
export function createAssertGuardEquals<T>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: unknown) => AssertionGuard<T>;

/** @internal */
export function createAssertGuardEquals<T>(): (
  input: unknown,
) => AssertionGuard<T> {
  NoTransformConfigurationError("createAssertGuardEquals");
}

/**
 * Creates reusable {@link equals} function.
 *
 * Returns a strict type guard that rejects superfluous properties. Can be
 * called multiple times without recompilation.
 *
 * @template T Target type for exact match
 * @returns Reusable type guard function `(input: unknown) => input is T`
 * @danger You must configure the generic argument `T`
 */
export function createEquals(): never;

/**
 * Creates reusable {@link equals} function.
 *
 * Returns a strict type guard that rejects superfluous properties. Can be
 * called multiple times without recompilation.
 *
 * @template T Target type for exact match
 * @returns Reusable type guard function `(input: unknown) => input is T`
 */
export function createEquals<T>(): (input: unknown) => input is T;

/** @internal */
export function createEquals<T>(): (input: unknown) => input is T {
  NoTransformConfigurationError("createEquals");
}

/**
 * Creates reusable {@link validateEquals} function.
 *
 * Returns a strict validation function that rejects superfluous properties.
 * Also implements {@link StandardSchemaV1} interface for interoperability.
 *
 * @template T Target type for exact match
 * @returns Reusable validateEquals function `(input: unknown) =>
 *   IValidation<T>`
 * @danger You must configure the generic argument `T`
 */
export function createValidateEquals(): never;

/**
 * Creates reusable {@link validateEquals} function.
 *
 * Returns a strict validation function that rejects superfluous properties.
 * Also implements {@link StandardSchemaV1} interface for interoperability.
 *
 * @template T Target type for exact match
 * @returns Reusable validateEquals function `(input: unknown) =>
 *   IValidation<T>`
 */
export function createValidateEquals<T>(): ((
  input: unknown,
) => IValidation<T>) &
  StandardSchemaV1<T, T>;

/** @internal */
export function createValidateEquals(): ((input: unknown) => IValidation) &
  StandardSchemaV1<unknown, unknown> {
  NoTransformConfigurationError("createValidateEquals");
}

/**
 * Creates reusable {@link random} function.
 *
 * Returns a random data generator that can be called multiple times without
 * recompilation.
 *
 * @template T Type of data to generate
 * @param generator Custom random generator implementing {@link IRandomGenerator}
 * @returns Reusable random function `() => Resolved<T>`
 * @danger You must configure the generic argument `T`
 */
export function createRandom(generator?: Partial<IRandomGenerator>): never;

/**
 * Creates reusable {@link random} function.
 *
 * Returns a random data generator that can be called multiple times without
 * recompilation.
 *
 * @template T Type of data to generate
 * @param generator Custom random generator implementing {@link IRandomGenerator}
 * @returns Reusable random function `() => Resolved<T>`
 */
export function createRandom<T>(
  generator?: Partial<IRandomGenerator>,
): () => Resolved<T>;

/** @internal */
export function createRandom(): never {
  NoTransformConfigurationError("createRandom");
}
