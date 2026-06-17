import { Classifiable } from "@typia/interface";

/**
 * Verifies a construction seed is recursively classified, not passed through
 * raw.
 *
 * Pins `ClassifiableSeedValue`: a `from`/`new` seed is rendered as the plain,
 * JSON-decodable form — a nested class inside the seed is method-stripped and
 * classified like any other member (rather than surviving with its prototype
 * methods), and a boxed `String` seed collapses to the primitive `string`
 * instead of `string[]` (it would otherwise match the `Iterable` arm via its
 * iterator). The class here is not default-constructible, so only the seed arm
 * survives, isolating the seed transform.
 *
 * 1. A `constructor(seed: { inner: Inner })` classifies `Inner` (drops methods).
 * 2. A `constructor(seed: String)` (boxed) yields `string`, not `string[]`.
 * 3. The resulting seed therefore carries only plain data.
 */
export type ClassifiableSeedRecursionCases = [
  Assert<IsEqual<Classifiable<typeof NestedSeed>, { inner: PlainInner }>>,
  Assert<IsEqual<Classifiable<typeof BoxedSeed>, string>>,
];

type Assert<T extends true> = T;

type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;

class Inner {
  v!: number;
  hello(): void {}
}

interface PlainInner {
  v: number;
}

class NestedSeed {
  constructor(seed: { inner: Inner }) {
    void seed;
  }
}

class BoxedSeed {
  // boxed `String` (not the primitive) on purpose, to pin the unwrap
  constructor(seed: String) {
    void seed;
  }
}
