import { Spoiler } from "../utils/Spoiler";

/** Supplies all members of a heterogeneous const-enum array fixture. */
export type ConstantConstEnumeration = ConstantConstEnumeration.Enumeration[];
export namespace ConstantConstEnumeration {
  export const enum Enumeration {
    Zero = 0,
    One = 1,
    Two = 2,
    Three = "Three",
    Four = "Four",
  }
  /** Constructs a fresh array using all five authored const-enum members. */
  export function generate(): ConstantConstEnumeration {
    return [
      Enumeration.Zero,
      Enumeration.One,
      Enumeration.Two,
      Enumeration.Three,
      Enumeration.Four,
    ];
  }
  export const SPOILERS: Spoiler<ConstantConstEnumeration>[] = [
    (input) => {
      input[0] = 3 as 1;
      return ["$input[0]"];
    },
    (input) => {
      input[1] = "two" as Enumeration.Three;
      return ["$input[1]"];
    },
    (input) => {
      input[2] = { key: "something" as "key" } as any;
      return ["$input[2]"];
    },
  ];
  export const BINARABLE = false;
}
