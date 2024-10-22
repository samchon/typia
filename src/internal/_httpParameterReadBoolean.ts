export const _httpParameterReadBoolean = (value: string) =>
  value !== "null"
    ? value === "true" || value === "1"
      ? true
      : value === "false" || value === "0"
        ? false
        : value
    : null;
