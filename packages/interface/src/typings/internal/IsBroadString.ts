/**
 * Tests whether a string type contains an unconstrained template segment.
 *
 * @evidence contracts/common.md#principled-implementation A literal type is not broad, whereas `string extends T` holds for `string` itself; for a template-literal type the recursion consumes one character at a time and reaches the template's unconstrained segment, where `string extends Rest` becomes true. It therefore detects any pattern-type key that cannot be inspected character by character.
 * @evidence contracts/common.md#clear-and-simple-design A small recursive conditional that lets key converters leave broad keys as `string` instead of recursing indefinitely.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts A structural test on the string type with no cast or key-specific branch. It depends on TypeScript's conditional-type recursion limit for very long literal keys.
 * @evidence contracts/common.md#meaningful-documentation The one-line comment states the property tested; it does not explain the recursion.
 */
export type IsBroadString<T extends string> = string extends T
  ? true
  : T extends `${infer _First}${infer Rest}`
    ? IsBroadString<Rest>
    : false;
