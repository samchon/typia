import { Spoiler } from "../utils/Spoiler";
import { TestRandomGenerator } from "../utils/TestRandomGenerator";

/** Supplies a class fixture with own data and a prototype method. */
export type ClassMethod = ClassMethod.Animal;
export namespace ClassMethod {
  /** Owns the fixture's initialized data and declared prototype method. */
  export class Animal {
    public constructor(
      public readonly name: string,
      age: number,
    ) {
      this.age = age;
    }
    public readonly age: number;

    /** Supplies a declared prototype method in the class fixture. */
    public bark(): string {
      return TestRandomGenerator.string();
    }
  }

  /** Constructs a fresh method-bearing instance with ordinary valid data. */
  export function generate(): ClassMethod {
    return new Animal(
      TestRandomGenerator.string(),
      TestRandomGenerator.integer(),
    );
  }

  export const SPOILERS: Spoiler<ClassMethod>[] = [
    (input) => {
      (input as any).name = [];
      return ["$input.name"];
    },
    (input) => {
      (input as any).age = () => 3;
      return ["$input.age"];
    },
  ];
}
