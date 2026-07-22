import { _randomString } from "./_randomString";
import {
  _ILengthProps,
  _randomLengthPick,
  _randomLengthWindow,
} from "./_randomStringLength";

export const _randomFormatRegex = (props?: _ILengthProps): string => {
  // Every character `_randomString` emits is a literal in regular expression
  // syntax, so a source of any length — including the empty source `new
  // RegExp("")` accepts — compiles. An unconstrained draw is therefore an
  // unconstrained string, and a constrained one fixes the length first.
  if (props?.minLength === undefined && props?.maxLength === undefined)
    return _randomString({ type: "string" });
  const length: number = _randomLengthPick(
    _randomLengthWindow(props, { minimum: 0, spread: 16 }),
  );
  return _randomString({
    type: "string",
    minLength: length,
    maxLength: length,
  });
};
