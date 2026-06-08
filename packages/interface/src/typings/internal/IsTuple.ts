/**
 * Checks if an array type is a tuple or regular array.
 *
 * Returns `true` for tuple types like `[string, number]` and variadic tuples
 * like `[string, ...number[], boolean]`, and `false` for array types like
 * `string[]`.
 *
 * @template T Array or tuple type to check
 */
export type IsTuple<T extends readonly any[] | { length: number }> = [
  T,
] extends [never]
  ? false
  : T extends any[]
    ? any[] extends T
      ? false
      : true
    : T extends readonly any[]
      ? readonly any[] extends T
        ? false
        : true
      : false;
