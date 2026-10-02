import { Spoiler } from "../utils/Spoiler";

/** Supplies a fixed tuple of Boolean, numeric and string literals. */
export type ConstantAtomicSimple = [
  ConstantAtomicSimple.Value<false>,
  ConstantAtomicSimple.Value<true>,
  ConstantAtomicSimple.Value<2>,
  ConstantAtomicSimple.Value<"three">,
];
export namespace ConstantAtomicSimple {
  /** Preserves the authored literal through a named generic fixture alias. */
  export type Value<T> = T;
  /** Constructs a fresh tuple with all four authored literal values. */
  export function generate(): ConstantAtomicSimple {
    return [false, true, 2, "three"];
  }
  export const SPOILERS: Spoiler<ConstantAtomicSimple>[] = [
    (input) => {
      input[0] = true as false;
      return ["$input[0]"];
    },
    (input) => {
      input[1] = false as true;
      return ["$input[1]"];
    },
    (input) => {
      input[2] = 3 as 2;
      return ["$input[2]"];
    },
    (input) => {
      input[3] = "two" as "three";
      return ["$input[3]"];
    },
  ];
  export const BINARABLE = false;
}
