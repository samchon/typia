/* ===========================================================
    COMPARE
      - EQUALS
      - COVER
      - LESS
      - FACTORY FUNCTIONS
=========================================================== */
import { Atomic } from "@typia/interface";

import { NoTransformConfigurationError } from "./transformers/NoTransformConfigurationError";

export type Cover<T> = T extends Atomic.Type | null | undefined
  ? T
  : T extends (...args: any[]) => any
    ? T
    : T extends readonly (infer U)[]
      ? Cover<U>[]
      : T extends object
        ? { [K in keyof T]?: Cover<T[K]> }
        : T;

/* -----------------------------------------------------------
    EQUALS
----------------------------------------------------------- */
/**
 * Compares two values of type `T`.
 *
 * Performs a type-directed deep equality comparison. Object properties are
 * compared by the declared structure of `T`; extra runtime properties are not
 * part of the comparison. When `T` (or a nested object type) declares an
 * `equals(y: T): boolean` method, that method is used instead of the structural
 * comparison.
 *
 * @template T Type of values to compare
 * @param x Left value
 * @param y Right value
 * @returns Whether both values are equal by structure
 */
export function equals<T>(x: T, y: T): boolean;

/** @internal */
export function equals(): never {
  NoTransformConfigurationError("compare.equals");
}

/**
 * Compares whether `x` covers the defined structure of `y`.
 *
 * Object properties whose value is `undefined` in `y` are ignored. Arrays and
 * tuples still require identical lengths and compare element-by-element.
 *
 * @template T Type of value to compare
 * @param x Full value
 * @param y Partial value to match
 * @returns Whether `x` covers `y`
 */
export function cover<T>(x: T, y: Cover<T>): boolean;

/** @internal */
export function cover(): never {
  NoTransformConfigurationError("compare.cover");
}

/* -----------------------------------------------------------
    LESS
----------------------------------------------------------- */
/**
 * Tests whether `x` precedes `y`.
 *
 * Performs a type-directed lexicographic comparison: the properties of `T` are
 * walked in declaration order, depth-first, and the scalar leaves (`number` /
 * `boolean` / `string` / `bigint`) are compared one by one. The result is
 * decided by the first leaf where `x` and `y` differ; if every leaf is equal,
 * the result is `false` (equal is not "less"). When `T` (or a nested object
 * type) declares a `less(y: T): boolean` method, that method is used instead of
 * the structural comparison.
 *
 * The ordering is total and deterministic, so it composes into an
 * `Array.prototype.sort` comparator:
 *
 * ```ts
 * const cmp = (a: T, b: T): number =>
 *   typia.compare.less(a, b) ? -1 : typia.compare.less(b, a) ? 1 : 0;
 * ```
 *
 * @template T Type of values to compare
 * @param x Left value
 * @param y Right value
 * @returns Whether `x` precedes `y`
 */
export function less<T>(x: T, y: T): boolean;

/** @internal */
export function less(): never {
  NoTransformConfigurationError("compare.less");
}

/* -----------------------------------------------------------
    FACTORY FUNCTIONS
----------------------------------------------------------- */
/**
 * Creates reusable {@link equals} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createEquals(): never;

/**
 * Creates reusable {@link equals} function.
 *
 * @template T Type of values to compare
 * @returns Reusable equality function
 */
export function createEquals<T>(): (x: T, y: T) => boolean;

/** @internal */
export function createEquals(): never {
  NoTransformConfigurationError("compare.createEquals");
}

/**
 * Creates reusable {@link cover} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createCover(): never;

/**
 * Creates reusable {@link cover} function.
 *
 * @template T Type of value to compare
 * @returns Reusable cover function
 */
export function createCover<T>(): (x: T, y: Cover<T>) => boolean;

/** @internal */
export function createCover(): never {
  NoTransformConfigurationError("compare.createCover");
}

/**
 * Creates reusable {@link less} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createLess(): never;

/**
 * Creates reusable {@link less} function.
 *
 * @template T Type of values to compare
 * @returns Reusable ordering function
 */
export function createLess<T>(): (x: T, y: T) => boolean;

/** @internal */
export function createLess(): never {
  NoTransformConfigurationError("compare.createLess");
}
