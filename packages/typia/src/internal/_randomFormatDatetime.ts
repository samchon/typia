import {
  _ILengthProps,
  _RANDOM_LENGTH_ERROR,
  _randomLengthPick,
  _randomLengthWindow,
} from "./_randomStringLength";
import { __randomDigits } from "./private/__randomComposition";
import { __IEpochProps, __randomEpoch } from "./private/__randomEpoch";

/**
 * Generate an RFC 3339 date-time with a `Z` offset at a length the bounds
 * allow.
 *
 * @evidence contracts/common.md#principled-implementation An unconstrained draw is a random instant in ISO text; a constrained one keeps the second-precision prefix and chooses either a `Z` suffix or a fraction of the digits needed, avoiding the one length that no instant can have, 21 characters, and throwing when the window holds no valid length.
 * @evidence contracts/common.md#clear-and-simple-design One function over the length window and digit helpers.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The length rules are those of RFC 3339 timestamps with a `Z` offset.
 * @evidence contracts/common.md#meaningful-documentation The inline comments explain the length arithmetic.
 */
export const _randomFormatDatetime = (
  props?: __IEpochProps & _ILengthProps,
) => {
  const instant = (): string => new Date(__randomEpoch(props)).toISOString();
  if (props?.minLength === undefined && props?.maxLength === undefined)
    return instant();
  // `YYYY-MM-DDTHH:MM:SS` plus `Z` is the shortest instant, and a fractional
  // second grows it one digit at a time. Because that fraction needs both a dot
  // and at least one digit, 21 is the single length between the two forms that
  // no instant can have.
  const window = _randomLengthWindow(props, {
    minimum: SECONDS + 1,
    spread: 8,
  });
  let length: number = _randomLengthPick(window);
  if (length === SECONDS + 2)
    length = window.high >= SECONDS + 3 ? SECONDS + 3 : SECONDS + 1;
  if (length < window.low || length > window.high)
    throw new Error(_RANDOM_LENGTH_ERROR);
  const base: string = instant().substring(0, SECONDS);
  return length === SECONDS + 1
    ? `${base}Z`
    : `${base}.${__randomDigits(length - SECONDS - 2)}Z`;
};

const SECONDS = "0000-00-00T00:00:00".length;
