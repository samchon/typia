/**
 * Tests whether a string type contains an unconstrained template segment.
 *
 * The test recursively removes inferred leading text until the remainder admits
 * any string, or decomposition stops. It is used by key converters to stop
 * recursion at unconstrained text; it is not a classifier for every possible
 * template-literal constraint. Very long literals can reach TypeScript's
 * conditional-type recursion limit.
 *
 * @evidence contracts/common.md#principled-implementation string extends T identifies an unconstrained string domain; otherwise inferred template remainders are tested recursively until that condition holds or decomposition stops. The result reflects those conditional-type branches, not a guarantee of detecting every open-ended template-literal constraint.
 * @evidence contracts/common.md#clear-and-simple-design A small recursive conditional that lets key converters leave broad keys as `string` instead of recursing indefinitely.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts A structural test on the string type with no cast or key-specific branch. It depends on TypeScript's conditional-type recursion limit for very long literal keys.
 * @evidence contracts/common.md#meaningful-documentation The native comment explains the recursion's stopping condition, key-converter use and limited classification/recursion scope.
 */
export type IsBroadString<T extends string> = string extends T
  ? true
  : T extends `${infer _First}${infer Rest}`
    ? IsBroadString<Rest>
    : false;
