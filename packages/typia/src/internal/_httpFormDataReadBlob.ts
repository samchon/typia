export const _httpFormDataReadBlob = (
  input: string | Blob | null,
): Blob | null | undefined =>
  input instanceof Blob
    ? input
    : input === null
      ? undefined
      : input === "null"
        ? null
        : (input as any);
