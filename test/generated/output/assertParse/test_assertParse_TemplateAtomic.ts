import typia from "../../../../src";
import { _test_assertParse } from "../../../internal/_test_assertParse";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_assertParse_TemplateAtomic = _test_assertParse(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input) =>
        ((input: string): typia.Primitive<TemplateAtomic> => {
            const assert = (input: any): TemplateAtomic => {
                const $guard = (typia.assertParse as any).guard;
                const __is = (input: any): input is TemplateAtomic => {
                    const $io0 = (input: any): boolean =>
                        "string" === typeof input.prefix &&
                        RegExp(/^prefix_(.*)/).test(input.prefix) &&
                        "string" === typeof input.postfix &&
                        RegExp(/(.*)_postfix$/).test(input.postfix) &&
                        "string" === typeof input.middle_string &&
                        RegExp(/^the_(.*)_value$/).test(input.middle_string) &&
                        "string" === typeof input.middle_string_empty &&
                        RegExp(/^the_(.*)_value$/).test(
                            input.middle_string_empty,
                        ) &&
                        "string" === typeof input.middle_numeric &&
                        RegExp(/^the_-?\d+\.?\d*_value$/).test(
                            input.middle_numeric,
                        ) &&
                        ("the_false_value" === input.middle_boolean ||
                            "the_true_value" === input.middle_boolean) &&
                        "string" === typeof input.ipv4 &&
                        RegExp(
                            /^-?\d+\.?\d*\.-?\d+\.?\d*\.-?\d+\.?\d*\.-?\d+\.?\d*$/,
                        ).test(input.ipv4) &&
                        "string" === typeof input.email &&
                        RegExp(/(.*)@(.*)\.(.*)/).test(input.email);
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is TemplateAtomic => {
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("string" === typeof input.prefix &&
                                RegExp(/^prefix_(.*)/).test(input.prefix)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".prefix",
                                    expected: "`prefix_${string}`",
                                    value: input.prefix,
                                })) &&
                            (("string" === typeof input.postfix &&
                                RegExp(/(.*)_postfix$/).test(input.postfix)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".postfix",
                                    expected: "`${string}_postfix`",
                                    value: input.postfix,
                                })) &&
                            (("string" === typeof input.middle_string &&
                                RegExp(/^the_(.*)_value$/).test(
                                    input.middle_string,
                                )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".middle_string",
                                    expected: "`the_${string}_value`",
                                    value: input.middle_string,
                                })) &&
                            (("string" === typeof input.middle_string_empty &&
                                RegExp(/^the_(.*)_value$/).test(
                                    input.middle_string_empty,
                                )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".middle_string_empty",
                                    expected: "`the_${string}_value`",
                                    value: input.middle_string_empty,
                                })) &&
                            (("string" === typeof input.middle_numeric &&
                                RegExp(/^the_-?\d+\.?\d*_value$/).test(
                                    input.middle_numeric,
                                )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".middle_numeric",
                                    expected: "`the_${number}_value`",
                                    value: input.middle_numeric,
                                })) &&
                            ("the_false_value" === input.middle_boolean ||
                                "the_true_value" === input.middle_boolean ||
                                $guard(_exceptionable, {
                                    path: _path + ".middle_boolean",
                                    expected:
                                        '("the_false_value" | "the_true_value")',
                                    value: input.middle_boolean,
                                })) &&
                            (("string" === typeof input.ipv4 &&
                                RegExp(
                                    /^-?\d+\.?\d*\.-?\d+\.?\d*\.-?\d+\.?\d*\.-?\d+\.?\d*$/,
                                ).test(input.ipv4)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".ipv4",
                                    expected:
                                        "`${number}.${number}.${number}.${number}`",
                                    value: input.ipv4,
                                })) &&
                            (("string" === typeof input.email &&
                                RegExp(/(.*)@(.*)\.(.*)/).test(input.email)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".email",
                                    expected: "`${string}@${string}.${string}`",
                                    value: input.email,
                                }));
                        return (
                            (("object" === typeof input && null !== input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "Resolve<TemplateAtomic>",
                                    value: input,
                                })) &&
                            $ao0(input, _path + "", true)
                        );
                    })(input, "$input", true);
                return input;
            };
            input = JSON.parse(input);
            return assert(input) as any;
        })(input),
    TemplateAtomic.SPOILERS,
);
