import { _randomString } from "./_randomString";
import {
  _ILengthProps,
  _randomLengthPick,
  _randomLengthWindow,
} from "./_randomStringLength";

export const _randomFormatRegex = (props?: _ILengthProps): string => {
  if (props?.minLength === undefined && props?.maxLength === undefined)
    return FIXED;
  // Every character `_randomString` emits is a literal in regular expression
  // syntax, so a source of any length — including the empty source `new
  // RegExp("")` accepts — compiles.
  const length: number = _randomLengthPick(
    _randomLengthWindow(props, { minimum: 0, spread: 16 }),
  );
  return _randomString({
    type: "string",
    minLength: length,
    maxLength: length,
  });
};

const FIXED =
  "/^(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)$/";
