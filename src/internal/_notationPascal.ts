import { __notationCapitalize } from "./private/__notationCapitalize";
import { __notationUnsnake } from "./private/__notationUnsnake";

export const _notationPascal = __notationUnsnake({
  plain: (str) =>
    str.length ? `${str[0]!.toUpperCase()}${str.substring(1)}` : str,
  snake: __notationCapitalize,
});
