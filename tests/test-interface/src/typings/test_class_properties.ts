import { ClassProperties } from "@typia/interface";

/**
 * Verifies `ClassProperties<T>` strips methods at exactly one level (shallow).
 *
 * Pins the shallow contract that distinguishes it from the recursive
 * `Classifiable<T>`: function-typed members are removed, every data member
 * survives unchanged, and a nested class member is kept _as the class_ (methods
 * and all) rather than being recursed into a plain shape.
 *
 * 1. Strip the method from a class with a nested class member.
 * 2. Confirm the nested class is preserved verbatim (not flattened).
 * 3. Confirm a getter-backed member survives.
 */
export type ClassPropertiesCases = [
  Assert<IsEqual<ClassProperties<Bar>, { x: number }>>,
  Assert<
    IsEqual<
      ClassProperties<Foo>,
      { a: number; b: string; readonly upper: string; child: Bar }
    >
  >,
];

type Assert<T extends true> = T;

type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;

class Bar {
  x!: number;
  grow(): void {}
}

class Foo {
  a!: number;
  b!: string;
  get upper(): string {
    return this.b;
  }
  method(): void {}
  child!: Bar;
}
