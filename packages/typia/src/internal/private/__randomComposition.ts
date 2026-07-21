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

/** Draws `length` decimal digits, leading zeros included. */
export const __randomDigits = (length: number): string => {
  let text: string = "";
  for (let i: number = 0; i < length; ++i)
    text += String(_randomInteger({ type: "integer", minimum: 0, maximum: 9 }));
  return text;
};

/** Draws a decimal number of exactly `length` digits without a leading zero. */
export const __randomNumeric = (length: number): string =>
  length <= 1
    ? String(_randomInteger({ type: "integer", minimum: 0, maximum: 9 }))
    : String(_randomInteger({ type: "integer", minimum: 1, maximum: 9 })) +
      __randomDigits(length - 1);
