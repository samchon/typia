import { _randomString } from "./_randomString";
import {
  _ILengthProps,
  _randomLengthPick,
  _randomLengthWindow,
  _randomSegmentLength,
} from "./_randomStringLength";

/**
 * Generate a JSON pointer at a length the bounds allow.
 *
 * @evidence contracts/common.md#principled-implementation An unconstrained draw is a fixed components prefix followed by a random token; a constrained one lets the token absorb the length, and below the prefix length it produces the empty pointer or a single `/`-token, which are both valid pointers.
 * @evidence contracts/common.md#clear-and-simple-design One function over the segment helpers.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The shapes are the grammar's.
 * @evidence contracts/common.md#meaningful-documentation Inline comments explain the prefix and the short forms.
 */
export const _randomFormatJsonPointer = (props?: _ILengthProps): string => {
  if (props?.minLength === undefined && props?.maxLength === undefined)
    return `${PREFIX}${random()}`;
  // The `/components/schemas/` prefix (20 chars) is fixed; the reference token
  // after it grows or shrinks to hit the requested length.
  if (props.maxLength === undefined || props.maxLength >= PREFIX.length)
    return `${PREFIX}${_randomSegmentLength(props, PREFIX.length, 10, 0)}`;
  // Below that prefix a pointer still exists: the empty pointer addresses the
  // whole document, and one `/`-prefixed token addresses a member of it.
  const length: number = _randomLengthPick(
    _randomLengthWindow(props, { minimum: 0, spread: 6 }),
  );
  return length === 0
    ? ""
    : `/${_randomString({
        type: "string",
        minLength: length - 1,
        maxLength: length - 1,
      })}`;
};

const PREFIX = "/components/schemas/";

const random = () =>
  _randomString({ type: "string", minLength: 10, maxLength: 10 });
