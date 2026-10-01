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
 * @evidence contracts/performance.md#efficient-algorithms The necessary syntax decision delegates one source construction to the runtime. Pattern length and structure drive parsing/representation cost; no matching or second syntax parser is executed. This function promises no bound on the cost of subsequently executing that pattern.
 *
 * @evidenceExclude contracts/performance.md#reuse-equivalent-work This predicate owns one value decision and coordinates no equivalent request population or completed-result cache. Stable module constants are reused where present; caller request coordination does not belong to this operation.
 *
 * @evidence contracts/performance.md#bound-retention-and-release-resources The constructed expression is not returned or saved and becomes reclaimable after the syntax verdict. Its representation grows with the supplied source; no pattern cache, running match or external handle is retained.
 */
export const _isFormatRegex = (str: string): boolean => {
  try {
    new RegExp(str);
    return true;
  } catch {
    return false;
  }
};
