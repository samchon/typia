import { Classifiable } from "@typia/interface";

/**
 * Verifies an `any`/`unknown` construction seed cannot poison the union.
 *
 * Pins the seed-value guard inside `ClassifiableSeedValue`: a class whose
 * factory takes `any` (the common `static from(json: any)` JSON pattern) or
 * `unknown` must NOT collapse `Classifiable<typeof T>` to `any`/`unknown` — the
 * seed arm drops to `never` and only the genuinely-typed property arm survives,
 * mirroring the no-argument-constructor hardening. Without the guard the seed
 * arm leaks `any`, and `X | any` absorbs the whole union to `any`.
 *
 * 1. A `static from(json: any)` factory leaves only the property shape.
 * 2. A `static from(x: unknown)` factory likewise contributes no widening arm.
 * 3. The resolved type stays the strict property shape, never `any`/`unknown`.
 */
export type ClassifiableSeedAnyPoisonCases = [
  Assert<
    IsEqual<Classifiable<typeof AnyFactory>, { id: number; name: string }>
  >,
  Assert<IsEqual<Classifiable<typeof UnknownFactory>, { id: number }>>,
];

type Assert<T extends true> = T;

type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;

class AnyFactory {
  id!: number;
  name!: string;
  static from(json: any): AnyFactory {
    void json;
    return new AnyFactory();
  }
}

class UnknownFactory {
  id!: number;
  static from(x: unknown): UnknownFactory {
    void x;
    return new UnknownFactory();
  }
}
