import typia from "../../../../src";
import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_misc_assertPrune_TemplateConstant = _test_misc_assertPrune(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) =>
        ((input: any): Array<TemplateConstant.Type> => {
            const assert = (input: any): Array<TemplateConstant.Type> => {
                const __is = (
                    input: any,
                ): input is Array<TemplateConstant.Type> => {
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
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is Array<TemplateConstant.Type> => {
                        const $guard = (typia.misc.assertPrune as any).guard;
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            ("prefix_A" === input.prefix ||
                                "prefix_B" === input.prefix ||
                                "prefix_C" === input.prefix ||
                                $guard(_exceptionable, {
                                    path: _path + ".prefix",
                                    expected:
                                        '("prefix_A" | "prefix_B" | "prefix_C")',
                                    value: input.prefix,
                                })) &&
                            ("3_postfix" === input.postfix ||
                                "2_postfix" === input.postfix ||
                                "1_postfix" === input.postfix ||
                                $guard(_exceptionable, {
                                    path: _path + ".postfix",
                                    expected:
                                        '("1_postfix" | "2_postfix" | "3_postfix")',
                                    value: input.postfix,
                                })) &&
                            ("the_3_value_with_label_A" === input.combined ||
                                "the_3_value_with_label_B" === input.combined ||
                                "the_3_value_with_label_C" === input.combined ||
                                "the_2_value_with_label_A" === input.combined ||
                                "the_2_value_with_label_B" === input.combined ||
                                "the_2_value_with_label_C" === input.combined ||
                                "the_1_value_with_label_A" === input.combined ||
                                "the_1_value_with_label_B" === input.combined ||
                                "the_1_value_with_label_C" === input.combined ||
                                $guard(_exceptionable, {
                                    path: _path + ".combined",
                                    expected:
                                        '("the_1_value_with_label_A" | "the_1_value_with_label_B" | "the_1_value_with_label_C" | "the_2_value_with_label_A" | "the_2_value_with_label_B" | "the_2_value_with_label_C" | "the_3_value_with_label_A" | "the_3_value_with_label_B" | "the_3_value_with_label_C")',
                                    value: input.combined,
                                }));
                        return (
                            ((Array.isArray(input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "Array<TemplateConstant.Type>",
                                    value: input,
                                })) &&
                                input.every(
                                    (elem: any, _index1: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "TemplateConstant.Type",
                                                value: elem,
                                            })) &&
                                            $ao0(
                                                elem,
                                                _path + "[" + _index1 + "]",
                                                true,
                                            )) ||
                                        $guard(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected: "TemplateConstant.Type",
                                            value: elem,
                                        }),
                                )) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "Array<TemplateConstant.Type>",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const prune = (input: Array<TemplateConstant.Type>): void => {
                const $pp0 = (input: any) =>
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po0(elem);
                    });
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
                if (Array.isArray(input)) $pp0(input);
            };
            assert(input);
            prune(input);
            return input;
        })(input),
    TemplateConstant.SPOILERS,
);
