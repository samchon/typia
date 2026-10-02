import { Classifiable } from "@typia/interface";

/**
 * Verifies `Classifiable<T>` distributes over unions and merges intersections.
 *
 * Pins the variance behavior: a union of classes classifies member-wise (naked
 * conditional distribution), unions mixing primitives / `null` keep those arms
 * intact, a function arm collapses to `never` and is absorbed, an intersection
 * of classes merges into one plain shape with every method omitted, and `never`
 * round-trips.
 *
 * 1. Form unions and intersections over method-bearing classes.
 * 2. Apply `Classifiable` and compare against the distributed / merged shape.
 * 3. Confirm a discriminated union narrows correctly after classification.
 *
 * @evidence contracts/testing.md#behavioral-verification Classifiable must distribute class/primitive/nullish unions, absorb callable/never arms, merge class intersections and retain discriminant checking.
 * @evidence contracts/testing.md#independent-expectations Handwritten PlainCat/PlainDog/PlainAnimalTagged outputs state expected retained data; an invalid fish discriminant must consume expect-error rather than silently typecheck.
 * @evidence contracts/testing.md#distinguishing-cases Class unions/intersections, primitive/null/undefined/callable arms, never, nested union and valid/invalid discriminants distinguish each variance and filtering category.
 * @evidence contracts/testing.md#execution-ownership test-interface start invokes the installed TypeScript compiler (tsc) with noEmit; ClassifiableUnionIntersectionCases instantiates the real Classifiable alias and its Assert constraints. Authored assignments and expect-error directives also belong to this compile-only unit, without a generated native artifact or runtime host.
 */
export type ClassifiableUnionIntersectionCases = [
  // union of classes distributes member-wise
  Assert<IsEqual<Classifiable<Cat | Dog>, PlainCat | PlainDog>>,
  // primitive / null arms survive
  Assert<IsEqual<Classifiable<Cat | string>, PlainCat | string>>,
  Assert<IsEqual<Classifiable<Cat | null>, PlainCat | null>>,
  Assert<IsEqual<Classifiable<Cat | undefined>, PlainCat | undefined>>,
  // a function arm collapses to never and is absorbed by the union
  Assert<IsEqual<Classifiable<Cat | (() => void)>, PlainCat>>,
  // intersection of classes merges, methods omitted from every part
  Assert<IsEqual<Classifiable<Animal & Tagged>, PlainAnimalTagged>>,
  // never round-trips
  Assert<IsEqual<Classifiable<never>, never>>,
  // union nested inside a property distributes too
  Assert<
    IsEqual<Classifiable<{ pet: Cat | Dog }>, { pet: PlainCat | PlainDog }>
  >,
];

export const validNarrow: Classifiable<Cat | Dog> = { kind: "cat", lives: 9 };

export const invalidNarrow: Classifiable<Cat | Dog> = {
  // @ts-expect-error discriminant value must match one of the classified arms.
  kind: "fish",
  lives: 9,
};

type Assert<T extends true> = T;

type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;

class Cat {
  kind!: "cat";
  lives!: number;
  meow(): void {}
}

class Dog {
  kind!: "dog";
  bark(): void {}
}

class Animal {
  name!: string;
  legs!: number;
  move(): void {}
}

class Tagged {
  id!: string;
  tag(): string {
    return this.id;
  }
}

interface PlainCat {
  kind: "cat";
  lives: number;
}

interface PlainDog {
  kind: "dog";
}

interface PlainAnimalTagged {
  name: string;
  legs: number;
  id: string;
}
