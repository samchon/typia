import { _randomInteger } from "./_randomInteger";

/**
 * Pick one element of an array uniformly.
 *
 * @evidence contracts/common.md#principled-implementation An index is drawn uniformly over the array through the integer generator and the element at that index is returned.
 * @evidence contracts/common.md#clear-and-simple-design One expression with a private index helper.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It uses the shared generator.
 * @evidence contracts/common.md#meaningful-documentation The doc states the uniform pick.
 */
export const _randomPick = <T>(array: T[]): T => array[random(array)]!;
const random = <T>(array: T[]) =>
  _randomInteger({
    type: "integer",
    minimum: 0,
    maximum: array.length - 1,
  });
