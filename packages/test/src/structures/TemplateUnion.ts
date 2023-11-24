import { IPointer } from "../helpers/IPointer";
import { Spoiler } from "../helpers/Spoiler";

export type TemplateUnion = IPointer<TemplateUnion.Type[]>;
export namespace TemplateUnion {
  export interface Type {
    prefix: `prefix_${string | number | boolean}`;
    postfix: `${string | number | boolean}_postfix`;
    middle: `the_${number | boolean}_value`;
    mixed:
      | `the_${number | "A" | "B"}_value`
      | { name: string }
      | boolean
      | number;
  }

  export function generate(): TemplateUnion {
    const output: Type[] = [];
    for (const prefix of CONSTANTS)
      for (const postfix of CONSTANTS)
        for (const middle of CONSTANTS)
          if (typeof middle !== "string")
            for (const mixed of [
              "the_0_value",
              "the_A_value",
              "the_B_value",
              { name: "someone" },
              false,
              1,
            ] as const)
              output.push({
                prefix: `prefix_${prefix}`,
                postfix: `${postfix}_postfix`,
                middle: `the_${middle}_value`,
                mixed,
              });
    return { value: output };
  }

  export const SPOILERS: Spoiler<TemplateUnion>[] = [
    (input) => {
      input.value[0]!.prefix = "prefix-1" as any;
      return ["$input.value[0].prefix"];
    },
    (input) => {
      input.value[0]!.postfix = "first-postfix" as any;
      return ["$input.value[0].postfix"];
    },
    (input) => {
      input.value[0]!.middle = "the_middle_value" as any;
      return ["$input.value[0].middle"];
    },
    (input) => {
      input.value[0]!.mixed = "the_C_value" as any;
      return ["$input.value[0].mixed"];
    },
  ];
}

const CONSTANTS = [false, 1, "two"] as const;
