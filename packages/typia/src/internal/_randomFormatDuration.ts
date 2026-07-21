import { _randomInteger } from "./_randomInteger";
import {
  _ILengthProps,
  _randomLengthPick,
  _randomLengthWindow,
} from "./_randomStringLength";
import { __randomNumeric } from "./private/__randomComposition";

export const _randomFormatDuration = (props?: _ILengthProps): string => {
  if (props?.minLength === undefined && props?.maxLength === undefined) {
    const period: string = durate([
      ["Y", random(0, 100)],
      ["M", random(0, 12)],
      ["D", random(0, 31)],
    ]);
    const time: string = durate([
      ["H", random(0, 24)],
      ["M", random(0, 60)],
      ["S", random(0, 60)],
    ]);
    if (period.length + time.length === 0) return "PT0S";
    return `P${period}${time.length ? "T" : ""}${time}`;
  }
  // A single designator carries an unbounded digit count, so `P<n>Y` expresses
  // every length from three upward and `P1Y` is the shortest duration there is.
  const length: number = _randomLengthPick(
    _randomLengthWindow(props, { minimum: MINIMUM, spread: 6 }),
  );
  return `P${__randomNumeric(length - MINIMUM + 1)}Y`;
};

const MINIMUM = "P1Y".length;

const durate = (elements: [string, number][]) =>
  elements
    .filter(([_unit, value]) => value !== 0)
    .map(([unit, value]) => `${value}${unit}`)
    .join("");
const random = (minimum: number, maximum: number) =>
  _randomInteger({
    type: "integer",
    minimum,
    maximum,
  });
