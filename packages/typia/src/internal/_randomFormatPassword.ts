import { _randomString } from "./_randomString";
import { _ILengthProps } from "./_randomStringLength";

/**
 * Generate a password, which is any string within the bounds.
 *
 * Produces lowercase sample data for the documentation-only password format.
 * This helper uses the platform's Math.random source, without a password
 * strength or cryptographic randomness contract. Inclusive code-point bounds
 * are forwarded to the string generator; the default length is four to 16.
 *
 * @evidence contracts/common.md#principled-implementation The password format has no grammar, so any string within the bounds is valid; the generator draws a random lowercase string of four to sixteen characters unless a bound is given.
 * @evidence contracts/common.md#clear-and-simple-design One expression over the string generator.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The format is documentation-only.
 * @evidence contracts/common.md#meaningful-documentation Native prose states the sample alphabet/default length, forwarded code-point bounds and absence of strength or cryptographic randomness guarantees.
 */
export const _randomFormatPassword = (props?: _ILengthProps): string =>
  _randomString(
    props?.minLength === undefined && props?.maxLength === undefined
      ? { type: "string", minLength: 4, maxLength: 16 }
      : {
          type: "string",
          minLength: props?.minLength,
          maxLength: props?.maxLength,
        },
  );
