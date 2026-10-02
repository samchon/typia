import { Spoiler } from "../utils/Spoiler";
import { TestRandomGenerator } from "../utils/TestRandomGenerator";

/** Supplies a tuple of arrays with three independent primitive element kinds. */
export type ArrayAtomicSimple = [Array<boolean>, Array<number>, Array<string>];
export namespace ArrayAtomicSimple {
  /** Creates Boolean, integer and string arrays for the authored tuple. */
  export function generate(): ArrayAtomicSimple {
    return [
      TestRandomGenerator.array(TestRandomGenerator.boolean),
      TestRandomGenerator.array(TestRandomGenerator.integer),
      TestRandomGenerator.array(TestRandomGenerator.string),
    ];
  }
  export const SPOILERS: Spoiler<ArrayAtomicSimple>[] = [
    (input) => {
      input[0]![0]! = "boolean" as any;
      return ["$input[0][0]"];
    },
    (input) => {
      input[1]![0]! = "number" as any;
      return ["$input[1][0]"];
    },
    (input) => {
      input[2]![0]! = false as any;
      return ["$input[2][0]"];
    },
  ];

  export const BINARABLE = false;
}
