/**
 * Test whether a string has at most the given number of code points.
 *
 * Iteration stops as soon as the count is exceeded, so a long string is not
 * scanned to its end.
 *
 * @evidence contracts/common.md#principled-implementation The iterator is consumed until the count exceeds the maximum, which decides the upper bound without scanning past it; a negative maximum is false at once.
 * @evidence contracts/common.md#clear-and-simple-design One loop with an early return.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The unit is code points.
 * @evidence contracts/common.md#meaningful-documentation The doc states the early return and the code point unit.
 */
export const _stringLengthLte = (value: string, length: number): boolean => {
  let count: number = 0;
  if (!(count <= length)) return false;
  for (const _ch of value) if (!(++count <= length)) return false;
  return true;
};
