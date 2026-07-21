import { _randomInteger } from "./_randomInteger";
import { _randomString } from "./_randomString";
import {
  _ILengthProps,
  _randomLengthPick,
  _randomLengthWindow,
} from "./_randomStringLength";
import { __randomNumeric } from "./private/__randomComposition";

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
