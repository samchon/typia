export namespace $QueryReader {
  export const boolean = (str: string | null): boolean | null | undefined =>
    str === null
      ? undefined
      : str === "null"
      ? null
      : str.length === 0
      ? true
      : str === "true" || str === "1"
      ? true
      : str === "false" || str === "0"
      ? false
      : (str as any); // wrong type

  export const number = (str: string | null): number | null | undefined =>
    !!str?.length
      ? str === "null"
        ? null
        : (toNumber(str) as any)
      : undefined;

  export const bigint = (str: string | null): bigint | null | undefined =>
    !!str?.length
      ? str === "null"
        ? null
        : (toBigint(str) as any)
      : undefined;

  export const string = (str: string | null): string | null | undefined =>
    str === null ? undefined : str === "null" ? null : str;

  export const params = (input: string | URLSearchParams) => {
    if (typeof input === "string") {
      const index: number = input.indexOf("?");
      input = index === -1 ? "" : input.substring(index + 1);
      return new URLSearchParams(input);
    }
    return input;
  };

  export const array = (input: any[], alternative: null | undefined) =>
    input.length ? input : alternative;
}

const toNumber = (str: string): number | string => {
  const value: number = Number(str);
  return isNaN(value) ? str : value;
};

const toBigint = (str: string): bigint | string => {
  try {
    return BigInt(str);
  } catch {
    return str;
  }
};
