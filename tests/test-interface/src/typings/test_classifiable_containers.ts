import { Classifiable } from "@typia/interface";

/**
 * Verifies `Classifiable<T>` recurses through every container shape.
 *
 * Pins the container branches: arrays and tuples (mutable and `readonly`,
 * fixed/optional/rest/variadic) recurse element-wise with the `readonly`
 * modifier preserved, `Set`/`Map` rebuild over classified members, index
 * signatures (`Record`) recurse over their value, and `WeakSet`/`WeakMap`
 * collapse to `never` (they cannot be reconstructed from plain data).
 *
 * 1. Build each container over a method-bearing class `Box`.
 * 2. Apply `Classifiable` and compare against the plain-element container.
 * 3. Assert array elements still demand their required data members.
 */
export type ClassifiableContainerCases = [
  // arrays
  Assert<IsEqual<Classifiable<Box[]>, Plain[]>>,
  Assert<IsEqual<Classifiable<readonly Box[]>, readonly Plain[]>>,
  Assert<IsEqual<Classifiable<Box[][]>, Plain[][]>>,
  // tuples
  Assert<IsEqual<Classifiable<[Box, number]>, [Plain, number]>>,
  Assert<
    IsEqual<Classifiable<readonly [Box, number]>, readonly [Plain, number]>
  >,
  Assert<IsEqual<Classifiable<[Box, number?]>, [Plain, number?]>>,
  Assert<IsEqual<Classifiable<[]>, []>>,
  // variadic / rest tuples degrade to arrays (shared IsTuple semantics)
  Assert<IsEqual<Classifiable<[Box, ...Box[]]>, Plain[]>>,
  Assert<
    IsEqual<
      Classifiable<readonly [string, ...Box[]]>,
      readonly (string | Plain)[]
    >
  >,
  // sets & maps also accept their array / entries form (JSON round-trip)
  Assert<IsEqual<Classifiable<Set<Box>>, Set<Plain> | Plain[]>>,
  Assert<
    IsEqual<
      Classifiable<Map<string, Box>>,
      Map<string, Plain> | [string, Plain][]
    >
  >,
  Assert<
    IsEqual<
      Classifiable<Map<Box, Box[]>>,
      Map<Plain, Plain[]> | [Plain, Plain[]][]
    >
  >,
  // weak collections cannot be reconstructed
  Assert<IsEqual<Classifiable<WeakSet<Box>>, never>>,
  Assert<IsEqual<Classifiable<WeakMap<Box, Box>>, never>>,
  // index signatures recurse over the value type
  Assert<IsEqual<Classifiable<Record<string, Box>>, Record<string, Plain>>>,
  Assert<
    IsEqual<Classifiable<{ [key: number]: Box }>, { [key: number]: Plain }>
  >,
];

export const validArray: Classifiable<Box[]> = [{ id: 1 }, { id: 2 }];

// @ts-expect-error array elements still require their data members.
export const invalidArray: Classifiable<Box[]> = [{}, { id: 2 }];

export const validMap: Classifiable<Map<string, Box>> = new Map([
  ["a", { id: 1 }],
]);

// the array / entries forms are accepted too (what JSON.parse yields)
export const validSetAsArray: Classifiable<Set<Box>> = [{ id: 1 }];
export const validMapAsEntries: Classifiable<Map<string, Box>> = [
  ["a", { id: 1 }],
];

type Assert<T extends true> = T;

type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;

class Box {
  id!: number;
  open(): void {}
}

interface Plain {
  id: number;
}
