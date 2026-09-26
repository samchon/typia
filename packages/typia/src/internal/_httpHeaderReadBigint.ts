export const _httpHeaderReadBigint = (value: string | undefined) =>
  // A blank header, or a blank element of a header list, is absent: `BigInt("")`
  // is 0n, which let validators accept an empty header as a real zero (#2448).
  value !== undefined && isBlank(value) === false ? toBigint(value) : undefined;

const isBlank = (value: string): boolean =>
  typeof value === "string" && value.trim().length === 0;

const toBigint = (str: string): bigint | string => {
  try {
    return BigInt(str);
  } catch {
    return str;
  }
};
