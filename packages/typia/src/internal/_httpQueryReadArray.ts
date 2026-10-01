/**
 * Read a collected query value list; an empty list means the key was absent and
 * gives the alternative that the property's type calls for.
 *
 * @evidence contracts/common.md#principled-implementation An empty collected array means the key was absent and returns the alternative that the transform chose for the property's type, and otherwise the array.
 * @evidence contracts/common.md#clear-and-simple-design One conditional.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The alternative is passed by the emitted code.
 * @evidence contracts/common.md#meaningful-documentation A comment states the absent-versus-empty rule.
 */
export const _httpQueryReadArray = (
  input: any[],
  alternative: null | undefined,
) => (input.length ? input : alternative);
