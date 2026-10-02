/**
 * Read one form field as a Blob.
 *
 * A Blob passes through, a missing field is absent, `null` is null and other
 * text is kept for the assertion to reject.
 *
 * @evidence contracts/common.md#principled-implementation A Blob is passed through, a missing field is absent, the text `null` is null and any other text is returned unchanged for the validator to reject. It requires a global Blob, which exists in current runtimes.
 * @evidence contracts/common.md#clear-and-simple-design One conditional chain.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts No text is converted into a Blob.
 * @evidence contracts/common.md#meaningful-documentation A comment states the cases.
 */
export const _httpFormDataReadBlob = (
  input: string | Blob | null,
): Blob | null | undefined =>
  input instanceof Blob
    ? input
    : input === null
      ? undefined
      : input === "null"
        ? null
        : (input as any);
