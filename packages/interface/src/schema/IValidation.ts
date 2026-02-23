/**
 * Validation result type with detailed error information.
 *
 * `IValidation<T>` is the return type of `typia.validate<T>()` and related
 * validation functions. Unlike `typia.is<T>()` which returns a boolean, or
 * `typia.assert<T>()` which throws exceptions, `typia.validate<T>()` returns
 * this structured result with full error details.
 *
 * Check the {@link IValidation.success | success} discriminator:
 *
 * - `true` → {@link IValidation.ISuccess} with validated
 *   {@link IValidation.ISuccess.data | data}
 * - `false` → {@link IValidation.IFailure} with
 *   {@link IValidation.IFailure.errors | errors} array
 *
 * This is the recommended validation function when you need to report
 * validation errors to users or log them for debugging.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @example
 *   const result = typia.validate<User>(input);
 *   if (result.success) {
 *     return result.data; // User type
 *   } else {
 *     result.errors.forEach((e) => console.log(e.path, e.expected));
 *   }
 *
 * @template T The expected type after successful validation
 */
export type IValidation<T = unknown> =
  | IValidation.ISuccess<T>
  | IValidation.IFailure;

export namespace IValidation {
  /**
   * Successful validation result.
   *
   * Indicates the input matches the expected type. The validated data is
   * available in {@link data} with full type information.
   *
   * @template T The validated type
   */
  export interface ISuccess<T = unknown> {
    /**
     * Success discriminator.
     *
     * Always `true` for successful validations. Use this to narrow the type
     * before accessing {@link data}.
     */
    success: true;

    /**
     * The validated data with correct type.
     *
     * The original input after successful validation. TypeScript will narrow
     * this to type `T` when {@link success} is `true`.
     */
    data: T;
  }

  /**
   * Failed validation result with error details.
   *
   * Indicates the input did not match the expected type. Contains the original
   * data and an array of all validation errors found.
   */
  export interface IFailure {
    /**
     * Success discriminator.
     *
     * Always `false` for failed validations. Use this to narrow the type before
     * accessing {@link errors}.
     */
    success: false;

    /**
     * The original input that failed validation.
     *
     * Preserved as `unknown` type since it didn't match the expected type.
     * Useful for debugging or logging the actual value.
     */
    data: unknown;

    /**
     * Array of validation errors.
     *
     * Contains one entry for each validation failure found. Multiple errors may
     * exist if the input has multiple type mismatches.
     */
    errors: IError[];
  }

  /**
   * Detailed information about a single validation error.
   *
   * Describes exactly what went wrong during validation, including the
   * location, expected type, and actual value.
   */
  export interface IError {
    /**
     * Property path to the error location.
     *
     * A dot-notation path from the root input to the failing property. Uses
     * `$input` as the root. Example: `"$input.user.email"` or
     * `"$input.items[0].price"`.
     */
    path: string;

    /**
     * Expected type expression.
     *
     * A human-readable description of what type was expected at this location.
     * Examples: `"string"`, `"number & ExclusiveMinimum<0>"`, `"(\"active\" |
     * \"inactive\")"`.
     */
    expected: string;

    /**
     * The actual value that failed validation.
     *
     * The value found at the error path. May be `undefined` if the property was
     * missing. Useful for debugging type mismatches.
     */
    value: unknown;

    /**
     * Human-readable error description.
     *
     * Optional additional context about the validation failure, such as
     * constraint violations or custom error messages.
     */
    description?: string;
  }
}
