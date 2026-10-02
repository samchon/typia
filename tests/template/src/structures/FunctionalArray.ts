import { Spoiler } from "../utils/Spoiler";
import { TestRandomGenerator } from "../utils/TestRandomGenerator";

/** Supplies an array of unrestricted callable fixture values. */
export type FunctionalArray = Array<(...args: any[]) => any>;
export namespace FunctionalArray {
  export const BINARABLE = false;
  export const JSONABLE = false;
  export const PRIMITIVE = false;
  export const RESOLVABLE = false;

  /** Constructs a fresh nonempty array of the platform console.log function. */
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
