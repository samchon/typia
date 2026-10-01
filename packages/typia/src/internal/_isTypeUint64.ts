/**
 * Test whether a number is an integer in the unsigned 64-bit range.
 *
 * The upper bound `2 ** 64 - 1` is not a double, so 2 ** 64 is accepted as its
 * only float form. Use the bigint predicate where the boundary matters.
 *
 * @evidence contracts/common.md#principled-implementation An integer double between 0 and 2^64, where the upper bound literal `2 ** 64 - 1` rounds to 2^64, so the largest accepted value is 2^64, the only float form of the true maximum; the bigint predicate is exact.
 * @evidence contracts/common.md#clear-and-simple-design One expression and two constants.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The rounding is the documented limit of the number form.
 * @evidence contracts/common.md#meaningful-documentation A comment states the range and the rounding of the upper bound.
 */
export const _isTypeUint64 = (value: number): boolean =>
  Math.floor(value) === value && MINIMUM <= value && value <= MAXIMUM;

// The maximum is `2 ** 64 - 1`, the uint64 upper bound.
const MINIMUM = 0;
const MAXIMUM = 2 ** 64 - 1;
