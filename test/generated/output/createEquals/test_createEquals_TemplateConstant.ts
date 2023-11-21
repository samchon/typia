import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_createEquals_TemplateConstant = _test_equals(
  "TemplateConstant",
)<TemplateConstant>(TemplateConstant)(
  (input: any, _exceptionable: boolean = true): input is TemplateConstant => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
      Array.isArray(input.value) &&
      input.value.every(
        (elem: any, _index1: number) =>
          "object" === typeof elem &&
          null !== elem &&
          $io1(elem, true && _exceptionable),
      ) &&
      (1 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (["value"].some((prop: any) => key === prop)) return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
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
        "the_1_value_with_label_C" === input.combined) &&
      (3 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (
            ["prefix", "postfix", "combined"].some((prop: any) => key === prop)
          )
            return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    return "object" === typeof input && null !== input && $io0(input, true);
  },
);
