/**
 * Checks if two types are exactly equal.
 *
 * `Equal<X, Y>` returns `true` if types X and Y are identical, `false`
 * otherwise. Works with any TypeScript types including unions.
 *
 * @author Kyungsu Kang - https://github.com/kakasoo
 *
 * @template X First type to compare
 * @template Y Second type to compare
 *
 * @evidence contracts/common.md#principled-implementation The well-known identity trick compares two deferred generic function types, which TypeScript relates by identical conditional-type constraints, so only mutually identical types return true, unlike mutual assignability. It treats some intersection forms and `any` as distinct from their reduced forms.
 * @evidence contracts/common.md#clear-and-simple-design One definition shared by all converters to decide whether a transform changed the type.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It uses TypeScript's own relation for conditional types rather than a hardcoded exception list.
 * @evidence contracts/common.md#meaningful-documentation The comment states the exact-equality meaning and documents both parameters.
 */
export type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false;
