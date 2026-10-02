import { SpecialFields } from "@typia/interface";

/**
 * Verifies `SpecialFields<Instance, Target>` selects keys by value type.
 *
 * Pins the key-filtering behavior: it returns the union of property names whose
 * value extends `Target` — used to pick method keys (`Function`), `never`-typed
 * keys (the basis of `OmitNever`), or any value-shaped subset.
 *
 * 1. Select number-valued keys from a mixed object.
 * 2. Select method keys via `Function`, and `never`-valued keys via `never`.
 * 3. Confirm a no-match query yields `never`.
 *
 * @evidence contracts/testing.md#behavioral-verification SpecialFields must return the exact number/function/never key union and return never for a no-match query.
 * @evidence contracts/testing.md#independent-expectations Literal key unions follow the authored field value types and the target assignability contract, without another SpecialFields computation.
 * @evidence contracts/testing.md#distinguishing-cases Number/function targets include several matches and adjacent nonmatches; a never-valued member and a Boolean no-match query pin impossible and empty selection.
 * @evidence contracts/testing.md#execution-ownership test-interface start runs the installed TypeScript compiler (tsc) with noEmit over src; the exported SpecialFieldsCases tuple is instantiated by the compiler and each Assert requires true. These are compile-only type units, with no native artifact or runtime host; local Assert and symmetric IsEqual supply the typecheck oracle.
 */
export type SpecialFieldsCases = [
  Assert<
    IsEqual<
      SpecialFields<{ a: number; b: string; c: number }, number>,
      "a" | "c"
    >
  >,
  Assert<
    IsEqual<
      SpecialFields<{ a: () => void; b: number; c: () => string }, Function>,
      "a" | "c"
    >
  >,
  Assert<IsEqual<SpecialFields<{ a: never; b: number }, never>, "a">>,
  Assert<IsEqual<SpecialFields<{ a: number; b: string }, boolean>, never>>,
];

type Assert<T extends true> = T;

type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;
