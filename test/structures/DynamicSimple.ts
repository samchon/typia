import { ArrayUtil } from "typia/lib/utils/ArrayUtil";

import { IPointer } from "../helpers/IPointer";
import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export type DynamicSimple = IPointer<{
  [key: string]: number;
}>;
export namespace DynamicSimple {
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
