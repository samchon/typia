import { Classifiable } from "@typia/interface";

/**
 * Verifies class-type detection is robust to constructor visibility, helpers,
 * and a data field named `prototype`.
 *
 * Pins the strategy-selection edges a naive gate gets wrong. A class with a
 * PRIVATE constructor (the canonical value-object / named-constructor /
 * singleton pattern) must still be detected — its static `from` seeds the
 * factory arm and, lacking `from`, its public fields seed the field-copy arm —
 * instead of the whole result collapsing to `never`. A plain object / instance
 * that merely carries a data field literally named `prototype` is NOT a class
 * and must be field-copied whole (it must not be misread as its `prototype`
 * value). And a static `from` is a factory only when it RETURNS the instance
 * (looking through a `| null` arm) — a helper returning an unrelated or `any`
 * type must not hijack.
 *
 * 1. Private ctor + static `from` → the `from` seed; private ctor + no `from` →
 *    the field-copy property shape (not `never`).
 * 2. A data field named `prototype` is field-copied whole, not treated as a class.
 * 3. `from` returning an unrelated/`any` type is ignored; `from` returning
 *    `Instance | null` is honored.
 */
export type ClassifiableClassDetectionCases = [
  Assert<IsEqual<Classifiable<typeof Singleton>, { value: number }>>,
  Assert<IsEqual<Classifiable<typeof PrivateNoFrom>, { data: string }>>,
  Assert<IsEqual<Classifiable<typeof HasHelperFrom>, { value: number }>>,
  // a plain object with a `prototype` DATA field is NOT a class — field-copied
  // whole, not misread as its `prototype` value (regression guard)
  Assert<
    IsEqual<
      Classifiable<{ prototype: { inner: number }; other: string }>,
      { prototype: { inner: number }; other: string }
    >
  >,
  // same for a class INSTANCE type carrying a `prototype` field (the common call)
  Assert<
    IsEqual<Classifiable<WithProtoField>, { prototype: number[]; tag: string }>
  >,
  // a `from` returning `any` is not a factory and must not hijack the strategy
  Assert<IsEqual<Classifiable<typeof AnyReturnFrom>, { value: number }>>,
  // a `from` returning `Instance | null` IS a factory (the null arm is looked
  // through), so its seed is accepted
  Assert<IsEqual<Classifiable<typeof NullableFrom>, { seed: string }>>,
  // a CALLABLE object carrying a `prototype` field is not a class → `never`
  // (a function is not a JSON-decodable classify target)
  Assert<
    IsEqual<
      Classifiable<{
        (x: number): string;
        prototype: { foo: number };
        meta: number;
      }>,
      never
    >
  >,
  // a `from` that constructs nothing (`never`, or only `null`/`undefined`) is
  // not a factory → field-copy property shape
  Assert<IsEqual<Classifiable<typeof NeverFrom>, { id: string }>>,
  Assert<IsEqual<Classifiable<typeof NullishFrom>, { id: string }>>,
];

type Assert<T extends true> = T;

type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;

class Singleton {
  value!: number;
  private constructor(seed: { value: number }) {
    this.value = seed.value;
  }
  static from(seed: { value: number }): Singleton {
    return new Singleton(seed);
  }
}

class PrivateNoFrom {
  data!: string;
  private constructor() {}
}

class HasHelperFrom {
  value!: number;
  // a helper that returns something OTHER than the instance — not a factory
  static from(text: string): number {
    return Number(text);
  }
}

class WithProtoField {
  prototype!: number[];
  tag!: string;
}

class AnyReturnFrom {
  value!: number;
  static from(options: { key: string }): any {
    return options;
  }
}

class NullableFrom {
  id!: number;
  static from(seed: { seed: string }): NullableFrom | null {
    void seed;
    return null;
  }
}

class NeverFrom {
  id!: string;
  static from(s: { iso: string }): never {
    void s;
    throw new Error();
  }
}

class NullishFrom {
  id!: string;
  static from(s: { iso: string }): null | undefined {
    void s;
    return null;
  }
}
