/**
 * Read one query value as a number.
 *
 * Blank text is absent, `null` is null and other text is converted when it is a
 * number and kept as text otherwise.
 *
 * @evidence contracts/common.md#principled-implementation Blank or missing text is absent because `Number(" ")` would read as zero, the text `null` is null and other text is converted when it is a number and kept as text otherwise.
 * @evidence contracts/common.md#clear-and-simple-design One conditional and a private converter.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The blank rule follows the cited issue.
 * @evidence contracts/common.md#meaningful-documentation A comment states the cases.
 */
export const _httpQueryReadNumber = (
  str: string | null,
): number | null | undefined =>
  // Blank text is absent, as the empty string always was: `Number(" ")` is 0,
  // which would read a whitespace value as a real zero (#2448).
  typeof str === "string" && str.trim().length !== 0
    ? str === "null"
      ? null
      : (toNumber(str) as any)
    : undefined;

const toNumber = (str: string): number | string => {
  const value: number = Number(str);
  return isNaN(value) ? str : value;
};
