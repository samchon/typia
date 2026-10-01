/**
 * Read one form field as a number.
 *
 * A file passes through, blank text is absent, `null` is null and other text is
 * converted when it is a number and kept as text otherwise.
 *
 * @evidence contracts/common.md#principled-implementation A file is passed through, blank text is absent because `Number(" ")` would read as zero, `null` is null, and other text is converted when it is a number and kept as text when it is NaN so the assertion rejects it.
 * @evidence contracts/common.md#clear-and-simple-design One conditional chain and a private converter.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The blank-text rule follows the cited issue and is general.
 * @evidence contracts/common.md#meaningful-documentation A comment states the cases.
 */
export const _httpFormDataReadNumber = (
  input: string | File | null,
): number | null | undefined =>
  input instanceof File
    ? (input as any)
    : // Blank text is absent, as the empty string always was: `Number(" ")`
      // is 0, which would read a whitespace value as a real zero (#2448).
      typeof input === "string" && input.trim().length !== 0
      ? input === "null"
        ? null
        : (toNumber(input) as any)
      : undefined;

const toNumber = (str: string): number | string => {
  const value: number = Number(str);
  return isNaN(value) ? str : value;
};
