/**
 * Read one path parameter as a bigint.
 *
 * `null` is null, blank text is kept as text so the assertion rejects it, and
 * other text is converted when it parses.
 *
 * @evidence contracts/common.md#principled-implementation The text `null` is null, blank text stays text so the assertion rejects it and does not read as zero, and other text is converted with BigInt where it parses.
 * @evidence contracts/common.md#clear-and-simple-design One conditional and one private converter.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The blank rule follows the cited issue.
 * @evidence contracts/common.md#meaningful-documentation A comment states the cases.
 */
export const _httpParameterReadBigint = (value: string) =>
  value !== "null" ? toBigint(value) : null;

const toBigint = (str: string): bigint | string => {
  // Blank text stays text, so the assertion rejects it: `BigInt(" ")` is 0n,
  // which read a blank path segment as a real zero (#2448).
  if (str.trim().length === 0) return str;
  try {
    return BigInt(str);
  } catch {
    return str;
  }
};
