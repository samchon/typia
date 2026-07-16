import { DeepPartial } from "@typia/interface";

/**
 * Verifies `DeepPartial<T>` preserves every callable and construct signature.
 *
 * A callable predicate accepting `unknown[]` is narrower than parameterized
 * functions under strict variance, while constructors are callable only with
 * `new`. Both categories must pass through unchanged instead of becoming an
 * optional mapped object.
 *
 * 1. Apply `DeepPartial` to parameterized, rest, overloaded, and generic calls.
 * 2. Apply it to concrete and abstract constructor signatures.
 * 3. Require exact type identity for every signature.
 */
export type DeepPartialCallableCases = [
  Assert<IsEqual<DeepPartial<Parameterized>, Parameterized>>,
  Assert<IsEqual<DeepPartial<RestCallable>, RestCallable>>,
  Assert<IsEqual<DeepPartial<Overloaded>, Overloaded>>,
  Assert<IsEqual<DeepPartial<Generic>, Generic>>,
  Assert<IsEqual<DeepPartial<Constructor>, Constructor>>,
  Assert<IsEqual<DeepPartial<AbstractConstructor>, AbstractConstructor>>,
];

type Parameterized = (value: string, count?: number) => boolean;
type RestCallable = (head: string, ...tail: number[]) => string;
interface Overloaded {
  (value: string): number;
  (value: number): string;
}
type Generic = <T>(value: T) => T;
type Constructor = new (value: string) => { value: string };
type AbstractConstructor = abstract new (value: number) => { value: number };

type Assert<T extends true> = T;
type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;
