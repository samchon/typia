import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_equals_TemplateConstant = _test_equals(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) =>
        ((
            input: any,
            _exceptionable: boolean = true,
        ): input is Array<TemplateConstant.Type> => {
            const $io0: any = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
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
                    "the_2_value_with_label_C" === input.combined) &&
                (3 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (
                            ["prefix", "postfix", "combined"].some(
                                (prop: any) => key === prop,
                            )
                        )
                            return true;
                        const value: any = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any, _index1: number) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        $io0(elem, true),
                )
            );
        })(input),
);
