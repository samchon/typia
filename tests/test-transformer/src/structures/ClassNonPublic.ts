import { Spoiler } from "../utils/Spoiler";
import { TestRandomGenerator } from "../utils/TestRandomGenerator";

export type ClassNonPublic = ClassNonPublic.Accessor;
export namespace ClassNonPublic {
  export class Accessor {
    public constructor(
      readonly implicit: string,
      public readonly shown: string,
      protected readonly heritage: number,
      private readonly hidden: boolean,
    ) {}
    public static readonly CONSTANT: string = "some constant value";

    public getHidden(): boolean {
      return this.hidden;
    }
  }

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

  export const ADDABLE = false;
  export const JSONABLE = false;
}
