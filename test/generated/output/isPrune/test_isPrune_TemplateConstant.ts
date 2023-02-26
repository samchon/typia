import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_isPrune_TemplateConstant = _test_isPrune(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) =>
        ((input: any): input is Array<TemplateConstant.Type> => {
            const is = (input: any): input is Array<TemplateConstant.Type> => {
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
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    )
                );
            };
            const prune = (input: Array<TemplateConstant.Type>): void => {
                const $po0 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if (
                            "prefix" === key ||
                            "postfix" === key ||
                            "combined" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                if (Array.isArray(input))
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po0(elem);
                    });
            };
            if (!is(input)) return false;
            prune(input);
            return true;
        })(input),
    TemplateConstant.SPOILERS,
);
