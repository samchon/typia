import { _randomString } from "./_randomString";
import { _ILengthProps, _randomSegmentLength } from "./_randomStringLength";

/**
 * Generate an email address at a length the bounds allow.
 *
 * @evidence contracts/common.md#principled-implementation An unconstrained draw is a local part, a domain and a top-level label of random letters; a constrained one lets the local part absorb the length beside a fixed `@x.y` shape, and throws when the window is below that shape.
 * @evidence contracts/common.md#clear-and-simple-design One function over the segment-length helper.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The shape is the generator's and its limits are reported.
 * @evidence contracts/common.md#meaningful-documentation An inline comment explains the fixed overhead.
 */
export const _randomFormatEmail = (props?: _ILengthProps): string => {
  if (props?.minLength === undefined && props?.maxLength === undefined)
    return `${random(10)}@${random(10)}.${random(3)}`;
  // `<local>@<domain>.<tld>`: the local part absorbs the requested length while
  // a one-character domain and tld keep the fixed overhead (`@`, `.`) minimal.
  return `${_randomSegmentLength(props, 4, 10, 1)}@${random(1)}.${random(1)}`;
};

const random = (length: number) =>
  _randomString({
    type: "string",
    minLength: length,
    maxLength: length,
  });
