import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_assertEquals_TemplateConstant =
    _test_assertEquals<TemplateConstant>(TemplateConstant)(
        (input: any): TemplateConstant => {
            const __is = (
                input: any,
                _exceptionable: boolean = true,
            ): input is TemplateConstant => {
                const $io0 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
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
                                ["prefix", "postfix", "combined"].some(
                                    (prop: any) => key === prop,
                                )
                            )
                                return true;
                            const value = input[key];
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
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is TemplateConstant => {
                    const $guard = (typia.createAssertEquals as any).guard;
                    const $join = (typia.createAssertEquals as any).join;
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
                            })) &&
                        (3 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input).every((key: any) => {
                                if (
                                    ["prefix", "postfix", "combined"].some(
                                        (prop: any) => key === prop,
                                    )
                                )
                                    return true;
                                const value = input[key];
                                if (undefined === value) return true;
                                return $guard(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "undefined",
                                    value: value,
                                });
                            }));
                    return (
                        ((Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "TemplateConstant",
                                value: input,
                            })) &&
                            input.every(
                                (elem: any, _index1: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected: "TemplateConstant.Type",
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
                            expected: "TemplateConstant",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        },
    );
