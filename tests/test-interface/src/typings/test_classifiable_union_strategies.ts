import { Classifiable } from "@typia/interface";

/**
 * Verifies `Classifiable<T>` is the union of the three construction inputs.
 *
 * Pins the strategy union for a **class** type (`typeof T`): the static factory
 * seed (`T.from`), the single-argument constructor seed (`new T`), and the
 * public-property field-copy shape. The factory/constructor arms appear only
 * when the call needs a single argument; the property arm appears only when the
 * class is constructible with no arguments (`new T()`), since field copy builds
 * a blank instance first. A required-second constructor parameter drops the
 * constructor arm; a non-default-constructible class drops the property arm. An
 * **instance** type carries neither factory nor constructor, so its union
 * collapses to the property shape (backward-compatible).
 *
 * 1. An optional-first constructor + `from` unions all three inputs.
 * 2. Missing `from`, or constructors that block `new T()` / single-arg, drop arms.
 * 3. The instance type collapses to the property shape alone.
 */
export type ClassifiableUnionStrategyCases = [
  // optional-first ctor + from + default-constructible -> all three arms
  Assert<IsEqual<Classifiable<typeof User>, UserRaw | UserSeed | UserProps>>,
  // no `from`, optional-first ctor -> constructor seed + props
  Assert<IsEqual<Classifiable<typeof NoFrom>, NoFromSeed | NoFromProps>>,
  // from + required-second ctor: ctor arm dropped AND props dropped (not
  // default-constructible) -> factory seed only
  Assert<IsEqual<Classifiable<typeof TwoRequired>, TwoRequiredRaw>>,
  // optional-first single-arg constructor contributes its seed + props
  Assert<
    IsEqual<
      Classifiable<typeof OptionalFirst>,
      OptionalFirstSeed | OptionalFirstProps
    >
  >,
  // required-first constructor: no props (cannot `new T()`), seed only
  Assert<IsEqual<Classifiable<typeof RequiredFirst>, RequiredFirstSeed>>,
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
  constructor(seed?: UserSeed) {
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

interface NoFromSeed {
  token: string;
}
interface NoFromProps {
  code: string;
}
class NoFrom {
  code!: string;
  constructor(seed?: NoFromSeed) {
    void seed;
  }
  run(): void {}
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

interface OptionalFirstSeed {
  hint: string;
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

interface RequiredFirstSeed {
  spec: string;
}
class RequiredFirst {
  value!: number;
  constructor(seed: RequiredFirstSeed) {
    void seed;
  }
}
