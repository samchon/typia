import { Classifiable } from "@typia/interface";

/**
 * Verifies `Classifiable<T>`'s soundness guards and class-only arms.
 *
 * Pins the union-poisoning guards and the class-vs-instance arm gating: a
 * top-level `any`/`unknown` is rejected to `never` (while a nested `any` is
 * preserved as-is), so the union is never poisoned; an instance (or plain
 * object) method named `from` must NOT seed a spurious factory arm (the factory
 * arm is class-only); and a native **class** type honors its single-argument
 * constructor seed (`new Date(x)`).
 *
 * 1. Top-level `Classifiable<any>` / `Classifiable<unknown>` collapse to `never`,
 *    but a nested `any` property survives unchanged.
 * 2. An instance `from` method leaves only the property shape.
 * 3. `Classifiable<typeof Date>` is the `new Date(x)` constructor seed.
 *
 * @evidence contracts/testing.md#behavioral-verification Assert constraints make compilation fail when top-level poison types survive, nested any is erased, an instance from method creates a factory seed, or the Date class seed differs from its constructor parameter.
 * @evidence contracts/testing.md#independent-expectations Expected property records and the literal Date constructor parameter union come from TypeScript's declared shapes; the private bidirectional IsEqual predicate and Assert bound compare them without runtime typia output.
 * @evidence contracts/testing.md#distinguishing-cases Top-level any and unknown must collapse while nested any survives; instance method presence must not behave like a static class factory, and a native constructor must retain its actual seed type.
 * @evidence contracts/testing.md#execution-ownership test-interface's start command runs ttsc with noEmit over all src files; this exported tuple instantiates Assert constraints and participates in the compiler exit result without runtime discovery.
 */
export type ClassifiableGuardCases = [
  Assert<[Classifiable<any>] extends [never] ? true : false>,
  Assert<[Classifiable<unknown>] extends [never] ? true : false>,
  // a NESTED `any` is preserved as-is — only a top-level `any`/`unknown` target
  // is rejected, so the union is never poisoned from within a property
  Assert<IsEqual<Classifiable<{ a: number; b: any }>, { a: number; b: any }>>,
  // an instance method named `from` does not create a factory arm
  Assert<IsEqual<Classifiable<HasFromMethod>, { value: string }>>,
  // a native class TYPE resolves to its single-argument constructor seed
  // (`new Date(value)`, whose value is `string | number | Date`); precedence
  // picks the ctor, and `Date` here comes from that seed, not a field-copy arm
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
