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
  // `+HH:MM` — and an optional fraction between them that RFC 3339 leaves
  // open above. Together they express 9 and every length from 11 upward; 10 is
  // the one gap, because a fraction needs both a dot and a digit.
  const window = _randomLengthWindow(props, {
    minimum: CLOCK + 1,
    spread: 6,
  });
  let length: number = _randomLengthPick(window);
  if (length === CLOCK + 2)
    length = window.high >= CLOCK + 3 ? CLOCK + 3 : CLOCK + 1;
  if (length < window.low || length > window.high)
    throw new Error(_RANDOM_LENGTH_ERROR);
  const base: string = clock().substring(11, 11 + CLOCK);
  if (length === CLOCK + 1) return `${base}Z`;
  // The `Z` form reaches every remaining length by itself, so the numeric
  // offset is a choice rather than a fallback: it spends six characters, which
  // leaves either nothing (14, `HH:MM:SS+HH:MM`) or a whole fraction (16 and
  // up). At 15 only the `Z` form fits, since the offset would demand a dot
  // with no digit after it.
  const fraction: number = length - CLOCK - OFFSET - 1;
  return (fraction === -1 || fraction >= 1) &&
    _randomInteger({ type: "integer", minimum: 0, maximum: 1 }) === 1
    ? fraction === -1
      ? `${base}${offset()}`
      : `${base}.${__randomDigits(fraction)}${offset()}`
    : `${base}.${__randomDigits(length - CLOCK - 2)}Z`;
};

const DAY = 86_400_000;
const CLOCK = "00:00:00".length;
const OFFSET = "+00:00".length;

const offset = (): string =>
  `${_randomInteger({ type: "integer", minimum: 0, maximum: 1 }) === 0 ? "+" : "-"}${pad(
    _randomInteger({ type: "integer", minimum: 0, maximum: 23 }),
  )}:${pad(_randomInteger({ type: "integer", minimum: 0, maximum: 59 }))}`;

const pad = (value: number): string => String(value).padStart(2, "0");
