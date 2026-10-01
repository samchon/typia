/**
 * Test whether a number is an integer in the unsigned 32-bit range.
 *
 * @evidence contracts/common.md#principled-implementation An integer in the unsigned 32-bit range, tested by equality with its floor and the two bounds.
 * @evidence contracts/common.md#clear-and-simple-design One expression and two constants.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The bounds are the type's.
 * @evidence contracts/common.md#meaningful-documentation A comment states the range.
 */
export const _isTypeUint32 = (value: number): boolean =>
  Math.floor(value) === value && MINIMUM <= value && value <= MAXIMUM;

const MINIMUM = 0;
const MAXIMUM = 2 ** 32 - 1;
