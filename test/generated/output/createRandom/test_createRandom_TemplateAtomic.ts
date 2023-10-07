import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_createRandom_TemplateAtomic = _test_random(
    "TemplateAtomic",
)<TemplateAtomic>(TemplateAtomic)({
    random: (
        generator: Partial<typia.IRandomGenerator> = (TemplateAtomic as any)
            .RANDOM,
    ): typia.Resolved<TemplateAtomic> => {
        const $generator = (typia.createRandom as any).generator;
        const $pick = (typia.createRandom as any).pick;
        const $ro0 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            prefix: `prefix_${
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)()
            }`,
            postfix: `${
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)()
            }_postfix`,
            middle_string: `the_${
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)()
            }_value`,
            middle_string_empty: `the_${
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)()
            }_value`,
            middle_numeric: `the_${
                (generator?.customs ?? $generator.customs)?.number?.([]) ??
                (generator?.number ?? $generator.number)(0, 100)
            }_value`,
            middle_boolean: $pick([
                () => "the_false_value",
                () => "the_true_value",
            ])(),
            ipv4: `${
                (generator?.customs ?? $generator.customs)?.number?.([]) ??
                (generator?.number ?? $generator.number)(0, 100)
            }.${
                (generator?.customs ?? $generator.customs)?.number?.([]) ??
                (generator?.number ?? $generator.number)(0, 100)
            }.${
                (generator?.customs ?? $generator.customs)?.number?.([]) ??
                (generator?.number ?? $generator.number)(0, 100)
            }.${
                (generator?.customs ?? $generator.customs)?.number?.([]) ??
                (generator?.number ?? $generator.number)(0, 100)
            }`,
            email: `${
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)()
            }@${
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)()
            }.${
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)()
            }`,
        });
        return $ro0();
    },
    assert: (input: any): TemplateAtomic => {
        const __is = (input: any): input is TemplateAtomic => {
            const $io0 = (input: any): boolean =>
                "string" === typeof input.prefix &&
                RegExp(/^prefix_(.*)/).test(input.prefix) &&
                "string" === typeof input.postfix &&
                RegExp(/(.*)_postfix$/).test(input.postfix) &&
                "string" === typeof input.middle_string &&
                RegExp(/^the_(.*)_value$/).test(input.middle_string) &&
                "string" === typeof input.middle_string_empty &&
                RegExp(/^the_(.*)_value$/).test(input.middle_string_empty) &&
                "string" === typeof input.middle_numeric &&
                RegExp(/^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/).test(
                    input.middle_numeric,
                ) &&
                ("the_false_value" === input.middle_boolean ||
                    "the_true_value" === input.middle_boolean) &&
                "string" === typeof input.ipv4 &&
                RegExp(
                    /^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                ).test(input.ipv4) &&
                "string" === typeof input.email &&
                RegExp(/(.*)@(.*)\.(.*)/).test(input.email);
            return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TemplateAtomic => {
                const $guard = (typia.createAssert as any).guard;
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
                        RegExp(/^the_(.*)_value$/).test(input.middle_string)) ||
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
                        RegExp(
                            /^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/,
                        ).test(input.middle_numeric)) ||
                        $guard(_exceptionable, {
                            path: _path + ".middle_numeric",
                            expected: "`the_${number}_value`",
                            value: input.middle_numeric,
                        })) &&
                    ("the_false_value" === input.middle_boolean ||
                        "the_true_value" === input.middle_boolean ||
                        $guard(_exceptionable, {
                            path: _path + ".middle_boolean",
                            expected: '("the_false_value" | "the_true_value")',
                            value: input.middle_boolean,
                        })) &&
                    (("string" === typeof input.ipv4 &&
                        RegExp(
                            /^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
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
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TemplateAtomic",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "TemplateAtomic",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
});
