export const _jsonStringifyTail = (str: string): string =>
  str[str.length - 1] === "," ? str.substring(0, str.length - 1) : str;
