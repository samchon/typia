export const _jsonStringifyNumberNull = (
  value: number,
): null | number => (isFinite(value) ? value : null);
