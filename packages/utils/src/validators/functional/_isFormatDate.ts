/**
 * Checks four-digit year, month and day syntax and Gregorian month length.
 *
 * The numeric year is used directly, including year zero; Date parsing and its
 * local-time normalization do not determine validity.
 *
 * @evidence contracts/common.md#principled-implementation Captured ranges establish month and positive day bounds before indexing the month-length table. The divisible-by-400 or divisible-by-4-but-not-100 rule adds the February leap day, so syntactically valid impossible dates fail.
 * @evidence contracts/common.md#clear-and-simple-design The private syntax expression and month-length table separate lexical ranges from the one calendar calculation that syntax cannot establish.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The table and divisibility rules represent the calendar uniformly; no dates or consumers receive special outcomes.
 * @evidence contracts/common.md#meaningful-documentation The doc states the four-digit year, month and day syntax and the Gregorian month length, that year zero is accepted and that Date parsing does not decide validity.
 * @evidence contracts/performance.md#efficient-algorithms The syntax has a fixed ten-character spelling and bounded captures. After that bounded check, one table lookup and constant calendar arithmetic determine validity without Date parsing or a second full-input traversal.
 *
 * @evidenceExclude contracts/performance.md#reuse-equivalent-work The verdict for one string is independent of every other, so there is no computation to share between requests, and caching results keyed by arbitrary input strings would add retention without any validity contract.
 *
 * @evidence contracts/performance.md#bound-retention-and-release-resources Only the pattern and the month-length table are retained as constants; the match array of one call is local and reclaimed on return, and the input string is not kept.
 */
export const _isFormatDate = (str: string): boolean => {
  const match: RegExpExecArray | null = PATTERN.exec(str);
  if (match === null) return false;
  const year: number = Number(match[1]);
  const month: number = Number(match[2]);
  const day: number = Number(match[3]);
  const maximum: number =
    DAYS[month - 1]! +
    (month === 2 && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))
      ? 1
      : 0);
  return day <= maximum;
};

const PATTERN = /^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] as const;
