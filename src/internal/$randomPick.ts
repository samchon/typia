import { $randomInteger } from "./$randomInteger";

export const $randomPick = <T>(array: T[]): T => array[random(array)]!;
const random = <T>(array: T[]) =>
  $randomInteger({
    minimum: 0,
    maximum: array.length - 1,
  });
