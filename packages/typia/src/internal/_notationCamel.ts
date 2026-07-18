import { __notationRename } from "./private/__notationRename";

const _notationCamelSnake = (str: string): string => {
  while (str.startsWith("_")) str = str.substring(1);
  if (str.length === 0) return "";
  const index: number = str.indexOf("_");
  if (index < 0) return str.toLowerCase();
  const middle: string | undefined = str[index + 1];
  // A trailing underscore has no character to uppercase, so `CamelizeSnakeString`
  // falls through to lowercasing the whole key (`foo_` -> `foo_`).
  if (middle === undefined) return str.toLowerCase();
  // A doubled underscore collapses to a single one before continuing.
  return middle === "_"
    ? _notationCamelSnake(
        `${str.substring(0, index)}_${str.substring(index + 2)}`,
      )
    : `${str
        .substring(0, index)
        .toLowerCase()}${middle.toUpperCase()}${_notationCamelSnake(
        str.substring(index + 2),
      )}`;
};

export const _notationCamel = __notationRename({
  // `CamelCase<T>` lowercases an all-caps key and otherwise lowercases only the
  // first character of an underscore-free key (`HTTP` -> `http`, `userID` stays).
  plain: (str) =>
    str === str.toUpperCase()
      ? str.toLowerCase()
      : `${str[0]!.toLowerCase()}${str.substring(1)}`,
  // With an underscore present, the character after each underscore is
  // uppercased and the rest lowercased, matching `CamelizeSnakeString`.
  snake: _notationCamelSnake,
});
