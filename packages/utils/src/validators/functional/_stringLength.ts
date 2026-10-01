/**
 * Counts the code points yielded by ECMAScript string iteration.
 *
 * A surrogate pair counts once and an unpaired surrogate counts once. This is
 * neither UTF-16 code-unit length nor grapheme-cluster length.
 *
 * @evidence contracts/common.md#principled-implementation For-of uses the language string iterator, so incrementing once per yielded element implements code-point-oriented schema length independently of the UTF-16 units counted by String.length.
 * @evidence contracts/common.md#clear-and-simple-design One counter and one traversal implement the length without a temporary character array or a second Unicode segmentation policy.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Language-defined iteration applies uniformly; no strings, encodings or consumers are patched or special-cased.
 * @evidence contracts/common.md#meaningful-documentation The doc states that it counts code points through string iteration, so a surrogate pair counts once and the result is neither the UTF-16 length nor a grapheme count.
 * @evidence contracts/performance.md#efficient-algorithms A single string-iterator pass counts each yielded code point in O(n) time with constant counting state. Unlike spreading the string, the operation allocates no character array proportional to input length.
 *
 * @evidenceExclude contracts/performance.md#reuse-equivalent-work The count for one string is independent of every other, so there is no computation to share between requests, and caching counts keyed by arbitrary strings would add retention without any validity contract.
 *
 * @evidence contracts/performance.md#bound-retention-and-release-resources The counter is local to the call and the iterator is released when the loop ends; no module state or input string is kept.
 */
export const _stringLength = (value: string): number => {
  let count: number = 0;
  for (const _ch of value) ++count;
  return count;
};
