import { Spoiler } from "../utils/Spoiler";
import { TestRandomGenerator } from "../utils/TestRandomGenerator";

/** Supplies constructor-assigned public and non-public class data to producers. */
export type ClassNonPublic = ClassNonPublic.Accessor;
export namespace ClassNonPublic {
  /** Retains private and protected runtime state beside two public strings. */
  export class Accessor {
    public constructor(
      readonly implicit: string,
      public readonly shown: string,
      protected readonly heritage: number,
      private readonly hidden: boolean,
    ) {}
    public static readonly CONSTANT: string = "some constant value";

    /**
     * Exposes a prototype method referencing private state for the fixture
     * type.
     */
    public getHidden(): boolean {
      return this.hidden;
    }
  }

  /** Creates one class instance with all four constructor-assigned data members. */
  export function generate(): ClassNonPublic {
    return new Accessor(
      TestRandomGenerator.string(),
      TestRandomGenerator.string(),
      TestRandomGenerator.integer(),
      TestRandomGenerator.boolean(),
    );
  }

  export const SPOILERS: Spoiler<ClassNonPublic>[] = [
    (input) => {
      (input as any).implicit = false;
      return ["$input.implicit"];
    },
    (input) => {
      (input as any).shown = false;
      return ["$input.shown"];
    },
  ];

  /**
   * The Protocol Buffer codec sees only the two public members.
   *
   * `generate()` hands out an `Accessor` whose own enumerable keys include the
   * constructor-assigned `heritage` and `hidden`, but the declared type exposes
   * neither, so `typia.protobuf.message<ClassNonPublic>()` describes exactly
   * `implicit` and `shown` and a decode gives only those back. Declaring the
   * projection lets the oracle demand that shape exactly: injecting a
   * non-public member into the output now fails instead of being waved
   * through.
   */
  export const RESOLVE = (input: ClassNonPublic) => ({
    implicit: input.implicit,
    shown: input.shown,
  });

  export const ADDABLE = false;
  export const JSONABLE = false;
}
