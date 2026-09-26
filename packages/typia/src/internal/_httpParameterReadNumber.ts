export const _httpParameterReadNumber = (value: string) =>
  value !== "null" ? toNumber(value) : null;

const toNumber = (str: string): number | string => {
  // Blank text stays text, so the assertion rejects it: `Number(" ")` is 0,
  // which read a blank path segment as a real zero (#2448).
  if (str.trim().length === 0) return str;
  const value: number = Number(str);
  return isNaN(value) ? str : value;
};
