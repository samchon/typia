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
 * 3. A tuple seed PRESERVES its shape (arity/positions/readonly), while a `Set`
 *    seed — which has no JSON form of its own — renders as its element array.
 *
 * @evidence contracts/testing.md#behavioral-verification Classifiable must recursively project nested class/boxed/tuple/Set constructor seeds to the authored decodable input forms.
 * @evidence contracts/testing.md#independent-expectations PlainInner, string, explicit tuple shapes and a number array supply independent expected seed representations.
 * @evidence contracts/testing.md#distinguishing-cases Nested methods, boxed String versus iterable treatment, mutable/readonly tuple arity and Set-to-array conversion distinguish recursion, unboxing and container shape.
 * @evidence contracts/testing.md#execution-ownership test-interface start invokes the installed TypeScript compiler (tsc) with noEmit; ClassifiableSeedRecursionCases instantiates the real Classifiable alias and its Assert constraints. Authored assignments and expect-error directives also belong to this compile-only unit, without a generated native artifact or runtime host.
 */
export type ClassifiableSeedRecursionCases = [
  Assert<IsEqual<Classifiable<typeof NestedSeed>, { inner: PlainInner }>>,
  Assert<IsEqual<Classifiable<typeof BoxedSeed>, string>>,
  // a tuple seed keeps arity/positions (NOT widened to `(number | string)[]`,
  // which the emitted `C.from(data)` would reject)
  Assert<IsEqual<Classifiable<typeof TupleSeed>, [number, string]>>,
  Assert<
    IsEqual<Classifiable<typeof ReadonlyTupleSeed>, readonly [number, string]>
  >,
  // a `Set` seed still renders as its element array (no JSON form of its own)
  Assert<IsEqual<Classifiable<typeof SetSeed>, number[]>>,
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

class TupleSeed {
  k!: string;
  constructor(seed: [number, string]) {
    void seed;
  }
}

class ReadonlyTupleSeed {
  k!: string;
  constructor(seed: readonly [number, string]) {
    void seed;
  }
}

class SetSeed {
  k!: string;
  constructor(seed: Set<number>) {
    void seed;
  }
}
