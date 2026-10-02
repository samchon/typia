import { Classifiable } from "@typia/interface";

/**
 * Verifies `ReadonlySet`/`ReadonlyMap` classify like their mutable forms.
 *
 * Pins the read-only collection arms: a `ReadonlySet`/`ReadonlyMap` is wider
 * than `Set`/`Map` (it lacks `add`/`set`/`delete`), so it does not match the
 * mutable arms and would otherwise collapse to the method-stripped object shape
 * `{ readonly size: number }`. Dedicated arms rebuild the collection over
 * classified members and accept the JSON array/entries form too.
 *
 * 1. A `ReadonlySet<Box>` becomes `ReadonlySet<Plain> | Plain[]`.
 * 2. A `ReadonlyMap<string, Box>` becomes `ReadonlyMap<string, Plain> | [string,
 *    Plain][]`.
 * 3. The method-bearing element `Box` is classified to plain `Plain`.
 *
 * @evidence contracts/testing.md#behavioral-verification Classifiable must recursively project readonly Set/Map members while retaining readonly collection or array-entry input forms.
 * @evidence contracts/testing.md#independent-expectations Authored Plain and readonly collection unions establish the expected member and container contracts.
 * @evidence contracts/testing.md#distinguishing-cases Root versus class-member readonly collections and Set versus Map distinguish the readonly branches from mutable/weak or ordinary-object classification.
 * @evidence contracts/testing.md#execution-ownership test-interface start typechecks ClassifiableReadonlyCollectionCases through the installed TypeScript compiler (tsc) with noEmit. Each Assert requires a true result from the local symmetric type-identity or assignability check; value assignments and expect-error directives are also compile-only. No native artifact, consumer installation or runtime host executes this unit.
 */
export type ClassifiableReadonlyCollectionCases = [
  Assert<IsEqual<Classifiable<ReadonlySet<Box>>, ReadonlySet<Plain> | Plain[]>>,
  Assert<
    IsEqual<
      Classifiable<ReadonlyMap<string, Box>>,
      ReadonlyMap<string, Plain> | [string, Plain][]
    >
  >,
  // as class members they are kept (not matched as mutable Set/Map, not weak)
  // and classified through the same arms
  Assert<
    IsEqual<
      Classifiable<ReadonlyHolder>,
      {
        rs: ReadonlySet<Plain> | Plain[];
        rm: ReadonlyMap<string, Plain> | [string, Plain][];
      }
    >
  >,
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

class ReadonlyHolder {
  rs!: ReadonlySet<Box>;
  rm!: ReadonlyMap<string, Box>;
}
