import { Classifiable } from "@typia/interface";

/**
 * Verifies an optional method is omitted, so a live instance is still accepted.
 *
 * Pins the method-dropping key remap against optionality: an optional method
 * `greet?(): string` has type `(() => string) | undefined`, which does not
 * `extends Function`, so a bare `T[P] extends Function` predicate keeps the key
 * and maps it to `greet?: undefined` — silently rejecting the class's own
 * instance and breaking the "the property shape structurally accepts a live
 * instance" contract. The remap looks through optionality via `NonNullable`.
 *
 * 1. The optional method key is dropped from the classified shape.
 * 2. The classified shape equals the data-only `{ id: number }`.
 * 3. A live instance of the class is assignable to its classified shape.
 *
 * @evidence contracts/testing.md#behavioral-verification Classifiable must omit an optional method and retain assignability of the live instance to its data shape.
 * @evidence contracts/testing.md#independent-expectations The explicit id-only object is independent of the alias; TypeScript assignability checks the actual method-bearing class against that shape.
 * @evidence contracts/testing.md#distinguishing-cases Optional callable versus required numeric data pins absence-aware method omission; the separate instance-assignability control prevents keeping an undefined-valued method key.
 * @evidence contracts/testing.md#execution-ownership test-interface start typechecks ClassifiableOptionalMethodCases through the installed TypeScript compiler (tsc) with noEmit. Each Assert requires a true result from the local symmetric type-identity or assignability check; value assignments and expect-error directives are also compile-only. No native artifact, consumer installation or runtime host executes this unit.
 */
export type ClassifiableOptionalMethodCases = [
  Assert<IsEqual<Classifiable<WithOptionalMethod>, { id: number }>>,
  Assert<
    WithOptionalMethod extends Classifiable<WithOptionalMethod> ? true : false
  >,
];

type Assert<T extends true> = T;

type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;

class WithOptionalMethod {
  id!: number;
  greet?(): string;
}
