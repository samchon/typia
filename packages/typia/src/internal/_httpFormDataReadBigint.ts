export const _httpFormDataReadBigint = (
  input: string | File | null,
): bigint | null | undefined =>
  input instanceof File
    ? (input as any)
    : // Blank text is absent, as the empty string always was: `BigInt(" ")`
      // is 0n, which would read a whitespace value as a real zero (#2448).
      input !== null && input.trim().length !== 0
      ? input === "null"
        ? null
        : (toBigint(input) as any)
      : undefined;

const toBigint = (str: string): bigint | string => {
  try {
    return BigInt(str);
  } catch {
    return str;
  }
};
