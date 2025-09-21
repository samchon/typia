import { __notationUnsnake } from "./private/__notationUnsnake";

export const _notationKebab = __notationUnsnake({
  plain: str => str,
  snake: (str, i) => (i === 0 ? str.toLowerCase() : `-${str.toLowerCase()}`),
});