import { _randomInteger } from "./_randomInteger";

export const _randomFormatDuration = (): string => {
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
};
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
