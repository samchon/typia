/**
 * Checks the ISO 8601 duration spelling of the `duration` format.
 *
 * Accepts `P` followed by years, months and days, optionally `T` and hours,
 * minutes and seconds, or `P` and weeks alone, all as non-negative integers. A
 * bare `P`, a `T` with no time component, fractions and signs are rejected. The
 * predicate does not check that the components are in a calendar range.
 *
 * @evidence contracts/common.md#principled-implementation One anchored expression encodes the ISO 8601 duration grammar as RFC 3339 Appendix A gives it: designators in order Y, M, D, then an optional T with H, M, S, or weeks alone, with a lookahead that rejects a bare `P` and a `T` with no time part. Components are integers only.
 * @evidence contracts/common.md#clear-and-simple-design One predicate and one private pattern; this package keeps this copy under its internal folder because its emitted code imports predicates from there, and @typia/utils holds an identical copy because it cannot import typia.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The grammar comes from the specification and the predicate has no accepted examples hardcoded.
 * @evidence contracts/common.md#meaningful-documentation The doc states the accepted forms and what is not checked.
 */
export const _isFormatDuration = (str: string): boolean => PATTERN.test(str);

const PATTERN =
  /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/;
