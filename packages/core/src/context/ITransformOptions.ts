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
 * Typia transformer configuration options.
 *
 * `ITransformOptions` controls how typia generates validation code at compile
 * time. These options affect edge cases in type checking such as special
 * numeric values (NaN, Infinity), function properties, and undefined handling.
 *
 * Configure these options in your `tsconfig.json` under the typia plugin:
 *
 * ```json
 * {
 *   "compilerOptions": {
 *     "plugins": [{ "transform": "typia/lib/transform", "finite": true }]
 *   }
 * }
 * ```
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface ITransformOptions {
  /**
   * Validate that numbers are finite (not NaN or Infinity).
   *
   * When `true`, generated validation code includes `Number.isFinite()` checks
   * for all number types. This catches both `NaN` and `Infinity` values that
   * might otherwise pass numeric type checks.
   *
   * Behavior varies by operation context:
   *
   * - **Validation** (`is`, `assert`, `validate`): Follows this setting
   * - **Marshaling** (`stringify`, `encode`): Always `true` (JSON doesn't support
   *   NaN/Infinity)
   * - **Parsing** (`parse`, `decode`): Always `false` (JSON can't produce
   *   NaN/Infinity)
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
   * Validate that numbers are not NaN.
   *
   * When `true`, generated validation code includes `Number.isNaN()` checks for
   * all number types. This is less strict than `finite` - it allows `Infinity`
   * but rejects `NaN`.
   *
   * This option is **ignored** if `finite` is `true` (which already rejects
   * NaN). Same context-dependent behavior as `finite`.
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
   * Validate function-typed properties.
   *
   * When `true`, generated validation code includes `typeof x === "function"`
   * checks for function properties. When `false`, function properties are
   * skipped during validation.
   *
   * Always `false` during marshaling/parsing since functions cannot be
   * serialized to JSON or other formats.
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
   * Allow `undefined` values in extra/superfluous properties.
   *
   * Affects strict equality checking (`equals` functions) behavior when objects
   * have additional properties beyond the type definition.
   *
   * When `true`, extra properties with `undefined` values are tolerated. When
   * `false`, any extra property (even if `undefined`) fails equality.
   *
   * Only affects `equals*` functions; other validation functions always allow
   * `undefined` in extra properties.
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
   *
   * @default true
   */
  undefined?: undefined | boolean;
<<<<<<< HEAD
=======

  /** @internal */
  runtime?: "ts" | "js";
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
}
