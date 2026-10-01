/**
 * Read one path parameter as a boolean.
 *
 * `true` and `1` are true, `false` and `0` are false, `null` is null and other
 * text is kept for the assertion to reject.
 *
 * @evidence contracts/common.md#principled-implementation The text `null` is null, `true` and `1` are true, `false` and `0` are false and other text is returned for the validator to reject.
 * @evidence contracts/common.md#clear-and-simple-design One conditional chain.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The mapping is the path-parameter contract.
 * @evidence contracts/common.md#meaningful-documentation A comment states the mapping.
 */
export const _httpParameterReadBoolean = (value: string) =>
  value !== "null"
    ? value === "true" || value === "1"
      ? true
      : value === "false" || value === "0"
        ? false
        : value
    : null;
