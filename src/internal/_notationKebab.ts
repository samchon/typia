import { __notationUnsnake } from "./private/__notationUnsnake";

export const _notationKebab = (str: string): string => {
  if (str.length === 0) return str;

  // PREFIX (handle leading hyphens and underscores)
  let prefix: string = "";
  for (let i: number = 0; i < str.length; i++) {
    if (str[i] === "-" || str[i] === "_") prefix += str[i];
    else break;
  }
  if (prefix.length !== 0) str = str.substring(prefix.length);

  const out = (s: string) => `${prefix}${s}`;

  // Handle snake_case input
  if (str.includes("_")) {
    const items: string[] = str.split("_");
    return out(items.map((s) => s.toLowerCase()).join("-"));
  }

  // Handle kebab-case input (already kebab)
  if (str.includes("-")) {
    const items: string[] = str.split("-");
    return out(items.map((s) => s.toLowerCase()).join("-"));
  }

  // CAMEL OR PASCAL CASE
  const indexes: number[] = [];
  for (let i: number = 0; i < str.length; i++) {
    const code: number = str.charCodeAt(i);
    if (65 <= code && code <= 90) indexes.push(i);
  }
  for (let i: number = indexes.length - 1; i > 0; --i) {
    const now: number = indexes[i]!;
    const prev: number = indexes[i - 1]!;
    if (now - prev === 1) indexes.splice(i, 1);
  }
  if (indexes.length !== 0 && indexes[0] === 0) indexes.splice(0, 1);
  if (indexes.length === 0) return out(str.toLowerCase());

  let ret: string = "";
  for (let i: number = 0; i < indexes.length; i++) {
    const first: number = i === 0 ? 0 : indexes[i - 1]!;
    const last: number = indexes[i]!;

    ret += str.substring(first, last).toLowerCase();
    ret += "-";
  }
  ret += str.substring(indexes[indexes.length - 1]!).toLowerCase();
  return out(ret);
}