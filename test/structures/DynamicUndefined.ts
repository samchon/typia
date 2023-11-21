import { ArrayUtil } from "typia/lib/utils/ArrayUtil";

import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export interface DynamicUndefined {
  [key: string]: undefined;
}
export namespace DynamicUndefined {
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
