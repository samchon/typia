import { ArrayUtil } from "@nestia/e2e";

import { Spoiler } from "../utils/Spoiler";
import { TestRandomGenerator } from "../utils/TestRandomGenerator";

/** Supplies a string-keyed dictionary whose values must be undefined. */
export interface DynamicUndefined {
  [key: string]: undefined;
}
export namespace DynamicUndefined {
  /** Constructs a fresh randomized dictionary with explicit undefined values. */
  export function generate(): DynamicUndefined {
    const output: DynamicUndefined = {};
    ArrayUtil.repeat(TestRandomGenerator.integer(3, 10), () => {
      output[TestRandomGenerator.string()] = undefined;
    });
    return output;
  }

  export const SPOILERS: Spoiler<DynamicUndefined>[] = [
    (input) => {
      input["something"] = "one" as any;
      return [`$input.something`];
    },
    (input) => {
      input["wrong"] = null!;
      return [`$input.wrong`];
    },
  ];

  export const ADDABLE = false;
  export const BINARABLE = false;
}
