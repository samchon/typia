/**
 * Read one query value as a bigint.
 *
 * Blank text is absent, `null` is null and other text is converted when it
 * parses and kept as text otherwise.
 *
 * @evidence contracts/common.md#principled-implementation Blank or missing text is absent because `BigInt(" ")` would read as zero, the text `null` is null and other text is converted with BigInt where it parses and kept as text otherwise.
 * @evidence contracts/common.md#clear-and-simple-design One conditional and a private converter.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The blank rule follows the cited issue.
 * @evidence contracts/common.md#meaningful-documentation A comment states the cases.
 */
export const _httpQueryReadBigint = (
  str: string | null,
): bigint | null | undefined =>
  // Blank text is absent, as the empty string always was: `BigInt(" ")` is 0n,
  // which would read a whitespace value as a real zero (#2448).
  typeof str === "string" && str.trim().length !== 0
    ? str === "null"
      ? null
      : (toBigint(str) as any)
    : undefined;

const toBigint = (str: string): bigint | string => {
  try {
    return BigInt(str);
  } catch {
    return str;
  }
};
