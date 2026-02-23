/**
<<<<<<< HEAD
 * Result of an operation that can either succeed or fail.
 *
 * `IResult` is an union type that represents the result of an operation that
 * can either succeed or fail.
 *
 * You can distinguished the result by checking the {@link IResult.success}
 * value, and if it's `true`, the success value is stored in
 * {@link IResult.value}. Otherwise, if it's `false`, the error value is stored
 * in {@link IResult.error}.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Type of the success value.
 * @template E Type of the error value.
 */
export type IResult<T, E> = IResult.ISuccess<T> | IResult.IFailure<E>;
export namespace IResult {
  /** Success type of {@link IResult}. */
  export interface ISuccess<T> {
    /** Success flag. */
    success: true;

    /** Success value. */
    value: T;
  }

  /** Failure type of {@link IResult}. */
  export interface IFailure<E> {
    /** Success flag. */
    success: false;

    /** The error value. */
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
    error: E;
  }
}
