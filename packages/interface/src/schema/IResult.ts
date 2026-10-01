/**
 * Result type for operations that can either succeed or fail.
 *
 * `IResult` is a discriminated union representing the outcome of an operation
 * that may fail. This pattern (often called "Result" or "Either" monad) enables
 * explicit error handling without exceptions.
 *
 * Check the {@link IResult.success | success} discriminator to determine the
 * outcome:
 *
 * - `true` → {@link IResult.ISuccess} with the result in
 *   {@link IResult.ISuccess.value | value}
 * - `false` → {@link IResult.IFailure} with the error in
 *   {@link IResult.IFailure.error | error}
 *
 * This pattern is used throughout typia for safe operations like parsing and
 * transformation where errors are expected possibilities.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @example
 *   const result: IResult<User, ParseError> = parseUser(json);
 *   if (result.success) {
 *     console.log(result.value.name);
 *   } else {
 *     console.error(result.error.message);
 *   }
 *
 * @template T Type of the success value
 * @template E Type of the error value
 *
 * @evidence contracts/common.md#principled-implementation A union of a success variant carrying the value and a failure variant carrying the error, discriminated by the boolean literal `success`, which is the standard Result representation where narrowing on one field selects the payload.
 * @evidence contracts/common.md#clear-and-simple-design One alias with the two variants in the namespace.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It makes the failure explicit in the type and nothing is thrown or hidden.
 * @evidence contracts/common.md#meaningful-documentation The comment explains the discriminator and gives a usage example.
 */
export type IResult<T, E> = IResult.ISuccess<T> | IResult.IFailure<E>;
export namespace IResult {
  /**
   * Successful result variant.
   *
   * Indicates the operation completed successfully and contains the result
   * value. Access via {@link value} after checking {@link success} is `true`.
   *
   * @template T Type of the success value
   *
   * @evidence contracts/common.md#principled-implementation The literal `success: true` and the value field define the success variant; the value type is the generic T.
   * @evidence contracts/common.md#clear-and-simple-design Two fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A plain data record.
   * @evidence contracts/common.md#meaningful-documentation The comment and field comments describe narrowing before reading the value.
   */
  export interface ISuccess<T> {
    /**
     * Success discriminator.
     *
     * Always `true` for successful results. Use this to narrow the type before
     * accessing {@link value}.
     */
    success: true;

    /**
     * The successful result value.
     *
     * Contains the operation's output. Only accessible when {@link success} is
     * `true`.
     */
    value: T;
  }

  /**
   * Failed result variant.
   *
   * Indicates the operation failed and contains error information. Access via
   * {@link error} after checking {@link success} is `false`.
   *
   * @template E Type of the error value
   *
   * @evidence contracts/common.md#principled-implementation The literal `success: false` and the error field define the failure variant with a separate error type E.
   * @evidence contracts/common.md#clear-and-simple-design Two fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A plain data record.
   * @evidence contracts/common.md#meaningful-documentation The comment and field comments describe narrowing before reading the error.
   */
  export interface IFailure<E> {
    /**
     * Success discriminator.
     *
     * Always `false` for failed results. Use this to narrow the type before
     * accessing {@link error}.
     */
    success: false;

    /**
     * The error information.
     *
     * Contains details about why the operation failed. Only accessible when
     * {@link success} is `false`.
     */
    error: E;
  }
}
