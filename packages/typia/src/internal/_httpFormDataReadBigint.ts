export const _httpFormDataReadBigint = (
  input: string | File | null,
): bigint | null | undefined =>
  input instanceof File
    ? (input as any)
    : !!input?.length
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
