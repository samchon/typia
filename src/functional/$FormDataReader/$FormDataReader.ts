export const boolean = (
  input: string | File | null,
): boolean | null | undefined =>
  input instanceof File
    ? (input as any)
    : input === null
      ? undefined
      : input === "null"
        ? null
        : input.length === 0
          ? true
          : input === "true" || input === "1"
            ? true
            : input === "false" || input === "0"
              ? false
              : (input as any); // wrong type

export const number = (
  input: string | File | null,
): number | null | undefined =>
  input instanceof File
    ? (input as any)
    : !!input?.length
      ? input === "null"
        ? null
        : (toNumber(input) as any)
      : undefined;

export const bigint = (
  input: string | File | null,
): bigint | null | undefined =>
  input instanceof File
    ? (input as any)
    : !!input?.length
      ? input === "null"
        ? null
        : (toBigint(input) as any)
      : undefined;

export const string = (
  input: string | File | null,
): string | null | undefined =>
  input instanceof File
    ? (input as any)
    : input === null
      ? undefined
      : input === "null"
        ? null
        : input;

export const array = (input: any[], alternative: null | undefined) =>
  input.length ? input : alternative;

export const blob = (input: string | Blob | null): Blob | null | undefined =>
  input instanceof Blob
    ? input
    : input === null
      ? undefined
      : input === "null"
        ? null
        : (input as any);

export const file = (input: string | File | null): File | null | undefined =>
  input instanceof File
    ? input
    : input === null
      ? undefined
      : input === "null"
        ? null
        : (input as any);

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
