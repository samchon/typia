export const _httpQueryReadBigint = (
  str: string | null,
): bigint | null | undefined =>
  // Blank text is absent, as the empty string always was: `BigInt(" ")` is 0n,
  // which would read a whitespace value as a real zero (#2448).
  str !== null && str.trim().length !== 0
    ? str === "null"
      ? null
      : (toBigint(str) as any)
    : undefined;

const toBigint = (str: string): bigint | string => {
  try {
    return BigInt(str);
  } catch {
    return str;
  }
};
