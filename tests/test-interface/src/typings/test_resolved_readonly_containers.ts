import { Resolved } from "@typia/interface";

/**
 * Verifies `Resolved<T>` preserves readonly container and tuple contracts.
 *
 * Readonly arrays, sets, and maps do not extend their mutable counterparts, so
 * mutable-only conditionals expose collection methods as object fields, while
 * tuple checks based on extra keys mistake tagged arrays for tuples. The result
 * must remain the same container kind while recursively resolving its members.
 *
 * 1. Resolve mutable, readonly, and branded arrays plus tuple variants.
 * 2. Resolve mutable and readonly sets and maps.
 * 3. Confirm nested methods disappear without losing container readonlyness.
 *
 * @evidence contracts/testing.md#behavioral-verification Resolved must preserve mutable/readonly container kinds and optional/rest tuple structure while converting Mutable members to Plain.
 * @evidence contracts/testing.md#independent-expectations The handwritten Plain shape retains data and maps methods to never; authored container outputs establish readonlyness and element/key conversion.
 * @evidence contracts/testing.md#distinguishing-cases Mutable/readonly/branded arrays, optional-only/rest tuples and mutable/readonly Set/Map distinguish shape from nested projection.
 * @evidence contracts/testing.md#execution-ownership test-interface start typechecks ResolvedReadonlyContainerCases through the installed TypeScript compiler (tsc) with noEmit. Each Assert requires a true result from the local symmetric type-identity or assignability check; value assignments and expect-error directives are also compile-only. No native artifact, consumer installation or runtime host executes this unit.
 */
export type ResolvedReadonlyContainerCases = [
  Assert<IsEqual<Resolved<Mutable[]>, Plain[]>>,
  Assert<IsEqual<Resolved<BrandedArray>, string[]>>,
  Assert<IsEqual<Resolved<readonly Mutable[]>, readonly Plain[]>>,
  Assert<IsEqual<Resolved<readonly [Mutable?]>, readonly [Plain?]>>,
  Assert<
    IsEqual<
      Resolved<readonly [Mutable, Mutable?, ...Mutable[]]>,
      readonly [Plain, Plain?, ...Plain[]]
    >
  >,
  Assert<IsEqual<Resolved<Set<Mutable>>, Set<Plain>>>,
  Assert<IsEqual<Resolved<ReadonlySet<Mutable>>, ReadonlySet<Plain>>>,
  Assert<IsEqual<Resolved<Map<Mutable, Mutable>>, Map<Plain, Plain>>>,
  Assert<
    IsEqual<Resolved<ReadonlyMap<Mutable, Mutable>>, ReadonlyMap<Plain, Plain>>
  >,
];

interface Mutable {
  value: number;
  run(): void;
}
interface Plain {
  value: number;
  run: never;
}

type BrandedArray = string[] & { readonly __brand?: "array" };

type Assert<T extends true> = T;
type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;
