<<<<<<< HEAD
=======
/**
 * Checks if an array type is a tuple (fixed length) or regular array.
 *
 * Returns `true` for tuple types like `[string, number]` where length is fixed,
 * and `false` for array types like `string[]` where length is variable.
 *
 * @template T Array or tuple type to check
 */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
export type IsTuple<T extends readonly any[] | { length: number }> = [
  T,
] extends [never]
  ? false
  : T extends readonly any[]
    ? number extends T["length"]
      ? false
      : true
    : false;
