import { _randomInteger } from "./_randomInteger";
import { _randomString } from "./_randomString";
import {
  _ILengthProps,
  _randomLengthPick,
  _randomLengthWindow,
} from "./_randomStringLength";
import { __randomNumeric } from "./private/__randomComposition";

/**
 * Generate a relative JSON pointer at a length the bounds allow.
 *
 * @evidence contracts/common.md#principled-implementation A relative pointer is a leading integer and then a hash or a token, so a length of one is a digit, two is a digit and a hash and longer ones add a `/` token that absorbs the remainder.
 * @evidence contracts/common.md#clear-and-simple-design One function over the digit and string helpers.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The shapes are the grammar's.
 * @evidence contracts/common.md#meaningful-documentation An inline comment explains the shortest forms.
 */
export const _randomFormatRelativeJsonPointer = (
  props?: _ILengthProps,
): string => {
  if (props?.minLength === undefined && props?.maxLength === undefined)
    return `${_randomInteger({ type: "integer", minimum: 0, maximum: 10 })}#`;
  // The leading non-negative integer stands alone as a pointer, so a single
  // digit is the shortest form; `#` names the key and a `/`-prefixed token names
  // a member, which absorbs any remaining length.
  const length: number = _randomLengthPick(
    _randomLengthWindow(props, { minimum: 1, spread: 6 }),
  );
  if (length === 1) return __randomNumeric(1);
  if (length === 2) return `${__randomNumeric(1)}#`;
  return `${__randomNumeric(1)}/${_randomString({
    type: "string",
    minLength: length - 2,
    maxLength: length - 2,
  })}`;
};
