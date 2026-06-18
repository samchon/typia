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
