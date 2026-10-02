/**
 * Read one path parameter as a number.
 *
 * `null` is null, blank text is kept as text so the assertion rejects it, and
 * other text is converted when it is a number.
 *
 * @evidence contracts/common.md#principled-implementation The text `null` is null, blank text stays text so the assertion rejects it, and other text is converted when it is a number and kept as text otherwise.
 * @evidence contracts/common.md#clear-and-simple-design One conditional and one private converter.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The blank rule follows the cited issue.
 * @evidence contracts/common.md#meaningful-documentation A comment states the cases.
 */
export const _httpParameterReadNumber = (value: string) =>
  value !== "null" ? toNumber(value) : null;

const toNumber = (str: string): number | string => {
  // Blank text stays text, so the assertion rejects it: `Number(" ")` is 0,
  // which read a blank path segment as a real zero (#2448).
  if (str.trim().length === 0) return str;
  const value: number = Number(str);
  return isNaN(value) ? str : value;
};
