import { Spoiler } from "../helpers/Spoiler";

export type ConstantAtomicUnion = ConstantAtomicUnion.Union[];
export namespace ConstantAtomicUnion {
  export type Union = false | 1 | 2 | "three" | "four" | { key: "key" };
  export function generate(): ConstantAtomicUnion {
    return [false, 1, 2, "three", "four", { key: "key" }];
  }
  export const SPOILERS: Spoiler<ConstantAtomicUnion>[] = [
    (input) => {
      input[0] = 3 as 1;
      return ["$input[0]"];
    },
    (input) => {
      input[1] = "two" as "three";
      return ["$input[1]"];
    },
    (input) => {
      input[2] = { key: "something" as "key" };
      return ["$input[2].key"];
    },
  ];
  export const BINARABLE = false;
}
