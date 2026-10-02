import { Spoiler } from "../utils/Spoiler";
import { TestRandomGenerator } from "../utils/TestRandomGenerator";

/** Supplies an outer array of homogeneous callable/primitive/null arrays. */
export type FunctionalArrayUnion = FunctionalArrayUnion.Union[];
export namespace FunctionalArrayUnion {
  export const BINARABLE = false;
  export const JSONABLE = false;
  export const PRIMITIVE = false;
  export const RESOLVABLE = false;

  /** Declares four homogeneous inner-array alternatives. */
  export type Union = Array<() => any> | number[] | string[] | null[];
  /** Constructs all four nonempty inner-array alternatives in a fresh array. */
  export function generate(): FunctionalArrayUnion {
    return [
      TestRandomGenerator.array(() => console.log),
      TestRandomGenerator.array(() => 1),
      TestRandomGenerator.array(() => "two"),
      TestRandomGenerator.array(() => null),
    ];
  }

  export const SPOILERS: Spoiler<FunctionalArrayUnion>[] = [
    (input) => {
      input[0] = undefined!;
      return ["$input[0]"];
    },
    (input) => {
      input[0] = {} as any;
      return ["$input[0]"];
    },
  ];
}
