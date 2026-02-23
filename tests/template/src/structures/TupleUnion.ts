import { Spoiler } from "../utils/Spoiler";

export type TupleUnion = TupleUnion.Union[];
export namespace TupleUnion {
  export type Union = [] | [boolean, number] | [number, string, boolean];
  export function generate(): TupleUnion {
    return [[], [false, 1], [1, "two", true]];
  }

  /**
   * @todo Detailed error path should be changed after union explorer
   *   optimization
   */
  export const SPOILERS: Spoiler<TupleUnion>[] = [
    (input) => {
      (input[0] as any[]).push(0);
      return ["$input[0]"];
    },
    (input) => {
      (input[1] as any[])[1] = "3";
      return ["$input[1]"];
    },
    (input) => {
      (input[2] as any[])[0] = "4";
      return ["$input[2]"];
    },
  ];

  // because of swagger who does not support tuple,
  // zero length tuple type would cause compilation error
  export const BINARABLE = false;
  export const JSONABLE = false;
}
