import { __notationRename } from "./private/__notationRename";

const _notationPascalSnake = (str: string): string => {
  while (str.startsWith("_")) str = str.substring(1);
  if (str.length === 0) return "";
  const index: number = str.indexOf("_");
  return index < 0
    ? `${str[0]!.toUpperCase()}${str.substring(1).toLowerCase()}`
    : `${str[0]!.toUpperCase()}${str
        .substring(1, index)
        .toLowerCase()}${_notationPascalSnake(str.substring(index + 1))}`;
};

export const _notationPascal = __notationRename({
  // `PascalCase<T>` capitalizes the first character of an underscore-free key
  // and keeps the rest verbatim (`userID` -> `UserID`).
  plain: (str) => `${str[0]!.toUpperCase()}${str.substring(1)}`,
  // With an underscore present, each segment is capitalized and its tail is
  // lowercased (`MAX_COUNT` -> `MaxCount`), matching `PascalizeSnakeString`.
  snake: _notationPascalSnake,
});
