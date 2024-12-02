export const _httpFormDataReadNumber = (
  input: string | File | null,
): number | null | undefined =>
  input instanceof File
    ? (input as any)
    : !!input?.length
      ? input === "null"
        ? null
        : (toNumber(input) as any)
      : undefined;

const toNumber = (str: string): number | string => {
  const value: number = Number(str);
  return isNaN(value) ? str : value;
};
