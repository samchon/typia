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
