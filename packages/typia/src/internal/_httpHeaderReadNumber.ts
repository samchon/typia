export const _httpHeaderReadNumber = (value: string | undefined) =>
  // A blank header, or a blank element of a header list, is absent: `Number("")`
  // is 0, which let validators accept an empty header as a real zero (#2448).
  value !== undefined && isBlank(value) === false ? toNumber(value) : undefined;

const isBlank = (value: string): boolean =>
  typeof value === "string" && value.trim().length === 0;

const toNumber = (str: string): number | string => {
  const value: number = Number(str);
  return isNaN(value) ? str : value;
};
