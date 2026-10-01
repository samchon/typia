/**
 * Read a collected form field list; an empty list means the field was absent
 * and gives the alternative that the property's type calls for.
 *
 * @evidence contracts/common.md#principled-implementation An empty collected array means the field was absent, so it returns the caller's alternative, which the transform sets to null or undefined according to the property's type, and otherwise returns the array unchanged.
 * @evidence contracts/common.md#clear-and-simple-design One conditional.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The alternative is passed by the emitted code and not chosen here.
 * @evidence contracts/common.md#meaningful-documentation A comment states the absent-versus-empty rule.
 */
export const _httpFormDataReadArray = (
  input: any[],
  alternative: null | undefined,
) => (input.length ? input : alternative);
