/**
 * Test whether a string has at most the given number of code points.
 *
 * UTF-16 length decides inputs whose code units already fit the bound. Other
 * inputs are counted only until the maximum is exceeded.
 *
 * @evidence contracts/common.md#principled-implementation Each code point occupies one or two UTF-16 units, so code-unit length at most the maximum proves the code-point bound. Otherwise iteration stops once the maximum is exceeded; negative and NaN maxima remain false.
 * @evidence contracts/common.md#clear-and-simple-design One loop with an early return.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The unit is code points.
 * @evidence contracts/common.md#meaningful-documentation The doc states the early return and the code point unit.
 * @evidence contracts/performance.md#efficient-algorithms The code-unit upper bound accepts in constant time without allocating an iterator; ambiguous inputs retain the bounded code-point walk and constant auxiliary space.
 * @evidenceExclude contracts/performance.md#reuse-equivalent-work Each call depends on its own primitive string and bound; this predicate coordinates no repeated requests or shared computation.
 * @evidenceExclude contracts/performance.md#bound-retention-and-release-resources The predicate retains no state or handles after returning; iteration and scalar counters are call-local.
 */
export const _stringLengthLte = (value: string, length: number): boolean => {
  if (value.length <= length) return true;
  let count: number = 0;
  if (!(count <= length)) return false;
  for (const _ch of value) if (!(++count <= length)) return false;
  return true;
};
