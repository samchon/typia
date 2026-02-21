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
   *
   * @default false
   */
  finite?: undefined | boolean;

  /**
   * Validate that numbers are not NaN.
   *
   * When `true`, generated validation code includes `Number.isNaN()` checks for
   * all number types. This is less strict than `finite` - it allows `Infinity`
   * but rejects `NaN`.
   *
   * This option is **ignored** if `finite` is `true` (which already rejects
   * NaN). Same context-dependent behavior as `finite`.
   *
   * @default false
   */
  numeric?: undefined | boolean;

  /**
   * Validate function-typed properties.
   *
   * When `true`, generated validation code includes `typeof x === "function"`
   * checks for function properties. When `false`, function properties are
   * skipped during validation.
   *
   * Always `false` during marshaling/parsing since functions cannot be
   * serialized to JSON or other formats.
   *
   * @default false
   */
  functional?: undefined | boolean;

  /**
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
   *
   * @default true
   */
  undefined?: undefined | boolean;
}
