/**
 * Remove one trailing comma from a stringified body.
 *
 * @evidence contracts/common.md#principled-implementation A trailing comma left by the emitted concatenation is removed, and any other ending is left alone, so the object or array body ends without a dangling comma.
 * @evidence contracts/common.md#clear-and-simple-design One expression.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It only removes one comma character.
 * @evidence contracts/common.md#meaningful-documentation A comment states the single trailing comma rule.
 */
export const _jsonStringifyTail = (str: string): string =>
  str[str.length - 1] === "," ? str.substring(0, str.length - 1) : str;
