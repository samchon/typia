/**
 * @internal
 */
export namespace $ParameterReader {
  export const boolean = (value: string) =>
    value !== "null"
      ? value === "true" || value === "1"
        ? true
        : value === "false" || value === "0"
        ? false
        : value
      : null;

  export const bigint = (value: string) =>
    value !== "null" ? toBigint(value) : null;

  export const number = (value: string) =>
    value !== "null" ? toNumber(value) : null;

  export const string = (value: string) => (value !== "null" ? value : null);
}

/**
 * @internal
 */
const toNumber = (str: string): number | string => {
  const value: number = Number(str);
  return isNaN(value) ? str : value;
};

/**
 * @internal
 */
const toBigint = (str: string): bigint | string => {
  try {
    return BigInt(str);
  } catch {
    return str;
  }
};
