import { _randomString } from "./_randomString";
import {
  _ILengthProps,
  _RANDOM_LENGTH_ERROR,
  _randomLengthPick,
  _randomLengthWindow,
} from "./_randomStringLength";

export const _randomFormatByte = (props?: _ILengthProps): string => {
  if (props?.minLength === undefined && props?.maxLength === undefined)
    return FIXED;
  // Base64 encodes three bytes as four characters, so a valid length is always
  // a multiple of four; the window is raised to the first multiple it contains
  // and the draw steps by four from there. Every character `_randomString`
  // emits is in the base64 alphabet, so the result needs no padding.
  const window = _randomLengthWindow(props, { minimum: 0, spread: 16 });
  const low: number = Math.ceil(window.low / 4) * 4;
  if (low > window.high) throw new Error(_RANDOM_LENGTH_ERROR);
  const length: number =
    low +
    4 *
      _randomLengthPick({
        low: 0,
        high: Math.floor((window.high - low) / 4),
      });
  return _randomString({
    type: "string",
    minLength: length,
    maxLength: length,
  });
};

const FIXED = "vt7ekz4lIoNTTS9sDQYdWKharxIFAR54+z/umIxSgUM=";
