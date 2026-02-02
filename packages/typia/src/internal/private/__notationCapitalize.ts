export const __notationCapitalize = (str: string) =>
  str.length ? str[0]!.toUpperCase() + str.slice(1).toLowerCase() : str;
