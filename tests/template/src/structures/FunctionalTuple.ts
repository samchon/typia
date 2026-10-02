import { Spoiler } from "../utils/Spoiler";

/** Supplies a fixed three-position callable tuple fixture. */
export type FunctionalTuple = [
  FunctionalTuple.Functional,
  FunctionalTuple.Functional,
  FunctionalTuple.Functional,
];
export namespace FunctionalTuple {
  export const BINARABLE = false;
  export const JSONABLE = false;
  export const PRIMITIVE = false;
  export const RESOLVABLE = false;

  /** Declares the unrestricted callable type used by each tuple position. */
  export type Functional = (...args: any[]) => any;
  /** Constructs a fresh tuple of three existing console.log references. */
  export function generate(): FunctionalTuple {
    return [console.log, console.log, console.log];
  }

  export const SPOILERS: Spoiler<FunctionalTuple>[] = [
    (input) => {
      input[0] = null!;
      return ["$input[0]"];
    },
    (input) => {
      input[1] = undefined!;
      return ["$input[1]"];
    },
    (input) => {
      input[2] = {} as any;
      return ["$input[2]"];
    },
    (input) => {
      input[0] = false as any;
      return ["$input[0]"];
    },
    (input) => {
      input[1] = 1 as any;
      return ["$input[1]"];
    },
    (input) => {
      input[2] = "string" as any;
      return ["$input[2]"];
    },
  ];
}
