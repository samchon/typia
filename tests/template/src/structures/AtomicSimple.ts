import { Spoiler } from "../utils/Spoiler";

/** Supplies Boolean, numeric and string tuple slots through an identity generic. */
export type AtomicSimple = [
  AtomicSimple.Value<boolean>,
  AtomicSimple.Value<number>,
  AtomicSimple.Value<string>,
];
export namespace AtomicSimple {
  /** Preserves the supplied primitive type through an identity alias. */
  export type Value<T> = T;
  /** Returns the authored three-primitive positive tuple. */
  export function generate(): AtomicSimple {
    return [false, 1, "two"];
  }
  export const SPOILERS: Spoiler<AtomicSimple>[] = [
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
