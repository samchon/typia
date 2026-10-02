import { Classifiable } from "@typia/interface";

/**
 * Verifies `Classifiable<T>` survives a deeply nested, mixed-everything type.
 *
 * The adversarial case: a class whose members exercise every branch at once —
 * `readonly`/optional modifiers, boxed primitives, native classes, arrays,
 * `readonly` tuples, `Set`/`Map`, index signatures, unions with `null`, and
 * three levels of nested classes. A regression in any single branch surfaces as
 * a mismatch against the hand-written fully-classified shape.
 *
 * 1. Declare `Company` → `Person` → `Address` with the full member zoo.
 * 2. Apply `Classifiable<Company>` once.
 * 3. Compare against the exhaustive plain shape, methods omitted throughout.
 */
export type ClassifiableChaoticCases = [
  Assert<IsEqual<Classifiable<Company>, PlainCompany>>,
  Assert<IsEqual<Classifiable<Person>, PlainPerson>>,
  Assert<IsEqual<Classifiable<Address>, PlainAddress>>,
];

export const validCompany: Classifiable<Company> = {
  id: "c1",
  name: "ACME",
  founded: new Date(),
  ceo: { name: "Kim", age: 40, hobbies: ["go"] },
  staff: [{ name: "Lee", age: 30, hobbies: [] }],
  teams: new Map([["dev", [{ name: "Park", age: 25, hobbies: [] }]]]),
  coords: [1, 2],
  meta: { hq: { city: "Seoul", zip: 1, geo: [0, 0] }, branch: null },
  tags: new Set(["a"]),
};

export const invalidCompany: Classifiable<Company> = {
  id: "c1",
  name: "ACME",
  founded: new Date(),
  // @ts-expect-error nested member still demands its required data (age).
  ceo: { name: "Kim", hobbies: ["go"] },
  staff: [],
  teams: new Map(),
  coords: [1, 2],
  meta: {},
  tags: new Set(),
};

type Assert<T extends true> = T;

type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;

class Address {
  city!: string;
  zip!: Number;
  geo!: [number, number];
  format(): string {
    return this.city;
  }
}

class Person {
  name!: string;
  age!: Number;
  address?: Address;
  hobbies!: readonly string[];
  speak(): void {}
}

class Company {
  readonly id!: string;
  name!: String;
  founded!: Date;
  logo?: Uint8Array;
  ceo!: Person;
  staff!: Person[];
  teams!: Map<string, Person[]>;
  coords!: readonly [Number, Number];
  meta!: Record<string, Address | null>;
  tags!: Set<String>;
  greet(): string {
    return this.name.toString();
  }
}

interface PlainAddress {
  city: string;
  zip: number;
  geo: [number, number];
}

interface PlainPerson {
  name: string;
  age: number;
  address?: PlainAddress;
  hobbies: readonly string[];
}

interface PlainCompany {
  readonly id: string;
  name: string;
  founded: Date;
  logo?: Uint8Array;
  ceo: PlainPerson;
  staff: PlainPerson[];
  teams: Map<string, PlainPerson[]> | [string, PlainPerson[]][];
  coords: readonly [number, number];
  meta: Record<string, PlainAddress | null>;
  tags: Set<string> | string[];
}
