/** Utility type to check if a type is never. */
type IsNever<T> = [T] extends [never] ? true : false;

/**
 * Convert a union type to an intersection type using distributive conditional
 * types.
 */
type UnionToIntersection<Union> = (
  Union extends unknown ? (distributedUnion: Union) => void : never
) extends (mergedIntersection: infer Intersection) => void
  ? Intersection & Union
  : never;

/** Returns the last element of a union type. */
type LastOfUnion<T> =
  UnionToIntersection<T extends any ? () => T : never> extends () => infer R
    ? R
    : never;

/**
 * Convert a union type into a tuple type of its elements.
 *
 * The elements of the tuple are not guaranteed to be in the same order as in
 * the union type. The arrangement can appear random and may change at any
 * time.
 *
 * @example
 *   ```typescript
 *   type Numbers = 1 | 2 | 3;
 *   type NumbersTuple = UnionToTuple<Numbers>;
 *   //=> [1, 2, 3] (or similar order)
 *   ```;
 */
export type UnionToTuple<T, L = LastOfUnion<T>> =
  IsNever<T> extends false ? [...UnionToTuple<Exclude<T, L>>, L] : [];
