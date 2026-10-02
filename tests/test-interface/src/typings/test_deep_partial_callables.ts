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
 * 3. Preserve the same signatures through nested properties and unions.
 *
 * @evidence contracts/testing.md#behavioral-verification DeepPartial must preserve parameterized/rest/overloaded/generic calls and concrete/abstract construction while still partializing adjacent data.
 * @evidence contracts/testing.md#independent-expectations Original authored call and constructor types establish identity; handwritten nested and union outputs establish data recursion independently.
 * @evidence contracts/testing.md#distinguishing-cases Call versus new signatures, optional/rest arguments, overloads/generics and nested/union data distinguish signature preservation from mapped-object conversion.
 * @evidence contracts/testing.md#execution-ownership test-interface start runs the installed TypeScript compiler (tsc) with noEmit over src; the exported DeepPartialCallableCases tuple is instantiated by the compiler and each Assert requires true. These are compile-only type units, with no native artifact or runtime host; local Assert and symmetric IsEqual supply the typecheck oracle.
 */
export type DeepPartialCallableCases = [
  Assert<IsEqual<DeepPartial<Parameterized>, Parameterized>>,
  Assert<IsEqual<DeepPartial<RestCallable>, RestCallable>>,
  Assert<IsEqual<DeepPartial<Overloaded>, Overloaded>>,
  Assert<IsEqual<DeepPartial<Generic>, Generic>>,
  Assert<IsEqual<DeepPartial<Constructor>, Constructor>>,
  Assert<IsEqual<DeepPartial<AbstractConstructor>, AbstractConstructor>>,
  Assert<
    IsEqual<
      DeepPartial<{ handler: Parameterized; child: { value: string } }>,
      { handler?: Parameterized; child?: { value?: string } }
    >
  >,
  Assert<
    IsEqual<
      DeepPartial<Parameterized | { value: string }>,
      Parameterized | { value?: string }
    >
  >,
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
