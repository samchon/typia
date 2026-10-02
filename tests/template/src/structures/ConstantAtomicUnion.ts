import { Spoiler } from "../utils/Spoiler";

/** Supplies an array mixing literal primitives and a literal-valued record. */
export type ConstantAtomicUnion = ConstantAtomicUnion.Union[];
export namespace ConstantAtomicUnion {
  /** Declares the exact primitive and record alternatives in the fixture. */
  export type Union = false | 1 | 2 | "three" | "four" | { key: "key" };
  /** Constructs a fresh array containing every declared union alternative. */
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
