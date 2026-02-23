export const _httpParameterReadBigint = (value: string) =>
  value !== "null" ? toBigint(value) : null;

const toBigint = (str: string): bigint | string => {
  try {
    return BigInt(str);
  } catch {
    return str;
  }
};
