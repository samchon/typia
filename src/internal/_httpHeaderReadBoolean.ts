export const _httpHeaderReadBoolean = (value: string | undefined) =>
  value !== undefined
    ? value === "true"
      ? true
      : value === "false"
        ? false
        : value
    : undefined;
