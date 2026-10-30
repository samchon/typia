/**
 * Test whether a string has at least the given number of code points.
 *
 * Twice the requested minimum in UTF-16 units guarantees enough code points.
 * Other inputs are counted only until the minimum is reached.
 *
 * @evidence contracts/common.md#principled-implementation Each code point occupies at most two UTF-16 units, so code-unit length at least twice the minimum proves the code-point bound. Otherwise iteration stops at the minimum; nonpositive minima remain true and NaN remains false.
 * @evidence contracts/common.md#clear-and-simple-design One loop with an early return.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The unit is code points.
 * @evidence contracts/common.md#meaningful-documentation The doc states the early return and the code point unit.
 * @evidence contracts/performance.md#efficient-algorithms The code-unit lower bound accepts in constant time without allocating an iterator; ambiguous inputs retain the bounded code-point walk and constant auxiliary space.
 * @evidenceExclude contracts/performance.md#reuse-equivalent-work Each call depends on its own primitive string and bound; this predicate coordinates no repeated requests or shared computation.
 * @evidenceExclude contracts/performance.md#bound-retention-and-release-resources The predicate retains no state or handles after returning; iteration and scalar counters are call-local.
 */
export const _stringLengthGte = (value: string, length: number): boolean => {
  if (value.length >= length * 2) return true;
  let count: number = 0;
  if (length <= count) return true;
  for (const _ch of value) if (length <= ++count) return true;
  return false;
};
