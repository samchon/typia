import { Classifiable } from "@typia/interface";

/**
 * Verifies class-type detection is robust to constructor visibility and
 * helpers.
 *
 * Pins three strategy-selection edges a naive `abstract new` gate gets wrong: a
 * class with a PRIVATE constructor (the canonical value-object / named-
 * constructor / singleton pattern) is still detected — its static `from` seeds
 * the factory arm and, lacking `from`, its public fields seed the field-copy
 * arm — instead of the whole union collapsing to `never`; and a static `from`
 * whose RETURN type is unrelated to the class is a helper, not a factory, so it
 * must not hijack the strategy.
 *
 * 1. Private ctor + static `from` → the `from` seed.
 * 2. Private ctor + no `from` → the field-copy property shape (not `never`).
 * 3. A `from` returning an unrelated type does not seed the factory arm.
 */
export type ClassifiableClassDetectionCases = [
  Assert<IsEqual<Classifiable<typeof Singleton>, { value: number }>>,
  Assert<IsEqual<Classifiable<typeof PrivateNoFrom>, { data: string }>>,
  Assert<IsEqual<Classifiable<typeof HasHelperFrom>, { value: number }>>,
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
