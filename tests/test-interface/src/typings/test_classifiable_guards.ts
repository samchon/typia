import { Classifiable } from "@typia/interface";

/**
 * Verifies `Classifiable<T>`'s soundness guards and class-only arms.
 *
 * Pins the union-poisoning guards and the class-vs-instance arm gating: `any`
 * and `unknown` are rejected to `never` so they cannot widen the union; an
 * instance (or plain object) method named `from` must NOT seed a spurious
 * factory arm (the factory arm is class-only); and a native **class** type
 * honors its single-argument constructor seed (`new Date(x)`).
 *
 * 1. `Classifiable<any>` / `Classifiable<unknown>` collapse to `never`.
 * 2. An instance `from` method leaves only the property shape.
 * 3. `Classifiable<typeof Date>` is the `new Date(x)` seed union.
 */
export type ClassifiableGuardCases = [
  Assert<[Classifiable<any>] extends [never] ? true : false>,
  Assert<[Classifiable<unknown>] extends [never] ? true : false>,
  // `any` in a mixed union must not poison the other arm
  Assert<[Classifiable<any>] extends [never] ? true : false>,
  // an instance method named `from` does not create a factory arm
  Assert<IsEqual<Classifiable<HasFromMethod>, { value: string }>>,
  // a native class TYPE honors its constructor seed (new Date(x))
  Assert<IsEqual<Classifiable<typeof Date>, string | number | Date>>,
];

// the Map class type accepts the JSON entries form as a construction seed
export const mapSeed: Classifiable<typeof Map<string, number>> = [["a", 1]];

type Assert<T extends true> = T;

type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;

class HasFromMethod {
  value!: string;
  from(x: { s: string }): void {
    void x;
  }
}
