export const _httpQueryReadNumber = (
  str: string | null,
): number | null | undefined =>
  // Blank text is absent, as the empty string always was: `Number(" ")` is 0,
  // which would read a whitespace value as a real zero (#2448).
  str !== null && str.trim().length !== 0
    ? str === "null"
      ? null
      : (toNumber(str) as any)
    : undefined;

const toNumber = (str: string): number | string => {
  const value: number = Number(str);
  return isNaN(value) ? str : value;
};
