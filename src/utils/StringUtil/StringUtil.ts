export const capitalize = (str: string) =>
  str.length ? str[0]!.toUpperCase() + str.slice(1).toLowerCase() : str;

export const escapeDuplicate =
  (keep: string[]) =>
  (change: string): string =>
    keep.includes(change) ? escapeDuplicate(keep)(`_${change}`) : change;
