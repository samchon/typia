import { Resolved } from "@typia/interface";

/**
 * Verifies `Resolved<T>` preserves readonly container and tuple contracts.
 *
 * Readonly arrays, sets, and maps do not extend their mutable counterparts, so
 * mutable-only conditionals expose collection methods as object fields. The
 * result must remain the same container kind while recursively resolving its
 * members.
 *
 * 1. Resolve mutable and readonly arrays plus fixed and variadic tuples.
 * 2. Resolve mutable and readonly sets and maps.
 * 3. Confirm nested methods disappear without losing container readonlyness.
 */
export type ResolvedReadonlyContainerCases = [
  Assert<IsEqual<Resolved<Mutable[]>, Plain[]>>,
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

type Assert<T extends true> = T;
type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;
