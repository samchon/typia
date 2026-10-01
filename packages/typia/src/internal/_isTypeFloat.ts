/**
 * Test whether a number is within the 32-bit float range; fractions are
 * allowed.
 *
 * @evidence contracts/common.md#principled-implementation A value is a 32-bit float when it is within the single-precision range, which the two bounds express; fractions are allowed and NaN and the infinities fail the comparison. The bound literal is the decimal text of the maximum, so values that only round to it are accepted.
 * @evidence contracts/common.md#clear-and-simple-design One expression and two constants.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The bounds are the format's.
 * @evidence contracts/common.md#meaningful-documentation A comment states the range and that fractions are allowed.
 */
export const _isTypeFloat = (value: number): boolean =>
  MINIMUM <= value && value <= MAXIMUM;

const MINIMUM = -3.4028235e38;
const MAXIMUM = 3.4028235e38;
