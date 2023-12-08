import { IPointer } from "../helpers/IPointer";
import { Spoiler } from "../helpers/Spoiler";

export type TemplateConstant = IPointer<TemplateConstant.Type[]>;
export namespace TemplateConstant {
  export interface Type {
    prefix: `prefix_${"A" | "B" | "C"}`;
    postfix: `${1 | 2 | 3}_postfix`;
    combined: `the_${1 | 2 | 3}_value_with_label_${"A" | "B" | "C"}`;
  }

  export function generate(): TemplateConstant {
    const output: Type[] = [];
    for (const prefix of ALPHABETS)
      for (const postfix of NUMBERS)
        for (const c1 of NUMBERS)
          for (const c2 of ALPHABETS)
            output.push({
              prefix: `prefix_${prefix}`,
              postfix: `${postfix}_postfix`,
              combined: `the_${c1}_value_with_label_${c2}`,
            });
    return { value: output };
  }

  export const SPOILERS: Spoiler<TemplateConstant>[] = [
    (input) => {
      input.value[0]!.prefix = "prefix_1" as any;
      return ["$input.value[0].prefix"];
    },
    (input) => {
      input.value[0]!.postfix = "first_postfix" as any;
      return ["$input.value[0].postfix"];
    },
    (input) => {
      input.value[0]!.combined = "the_first_value_with_label_1" as any;
      return ["$input.value[0].combined"];
    },
  ];
}

const ALPHABETS = ["A", "B", "C"] as const;
const NUMBERS = [1, 2, 3] as const;
