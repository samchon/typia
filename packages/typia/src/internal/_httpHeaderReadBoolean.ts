/**
 * Read one header value as a boolean.
 *
 * Only `true` and `false` are read as booleans; other text is kept for the
 * assertion to reject, unlike query and path values, which also accept `1` and
 * `0`.
 *
 * @evidence contracts/common.md#principled-implementation Only the texts `true` and `false` are read as booleans and any other text, including `1` and `0` and the empty string, is returned for the validator to reject; a missing header is absent. This differs from the query and path readers, which also accept `1` and `0`.
 * @evidence contracts/common.md#clear-and-simple-design One conditional chain.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The narrower mapping is a stated difference and not an accident of copying.
 * @evidence contracts/common.md#meaningful-documentation A comment states the accepted texts and the difference.
 */
export const _httpHeaderReadBoolean = (value: string | undefined) =>
  value !== undefined
    ? value === "true"
      ? true
      : value === "false"
        ? false
        : value
    : undefined;
