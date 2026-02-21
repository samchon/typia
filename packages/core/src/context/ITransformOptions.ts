/**
 * Typia transformer configuration options.
 *
 * Controls validation behavior for numbers, functions, and undefined values.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface ITransformOptions {
  /**
   * Validate that numbers are finite (not NaN/Infinity).
   *
   * When `true`, validates using `Number.isNaN()`. Ignored during marshaling
   * (always true) and parsing (always false).
   *
   * @default false
   */
  finite?: undefined | boolean;

  /**
   * Validate that numbers are numeric (not NaN).
   *
   * When `true`, validates using `Number.isFinite()`. Ignored if `finite` is
   * true, during marshaling (always true), or during parsing (always false).
   *
   * @default false
   */
  numeric?: undefined | boolean;

  /**
   * Validate function types.
   *
   * Always `false` during marshaling or parsing.
   *
   * @default false
   */
  functional?: undefined | boolean;

  /**
   * Allow undefined values in superfluous properties.
   *
   * Only affects {@link equals}; other equality functions always allow
   * undefined.
   *
   * @default true
   */
  undefined?: undefined | boolean;
}
