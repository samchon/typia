import {
  CamelCase,
  KebabCase,
  PascalCase,
  Resolved,
  SnakeCase,
} from "@typia/interface";

/**
 * Verifies homomorphic tuple transforms terminate on recursive rest aliases.
 *
 * Preserving a variadic tuple by mapping all of its declared positions can
 * revisit the tuple through its own rest element. The transformed head must
 * remain available without making TypeScript expand that recursive path
 * forever.
 *
 * 1. Resolve a recursive tuple and inspect its transformed head.
 * 2. Apply every notation family to a recursive tuple.
 * 3. Confirm each notation head is renamed while compilation terminates.
 */
export type TupleHelperRecursiveBoundaryCases = [
  Assert<IsEqual<Resolved<RecursiveResolved>[0], string>>,
  Assert<IsEqual<keyof CamelCase<RecursiveNotation>[0], "firstValue">>,
  Assert<IsEqual<keyof PascalCase<RecursiveNotation>[0], "FirstValue">>,
  Assert<IsEqual<keyof SnakeCase<RecursiveNotation>[0], "first_value">>,
  Assert<IsEqual<keyof KebabCase<RecursiveNotation>[0], "first-value">>,
];

type RecursiveResolved = [String, ...RecursiveResolved[]];
type RecursiveNotation = [{ first_value: String }, ...RecursiveNotation[]];

type Assert<T extends true> = T;
type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;
