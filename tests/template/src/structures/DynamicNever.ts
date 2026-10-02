import { ArrayUtil } from "@nestia/e2e";

import { Spoiler } from "../utils/Spoiler";
import { TestRandomGenerator } from "../utils/TestRandomGenerator";

/** Supplies a never-valued dictionary fixture for default undefined admission. */
export interface DynamicNever {
  [key: string]: never;
}
export namespace DynamicNever {
  /**
   * Constructs explicit undefined dictionary fields through deliberate any
   * casts.
   */
  export function generate(): DynamicNever {
    const output: DynamicNever = {};
    ArrayUtil.repeat(TestRandomGenerator.integer(3, 10), () => {
      (output as any)[TestRandomGenerator.string()] = undefined;
    });
    return output;
  }

  export const SPOILERS: Spoiler<DynamicNever>[] = [
    (input) => {
      (input as any)["something"] = "one" as any;
      return [`$input.something`];
    },
    (input) => {
      (input as any)["wrong"] = null!;
      return [`$input.wrong`];
    },
  ];

  export const ADDABLE = false;
  export const BINARABLE = false;
}
