import { Spoiler } from "../utils/Spoiler";

/** Supplies a three-level array fixture with numeric leaves. */
export type ArrayMatrix = number[][][];
export namespace ArrayMatrix {
  /** Constructs a fresh three-level array with the authored numeric leaves. */
  export function generate(): ArrayMatrix {
    return [[[1, 2, 3]]];
  }
  export const SPOILERS: Spoiler<ArrayMatrix>[] = [
    (input) => {
      input[0]![0]![0] = "number" as any;
      return ["$input[0][0][0]"];
    },
    (input) => {
      input[0]![0] = "number[]" as any;
      return ["$input[0][0]"];
    },
    (input) => {
      input[0]![0] = { length: 0 } as any;
      return ["$input[0][0]"];
    },
  ];

  export const BINARABLE = false;
}
