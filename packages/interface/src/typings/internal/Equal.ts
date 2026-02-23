/**
<<<<<<< HEAD
 * Compare the equivalence of the two types X and Y.
 *
 * The two types X and Y refer to any type that can be expressed in the
 * TypeScript, such as the union type and the object type.
 *
 * @author Kyungsu Kang - https://github.com/kakasoo
 * @template X One of the types to compare
 * @template Y One of the types to compare
 *
 *   ```ts
 *   type Answer = Equal<1 | 2, 1 | 2>; // true
 *   ```
=======
 * Checks if two types are exactly equal.
 *
 * `Equal<X, Y>` returns `true` if types X and Y are identical, `false`
 * otherwise. Works with any TypeScript types including unions.
 *
 * @author Kyungsu Kang - https://github.com/kakasoo
 * @template X First type to compare
 * @template Y Second type to compare
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false;
