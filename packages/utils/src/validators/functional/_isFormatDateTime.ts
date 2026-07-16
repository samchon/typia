import { _isFormatDate } from "./_isFormatDate";

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
