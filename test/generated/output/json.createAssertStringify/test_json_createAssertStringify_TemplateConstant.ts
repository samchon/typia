import typia from "../../../../src";
import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_json_assertStringify_TemplateConstant =
    _test_json_assertStringify<TemplateConstant>(TemplateConstant)(
        (input: any): string => {
            const assert = (input: any): TemplateConstant => {
                const __is = (input: any): input is TemplateConstant => {
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
                    ): input is TemplateConstant => {
                        const $guard = (typia.json.createAssertStringify as any)
                            .guard;
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
                                    expected: "TemplateConstant",
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
                                expected: "TemplateConstant",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const stringify = (input: TemplateConstant): string => {
                const $string = (typia.json.createAssertStringify as any)
                    .string;
                const $throws = (typia.json.createAssertStringify as any)
                    .throws;
                const $so0 = (input: any): any =>
                    `{"prefix":${(() => {
                        if ("string" === typeof input.prefix)
                            return $string(input.prefix);
                        if ("string" === typeof input.prefix)
                            return '"' + input.prefix + '"';
                        $throws({
                            expected: '("prefix_A" | "prefix_B" | "prefix_C")',
                            value: input.prefix,
                        });
                    })()},"postfix":${(() => {
                        if ("string" === typeof input.postfix)
                            return $string(input.postfix);
                        if ("string" === typeof input.postfix)
                            return '"' + input.postfix + '"';
                        $throws({
                            expected:
                                '("1_postfix" | "2_postfix" | "3_postfix")',
                            value: input.postfix,
                        });
                    })()},"combined":${(() => {
                        if ("string" === typeof input.combined)
                            return $string(input.combined);
                        if ("string" === typeof input.combined)
                            return '"' + input.combined + '"';
                        $throws({
                            expected:
                                '("the_1_value_with_label_A" | "the_1_value_with_label_B" | "the_1_value_with_label_C" | "the_2_value_with_label_A" | "the_2_value_with_label_B" | "the_2_value_with_label_C" | "the_3_value_with_label_A" | "the_3_value_with_label_B" | "the_3_value_with_label_C")',
                            value: input.combined,
                        });
                    })()}}`;
                return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
            };
            return stringify(assert(input));
        },
    );
