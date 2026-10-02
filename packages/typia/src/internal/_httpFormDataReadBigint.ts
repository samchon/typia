/**
 * Read one form field as a bigint.
 *
 * A file passes through, blank text is absent, `null` is null and other text is
 * converted when it parses and kept as text otherwise, so the assertion rejects
 * it.
 *
 * @evidence contracts/common.md#principled-implementation A file is passed through for the validator to reject, a blank string is absent because `BigInt(" ")` would read as zero, the text `null` is null, and other text is converted with BigInt where it parses and left as text where it does not, so the following assertion rejects it.
 * @evidence contracts/common.md#clear-and-simple-design One conditional chain and a private converter.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The blank-text rule follows the cited issue and is general.
 * @evidence contracts/common.md#meaningful-documentation A comment states the cases.
 */
export const _httpFormDataReadBigint = (
  input: string | File | null,
): bigint | null | undefined =>
  input instanceof File
    ? (input as any)
    : // Blank text is absent, as the empty string always was: `BigInt(" ")`
      // is 0n, which would read a whitespace value as a real zero (#2448).
      typeof input === "string" && input.trim().length !== 0
      ? input === "null"
        ? null
        : (toBigint(input) as any)
      : undefined;

const toBigint = (str: string): bigint | string => {
  try {
    return BigInt(str);
  } catch {
    return str;
  }
};
