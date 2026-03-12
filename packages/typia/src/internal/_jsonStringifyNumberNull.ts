export const _jsonStringifyNumberNull = (value: number): string =>
  isFinite(value) ? String(value) : "null";
