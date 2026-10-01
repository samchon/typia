/**
 * Test whether a number is within an inclusive range.
 *
 * @evidence contracts/common.md#principled-implementation The inclusive range test `minimum <= value && value <= maximum` is the definition of a closed interval, and NaN fails both comparisons.
 * @evidence contracts/common.md#clear-and-simple-design One expression.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts A general comparison.
 * @evidence contracts/common.md#meaningful-documentation A comment states the inclusive bounds.
 */
export const _isBetween = (value: number, minimum: number, maximum: number) =>
  minimum <= value && value <= maximum;
