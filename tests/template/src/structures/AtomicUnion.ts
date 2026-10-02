import { Spoiler } from "../utils/Spoiler";

/** Supplies an array spanning Boolean, number, string and null union branches. */
export type AtomicUnion = AtomicUnion.Union[];
export namespace AtomicUnion {
  /** Defines the four allowed element domains independently of their container. */
  export type Union = boolean | number | string | null;
  /** Creates one representative of every allowed union branch. */
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
