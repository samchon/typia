import { IPointer } from "tstl";

import { Spoiler } from "../utils/Spoiler";

/** Supplies a pointer to a finite mapped record with four numeric fields. */
export type DynamicConstant = IPointer<{
  [P in "a" | "b" | "c" | "d"]: number;
}>;
export namespace DynamicConstant {
  /** Constructs a fresh pointer and all four authored mapped values. */
  export function generate(): DynamicConstant {
    return {
      value: {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
      },
    };
  }
  export const SPOILERS: Spoiler<DynamicConstant>[] = [
    (input) => {
      input.value["a"] = "zero" as any;
      return ["$input.value.a"];
    },
    (input) => {
      input.value["b"] = null!;
      return ["$input.value.b"];
    },
  ];
}
