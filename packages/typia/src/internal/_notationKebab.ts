import { _notationSnake } from "./_notationSnake";

/**
 * Convert a key to kebab-case through its snake_case form, keeping leading
 * underscores.
 *
 * @evidence contracts/common.md#principled-implementation The snake_case form is derived first and every underscore after the leading ones becomes a hyphen, so word boundaries are those of the snake conversion.
 * @evidence contracts/common.md#clear-and-simple-design One function over `_notationSnake`.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts No second boundary algorithm exists.
 * @evidence contracts/common.md#meaningful-documentation A comment states the two-step derivation and the preserved prefix.
 */
export const _notationKebab = (str: string): string => {
  let snaked: string = _notationSnake(str);
  let prefix: string = "";
  while (snaked.startsWith("_")) {
    prefix += "_";
    snaked = snaked.substring(1);
  }
  return `${prefix}${snaked.replaceAll("_", "-")}`;
};
