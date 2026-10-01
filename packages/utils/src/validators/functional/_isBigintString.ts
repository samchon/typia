/**
 * Checks whether ECMAScript BigInt accepts a string without throwing.
 *
 * The accepted spellings follow the runtime conversion, including its
 * whitespace and radix handling; this is not a decimal-only grammar.
 *
 * @evidence contracts/common.md#principled-implementation BigInt conversion determines the actual runtime language. Successful construction returns true and conversion exceptions return false without coercing a different representation.
 * @evidence contracts/common.md#clear-and-simple-design One conversion and its exception boundary own the verdict; no parallel numeric parser or canonicalization policy is introduced.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The runtime conversion is the supported requirement, not a fixture-specific exception. The function changes no conversion implementation or global.
 * @evidence contracts/common.md#meaningful-documentation The doc states that acceptance follows the runtime BigInt conversion, including whitespace and radix prefixes, and is not a decimal-only grammar.
 * @evidence contracts/performance.md#efficient-algorithms The necessary BigInt conversion reads the supplied numeric spelling and allocates its arbitrary-precision integer using the runtime algorithm. Input length and resulting integer size drive that cost; this wrapper performs no duplicate parse or independent digit storage.
 *
 * @evidenceExclude contracts/performance.md#reuse-equivalent-work The verdict for one string is independent of every other, so there is no computation to share between requests, and caching results keyed by arbitrary input strings would add retention without any validity contract.
 *
 * @evidence contracts/performance.md#bound-retention-and-release-resources The BigInt built for the test is discarded at once and the function keeps no module state.
 */
export const _isBigintString = (str: string): boolean => {
  try {
    BigInt(str);
    return true;
  } catch {
    return false;
  }
};
