import { ArrayUtil } from "typia/lib/utils/ArrayUtil";

import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export interface DynamicComposite {
  id: string;
  name: string;
  [index: number]: number;
  [key: `prefix_${string}`]: string;
  [key: `${string}_postfix`]: string;
  [key: `value_${number}`]: boolean | string | number;
  [key: `between_${string}_and_${number}`]: boolean;
}
export namespace DynamicComposite {
  export const BINARABLE = false;

  export function generate(): DynamicComposite {
    const number = () => Math.random() - 0.5;
    const string = () => TestRandomGenerator.string();
    const output: DynamicComposite = {
      id: "id",
      name: "name",
    };

    ArrayUtil.repeat(TestRandomGenerator.integer(1, 1), () => {
      output[number()] = number();
      output[`prefix_${string()}`] = string();
      output[`${string()}_postfix`] = string();
      output[`value_${number()}`] = number() < 0;
      output[`value_${number()}`] = number();
      output[`value_${number()}`] = string();
      output[`between_${string()}_and_${number()}`] = number() > 0;
    });
    return output;
  }

  export const SPOILERS: Spoiler<DynamicComposite>[] = [
    (input) => {
      input.id = false as any;
      return [`$input.id`];
    },
    (input) => {
      input.name = {} as any;
      return [`$input.name`];
    },
    (input) => {
      input["0"] = false as any;
      return [`$input["0"]`];
    },
    (input) => {
      input["prefix_wrong"] = 1 as any;
      return [`$input.prefix_wrong`];
    },
    (input) => {
      input["wrong_postfix"] = 2 as any;
      return [`$input.wrong_postfix`];
    },
    (input) => {
      input["value_1"] = null!;
      return [`$input.value_1`];
    },
    (input) => {
      input["between_one_and_2"] = "true" as any;
      return [`$input.between_one_and_2`];
    },
  ];
}
