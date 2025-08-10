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
   *
   * @default false
   */
  finite?: undefined | boolean;

  /**
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
   *
   * @default false
   */
  numeric?: undefined | boolean;

  /**
   * Whether to validate functional type or not.
   *
   * However, whatever you configure, it becomes false when marshaling or
   * parsing.
   *
   * @default false
   */
  functional?: undefined | boolean;

  /**
   * Whether to check undefined value or not.
   *
   * JavaScript can assign `undefined` value to a specific property and it is an
   * issue when validating without allowing superfluous properties. Should
   * undefined value assigned superfluous property be allowed or not?
   *
   * Note that, this option only works on {@link equals} function. Other function
   * like {@link assertEquals} or {@link validateEquals} would ignore this option
   * value and always allow the `undefined` value.
   *
   * @default true
   */
  undefined?: undefined | boolean;
}
