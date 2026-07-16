import { _isFormatDate } from "./_isFormatDate";

export const _isFormatDateTime = (str: string): boolean => {
  const match: RegExpExecArray | null = PATTERN.exec(str);
  return match !== null && _isFormatDate(match[1]!);
};

const PATTERN =
  /^([0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01]))[Tt](?:[01][0-9]|2[0-3]):[0-5][0-9](?::(?:[0-5][0-9]|60))(?:\.[0-9]+)?(?:[Zz]|[+-](?:[01][0-9]|2[0-3]):[0-5][0-9])$/;
