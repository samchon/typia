import typia from "typia";

import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_misc_createPrune_TemplateConstant = _test_misc_prune(
  "TemplateConstant",
)<TemplateConstant>(TemplateConstant)((input: TemplateConstant): void => {
  const $io1 = (input: any): boolean =>
    ("prefix_A" === input.prefix ||
      "prefix_B" === input.prefix ||
      "prefix_C" === input.prefix) &&
    ("3_postfix" === input.postfix ||
      "2_postfix" === input.postfix ||
      "1_postfix" === input.postfix) &&
    ("the_3_value_with_label_A" === input.combined ||
      "the_3_value_with_label_B" === input.combined ||
      "the_3_value_with_label_C" === input.combined ||
      "the_2_value_with_label_A" === input.combined ||
      "the_2_value_with_label_B" === input.combined ||
      "the_2_value_with_label_C" === input.combined ||
      "the_1_value_with_label_A" === input.combined ||
      "the_1_value_with_label_B" === input.combined ||
      "the_1_value_with_label_C" === input.combined);
  const $pp0 = (input: any) =>
    input.forEach((elem: any) => {
      if ("object" === typeof elem && null !== elem) $po1(elem);
    });
  const $po0 = (input: any): any => {
    if (Array.isArray(input.value)) $pp0(input.value);
    for (const key of Object.keys(input)) {
      if ("value" === key) continue;
      delete input[key];
    }
  };
  const $po1 = (input: any): any => {
    for (const key of Object.keys(input)) {
      if ("prefix" === key || "postfix" === key || "combined" === key) continue;
      delete input[key];
    }
  };
  if ("object" === typeof input && null !== input) $po0(input);
});
