/**
 * Compare the equivalence of the two types X and Y.
 *
 * The two types X and Y refer to any type that can be expressed in the type script, such as the union type and the object type.
 *
 * @template X One of the types to compare
 * @template Y One of the types to compare
 *
 * ```ts
 * type Answer = Equal<1 | 2, 1 | 2>; // true
 * ```
 *
 * @author Kyungsu Kang - https://github.com/kakasoo
 */
export type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false;
