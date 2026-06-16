/* ===========================================================
    COMPARE
      - EQUAL
      - COVER
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
    EQUAL
----------------------------------------------------------- */
/**
 * Compares two values of type `T`.
 *
 * Performs a type-directed deep equality comparison. Object properties are
 * compared by the declared structure of `T`; extra runtime properties are not
 * part of the comparison.
 *
 * @template T Type of values to compare
 * @param x Left value
 * @param y Right value
 * @returns Whether both values are equal by structure
 */
export function equal<T>(x: T, y: T): boolean;

/** @internal */
export function equal(): never {
  NoTransformConfigurationError("compare.equal");
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
    FACTORY FUNCTIONS
----------------------------------------------------------- */
/**
 * Creates reusable {@link equal} function.
 *
 * @danger You must configure the generic argument `T`
 */
export function createEqual(): never;

/**
 * Creates reusable {@link equal} function.
 *
 * @template T Type of values to compare
 * @returns Reusable equality function
 */
export function createEqual<T>(): (x: T, y: T) => boolean;

/** @internal */
export function createEqual(): never {
  NoTransformConfigurationError("compare.createEqual");
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
