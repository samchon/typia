import { _randomString } from "./_randomString";
import { _ILengthProps } from "./_randomStringLength";

/**
 * Generate a password, which is any string within the bounds.
 *
 * @evidence contracts/common.md#principled-implementation The password format has no grammar, so any string within the bounds is valid; the generator draws a random lowercase string of four to sixteen characters unless a bound is given.
 * @evidence contracts/common.md#clear-and-simple-design One expression over the string generator.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The format is documentation-only.
 * @evidence contracts/common.md#meaningful-documentation The doc states that the password is any string within the bounds.
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
