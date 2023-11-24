import { Spoiler } from "../helpers/Spoiler";

export type AtomicUnion = AtomicUnion.Union[];
export namespace AtomicUnion {
  export type Union = boolean | number | string | null;
  export function generate(): AtomicUnion {
    return [false, 1, "two", null];
  }
  export const SPOILERS: Spoiler<AtomicUnion>[] = [
    (input) => {
      input[0] = [] as any;
      return ["$input[0]"];
    },
    (input) => {
      input[1] = {} as any;
      return ["$input[1]"];
    },
  ];
  export const BINARABLE = false;
}
