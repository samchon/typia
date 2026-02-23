/**
<<<<<<< HEAD
 * Union type representing the result of type validation
 *
 * This is the return type of {@link typia.validate} functions, returning
 * {@link IValidation.ISuccess} on validation success and
 * {@link IValidation.IFailure} on validation failure. When validation fails, it
 * provides detailed, granular error information that precisely describes what
 * went wrong, where it went wrong, and what was expected.
 *
 * This comprehensive error reporting makes `IValidation` particularly valuable
 * for AI function calling scenarios, where Large Language Models (LLMs) need
 * specific feedback to correct their parameter generation. The detailed error
 * information is used by ILlmFunction.validate() to provide validation feedback
 * to AI agents, enabling iterative correction and improvement of function
 * calling accuracy.
 *
 * This type uses the Discriminated Union pattern, allowing type specification
 * through the success property:
 *
 * ```typescript
 * const result = typia.validate<string>(input);
 * if (result.success) {
 *   // IValidation.ISuccess<string> type
 *   console.log(result.data); // validated data accessible
 * } else {
 *   // IValidation.IFailure type
 *   console.log(result.errors); // detailed error information accessible
 * }
 * ```
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T The type to validate
 * @reference Inspired by [typescript-is]()
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export type IValidation<T = unknown> =
  | IValidation.ISuccess<T>
  | IValidation.IFailure;

export namespace IValidation {
  /**
<<<<<<< HEAD
   * Interface returned when type validation succeeds
   *
   * Returned when the input value perfectly conforms to the specified type T.
   * Since success is true, TypeScript's type guard allows safe access to the
   * validated data through the data property.
=======
   * Successful validation result.
   *
   * Indicates the input matches the expected type. The validated data is
   * available in {@link data} with full type information.
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
   *
   * @template T The validated type
   */
  export interface ISuccess<T = unknown> {
<<<<<<< HEAD
    /** Indicates validation success */
    success: true;

    /** The validated data of type T */
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
    data: T;
  }

  /**
<<<<<<< HEAD
   * Interface returned when type validation fails
   *
   * Returned when the input value does not conform to the expected type.
   * Contains comprehensive error information designed to be easily understood
   * by both humans and AI systems. Each error in the errors array provides
   * precise details about validation failures, including the exact path to the
   * problematic property, what type was expected, and what value was actually
   * provided.
   *
   * This detailed error structure is specifically optimized for AI function
   * calling validation feedback. When LLMs make type errors during function
   * calling, these granular error reports enable the AI to understand exactly
   * what went wrong and how to fix it, improving success rates in subsequent
   * attempts.
   *
   * Example error scenarios:
   *
   * - Type mismatch: expected "string" but got number 5
   * - Format violation: expected "string & Format<'uuid'>" but got
   *   "invalid-format"
   * - Missing properties: expected "required property 'name'" but got undefined
   * - Array type errors: expected "Array<string>" but got single string value
   *
   * The errors are used by ILlmFunction.validate() to provide structured
   * feedback to AI agents, enabling them to correct their parameter generation
   * and achieve improved function calling accuracy.
   */
  export interface IFailure {
    /** Indicates validation failure */
    success: false;

    /** The original input data that failed validation */
    data: unknown;

    /** Array of detailed validation errors */
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
    errors: IError[];
  }

  /**
<<<<<<< HEAD
   * Detailed information about a specific validation error
   *
   * Each error provides granular, actionable information about validation
   * failures, designed to be immediately useful for both human developers and
   * AI systems. The error structure follows a consistent format that enables
   * precise identification and correction of type mismatches.
   *
   * This error format is particularly valuable for AI function calling
   * scenarios, where LLMs need to understand exactly what went wrong to
   * generate correct parameters. The combination of path, expected type name,
   * actual value, and optional human-readable description provides the AI with
   * comprehensive context to make accurate corrections, which is why
   * ILlmFunction.validate() can achieve such high success rates in validation
   * feedback loops.
   *
   * The value field can contain any type of data, including `undefined` when
   * dealing with missing required properties or null/undefined validation
   * scenarios. This allows for precise error reporting in cases where the AI
   * agent omits required fields or provides null/undefined values
   * inappropriately.
   *
   * Real-world examples from AI function calling:
   *
   *     {
   *       path: "$input.member.age",
   *       expected: "number",
   *       value: "25"  // AI provided string instead of number
   *     }
   *
   *     {
   *       path: "$input.count",
   *       expected: "number & Type<'uint32'>",
   *       value: 20.75  // AI provided float instead of uint32
   *     }
   *
   *     {
   *       path: "$input.categories",
   *       expected: "Array<string>",
   *       value: "technology"  // AI provided string instead of array
   *     }
   *
   *     {
   *       path: "$input.id",
   *       expected: "string & Format<'uuid'>",
   *       value: "invalid-uuid-format"  // AI provided malformed UUID
   *     }
   *
   *     {
   *       path: "$input.user.name",
   *       expected: "string",
   *       value: undefined  // AI omitted required property
   *     }
   */
  export interface IError {
    /**
     * The path to the property that failed validation
     *
     * Dot-notation path using $input prefix indicating the exact location of
     * the validation failure within the input object structure. Examples
     * include "$input.member.age", "$input.categories[0]",
     * "$input.user.profile.email"
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
     */
    path: string;

    /**
<<<<<<< HEAD
     * The expected type name or type expression
     *
     * Technical type specification that describes what type was expected at
     * this path. This follows TypeScript-like syntax with embedded constraint
     * information, such as "string", "number & Type<'uint32'>",
     * "Array<string>", "string & Format<'uuid'> & MinLength<8>", etc.
=======
     * Expected type expression.
     *
     * A human-readable description of what type was expected at this location.
     * Examples: `"string"`, `"number & ExclusiveMinimum<0>"`, `"(\"active\" |
     * \"inactive\")"`.
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
     */
    expected: string;

    /**
<<<<<<< HEAD
     * The actual value that caused the validation failure
     *
     * This field contains the actual value that was provided but failed
     * validation. Note that this value can be `undefined` in cases where a
     * required property is missing or when validating against undefined
     * values.
=======
     * The actual value that failed validation.
     *
     * The value found at the error path. May be `undefined` if the property was
     * missing. Useful for debugging type mismatches.
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
     */
    value: unknown;

    /**
<<<<<<< HEAD
     * Optional human-readable description of the validation error
     *
     * This field is rarely populated in standard typia validation and is
     * primarily intended for specialized AI agent libraries or custom
     * validation scenarios that require additional context beyond the technical
     * type information. Most validation errors rely solely on the path,
     * expected, and value fields for comprehensive error reporting.
=======
     * Human-readable error description.
     *
     * Optional additional context about the validation failure, such as
     * constraint violations or custom error messages.
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
     */
    description?: string;
  }
}
