/**
 * Read one form field as a boolean.
 *
 * An empty value is true, `true` and `1` are true, `false` and `0` are false,
 * `null` is null and other text is kept for the assertion to reject.
 *
 * @evidence contracts/common.md#principled-implementation A file is passed through, a missing field is absent, the text `null` is null, an empty value is true (a present flag), `true` and `1` are true, `false` and `0` are false, and any other text is returned for the validator to reject.
 * @evidence contracts/common.md#clear-and-simple-design One conditional chain.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The mapping is the form-data contract and not keyed on a field.
 * @evidence contracts/common.md#meaningful-documentation A comment states the mapping.
 */
export const _httpFormDataReadBoolean = (
  input: string | File | null,
): boolean | null | undefined =>
  input instanceof File
    ? (input as any)
    : // `undefined` is as absent as `null`, which `FormData.get` returns; a
      // stand-in that answers `undefined` must not throw on `.length`.
      input === null || input === undefined
      ? undefined
      : input === "null"
        ? null
        : input.length === 0
          ? true
          : input === "true" || input === "1"
            ? true
            : input === "false" || input === "0"
              ? false
              : (input as any); // wrong type
