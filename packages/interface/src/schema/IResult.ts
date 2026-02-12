/**
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
    error: E;
  }
}
