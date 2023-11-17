export const $strlen = (s: string): number => {
  let b: number;
  let i: number;
  let c: number;
  for (b = i = 0; (c = s.charCodeAt(i++)); b += c >> 11 ? 3 : c >> 7 ? 2 : 1);
  return b;
};
