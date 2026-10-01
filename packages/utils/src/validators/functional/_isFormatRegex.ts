/**
 * Checks whether the runtime accepts a regular expression source without flags.
 *
 * Construction validates syntax; the resulting expression is never executed
 * against a value and is not retained.
 *
 * @evidence contracts/common.md#principled-implementation RegExp construction is the syntax authority of the runtime. Only successful construction returns true; syntax exceptions are converted to false.
 * @evidence contracts/common.md#clear-and-simple-design A single construction/exception boundary avoids maintaining a second regular expression grammar.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Native RegExp construction is the required syntax check and is not replaced or patched. No source receives an exceptional verdict.
 * @evidence contracts/common.md#meaningful-documentation The doc states that the source is tested by construction without flags, and that the expression is neither executed against a value nor retained.
 * @evidence contracts/performance.md#efficient-algorithms The necessary syntax decision delegates one source construction to the runtime. Pattern length and structure drive parsing/representation cost; no matching or second syntax parser is executed. This function promises no bound on the cost of subsequently executing that pattern.
 *
 * @evidenceExclude contracts/performance.md#reuse-equivalent-work Each source is decided by compiling it, and a verdict for one source says nothing about another; a cache of compiled expressions keyed by arbitrary caller strings would retain memory without a validity or eviction contract, so the compilation is repeated per call.
 *
 * @evidence contracts/performance.md#bound-retention-and-release-resources The RegExp constructed for the check is not retained and is reclaimed after the call; the function keeps no module state.
 */
export const _isFormatRegex = (str: string): boolean => {
  try {
    new RegExp(str);
    return true;
  } catch {
    return false;
  }
};
