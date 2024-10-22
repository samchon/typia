export const _httpFormDataReadBoolean = (
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
