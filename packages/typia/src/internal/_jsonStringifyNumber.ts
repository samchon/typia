export const _jsonStringifyNumber = (value: number): number | null =>
  isFinite(value) ? value : null;
