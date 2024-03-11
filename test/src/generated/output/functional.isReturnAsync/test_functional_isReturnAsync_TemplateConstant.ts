import typia from "typia";
import { _test_functional_isReturnAsync } from "../../../internal/_test_functional_isReturnAsync";
import { TemplateConstant } from "../../../structures/TemplateConstant";
export const test_functional_isReturnAsync_TemplateConstant =
  _test_functional_isReturnAsync("TemplateConstant")(TemplateConstant)(
    (p: (input: TemplateConstant) => Promise<TemplateConstant>) =>
      async (input: TemplateConstant): Promise<TemplateConstant | null> => {
        const result = await p(input);
        return ((input: any): input is TemplateConstant => {
          const $io0 = (input: any): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io1(elem),
            );
          const $io1 = (input: any): boolean =>
            ("prefix_A" === input.prefix ||
              "prefix_B" === input.prefix ||
              "prefix_C" === input.prefix) &&
            ("1_postfix" === input.postfix ||
              "2_postfix" === input.postfix ||
              "3_postfix" === input.postfix) &&
            ("the_1_value_with_label_A" === input.combined ||
              "the_1_value_with_label_B" === input.combined ||
              "the_1_value_with_label_C" === input.combined ||
              "the_2_value_with_label_A" === input.combined ||
              "the_2_value_with_label_B" === input.combined ||
              "the_2_value_with_label_C" === input.combined ||
              "the_3_value_with_label_A" === input.combined ||
              "the_3_value_with_label_B" === input.combined ||
              "the_3_value_with_label_C" === input.combined);
          return "object" === typeof input && null !== input && $io0(input);
        })(result)
          ? result
          : null;
      },
  );
