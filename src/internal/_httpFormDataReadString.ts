export const _httpFormDataReadString = (
  input: string | File | null,
): string | null | undefined =>
  input instanceof File
    ? (input as any)
    : input === null
      ? undefined
      : input === "null"
        ? null
        : input;
