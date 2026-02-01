import { __notationCapitalize } from "./private/__notationCapitalize";
import { __notationUnsnake } from "./private/__notationUnsnake";

export const _notationCamel = __notationUnsnake({
  plain: (str) =>
    str.length
      ? str === str.toUpperCase()
        ? str.toLocaleLowerCase()
        : `${str[0]!.toLowerCase()}${str.substring(1)}`
      : str,
  snake: (str, i) =>
    i === 0 ? str.toLowerCase() : __notationCapitalize(str.toLowerCase()),
});
