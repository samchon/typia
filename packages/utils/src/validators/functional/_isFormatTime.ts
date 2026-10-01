/**
 * Checks an offset-qualified clock and possible UTC leap-second minute.
 *
 * There is no calendar date to verify. A second of 60 requires the supplied
 * clock and offset to map to 23:59 UTC, with negative offsets normalized into
 * the day.
 *
 * @evidence contracts/common.md#principled-implementation The expression bounds clock and offset fields. Offset subtraction and a nonnegative modulo of 1440 minutes identify the final UTC minute without pretending a date is present.
 * @evidence contracts/common.md#clear-and-simple-design Ordinary seconds use the syntax result; the extra arithmetic is confined to the leap-second branch and needs no Date allocation.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Clock ranges and day wrapping apply to all inputs; no local-time conversion or fixture-specific leap-second allowance is used.
 * @evidence contracts/common.md#meaningful-documentation Native prose states the accepted representation and its important limits, so callers can distinguish this predicate from a broader policy or conversion. Descriptive prose and review acknowledgments are separated.
 * @evidence contracts/performance.md#efficient-algorithms One grammar scan accounts for the fractional-second spelling. All remaining captured fields have bounded length, and the leap-second branch uses constant offset/modulo arithmetic without constructing a Date or enumerating clock values.
 *
 * @evidenceExclude contracts/performance.md#reuse-equivalent-work This predicate owns one value decision and coordinates no equivalent request population or completed-result cache. Stable module constants are reused where present; caller request coordination does not belong to this operation.
 *
 * @evidence contracts/performance.md#bound-retention-and-release-resources Module-level constants and predicate references have a fixed population. Per-call counters, captures or Date state remain local and become reclaimable after the verdict; no validated input, request history or handle is retained.
 */
export const _isFormatTime = (str: string): boolean => {
  const match: RegExpExecArray | null = PATTERN.exec(str);
  if (match === null) return false;
  if (match[3] !== "60") return true;

  // RFC 3339 admits `:60` only where a leap second is inserted, which is
  // always 23:59:60 UTC. `date-time` decides that from the instant it can
  // build; a clock carries no date, so it shifts itself by its own offset and
  // asks the same question, wrapping the result back into the day.
  const offset: number =
    match[4] === undefined
      ? 0
      : (match[4] === "+" ? 1 : -1) *
        (Number(match[5]) * 60 + Number(match[6]));
  const minutes: number = Number(match[1]) * 60 + Number(match[2]) - offset;
  return ((minutes % DAY) + DAY) % DAY === DAY - 1;
};

const PATTERN =
  /^([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(?:\.[0-9]+)?(?:[Zz]|([+-])((?:[01][0-9]|2[0-3])):([0-5][0-9]))$/;
const DAY = 24 * 60;
