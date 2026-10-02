/**
 * Test whether a number is an integer in the signed 8-bit range.
 *
 * @evidence contracts/common.md#principled-implementation An integer in the signed 8-bit range, tested by equality with its floor and the two bounds.
 * @evidence contracts/common.md#clear-and-simple-design One expression and two constants.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The bounds are the type's.
 * @evidence contracts/common.md#meaningful-documentation A comment states the range.
 */
export const _isTypeInt8 = (value: number): boolean =>
  Math.floor(value) === value && MINIMUM <= value && value <= MAXIMUM;

const MINIMUM = -128;
const MAXIMUM = 127;
