/**
 * Checks if an array type is a tuple (fixed length) or regular array.
 *
 * Returns `true` for tuple types like `[string, number]` where length is fixed,
 * and `false` for array types like `string[]` where length is variable.
 *
 * @template T Array or tuple type to check
 *
 * @evidence contracts/common.md#principled-implementation Fixed length is detected through the `length` property: a tuple's length is a literal while an array's is `number`; `never` is guarded first because it would distribute to a vacuous result. Variadic tuples have `number` length and therefore report false.
 * @evidence contracts/common.md#clear-and-simple-design One conditional on `length`, shared by the other utilities that only support fixed tuples.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts A structural test with no cast or consumer-specific case.
 * @evidence contracts/common.md#meaningful-documentation The comment states the array-versus-tuple meaning; the variadic-tuple result follows from the length rule and is handled separately by Primitive.
 */
export type IsTuple<T extends readonly any[] | { length: number }> = [
  T,
] extends [never]
  ? false
  : T extends readonly any[]
    ? number extends T["length"]
      ? false
      : true
    : false;
