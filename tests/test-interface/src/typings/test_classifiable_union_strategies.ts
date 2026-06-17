import { Classifiable } from "@typia/interface";

/**
 * Verifies `Classifiable<T>` is the union of the three construction inputs.
 *
 * Pins the strategy union for a **class** type (`typeof T`): the static factory
 * seed (`T.from`), the single-argument constructor seed (`new T`), and the
 * public-property field-copy shape are all union members. The constructor arm
 * appears only when the call needs a single argument (first parameter present,
 * later parameters optional); a required second parameter excludes it. An
 * **instance** type carries neither factory nor constructor, so its union
 * collapses to the property shape (backward-compatible).
 *
 * 1. A class with `from` + single-arg constructor unions all three inputs.
 * 2. Missing `from`, or a required second constructor parameter, drops that arm.
 * 3. The instance type collapses to the property shape alone.
 */
export type ClassifiableUnionStrategyCases = [
  // class with from + (seed, opts?) constructor + props -> all three arms
  Assert<IsEqual<Classifiable<typeof User>, UserRaw | UserSeed | UserProps>>,
  // no `from` -> only constructor seed + props
  Assert<IsEqual<Classifiable<typeof NoFrom>, NoFromSeed | NoFromProps>>,
  // required 2nd constructor parameter -> constructor arm dropped, from + props
  Assert<
    IsEqual<Classifiable<typeof TwoRequired>, TwoRequiredRaw | TwoRequiredProps>
  >,
  // optional-first single-arg constructor still contributes its seed
  Assert<
    IsEqual<
      Classifiable<typeof OptionalFirst>,
      OptionalFirstSeed | OptionalFirstProps
    >
  >,
  // instance type collapses to the property shape only
  Assert<IsEqual<Classifiable<User>, UserProps>>,
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
interface UserSeed {
  id: number;
  name?: string;
}
interface UserProps {
  id: number;
  name: string;
}

class User {
  id!: number;
  name!: string;
  constructor(seed: UserSeed, opts?: { strict?: boolean }) {
    void seed;
    void opts;
  }
  static from(raw: UserRaw): User {
    return new User({ id: raw.id });
  }
  greet(): string {
    return this.name;
  }
}

interface NoFromSeed {
  code: string;
}
interface NoFromProps {
  code: string;
}
class NoFrom {
  code!: string;
  constructor(seed: NoFromSeed) {
    void seed;
  }
  run(): void {}
}

interface TwoRequiredRaw {
  value: number;
}
interface TwoRequiredProps {
  value: number;
}
class TwoRequired {
  value!: number;
  constructor(seed: { value: number }, required: number) {
    void seed;
    void required;
  }
  static from(raw: TwoRequiredRaw): TwoRequired {
    return new TwoRequired({ value: raw.value }, 0);
  }
}

interface OptionalFirstSeed {
  label: string;
}
interface OptionalFirstProps {
  label: string;
}
class OptionalFirst {
  label!: string;
  constructor(seed?: OptionalFirstSeed) {
    void seed;
  }
}
