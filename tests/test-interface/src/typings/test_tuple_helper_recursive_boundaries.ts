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
 *
 * @evidence contracts/testing.md#behavioral-verification Resolved and each notation alias must expose the authored head type/key of a recursive rest tuple while compilation terminates.
 * @evidence contracts/testing.md#independent-expectations Literal string and key-union outputs establish the visible head meaning independently of recursion expansion.
 * @evidence contracts/testing.md#distinguishing-cases Boxed String in recursive Resolved and method-free recursive notation heads cover the five families. The test checks termination and head semantics, not identity of every recursively expanded tail.
 * @evidence contracts/testing.md#execution-ownership test-interface start typechecks TupleHelperRecursiveBoundaryCases through the installed TypeScript compiler (tsc) with noEmit. Each Assert requires a true result from the local symmetric type-identity or assignability check; value assignments and expect-error directives are also compile-only. No native artifact, consumer installation or runtime host executes this unit.
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
