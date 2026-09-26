export const _httpFormDataReadBoolean = (
  input: string | File | null,
): boolean | null | undefined =>
  input instanceof File
    ? (input as any)
    : // `undefined` is as absent as `null`, which `FormData.get` returns; a
      // stand-in that answers `undefined` must not throw on `.length`.
      input === null || input === undefined
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
