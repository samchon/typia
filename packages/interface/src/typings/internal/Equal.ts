/**
 * Checks if two types are exactly equal.
 *
 * `Equal<X, Y>` returns `true` if types X and Y are identical,
 * `false` otherwise. Works with any TypeScript types including unions.
 *
 * @template X First type to compare
 * @template Y Second type to compare
 */
export type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false;
