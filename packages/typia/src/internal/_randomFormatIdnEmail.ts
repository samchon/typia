import { _randomString } from "./_randomString";
import { _ILengthProps, _randomSegmentLength } from "./_randomStringLength";

/**
 * Generate an internationalized email address at a length the bounds allow.
 *
 * Samples the ASCII subset with lowercase local/domain labels. Constrained
 * draws reserve five characters around a nonempty local part, so this shape
 * requires at least six characters and throws when the bounds exclude it.
 * Length bounds count code points; all emitted characters are ASCII.
 *
 * @evidence contracts/common.md#principled-implementation The shape mirrors the plain email generator but reserves a two-character top-level label, which the internationalized checker requires, so a constrained draw is accepted by its own validator.
 * @evidence contracts/common.md#clear-and-simple-design One function over the segment-length helper.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The overhead is the checker's.
 * @evidence contracts/common.md#meaningful-documentation Native prose identifies the sampled ASCII subset, the shortest constrained shape, code-point bounds and failure; the inline comment explains the two-character trailing label.
 */
export const _randomFormatIdnEmail = (props?: _ILengthProps): string => {
  if (props?.minLength === undefined && props?.maxLength === undefined)
    return `${random(10)}@${random(10)}.${random(3)}`;
  // `_isFormatIdnEmail` requires a >=2-char TLD (`(…\.)+[^…]{2,}`), so the fixed
  // overhead is `@` + domain(1) + `.` + tld(2) = 5 and the local part absorbs the
  // requested length; a one-character TLD (the non-idn generator's length path)
  // would be rejected by the idn checker on every draw.
  return `${_randomSegmentLength(props, 5, 10, 1)}@${random(1)}.${random(2)}`;
};

const random = (length: number) =>
  _randomString({
    type: "string",
    minLength: length,
    maxLength: length,
  });
