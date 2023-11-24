import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export type ArrayUnion = ArrayUnion.IUnion[];
export namespace ArrayUnion {
  export type IUnion = boolean[] | number[] | string[];
  export function generate(): ArrayUnion {
    return [
      TestRandomGenerator.array(TestRandomGenerator.boolean),
      TestRandomGenerator.array(TestRandomGenerator.integer),
      TestRandomGenerator.array(TestRandomGenerator.string),
    ];
  }
  export const SPOILERS: Spoiler<ArrayUnion>[] = [
    (input) => {
      input[0] = [false, true, 3] as boolean[];
      return ["$input[0][2]"];
    },
    (input) => {
      input[1] = [1, 2, false] as number[];
      return ["$input[1][2]"];
    },
    (input) => {
      input[2] = ["a", "b", 3] as string[];
      return ["$input[2][2]"];
    },
    (input) => {
      input[0] = [[]] as any;
      return ["$input[0]"];
    },
    (input) => {
      input[1] = [null!];
      return ["$input[1]"];
    },
  ];
  export const BINARABLE = false;
}
