<<<<<<< HEAD
export interface ITransformOptions {
  /**
   * Whether to validate finite number or not.
   *
   * If configured true, number typed values would be validated by
   * Number.isNaN().
   *
   * However, whatever you configure, it would be ignored when marshaling or
   * parsing.
   *
   * - When marshaling, always be true
   *
   *   - AssertStringify()
   *   - ValidateEncode()
   * - When parsing, always be false
   *
   *   - AssertParse()
   *   - IsDecode()
=======
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
   * When `true`, validates numbers using `Number.isNaN()`. Ignored during
   * marshaling (always true) and parsing (always false).
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
   *
   * @default false
   */
  finite?: undefined | boolean;

  /**
<<<<<<< HEAD
   * Whether to validate finite number or not.
   *
   * If configured true, number typed values would be validated by
   * Number.isFinite().
   *
   * However, whatever you configure, it can be ignored in below case.
   *
   * - When `finite` option is true, this option would be ignored
   * - When marshaling, always be true
   *
   *   - AssertStringify()
   *   - ValidateEncode()
   * - When parsing, always be false
   *
   *   - AssertParse()
   *   - IsDecode()
=======
   * Validate that numbers are numeric (not NaN).
   *
   * When `true`, validates numbers using `Number.isFinite()`. Ignored if
   * `finite` is true, during marshaling (always true), or during parsing
   * (always false).
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
   *
   * @default false
   */
  numeric?: undefined | boolean;

  /**
<<<<<<< HEAD
   * Whether to validate functional type or not.
   *
   * However, whatever you configure, it becomes false when marshaling or
   * parsing.
=======
   * Validate function types.
   *
   * When `true`, validates that function-typed values are actual functions.
   * Always `false` during marshaling or parsing.
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
   *
   * @default false
   */
  functional?: undefined | boolean;

  /**
<<<<<<< HEAD
   * Whether to check undefined value or not.
   *
   * JavaScript can assign `undefined` value to a specific property and it is an
   * issue when validating without allowing superfluous properties. Should
   * undefined value assigned superfluous property be allowed or not?
   *
   * Note that, this option only works on {@link equals} function. Other function
   * like {@link assertEquals} or {@link validateEquals} would ignore this option
   * value and always allow the `undefined` value.
=======
   * Allow undefined values in superfluous properties.
   *
   * Controls whether `undefined` assigned to extra properties is allowed during
   * equality checks. Only affects {@link equals}; other functions like
   * {@link assertEquals} always allow undefined.
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
   *
   * @default true
   */
  undefined?: undefined | boolean;
}
