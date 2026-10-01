import { _isFormatDate } from "./_isFormatDate";

/**
 * Checks timestamp syntax, calendar dates and possible UTC leap-second
 * position.
 *
 * An explicit Z or numeric offset is required. A second of 60 is permitted only
 * at a UTC June or December month-end boundary; this does not consult a
 * historical leap-second announcement table.
 *
 * @evidence contracts/common.md#principled-implementation The syntax expression bounds clock and offset fields and delegates the date to the calendar predicate. UTC setters preserve literal years, and offset subtraction determines whether a potential leap second occupies the permitted month-end minute.
 * @evidence contracts/common.md#clear-and-simple-design Ordinary seconds finish after syntax/calendar validation; only the leap-second branch constructs the UTC instant needed for the boundary decision.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts UTC conversion and the potential leap-second boundary are uniform rules. The implementation neither relies on local timezone nor special-cases fixture dates; historical announcements are outside this check.
 * @evidence contracts/common.md#meaningful-documentation The doc states that an offset is required, when a second of 60 is allowed and that no leap-second announcement table is consulted.
 * @evidence contracts/performance.md#efficient-algorithms One grammar scan accounts for the potentially unbounded fractional-second spelling; the separate date check has fixed length. Only the second-of-60 branch allocates a Date and performs bounded UTC arithmetic. No scan of historical dates or offset table occurs.
 *
 * @evidenceExclude contracts/performance.md#reuse-equivalent-work The verdict for one string is independent of every other, so there is no computation to share between requests, and caching results keyed by arbitrary input strings would add retention without any validity contract.
 *
 * @evidence contracts/performance.md#bound-retention-and-release-resources Only the pattern constant is retained; the match array and the Date built for a second of 60 are local to the call and reclaimed on return, and the input string is not kept.
 */
export const _isFormatDateTime = (str: string): boolean => {
  const match: RegExpExecArray | null = PATTERN.exec(str);
  if (match === null || _isFormatDate(match[1]!) === false) return false;
  if (match[7] !== "60") return true;

  const instant: Date = new Date(0);
  instant.setUTCFullYear(
    Number(match[2]),
    Number(match[3]) - 1,
    Number(match[4]),
  );
  instant.setUTCHours(Number(match[5]), Number(match[6]), 0, 0);
  const offset: number =
    match[8] === undefined
      ? 0
      : (match[8] === "+" ? 1 : -1) *
        (Number(match[9]) * 60 + Number(match[10]));
  instant.setUTCMinutes(instant.getUTCMinutes() - offset);
  return (
    instant.getUTCHours() === 23 &&
    instant.getUTCMinutes() === 59 &&
    ((instant.getUTCMonth() === 5 && instant.getUTCDate() === 30) ||
      (instant.getUTCMonth() === 11 && instant.getUTCDate() === 31))
  );
};

const PATTERN =
  /^(([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]))[Tt]((?:[01][0-9]|2[0-3])):([0-5][0-9]):([0-5][0-9]|60)(?:\.[0-9]+)?(?:[Zz]|([+-])((?:[01][0-9]|2[0-3])):([0-5][0-9]))$/;
