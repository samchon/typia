import typia from "typia";

import { Spoiler } from "../helpers/Spoiler";

export type ArrayRepeatedRequired = number | string | ArrayRepeatedRequired[];
export namespace ArrayRepeatedRequired {
  export const RECURSIVE = true;

  export function generate(): ArrayRepeatedRequired {
    const random = typia.createRandom<ArrayRepeatedRequired>();
    return [
      0,
      1,
      "two",
      [2, 3, "four", [[], 1, "two"]],
      ...new Array(100).fill("").map(random),
    ];
  }
  export const SPOILERS: Spoiler<ArrayRepeatedRequired>[] = [
    (input) => {
      (input as any)[0] = undefined!;
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
}
