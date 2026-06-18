import { Classifiable } from "@typia/interface";

/**
 * Verifies `Classifiable<T>` reduces a class to its plain, methods-excluded
 * member shape.
 *
 * Pins the object branch of `Classifiable`: methods must be _omitted_ (not
 * mapped to `never`), getter-backed data members survive (as `readonly`),
 * modifiers (`readonly`, optional) are preserved, nested classes recurse to
 * their own plain shapes, and a method-free object round-trips unchanged
 * through the identity guard.
 *
 * 1. Declare a class with data members, a getter, a method, and a nested class.
 * 2. Apply `Classifiable` and compare against the hand-written plain shape.
 * 3. Assert a live instance is assignable, while a literal freshly carrying the
 *    method, or dropping a required member, is rejected.
 */
export type ClassifiableObjectMemberCases = [
  Assert<IsEqual<Classifiable<User>, ExpectedUser>>,
  Assert<IsEqual<Classifiable<Profile>, ExpectedProfile>>,
  // a method-free plain object round-trips unchanged (identity guard)
  Assert<IsEqual<Classifiable<IPlain>, IPlain>>,
  // an already-plain data interface is identical to itself
  Assert<IsEqual<Classifiable<ExpectedUser>, ExpectedUser>>,
];

type Assert<T extends true> = T;

type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;

class Profile {
  age!: number;
  hobbies!: string[];
  scan(): void {}
}

class User {
  id!: string;
  name!: string;
  readonly tag!: string;
  count?: number;
  get upper(): string {
    return this.name;
  }
  greet(): string {
    return this.name;
  }
  nested!: Profile;
}

interface ExpectedProfile {
  age: number;
  hobbies: string[];
}

interface ExpectedUser {
  id: string;
  name: string;
  readonly tag: string;
  count?: number;
  readonly upper: string;
  nested: ExpectedProfile;
}

interface IPlain {
  value: number;
  child: {
    label: string;
    flags: boolean[];
  };
}

// a live instance (methods included) is structurally assignable to the shape
export const fromInstance: Classifiable<User> = new User();

export const validUser: Classifiable<User> = {
  id: "id",
  name: "name",
  tag: "tag",
  upper: "NAME",
  nested: { age: 1, hobbies: ["a"] },
};

export const validUserWithOptional: Classifiable<User> = {
  id: "id",
  name: "name",
  tag: "tag",
  count: 3,
  upper: "NAME",
  nested: { age: 1, hobbies: [] },
};

export const invalidWithMethod: Classifiable<User> = {
  id: "id",
  name: "name",
  tag: "tag",
  upper: "NAME",
  nested: { age: 1, hobbies: [] },
  // @ts-expect-error the reconstructed instance gets `greet` from the
  // prototype, so the input literal may not freshly carry it.
  greet: () => "name",
};

// @ts-expect-error a required data member may not be dropped.
export const invalidMissingMember: Classifiable<User> = {
  id: "id",
  name: "name",
  upper: "NAME",
  nested: { age: 1, hobbies: [] },
};
