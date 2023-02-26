import typia from "../../../../src";
import { TemplateConstant } from "../../../structures/TemplateConstant";
import { _test_is } from "../internal/_test_is";

export const test_is_TemplateConstant = _test_is(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) =>
        ((input: any): input is Array<TemplateConstant.Type> => {
            const $io0 = (input: any): boolean =>
                ("prefix_A" === input.prefix ||
                    "prefix_B" === input.prefix ||
                    "prefix_C" === input.prefix) &&
                ("1_postfix" === input.postfix ||
                    "3_postfix" === input.postfix ||
                    "2_postfix" === input.postfix) &&
                ("the_1_value_with_label_A" === input.combined ||
                    "the_1_value_with_label_B" === input.combined ||
                    "the_1_value_with_label_C" === input.combined ||
                    "the_3_value_with_label_A" === input.combined ||
                    "the_3_value_with_label_B" === input.combined ||
                    "the_3_value_with_label_C" === input.combined ||
                    "the_2_value_with_label_A" === input.combined ||
                    "the_2_value_with_label_B" === input.combined ||
                    "the_2_value_with_label_C" === input.combined);
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        })(input),
    TemplateConstant.SPOILERS,
);
