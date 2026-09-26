export const _httpQueryReadBoolean = (
  str: string | null,
): boolean | null | undefined =>
  // `undefined` is as absent as `null`, which the contract returns; a
  // stand-in reader that answers `undefined` must not throw on `.length`.
  str === null || str === undefined
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
