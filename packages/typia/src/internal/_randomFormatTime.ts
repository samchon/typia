import { _randomInteger } from "./_randomInteger";
import {
  _ILengthProps,
  _RANDOM_LENGTH_ERROR,
  _randomLengthPick,
  _randomLengthWindow,
} from "./_randomStringLength";
import { __randomDigits } from "./private/__randomComposition";

export const _randomFormatTime = (props?: _ILengthProps): string => {
  const clock = (): string =>
    new Date(
      _randomInteger({ type: "integer", minimum: 0, maximum: DAY }),
    ).toISOString();
  if (props?.minLength === undefined && props?.maxLength === undefined)
    return clock().substring(11);
  // `HH:MM:SS` carries a mandatory offset — one character as `Z`, six as
  // `+HH:MM` — and an optional fraction of one to nine digits between them.
  // Together they express 9 and every length from 11 through 24; 10 is the one
  // gap, because a fraction needs both a dot and a digit.
  const window = _randomLengthWindow(props, {
    minimum: CLOCK + 1,
    maximum: CLOCK + 1 + FRACTION_MAX + OFFSET,
    spread: 6,
  });
  let length: number = _randomLengthPick(window);
  if (length === CLOCK + 2)
    length = window.high >= CLOCK + 3 ? CLOCK + 3 : CLOCK + 1;
  if (length < window.low || length > window.high)
    throw new Error(_RANDOM_LENGTH_ERROR);
  const base: string = clock().substring(11, 11 + CLOCK);
  if (length === CLOCK + 1) return `${base}Z`;
  // Nine fraction digits cap the `Z` form at 19 characters, so anything longer
  // spends the extra five on a numeric offset instead.
  return length <= CLOCK + 2 + FRACTION_MAX
    ? `${base}.${__randomDigits(length - CLOCK - 2)}Z`
    : `${base}.${__randomDigits(length - CLOCK - 1 - OFFSET)}${offset()}`;
};

const DAY = 86_400_000;
const CLOCK = "00:00:00".length;
const OFFSET = "+00:00".length;
const FRACTION_MAX = 9;

const offset = (): string =>
  `${_randomInteger({ type: "integer", minimum: 0, maximum: 1 }) === 0 ? "+" : "-"}${pad(
    _randomInteger({ type: "integer", minimum: 0, maximum: 23 }),
  )}:${pad(_randomInteger({ type: "integer", minimum: 0, maximum: 59 }))}`;

const pad = (value: number): string => String(value).padStart(2, "0");
