import typia from "typia";

import { Spoiler } from "../helpers/Spoiler";

export type ArrayRepeatedNullable =
  | null
  | number
  | string
  | ArrayRepeatedNullable[];
export namespace ArrayRepeatedNullable {
  export const RECURSIVE = true;

  export function generate(): ArrayRepeatedNullable {
    const random = typia.createRandom<ArrayRepeatedNullable>();
    return [
      null,
      1,
      "two",
      [null, 3, "four", [null, 1, "two"]],
      ...new Array(100).fill("").map(random),
    ];
  }
  export const SPOILERS: Spoiler<ArrayRepeatedNullable>[] = [
    (input) => {
      (input as any)[0] = BigInt(3) as any;
      return ["$input[0]"];
    },
    (input) => {
      (input as any)[1] = undefined!;
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
