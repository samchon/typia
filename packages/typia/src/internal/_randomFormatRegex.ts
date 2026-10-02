import { _randomString } from "./_randomString";
import {
  _ILengthProps,
  _randomLengthPick,
  _randomLengthWindow,
} from "./_randomStringLength";

/**
 * Generate a regular expression source of literal characters.
 *
 * @evidence contracts/common.md#principled-implementation Every character the string generator emits is a literal in regular expression syntax, so a string of any length, including the empty one, compiles; an unconstrained draw is a plain random string and a constrained one fixes the length first.
 * @evidence contracts/common.md#clear-and-simple-design One function.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The argument is reasoned from the alphabet.
 * @evidence contracts/common.md#meaningful-documentation An inline comment explains the literal alphabet.
 */
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
