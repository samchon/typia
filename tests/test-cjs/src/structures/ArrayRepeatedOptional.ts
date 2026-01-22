import typia from "typia";

import { Spoiler } from "../helpers/Spoiler";

export type ArrayRepeatedOptional =
  | undefined
  | number
  | string
  | ArrayRepeatedOptional[];
export namespace ArrayRepeatedOptional {
  export const RECURSIVE = true;

  export function generate(): ArrayRepeatedOptional {
    const random = typia.createRandom<ArrayRepeatedOptional>();
    return [
      undefined,
      1,
      "two",
      [undefined, 3, "four", [undefined, 1, "two"]],
      ...new Array(100).fill("").map(random),
    ];
  }
  export const SPOILERS: Spoiler<ArrayRepeatedOptional>[] = [
    (input) => {
      (input as any)[0] = BigInt(3) as any;
      return ["$input[0]"];
    },
    (input) => {
      (input as any)[1] = null!;
      return ["$input[1]"];
    },
    (input) => {
      (input as any)[2] = false as any;
      return ["$input[2]"];
    },
    (input) => {
      (input as any)[3][2] = {};
      return ["$input[3][2]"];
    },
  ];

  export const ADDABLE: boolean = false;
  export const BINARABLE = false;
  export const JSONABLE: boolean = false;
}
