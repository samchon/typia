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
 * @template T The expected type after successful parsing
 */
export type IJsonParseResult<T = unknown> =
  | IJsonParseResult.ISuccess<T>
  | IJsonParseResult.IFailure<T>;

export namespace IJsonParseResult {
  /**
   * Successful parsing result.
   *
   * Indicates the JSON was parsed without any errors. The data may still have
   * been recovered from non-standard syntax (e.g., unquoted keys, trailing
   * commas), but no information was lost.
   *
   * @template T The parsed type
   */
  export interface ISuccess<T = unknown> {
    /**
     * Success discriminator.
     *
     * Always `true` for successful parsing.
     */
    success: true;

    /** The parsed data with correct type. */
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
    data: DeepPartial<T>;

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
    value: unknown;
  }
}
