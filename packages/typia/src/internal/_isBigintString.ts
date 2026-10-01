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
 */
export const _isBigintString = (str: string): boolean => {
  try {
    BigInt(str);
    return true;
  } catch {
    return false;
  }
};
