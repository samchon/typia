/**
 * Validation result type.
 *
 * `IValidation<T>` is the return type of `typia.validate<T>()`. Returns
 * {@link IValidation.ISuccess} on success, {@link IValidation.IFailure} on
 * failure with detailed error information.
 *
 * @template T Validated type
 * @author Jeongho Nam - https://github.com/samchon
 */
export type IValidation<T = unknown> =
  | IValidation.ISuccess<T>
  | IValidation.IFailure;

export namespace IValidation {
  /** Successful validation result. */
  export interface ISuccess<T = unknown> {
    /** Discriminator (always `true`). */
    success: true;

    /** Validated data. */
    data: T;
  }

  /** Failed validation result. */
  export interface IFailure {
    /** Discriminator (always `false`). */
    success: false;

    /** Original input that failed. */
    data: unknown;

    /** Validation errors. */
    errors: IError[];
  }

  /** Validation error detail. */
  export interface IError {
    /** Property path (e.g., `$input.user.email`). */
    path: string;

    /** Expected type expression. */
    expected: string;

    /** Actual value (can be `undefined`). */
    value: unknown;

    /** Optional human-readable description. */
    description?: string;
  }
}
