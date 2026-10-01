/**
 * Checks the `relative-json-pointer` format.
 *
 * A non-negative integer without leading zeros, followed by either `#` or a
 * JSON pointer.
 *
 * @evidence contracts/common.md#principled-implementation A relative pointer is a non-negative integer without leading zeros followed by either a hash or a JSON pointer, which the expression encodes with the same token rule as the absolute pointer.
 * @evidence contracts/common.md#clear-and-simple-design One predicate and one private pattern, identical to the typia copy.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The grammar is the draft specification's.
 * @evidence contracts/common.md#meaningful-documentation A doc was added that states the prefix and suffix forms.
 */
export const _isFormatRelativeJsonPointer = (str: string): boolean =>
  PATTERN.test(str);

const PATTERN = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
