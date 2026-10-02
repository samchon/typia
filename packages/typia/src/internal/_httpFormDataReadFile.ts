/**
 * Read one form field as a File.
 *
 * A File passes through, a missing field is absent, `null` is null and other
 * text is kept for the assertion to reject. It needs the global `File`.
 *
 * @evidence contracts/common.md#principled-implementation A File is passed through, a missing field is absent, the text `null` is null and any other text is returned unchanged for the validator to reject. It references the global File, which Node provides from version 20.
 * @evidence contracts/common.md#clear-and-simple-design One conditional chain.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts No text is converted into a File.
 * @evidence contracts/common.md#meaningful-documentation A comment states the cases and the global dependency.
 */
export const _httpFormDataReadFile = (
  input: string | File | null,
): File | null | undefined =>
  input instanceof File
    ? input
    : input === null
      ? undefined
      : input === "null"
        ? null
        : (input as any);
