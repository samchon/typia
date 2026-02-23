<<<<<<< HEAD
=======
/**
 * Discriminated union for validation results.
 *
 * `ValidationPipe<T, E>` represents either a successful validation with data of
 * type `T`, or a failed validation with an array of errors of type `E`. Use the
 * `success` discriminant to narrow the type.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template T Success data type
 * @template E Error type
 */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
export type ValidationPipe<T, E> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      errors: E[];
    };
