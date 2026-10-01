/**
 * Read one header value as a number.
 *
 * A blank value is absent, and other text is converted when it is a number and
 * kept as text otherwise.
 *
 * @evidence contracts/common.md#principled-implementation A blank header, or a blank element, is absent because `Number("")` would read as zero; other text is converted when it is a number and kept as text otherwise.
 * @evidence contracts/common.md#clear-and-simple-design One conditional and two private helpers.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The blank rule follows the cited issue.
 * @evidence contracts/common.md#meaningful-documentation A comment states the cases.
 */
export const _httpHeaderReadNumber = (value: string | undefined) =>
  // A blank header, or a blank element of a header list, is absent: `Number("")`
  // is 0, which let validators accept an empty header as a real zero (#2448).
  value !== undefined && isBlank(value) === false ? toNumber(value) : undefined;

const isBlank = (value: string): boolean =>
  typeof value === "string" && value.trim().length === 0;

const toNumber = (str: string): number | string => {
  const value: number = Number(str);
  return isNaN(value) ? str : value;
};
