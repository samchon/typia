import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_misc_isClone_TemplateConstant = _test_misc_isClone(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) =>
        ((input: any): typia.Primitive<Array<TemplateConstant.Type>> | null => {
            const is = (input: any): input is Array<TemplateConstant.Type> => {
                const $io0 = (input: any): boolean =>
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
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    )
                );
            };
            const clone = (
                input: Array<TemplateConstant.Type>,
            ): typia.Primitive<Array<TemplateConstant.Type>> => {
                const $cp0 = (input: any) =>
                    input.map((elem: any) =>
                        "object" === typeof elem && null !== elem
                            ? $co0(elem)
                            : (elem as any),
                    );
                const $co0 = (input: any): any => ({
                    prefix: input.prefix as any,
                    postfix: input.postfix as any,
                    combined: input.combined as any,
                });
                return Array.isArray(input) ? $cp0(input) : (input as any);
            };
            if (!is(input)) return null;
            const output = clone(input);
            return output;
        })(input),
    TemplateConstant.SPOILERS,
);
