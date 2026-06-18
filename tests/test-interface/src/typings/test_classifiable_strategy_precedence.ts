import { Classifiable } from "@typia/interface";

/**
 * Verifies `Classifiable<typeof T>` is the ONE strategy the transform picks.
 *
 * The runtime builds each class with exactly one construction strategy, in
 * precedence order `T.from(x)` → `new T(x)` → field copy, so
 * `Classifiable<typeof T>` must resolve to that single strategy's seed — never
 * a union of all three (a union would accept inputs a later strategy rejects,
 * e.g. the property shape for a class the runtime builds via `from`). Field
 * copy is the universal fallback: it is `Object.create(prototype)` + assign, so
 * even a class with a required multi-argument constructor and no `from` is
 * classifiable (it is NOT `never`).
 *
 * 1. `from` wins over an available constructor and field copy.
 * 2. A single-argument constructor wins over field copy.
 * 3. Neither a usable `from` nor a single-argument constructor → field copy.
 */
export type ClassifiableStrategyPrecedenceCases = [
  // 1. `from` wins even though the ctor is single-arg and the class is
  //    default-constructible — only the factory seed is accepted
  Assert<IsEqual<Classifiable<typeof User>, UserRaw>>,
  // a one-argument `from` still wins over a required-two-argument constructor
  Assert<IsEqual<Classifiable<typeof TwoRequired>, TwoRequiredRaw>>,
  // 2. no `from` → the single-argument constructor seed wins over field copy
  Assert<IsEqual<Classifiable<typeof NoFrom>, NoFromSeed>>,
  Assert<IsEqual<Classifiable<typeof OptionalFirst>, OptionalFirstSeed>>,
  Assert<IsEqual<Classifiable<typeof RequiredFirst>, RequiredFirstSeed>>,
  // 3. required multi-arg ctor + no `from` → field-copy property shape, NOT
  //    `never` (field copy never calls the constructor)
  Assert<IsEqual<Classifiable<typeof FieldCopyOnly>, FieldCopyProps>>,
  // an instance type carries no class-only arm, so it collapses to the property
  // shape — the common `classify<User>` call, unchanged
  Assert<IsEqual<Classifiable<User>, UserProps>>,
  // a union of class types distributes — each member resolves to ITS own
  // chosen strategy (`from` for User, ctor for NoFrom)
  Assert<
    IsEqual<Classifiable<typeof User | typeof NoFrom>, UserRaw | NoFromSeed>
  >,
];

type Assert<T extends true> = T;

type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;

interface UserRaw {
  id: number;
}
interface UserProps {
  id: number;
  name: string;
}
class User {
  id!: number;
  name!: string;
  constructor(seed?: { id: number; name?: string }) {
    void seed;
  }
  static from(raw: UserRaw): User {
    void raw;
    return new User();
  }
  greet(): string {
    return this.name;
  }
}

interface TwoRequiredRaw {
  code: number;
}
class TwoRequired {
  value!: number;
  constructor(seed: { value: number }, required: number) {
    void seed;
    void required;
  }
  static from(raw: TwoRequiredRaw): TwoRequired {
    return new TwoRequired({ value: raw.code }, 0);
  }
}

interface NoFromSeed {
  token: string;
}
class NoFrom {
  code!: string;
  constructor(seed?: NoFromSeed) {
    void seed;
  }
  run(): void {}
}

interface OptionalFirstSeed {
  hint: string;
}
class OptionalFirst {
  label!: string;
  constructor(seed?: OptionalFirstSeed) {
    void seed;
  }
}

interface RequiredFirstSeed {
  spec: string;
}
class RequiredFirst {
  value!: number;
  constructor(seed: RequiredFirstSeed) {
    void seed;
  }
}

interface FieldCopyProps {
  x: number;
  y: string;
}
class FieldCopyOnly {
  x!: number;
  y!: string;
  constructor(a: number, b: string) {
    void a;
    void b;
  }
  compute(): void {}
}
