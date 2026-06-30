import { Classifiable } from "@typia/interface";

/**
 * Verifies `Classifiable<T>` strategy detection has no edge-case holes.
 *
 * Regression shield for the seed-extraction rules: a no-argument constructor
 * (implicit default or explicit) must contribute **no** constructor seed — and
 * must never leak `unknown` — a rest-parameter constructor stays usable (rest
 * is optional), a `from` that needs two arguments is not a single-seed factory,
 * and a self-referential (cyclic) class type resolves without exploding the
 * type instantiation depth.
 *
 * 1. Default / no-arg constructors collapse to the property shape only.
 * 2. Rest-parameter constructor and two-argument `from` behave per the rule.
 * 3. A cyclic class recurses through the property arm (methods omitted).
 */
export type ClassifiableStrategyEdgeCases = [
  // default constructor → property shape only (must NOT become `unknown`)
  Assert<IsEqual<Classifiable<typeof Defaulted>, { a: number }>>,
  Assert<IsEqual<Classifiable<typeof NoArg>, { a: number }>>,
  // no `from`, rest-parameter constructor is single-arg usable (rest is
  // optional) → the constructor seed (first param) wins over field copy
  Assert<IsEqual<Classifiable<typeof RestCtor>, { seed: string }>>,
  // a two-argument `from` is not a single-seed factory and the default ctor
  // yields no seed → precedence falls through to the field-copy property shape
  Assert<IsEqual<Classifiable<typeof FromTwoArgs>, { a: number }>>,
  // an overloaded constructor seeds from the signature `infer` selects (the last
  // overload) — Rev 5's documented transparent quirk; no `from`, so this
  // single-argument constructor seed wins over field copy
  Assert<IsEqual<Classifiable<typeof Overloaded>, { y: string }>>,
];

// the cyclic class type resolves and recurses (methods omitted), no overflow
export const cyclic: Classifiable<Cyclic> = {
  value: 1,
  children: [{ value: 2, children: [] }],
  next: { value: 3, children: [] },
};

type Assert<T extends true> = T;

type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;

class Defaulted {
  a!: number;
}

class NoArg {
  a!: number;
  constructor() {}
}

class RestCtor {
  a!: number;
  constructor(seed: { seed: string }, ...rest: number[]) {
    void seed;
    void rest;
  }
}

class FromTwoArgs {
  a!: number;
  static from(x: { a: number }, y: number): FromTwoArgs {
    void x;
    void y;
    return new FromTwoArgs();
  }
}

class Cyclic {
  value!: number;
  next?: Cyclic;
  children!: Cyclic[];
  walk(): void {}
}

class Overloaded {
  a!: number;
  constructor(seed: { x: number });
  constructor(seed: { y: string });
  constructor(seed: unknown) {
    void seed;
  }
}
