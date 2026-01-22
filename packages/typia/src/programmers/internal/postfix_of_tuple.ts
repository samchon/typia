/** @internal */
export const postfix_of_tuple = (str: string): string =>
  str.endsWith('"') ? str.slice(0, -1) : `${str} + "`;
