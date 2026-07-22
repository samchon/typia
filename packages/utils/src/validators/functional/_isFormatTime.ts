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
