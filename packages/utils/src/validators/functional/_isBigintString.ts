/**
 * Checks whether ECMAScript BigInt accepts a string without throwing.
 *
 * The accepted spellings follow the runtime conversion, including its
 * whitespace and radix handling; this is not a decimal-only grammar.
 *
 * @evidence contracts/common.md#principled-implementation BigInt conversion determines the actual runtime language. Successful construction returns true and conversion exceptions return false without coercing a different representation.
 * @evidence contracts/common.md#clear-and-simple-design One conversion and its exception boundary own the verdict; no parallel numeric parser or canonicalization policy is introduced.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The runtime conversion is the supported requirement, not a fixture-specific exception. The function changes no conversion implementation or global.
 * @evidence contracts/common.md#meaningful-documentation Native prose states the accepted representation and its important limits, so callers can distinguish this predicate from a broader policy or conversion. Descriptive prose and review acknowledgments are separated.
 * @evidence contracts/performance.md#efficient-algorithms The necessary BigInt conversion reads the supplied numeric spelling and allocates its arbitrary-precision integer using the runtime algorithm. Input length and resulting integer size drive that cost; this wrapper performs no duplicate parse or independent digit storage.
 *
 * @evidenceExclude contracts/performance.md#reuse-equivalent-work This predicate owns one value decision and coordinates no equivalent request population or completed-result cache. Stable module constants are reused where present; caller request coordination does not belong to this operation.
 *
 * @evidence contracts/performance.md#bound-retention-and-release-resources The converted integer is local and becomes reclaimable after the Boolean result is produced or conversion throws. Input and integer size are not explicitly bounded here; there is no historical-value cache or retained handle.
 */
export const _isBigintString = (str: string): boolean => {
  try {
    BigInt(str);
    return true;
  } catch {
    return false;
  }
};
