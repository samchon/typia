import { SpecialFields } from "@typia/interface";

/**
 * Verifies `SpecialFields<Instance, Target>` selects keys by value type.
 *
 * Pins the key-filtering behaviour: it returns the union of property names
 * whose value extends `Target` — used to pick method keys (`Function`),
 * `never`-typed keys (the basis of `OmitNever`), or any value-shaped subset.
 *
 * 1. Select number-valued keys from a mixed object.
 * 2. Select method keys via `Function`, and `never`-valued keys via `never`.
 * 3. Confirm a no-match query yields `never`.
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
