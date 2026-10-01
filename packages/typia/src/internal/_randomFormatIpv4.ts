import { _randomInteger } from "./_randomInteger";
import {
  _ILengthProps,
  _randomLengthPick,
  _randomLengthWindow,
} from "./_randomStringLength";
import { __randomComposition } from "./private/__randomComposition";

/**
 * Generate an IPv4 address at a length the bounds allow.
 *
 * @evidence contracts/common.md#principled-implementation Four octets of one to three digits give lengths from seven to fifteen, and a requested length is realized by distributing the digit count across the octets within those limits and drawing each octet in the range for its digit count, with 255 as the top of a three-digit octet.
 * @evidence contracts/common.md#clear-and-simple-design One function over the composition helper.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The limits are the dotted quad's.
 * @evidence contracts/common.md#meaningful-documentation Inline comments explain the length range and the octet bounds.
 */
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
