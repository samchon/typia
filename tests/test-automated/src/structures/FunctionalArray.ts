import { Spoiler } from "../utils/Spoiler";
import { TestRandomGenerator } from "../utils/TestRandomGenerator";

export type FunctionalArray = Array<(...args: any[]) => any>;
export namespace FunctionalArray {
  export const BINARABLE = false;
  export const JSONABLE = false;
  export const PRIMITIVE = false;
  export const RESOLVABLE = false;

  export function generate(): FunctionalArray {
    return TestRandomGenerator.array(() => console.log);
  }

  export const SPOILERS: Spoiler<FunctionalArray>[] = [
    (input) => {
      input[0] = null!;
      return ["$input[0]"];
    },
    (input) => {
      input[0] = undefined!;
      return ["$input[0]"];
    },
    (input) => {
      input[0] = "string" as any;
      return ["$input[0]"];
    },
    (input) => {
      input[0] = {} as any;
      return ["$input[0]"];
    },
    (input) => {
      input[0] = [] as any;
      return ["$input[0]"];
    },
  ];
}
