import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_createIsPrune_TemplateConstant = _test_isPrune(
    "TemplateConstant",
    TemplateConstant.generate,
    (input: any): input is TemplateConstant => {
        const is: any = (input: any): input is TemplateConstant => {
            const $io0: any = (input: any): boolean =>
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
        };
        const prune: any = (input: TemplateConstant): void => {
            const $po0: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
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
                (() =>
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po0(elem);
                    }))();
        };
        if (!is(input)) return false;
        prune(input);
        return true;
    },
    TemplateConstant.SPOILERS,
);
