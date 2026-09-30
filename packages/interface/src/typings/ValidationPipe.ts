/**
 * Discriminated union for validation results.
 *
 * `ValidationPipe<T, E>` represents either a successful validation with data of
 * type `T`, or a failed validation with an array of errors of type `E`. Use the
 * `success` discriminant to narrow the type.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @template T Success data type
 * @template E Error type
 *
 * @evidence contracts/common.md#principled-implementation Literal true and false discriminants separate successful T data from E-array failure details, so TypeScript narrowing permits only the payload for the selected outcome.
 * @evidence contracts/common.md#clear-and-simple-design Two inline variants contain only their outcome and payload; shared generic parameters let validation consumers reuse the shape without coupling it to a particular error implementation.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The union represents both outcomes explicitly instead of asserting all results are successful or hiding failure information in an optional field.
 * @evidence contracts/common.md#meaningful-documentation The type comment explains success-based narrowing and both generic payload roles; each variant's members document its discriminant and available data or errors.
 */
export type ValidationPipe<T, E> =
  | {
      /** Selects the successful variant and makes data available. */
      success: true;

      /** Validated value for the successful outcome. */
      data: T;
    }
  | {
      /** Selects the failed variant and makes errors available. */
      success: false;

      /** Failure details using the validator's chosen error representation. */
      errors: E[];
    };
