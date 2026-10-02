import { ArrayUtil } from "@nestia/e2e";
import { IPointer } from "tstl";

import { Spoiler } from "../utils/Spoiler";
import { TestRandomGenerator } from "../utils/TestRandomGenerator";

/** Supplies a pointer to an unrestricted string-keyed numeric dictionary. */
export type DynamicSimple = IPointer<{
  [key: string]: number;
}>;
export namespace DynamicSimple {
  /** Constructs a fresh pointer and randomized numeric dictionary. */
  export function generate(): DynamicSimple {
    const output: Record<string, number> = {};
    ArrayUtil.repeat(TestRandomGenerator.integer(3, 10), () => {
      output[TestRandomGenerator.string()] = Math.random();
    });
    return { value: output };
  }

  export const SPOILERS: Spoiler<DynamicSimple>[] = [
    (input) => {
      input.value["something"] = "one" as any;
      return [`$input.value.something`];
    },
    (input) => {
      input.value["wrong"] = null!;
      return [`$input.value.wrong`];
    },
  ];

  export const ADDABLE = false;
}
