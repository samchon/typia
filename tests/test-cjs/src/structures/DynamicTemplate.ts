import { ArrayUtil } from "typia/lib/utils/ArrayUtil";

import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export interface DynamicTemplate {
  [key: `prefix_${string}`]: string;
  [key: `${string}_postfix`]: string;
  [key: `value_${number}`]: number;
  [key: `between_${string}_and_${number}`]: boolean;
}
export namespace DynamicTemplate {
  export function generate(): DynamicTemplate {
    const number = () => Math.random() - 0.5;
    const string = () => TestRandomGenerator.string();
    const output: DynamicTemplate = {};

    ArrayUtil.repeat(TestRandomGenerator.integer(3, 10), () => {
      output[`prefix_${string()}`] = string();
      output[`${string()}_postfix`] = string();
      output[`value_${number()}`] = number();
      output[`between_${string()}_and_${number() - 0.5}`] = number() > 0;
    });
    return output;
  }

  export const SPOILERS: Spoiler<DynamicTemplate>[] = [
    (input) => {
      input["prefix_wrong"] = false as any;
      return [`$input.prefix_wrong`];
    },
    (input) => {
      input["wrong_postfix"] = 1 as any;
      return [`$input.wrong_postfix`];
    },
    (input) => {
      input["value_2"] = "two" as any;
      return [`$input.value_2`];
    },
    (input) => {
      input["between_1_and_2"] = "false" as any;
      return [`$input.between_1_and_2`];
    },
  ];

  export const BINARABLE = false;
}
