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
 *
 * @evidence contracts/testing.md#behavioral-verification Classifiable must resolve any/unknown factory inputs to strict property shapes rather than expose any or unknown acceptance.
 * @evidence contracts/testing.md#independent-expectations Handwritten id/name shapes establish the fallback contract independently of seed inference; type identity rejects absorbed any/unknown outputs.
 * @evidence contracts/testing.md#distinguishing-cases Any and unknown are separate unconstrained seed controls, with required numeric/string data making widened input distinguishable. Typed seed precedence is covered by the strategy cases.
 * @evidence contracts/testing.md#execution-ownership test-interface start invokes the installed TypeScript compiler (tsc) with noEmit; ClassifiableSeedAnyPoisonCases instantiates the real Classifiable alias and its Assert constraints. Authored assignments and expect-error directives also belong to this compile-only unit, without a generated native artifact or runtime host.
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
