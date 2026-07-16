import { _notationSnake } from "./_notationSnake";

export const _notationKebab = (str: string): string => {
  let snaked: string = _notationSnake(str);
  let prefix: string = "";
  while (snaked.startsWith("_")) {
    prefix += "_";
    snaked = snaked.substring(1);
  }
  return `${prefix}${snaked.replaceAll("_", "-")}`;
};
