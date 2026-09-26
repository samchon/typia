export const _httpParameterReadBigint = (value: string) =>
  value !== "null" ? toBigint(value) : null;

const toBigint = (str: string): bigint | string => {
  // Blank text stays text, so the assertion rejects it: `BigInt(" ")` is 0n,
  // which read a blank path segment as a real zero (#2448).
  if (str.trim().length === 0) return str;
  try {
    return BigInt(str);
  } catch {
    return str;
  }
};
