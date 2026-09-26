export const _httpFormDataReadNumber = (
  input: string | File | null,
): number | null | undefined =>
  input instanceof File
    ? (input as any)
    : // Blank text is absent, as the empty string always was: `Number(" ")`
      // is 0, which would read a whitespace value as a real zero (#2448).
      input !== null && input.trim().length !== 0
      ? input === "null"
        ? null
        : (toNumber(input) as any)
      : undefined;

const toNumber = (str: string): number | string => {
  const value: number = Number(str);
  return isNaN(value) ? str : value;
};
