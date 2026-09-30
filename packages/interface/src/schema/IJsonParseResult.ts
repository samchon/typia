import { DeepPartial } from "../typings/DeepPartial";

/**
 * Result of lenient JSON parsing.
 *
 * `IJsonParseResult<T>` represents the result of parsing JSON that may be
 * incomplete, malformed, or contain non-standard syntax (e.g., unquoted keys,
 * trailing commas, missing quotes).
 *
 * Unlike standard JSON parsing which fails on any syntax error, lenient parsing
 * attempts to recover as much data as possible while reporting issues.
 *
 * Check the {@link IJsonParseResult.success} discriminator:
 *
 * - `true` → {@link IJsonParseResult.ISuccess} with parsed
 *   {@link IJsonParseResult.ISuccess.data}
 * - `false` → {@link IJsonParseResult.IFailure} with partial
 *   {@link IJsonParseResult.IFailure.data} and
 *   {@link IJsonParseResult.IFailure.errors}
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @template T The expected static interpretation; parsing does not validate it
 *
 * @evidence contracts/common.md#principled-implementation The literal success discriminator selects either complete expected data or optional DeepPartial data with original-input diagnostics. T describes the caller expectation; neither this union nor parsing establishes runtime type validity.
 * @evidence contracts/common.md#clear-and-simple-design The namespace groups success, failure and diagnostic records beneath the result union, so callers narrow once and obtain the fields available in that state.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts This structural union describes parser outcomes without casting an unsuccessful state into success or hiding original-input diagnostics.
 * @evidence contracts/common.md#meaningful-documentation The native prose explains narrowing, recoverable syntax and unchecked generic expectations; member comments describe partial data, original input and diagnostic meanings.
 */
export type IJsonParseResult<T = unknown> =
  | IJsonParseResult.ISuccess<T>
  | IJsonParseResult.IFailure<T>;

export namespace IJsonParseResult {
  /**
   * Successful parsing result.
   *
   * Indicates the parser reported no errors. The data may have been recovered
   * from accepted non-standard syntax. This state does not validate the data
   * against the caller's generic type.
   *
   * @template T The parsed type
   *
   * @evidence contracts/common.md#principled-implementation success is the literal true and data carries T, representing the parser no-diagnostic state. T remains the requested static interpretation rather than evidence of schema validation.
   * @evidence contracts/common.md#clear-and-simple-design One discriminator and one data field provide the successful alternative; failure-only input and diagnostic fields remain on IFailure.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The representation adds no runtime acceptance mechanism or assertion that a generic type validates recovered data.
   * @evidence contracts/common.md#meaningful-documentation The comment distinguishes a parser that reported no errors from runtime type validation and explains that permissive recovery can still yield this state.
   */
  export interface ISuccess<T = unknown> {
    /**
     * Success discriminator.
     *
     * Always `true` for successful parsing.
     */
    success: true;

    /** Parsed data under the caller's expected static interpretation. */
    data: T;
  }

  /**
   * Failed parsing result with partial data and errors.
   *
   * Indicates the JSON had syntax errors that could not be fully recovered. The
   * {@link data} contains whatever could be parsed, and {@link errors} describes
   * what went wrong.
   *
   * @template T The expected type (data may be partial)
   *
   * @evidence contracts/common.md#principled-implementation The false discriminator associates optional DeepPartial<T> recovery with the original input and an array of structured errors, allowing both partial and absent recovered values.
   * @evidence contracts/common.md#clear-and-simple-design Recovery, input provenance and diagnostics remain together in the failed alternative so consumers do not infer missing information from the successful type.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Partial data is not promoted to complete T; the interface retains diagnostics rather than suppressing the parser failure.
   * @evidence contracts/common.md#meaningful-documentation Native comments describe partial or absent data, original-input provenance and the purposes of the error array, with separated property documentation.
   */
  export interface IFailure<T = unknown> {
    /**
     * Success discriminator.
     *
     * Always `false` for failed parsing.
     */
    success: false;

    /**
     * Partially parsed data.
     *
     * Contains whatever could be recovered from the malformed JSON. May be
     * incomplete or have missing properties.
     */
    data: DeepPartial<T> | undefined;

    /**
     * The original input string that was parsed.
     *
     * Preserved for debugging or error correction purposes.
     */
    input: string;

    /**
     * Array of parsing errors encountered.
     *
     * Each error describes a specific issue found during parsing, with location
     * and suggested fix.
     */
    errors: IError[];
  }

  /**
   * Detailed information about a parsing error.
   *
   * @evidence contracts/common.md#principled-implementation A path locates the parse issue, expected names the syntax requirement and an unknown description permits the parser diagnostic payload without claiming every producer returns the same message type.
   * @evidence contracts/common.md#clear-and-simple-design The diagnostic record separates location, expected syntax and explanation; the result failure owns the collection and original text.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts This plain record does not synthesize a parse result or reinterpret a diagnostic payload as a validated application value.
   * @evidence contracts/common.md#meaningful-documentation Each field explains its diagnostic role and supplies path or syntax examples; the description retains its declared unknown payload rather than promising a string.
   */
  export interface IError {
    /**
     * Property path to the error location.
     *
     * A dot-notation path from the root to the error location. Uses `$input` as
     * the root.
     *
     * @example
     *   $input.user.email;
     *
     * @example
     *   $input.items[0].price;
     */
    path: string;

    /**
     * What was expected at this location.
     *
     * @example
     *   JSON value (string, number, boolean, null, object, or array)
     *
     * @example
     *   quoted string
     *
     * @example
     *   ":";
     */
    expected: string;

    /**
     * Description of what was actually found.
     *
     * Human/AI-readable message explaining the issue.
     *
     * @example
     *   unquoted string 'abc' - did you forget quotes?
     *
     * @example
     *   missing opening quote for 'hello'
     */
    description: unknown;
  }
}
