import { NoTransformConfigurationError } from "./transformers/NoTransformConfigurationError";

/* -----------------------------------------------------------
    COMPARE FUNCTIONS
----------------------------------------------------------- */
/**
 * Compare namespace for value comparison operations.
 * 
 * @author Jeongho Nam - https://github.com/samchon
 */
export namespace compare {
  /**
   * Tests whether `x` covers `y`.
   * 
   * Tests a parametric value type and returns whether `x` covers `y` or not.
   * If the parametric value `x` covers `y`, `true` value will be returned.
   * Otherwise, `false` value will be returned.
   * 
   * @template T Type of the input values
   * @param x First value to be compared
   * @param y Second value to be compared
   * @returns Whether the parametric value `x` covers `y` or not
   * 
   * @author Jeongho Nam - https://github.com/samchon
   */
  export function covers<T>(x: T, y: T): boolean;

  /**
   * Tests whether `x` covers `y`.
   * 
   * Tests a parametric value type and returns whether `x` covers `y` or not.
   * If the parametric value `x` covers `y`, `true` value will be returned.
   * Otherwise, `false` value will be returned.
   * 
   * @template T Type of the input values
   * @param x First value to be compared
   * @param y Second value to be compared
   * @returns Whether the parametric value `x` covers `y` or not
   * 
   * @author Jeongho Nam - https://github.com/samchon
   */
  export function covers<T>(x: unknown, y: unknown): boolean;

  /**
   * @internal
   */
  export function covers(): never {
    NoTransformConfigurationError("compare.covers");
  }

  /**
   * Tests equality between two values.
   * 
   * Tests a parametric value type and returns whether `x` and `y` are equal or not.
   * If the parametric values are deeply equal, `true` value will be returned.
   * Otherwise, `false` value will be returned.
   * 
   * @template T Type of the input values
   * @param x First value to be compared
   * @param y Second value to be compared
   * @returns Whether the parametric values are equal or not
   * 
   * @author Jeongho Nam - https://github.com/samchon
   */
  export function equals<T>(x: T, y: T): boolean;

  /**
   * Tests equality between two values.
   * 
   * Tests a parametric value type and returns whether `x` and `y` are equal or not.
   * If the parametric values are deeply equal, `true` value will be returned.
   * Otherwise, `false` value will be returned.
   * 
   * @template T Type of the input values
   * @param x First value to be compared
   * @param y Second value to be compared
   * @returns Whether the parametric values are equal or not
   * 
   * @author Jeongho Nam - https://github.com/samchon
   */
  export function equals<T>(x: unknown, y: unknown): boolean;

  /**
   * @internal
   */
  export function equals(): never {
    NoTransformConfigurationError("compare.equals");
  }

  /**
   * Tests whether `x` is less than `y`.
   * 
   * Tests a parametric value type and returns whether `x` is less than `y` or not.
   * If the parametric value `x` is less than `y`, `true` value will be returned.
   * Otherwise, `false` value will be returned.
   * 
   * @template T Type of the input values
   * @param x First value to be compared
   * @param y Second value to be compared
   * @returns Whether the parametric value `x` is less than `y` or not
   * 
   * @author Jeongho Nam - https://github.com/samchon
   */
  export function less<T>(x: T, y: T): boolean;

  /**
   * Tests whether `x` is less than `y`.
   * 
   * Tests a parametric value type and returns whether `x` is less than `y` or not.
   * If the parametric value `x` is less than `y`, `true` value will be returned.
   * Otherwise, `false` value will be returned.
   * 
   * @template T Type of the input values
   * @param x First value to be compared
   * @param y Second value to be compared
   * @returns Whether the parametric value `x` is less than `y` or not
   * 
   * @author Jeongho Nam - https://github.com/samchon
   */
  export function less<T>(x: unknown, y: unknown): boolean;

  /**
   * @internal
   */
  export function less(): never {
    NoTransformConfigurationError("compare.less");
  }
}