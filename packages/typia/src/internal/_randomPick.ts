import { _randomInteger } from "./_randomInteger";

export const _randomPick = <T>(array: T[]): T => array[random(array)]!;
const random = <T>(array: T[]) =>
  _randomInteger({
    type: "integer",
    minimum: 0,
    maximum: array.length - 1,
  });
