import {
  _ILengthProps,
  _RANDOM_LENGTH_ERROR,
  _randomLengthPick,
  _randomLengthWindow,
} from "./_randomStringLength";
import { __randomDigits } from "./private/__randomComposition";
import { __IEpochProps, __randomEpoch } from "./private/__randomEpoch";

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
