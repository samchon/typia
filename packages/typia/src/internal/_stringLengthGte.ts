/**
 * Test whether a string has at least the given number of code points.
 *
 * Iteration stops as soon as the count is reached, so a long string is not
 * scanned to its end.
 *
 * @evidence contracts/common.md#principled-implementation The iterator is consumed only until the count reaches the requested minimum, which decides the lower bound without scanning the whole string; a minimum of zero is true at once.
 * @evidence contracts/common.md#clear-and-simple-design One loop with an early return.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The unit is code points.
 * @evidence contracts/common.md#meaningful-documentation The doc states the early return and the code point unit.
 */
export const _stringLengthGte = (value: string, length: number): boolean => {
  let count: number = 0;
  if (length <= count) return true;
  for (const _ch of value) if (length <= ++count) return true;
  return false;
};
