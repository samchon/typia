export const _httpQueryReadBoolean = (
  str: string | null,
): boolean | null | undefined =>
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
