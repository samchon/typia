/**
 * In order to determine whether it is the same in the union type,
 * the types are compared by wrapping them with a function with a generic type as a factor once more.
 *
 * ```ts
 * type Answer = Equal<1 | 2, 1 | 2>; // true
 * ```
 */
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false;
