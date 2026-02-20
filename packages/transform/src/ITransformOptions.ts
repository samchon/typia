/**
 * Configuration options for typia transformer.
 *
 * Controls validation behavior for numbers, functions, and undefined values.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface ITransformOptions {
  /**
   * Validate that numbers are finite (not NaN/Infinity).
   *
   * When `true`, validates numbers using `Number.isNaN()`.
   * Ignored during marshaling (always true) and parsing (always false).
   *
   * @default false
   */
  finite?: undefined | boolean;

  /**
   * Validate that numbers are numeric (not NaN).
   *
   * When `true`, validates numbers using `Number.isFinite()`.
   * Ignored if `finite` is true, during marshaling (always true),
   * or during parsing (always false).
   *
   * @default false
   */
  numeric?: undefined | boolean;

  /**
   * Validate function types.
   *
   * When `true`, validates that function-typed values are actual functions.
   * Always `false` during marshaling or parsing.
   *
   * @default false
   */
  functional?: undefined | boolean;

  /**
   * Allow undefined values in superfluous properties.
   *
   * Controls whether `undefined` assigned to extra properties is allowed
   * during equality checks. Only affects {@link equals}; other functions
   * like {@link assertEquals} always allow undefined.
   *
   * @default true
   */
  undefined?: undefined | boolean;
}
