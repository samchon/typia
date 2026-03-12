export const _jsonStringifyNumberNull = (value: number): number | null =>
  isFinite(value) ? value : null;
