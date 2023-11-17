import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_misc_clone_TemplateConstant = _test_misc_clone(
  "TemplateConstant",
)<TemplateConstant>(TemplateConstant)((input) =>
  ((input: TemplateConstant): typia.Resolved<TemplateConstant> => {
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
    const $cp0 = (input: any) =>
      input.map((elem: any) =>
        "object" === typeof elem && null !== elem ? $co1(elem) : (elem as any),
      );
    const $co0 = (input: any): any => ({
      value: Array.isArray(input.value)
        ? $cp0(input.value)
        : (input.value as any),
    });
    const $co1 = (input: any): any => ({
      prefix: input.prefix as any,
      postfix: input.postfix as any,
      combined: input.combined as any,
    });
    return "object" === typeof input && null !== input
      ? $co0(input)
      : (input as any);
  })(input),
);
