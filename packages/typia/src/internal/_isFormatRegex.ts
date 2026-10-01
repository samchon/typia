/**
 * Checks whether the runtime accepts a regular expression source without flags.
 *
 * Construction validates syntax; the resulting expression is never executed
 * against a value and is not retained.
 *
 * @evidence contracts/common.md#principled-implementation RegExp construction is the syntax authority of the runtime. Only successful construction returns true; syntax exceptions are converted to false.
 * @evidence contracts/common.md#clear-and-simple-design A single construction/exception boundary avoids maintaining a second regular expression grammar.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Native RegExp construction is the required syntax check and is not replaced or patched. No source receives an exceptional verdict.
 * @evidence contracts/common.md#meaningful-documentation Native prose states the accepted representation and its important limits, so callers can distinguish this predicate from a broader policy or conversion. Descriptive prose and review acknowledgments are separated.
 */
export const _isFormatRegex = (str: string): boolean => {
  try {
    new RegExp(str);
    return true;
  } catch {
    return false;
  }
};
