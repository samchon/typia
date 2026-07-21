import { _randomFormatIpv4 } from "./_randomFormatIpv4";
import { _randomInteger } from "./_randomInteger";
import {
  _ILengthProps,
  _randomLengthPick,
  _randomLengthWindow,
} from "./_randomStringLength";
import { __randomComposition } from "./private/__randomComposition";

export const _randomFormatIpv6 = (props?: _ILengthProps): string => {
  if (props?.minLength === undefined && props?.maxLength === undefined)
    return new Array(GROUPS).fill(0).map(random).join(":");
  const length: number = _randomLengthPick(
    _randomLengthWindow(props, {
      minimum: SHORTEST,
      maximum: LONGEST,
      spread: 12,
    }),
  );
  // `::` alone is the all-zero address, and the three forms below cover every
  // length between it and the padded IPv4-suffixed address: a compressed prefix
  // for the short ones, eight groups of one to four hexadecimal digits for the
  // middle, and six groups plus a dotted-quad tail for the long ones.
  if (length === SHORTEST) return "::";
  if (length < GROUPS * DIGITS_MIN + COLONS) {
    // `::` plus `count` groups spends one colon between each pair.
    const count: number = Math.ceil((length - 1) / (DIGITS_MAX + 1));
    return `::${compose(length - 1 - count, count)}`;
  }
  if (length <= GROUPS * DIGITS_MAX + COLONS)
    return compose(length - COLONS, GROUPS);
  // The dotted-quad tail is drawn at its longest so the six leading groups keep
  // a composable number of digits.
  const tail: string = _randomFormatIpv4({
    minLength: IPV4_MAX,
    maxLength: IPV4_MAX,
  });
  return `${compose(length - IPV4_MAX - EMBEDDED, EMBEDDED)}:${tail}`;
};

const GROUPS = 8;
const COLONS = GROUPS - 1;
const DIGITS_MIN = 1;
const DIGITS_MAX = 4;
const EMBEDDED = 6; // groups preceding a dotted-quad tail
const IPV4_MAX = "255.255.255.255".length;
const SHORTEST = "::".length;
const LONGEST = EMBEDDED * DIGITS_MAX + EMBEDDED + IPV4_MAX;

const compose = (digits: number, count: number): string =>
  __randomComposition({
    total: digits,
    count,
    minimum: DIGITS_MIN,
    maximum: DIGITS_MAX,
  })
    .map(group)
    .join(":");

const random = () =>
  _randomInteger({
    type: "integer",
    minimum: 0,
    maximum: 65_535,
  }).toString(16);

const group = (digits: number): string => {
  let text: string = "";
  for (let i: number = 0; i < digits; ++i)
    text += _randomInteger({
      type: "integer",
      minimum: 0,
      maximum: 15,
    }).toString(16);
  return text;
};
