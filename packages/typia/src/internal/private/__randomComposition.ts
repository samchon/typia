import { _randomInteger } from "../_randomInteger";

/**
 * Splits `total` into `count` parts, each inside `[minimum, maximum]`.
 *
 * Used where a format's length is the sum of its segments — an IPv4 octet spans
 * one to three digits, an IPv6 group one to four — so a requested total length
 * is realized by choosing how many characters each segment contributes instead
 * of redrawing whole addresses and hoping one lands in the window (issue
 * #2284).
 *
 * The caller guarantees `count * minimum <= total <= count * maximum`; each
 * part is drawn from the range that still leaves the remaining parts
 * satisfiable.
 *
 * @evidence contracts/common.md#principled-implementation A total is split into parts within a range by drawing each part from the interval that still leaves the remaining parts satisfiable, so the caller's guarantee that the total is within `count * minimum` and `count * maximum` yields a valid composition without retrying.
 * @evidence contracts/common.md#clear-and-simple-design One function.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The method is constructive and not a redraw loop.
 * @evidence contracts/common.md#meaningful-documentation The doc states the guarantee and the use for formats.
 */
export const __randomComposition = (props: {
  total: number;
  count: number;
  minimum: number;
  maximum: number;
}): number[] => {
  const parts: number[] = [];
  let remaining: number = props.total;
  for (let i: number = 0; i < props.count; ++i) {
    const rest: number = props.count - i - 1;
    const value: number = _randomInteger({
      type: "integer",
      minimum: Math.max(props.minimum, remaining - rest * props.maximum),
      maximum: Math.min(props.maximum, remaining - rest * props.minimum),
    });
    parts.push(value);
    remaining -= value;
  }
  return parts;
};

/**
 * Draws `length` characters of the base64 alphabet.
 *
 * The caller passes a multiple of four, which `format: "byte"` accepts without
 * padding; every character below is in the alphabet its validator spells out,
 * so the result needs no encoding step.
 *
 * @evidence contracts/common.md#principled-implementation Each character is drawn from the 64-symbol alphabet, which is the alphabet the byte validator accepts, so a multiple-of-four length is valid without an encoder.
 * @evidence contracts/common.md#clear-and-simple-design One loop.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The alphabet is the format's.
 * @evidence contracts/common.md#meaningful-documentation The doc states the multiple-of-four precondition.
 */
export const __randomBase64 = (length: number): string => {
  let text: string = "";
  for (let i: number = 0; i < length; ++i)
    text +=
      BASE64[
        _randomInteger({
          type: "integer",
          minimum: 0,
          maximum: BASE64.length - 1,
        })
      ];
  return text;
};

const BASE64 =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

/**
 * Draws `length` decimal digits, leading zeros included.
 *
 * @evidence contracts/common.md#principled-implementation Each character is a digit from zero to nine, leading zeros included.
 * @evidence contracts/common.md#clear-and-simple-design One loop.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It uses the shared integer generator.
 * @evidence contracts/common.md#meaningful-documentation A one-line doc states the digits.
 */
export const __randomDigits = (length: number): string => {
  let text: string = "";
  for (let i: number = 0; i < length; ++i)
    text += String(_randomInteger({ type: "integer", minimum: 0, maximum: 9 }));
  return text;
};

/**
 * Draws a decimal number of exactly `length` digits without a leading zero.
 *
 * @evidence contracts/common.md#principled-implementation A number of the requested digit count without a leading zero, with one digit allowed to be zero, built from a nonzero first digit and random digits.
 * @evidence contracts/common.md#clear-and-simple-design One expression over the digit helper.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It uses the shared integer generator.
 * @evidence contracts/common.md#meaningful-documentation A one-line doc states the digit count.
 */
export const __randomNumeric = (length: number): string =>
  length <= 1
    ? String(_randomInteger({ type: "integer", minimum: 0, maximum: 9 }))
    : String(_randomInteger({ type: "integer", minimum: 1, maximum: 9 })) +
      __randomDigits(length - 1);
