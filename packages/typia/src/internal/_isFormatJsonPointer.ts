/**
 * Checks the RFC 6901 JSON pointer spelling of the `json-pointer` format.
 *
 * The empty string is the whole-document pointer; otherwise every reference
 * token starts with `/` and may contain `~` only as `~0` or `~1`.
 *
 * @evidence contracts/common.md#principled-implementation RFC 6901 allows the empty pointer and otherwise tokens that each start with a slash, where a tilde is valid only as `~0` or `~1`, which the expression states directly.
 * @evidence contracts/common.md#clear-and-simple-design One predicate and one private pattern, identical to the copy in @typia/utils.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The grammar is the standard's.
 * @evidence contracts/common.md#meaningful-documentation The doc states the empty pointer and the tilde rule.
 */
export const _isFormatJsonPointer = (str: string): boolean => PATTERN.test(str);

const PATTERN = /^(?:\/(?:[^~/]|~0|~1)*)*$/;
