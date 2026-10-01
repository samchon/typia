/**
 * Test whether a number is an integer in the signed 16-bit range.
 *
 * @evidence contracts/common.md#principled-implementation An integer in the signed 16-bit range: it equals its floor, which excludes fractions and NaN, and lies between the bounds.
 * @evidence contracts/common.md#clear-and-simple-design One expression and two constants.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The bounds are the type's.
 * @evidence contracts/common.md#meaningful-documentation A comment states the range.
 */
export const _isTypeInt16 = (value: number): boolean =>
  Math.floor(value) === value && MINIMUM <= value && value <= MAXIMUM;

const MINIMUM = -32768;
const MAXIMUM = 32767;
