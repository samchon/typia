import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export interface ObjectDynamic {
  [key: string]: number | string | boolean;
}
export namespace ObjectDynamic {
  export function generate(): ObjectDynamic {
    return {
      [TestRandomGenerator.string()]: TestRandomGenerator.integer(),
      [TestRandomGenerator.string()]: TestRandomGenerator.string(),
      [TestRandomGenerator.string()]: TestRandomGenerator.boolean(),
    };
  }

  export const SPOILERS: Spoiler<ObjectDynamic>[] = [
    (input) => {
      input.something = null!;
      return ["$input.something"];
    },
    (input) => {
      input.something = {} as any;
      return ["$input.something"];
    },
    (input) => {
      input.something = [] as any;
      return ["$input.something"];
    },
  ];

  export const ADDABLE = false;
  export const BINARABLE = false;
}
