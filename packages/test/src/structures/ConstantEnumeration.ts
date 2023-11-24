import { Spoiler } from "../helpers/Spoiler";

export type ConstantEnumeration = ConstantEnumeration.Enumeration[];
export namespace ConstantEnumeration {
  export enum Enumeration {
    Zero = 0,
    One = 1,
    Two = 2,
    Three = "Three",
    Four = "Four",
  }
  export function generate(): ConstantEnumeration {
    return [
      Enumeration.Zero,
      Enumeration.One,
      Enumeration.Two,
      Enumeration.Three,
      Enumeration.Four,
    ];
  }
  export const SPOILERS: Spoiler<ConstantEnumeration>[] = [
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
