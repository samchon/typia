import { Spoiler } from "../helpers/Spoiler";

export type AtomicAlias = [
  AtomicAlias.Alias<boolean>,
  AtomicAlias.Alias<number>,
  AtomicAlias.Alias<string>,
];
export namespace AtomicAlias {
  export type Alias<T> = T;
  export function generate(): AtomicAlias {
    return [false, 1, "two"];
  }
  export const SPOILERS: Spoiler<AtomicAlias>[] = [
    (input) => {
      input[0] = 0 as any;
      return ["$input[0]"];
    },
    (input) => {
      input[1] = "one" as any;
      return ["$input[1]"];
    },
    (input) => {
      input[2] = 2 as any;
      return ["$input[2]"];
    },
  ];
  export const BINARABLE = false;
}
