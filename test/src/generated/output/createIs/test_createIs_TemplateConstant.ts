import typia from "typia";

import { _test_is } from "../../../internal/_test_is";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_createIs_TemplateConstant = _test_is(
  "TemplateConstant",
)<TemplateConstant>(TemplateConstant)(
  (input: any): input is TemplateConstant => {
    const $io0 = (input: any): boolean =>
      Array.isArray(input.value) &&
      input.value.every(
        (elem: any) => "object" === typeof elem && null !== elem && $io1(elem),
      );
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
    return "object" === typeof input && null !== input && $io0(input);
  },
);
