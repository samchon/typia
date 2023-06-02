import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_validateStringify_TemplateAtomic = _test_validateStringify(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input) =>
        ((input: TemplateAtomic): typia.IValidation<string> => {
            const validate: any = (
                input: any,
            ): typia.IValidation<TemplateAtomic> => {
                const __is: any = (input: any): input is TemplateAtomic => {
                    const $io0: any = (input: any): boolean =>
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
                const errors: any = [] as any[];
                const $report: any = (typia.validateStringify as any).report(
                    errors,
                );
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is TemplateAtomic => {
                        const $vo0: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ("string" === typeof input.prefix &&
                                    RegExp(/^prefix_(.*)/).test(
                                        input.prefix,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".prefix",
                                        expected: "`prefix_${string}`",
                                        value: input.prefix,
                                    }),
                                ("string" === typeof input.postfix &&
                                    RegExp(/(.*)_postfix$/).test(
                                        input.postfix,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".postfix",
                                        expected: "`${string}_postfix`",
                                        value: input.postfix,
                                    }),
                                ("string" === typeof input.middle_string &&
                                    RegExp(/^the_(.*)_value$/).test(
                                        input.middle_string,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".middle_string",
                                        expected: "`the_${string}_value`",
                                        value: input.middle_string,
                                    }),
                                ("string" ===
                                    typeof input.middle_string_empty &&
                                    RegExp(/^the_(.*)_value$/).test(
                                        input.middle_string_empty,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".middle_string_empty",
                                        expected: "`the_${string}_value`",
                                        value: input.middle_string_empty,
                                    }),
                                ("string" === typeof input.middle_numeric &&
                                    RegExp(/^the_-?\d+\.?\d*_value$/).test(
                                        input.middle_numeric,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".middle_numeric",
                                        expected: "`the_${number}_value`",
                                        value: input.middle_numeric,
                                    }),
                                "the_false_value" === input.middle_boolean ||
                                    "the_true_value" === input.middle_boolean ||
                                    $report(_exceptionable, {
                                        path: _path + ".middle_boolean",
                                        expected:
                                            '("the_false_value" | "the_true_value")',
                                        value: input.middle_boolean,
                                    }),
                                ("string" === typeof input.ipv4 &&
                                    RegExp(
                                        /^-?\d+\.?\d*\.-?\d+\.?\d*\.-?\d+\.?\d*\.-?\d+\.?\d*$/,
                                    ).test(input.ipv4)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".ipv4",
                                        expected:
                                            "`${number}.${number}.${number}.${number}`",
                                        value: input.ipv4,
                                    }),
                                ("string" === typeof input.email &&
                                    RegExp(/(.*)@(.*)\.(.*)/).test(
                                        input.email,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".email",
                                        expected:
                                            "`${string}@${string}.${string}`",
                                        value: input.email,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "TemplateAtomic",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "TemplateAtomic",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                const success: any = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const stringify: any = (input: TemplateAtomic): string => {
                const $string: any = (typia.validateStringify as any).string;
                const $throws: any = (typia.validateStringify as any).throws;
                const $so0: any = (input: any): any =>
                    `{"prefix":${$string(input.prefix)},"postfix":${$string(
                        input.postfix,
                    )},"middle_string":${$string(
                        input.middle_string,
                    )},"middle_string_empty":${$string(
                        input.middle_string_empty,
                    )},"middle_numeric":${$string(
                        input.middle_numeric,
                    )},"middle_boolean":${(() => {
                        if ("string" === typeof input.middle_boolean)
                            return $string(input.middle_boolean);
                        if ("string" === typeof input.middle_boolean)
                            return '"' + input.middle_boolean + '"';
                        $throws({
                            expected: '("the_false_value" | "the_true_value")',
                            value: input.middle_boolean,
                        });
                    })()},"ipv4":${$string(input.ipv4)},"email":${$string(
                        input.email,
                    )}}`;
                return $so0(input);
            };
            const output: any = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        })(input),
    TemplateAtomic.SPOILERS,
);
