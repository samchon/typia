/**
 * Counts the code points yielded by ECMAScript string iteration.
 *
 * A surrogate pair counts once and an unpaired surrogate counts once. This is
 * neither UTF-16 code-unit length nor grapheme-cluster length.
 *
 * @evidence contracts/common.md#principled-implementation For-of uses the language string iterator, so incrementing once per yielded element implements code-point-oriented schema length independently of the UTF-16 units counted by String.length.
 * @evidence contracts/common.md#clear-and-simple-design One counter and one traversal implement the length without a temporary character array or a second Unicode segmentation policy.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Language-defined iteration applies uniformly; no strings, encodings or consumers are patched or special-cased.
 * @evidence contracts/common.md#meaningful-documentation Native prose states the accepted representation and its important limits, so callers can distinguish this predicate from a broader policy or conversion. Descriptive prose and review acknowledgments are separated.
 * @evidence contracts/performance.md#efficient-algorithms A single string-iterator pass counts each yielded code point in O(n) time with constant counting state. Unlike spreading the string, the operation allocates no character array proportional to input length.
 *
 * @evidenceExclude contracts/performance.md#reuse-equivalent-work This predicate owns one value decision and coordinates no equivalent request population or completed-result cache. Stable module constants are reused where present; caller request coordination does not belong to this operation.
 *
 * @evidence contracts/performance.md#bound-retention-and-release-resources Module-level constants and predicate references have a fixed population. Per-call counters, captures or Date state remain local and become reclaimable after the verdict; no validated input, request history or handle is retained.
 */
export const _stringLength = (value: string): number => {
  let count: number = 0;
  for (const _ch of value) ++count;
  return count;
};
