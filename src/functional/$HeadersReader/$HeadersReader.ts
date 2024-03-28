export const boolean = (value: string | undefined) =>
  value !== undefined
    ? value === "true"
      ? true
      : value === "false"
        ? false
        : value
    : undefined;
export const bigint = (value: string | undefined) =>
  value !== undefined ? toBigint(value) : undefined;
export const number = (value: string | undefined) =>
  value !== undefined ? toNumber(value) : undefined;
export const string = (value: string | undefined) => value;

const toBigint = (str: string): bigint | string => {
  try {
    return BigInt(str);
  } catch {
    return str;
  }
};

const toNumber = (str: string): number | string => {
  const value: number = Number(str);
  return isNaN(value) ? str : value;
};
