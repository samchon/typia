import { _randomInteger } from "./_randomInteger";
import {
  _ILengthProps,
  _randomLengthPick,
  _randomLengthWindow,
} from "./_randomStringLength";
import { __randomComposition } from "./private/__randomComposition";

export const _randomFormatIpv4 = (props?: _ILengthProps): string => {
  if (props?.minLength === undefined && props?.maxLength === undefined)
    return new Array(4).fill(0).map(random).join(".");
  // Three dots plus four octets of one to three digits: `0.0.0.0` is the
  // shortest address and `255.255.255.255` the longest, and every length
  // between them is reached by choosing how many digits each octet spends.
  const length: number = _randomLengthPick(
    _randomLengthWindow(props, {
      minimum: 4 * DIGITS_MIN + DOTS,
      maximum: 4 * DIGITS_MAX + DOTS,
      spread: 8,
    }),
  );
  return __randomComposition({
    total: length - DOTS,
    count: 4,
    minimum: DIGITS_MIN,
    maximum: DIGITS_MAX,
  })
    .map(octet)
    .join(".");
};

const DOTS = 3;
const DIGITS_MIN = 1;
const DIGITS_MAX = 3;

const random = () =>
  _randomInteger({
    type: "integer",
    minimum: 0,
    maximum: 255,
  });

// An octet is bounded by 255, so a three-digit one starts at 100 and stops
// there rather than at 999.
const octet = (digits: number): string =>
  String(
    _randomInteger({
      type: "integer",
      minimum: digits === 1 ? 0 : Math.pow(10, digits - 1),
      maximum: digits === 3 ? 255 : Math.pow(10, digits) - 1,
    }),
  );
