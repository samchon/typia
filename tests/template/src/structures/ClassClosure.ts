import { Spoiler } from "../utils/Spoiler";
import { TestRandomGenerator } from "../utils/TestRandomGenerator";

/** Provides a class fixture with an own callable property. */
export type ClassClosure = ClassClosure.Something;
export namespace ClassClosure {
  export const BINARABLE = false;
  export const JSONABLE = false;
  export const PRIMITIVE = false;
  export const RESOLVABLE = false;

  /** Owns the string, literal discriminator and callable fixture fields. */
  export class Something {
    public constructor(public readonly id: string) {}
    public readonly type: "something" = "something" as const;
    /** Supplies the callable own-property shape used by this fixture. */
    public readonly closure: () => string = () => `${this.type}:${this.id}`;
  }

  /** Constructs a fresh class instance with an ordinary string identifier. */
  export function generate(): ClassClosure {
    return new Something(TestRandomGenerator.string());
  }

  export const SPOILERS: Spoiler<ClassClosure>[] = [
    (input) => {
      (input as any).id = 3;
      return ["$input.id"];
    },
    (input) => {
      (input as any).type = null;
      return ["$input.type"];
    },
    (input) => {
      (input as any).closure = null;
      return ["$input.closure"];
    },
  ];
}
