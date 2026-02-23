export const _jsonStringifyRest = (str: string): string => {
  return str.length === 2 ? "" : "," + str.substring(1, str.length - 1);
};
