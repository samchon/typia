import { Spoiler } from "../helpers/Spoiler";

export type AtomicClass = [
  Boolean,
  false | Boolean,
  boolean | Boolean,
  Number,
  1 | Number,
  number | Number,
  String,
  "characters" | String,
  string | String,
];
export namespace AtomicClass {
  export function generate(): AtomicClass {
    return [false, true, true, 2, 3, 4, "five", "six", "seven"];
  }

  export const SPOILERS: Spoiler<AtomicClass>[] = [
    (input) => {
      input[0] = 0 as any;
      return ["$input[0]"];
    },
    (input) => {
      input[1] = 1 as any;
      return ["$input[1]"];
    },
    (input) => {
      input[2] = 2 as any;
      return ["$input[2]"];
    },
    (input) => {
      input[3] = "three" as any;
      return ["$input[3]"];
    },
    (input) => {
      input[4] = "four" as any;
      return ["$input[4]"];
    },
    (input) => {
      input[5] = "five" as any;
      return ["$input[5]"];
    },
    (input) => {
      input[6] = 6 as any;
      return ["$input[6]"];
    },
    (input) => {
      input[7] = 7 as any;
      return ["$input[7]"];
    },
    (input) => {
      input[8] = 8 as any;
      return ["$input[8]"];
    },
    (input) => {
      input[0] = undefined!;
      return ["$input[0]"];
    },
    (input) => {
      input[1] = null!;
      return ["$input[1]"];
    },
  ];
  export const BINARABLE = false;
}
