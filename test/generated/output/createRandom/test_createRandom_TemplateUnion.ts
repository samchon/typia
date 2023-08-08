import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { TemplateUnion } from "../../../structures/TemplateUnion";

export const test_createRandom_TemplateUnion = _test_random(
    "TemplateUnion",
    (
        generator?: Partial<typia.IRandomGenerator>,
    ): typia.Primitive<TemplateUnion> => {
        const $generator = (typia.createRandom as any).generator;
        const $pick = (typia.createRandom as any).pick;
        const $ro0 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            prefix: $pick([
                () =>
                    `prefix_${
                        (generator?.customs ?? $generator.customs)?.string?.(
                            [],
                        ) ?? (generator?.string ?? $generator.string)()
                    }`,
                () =>
                    `prefix_${
                        (generator?.customs ?? $generator.customs)?.number?.(
                            [],
                        ) ?? (generator?.number ?? $generator.number)(0, 100)
                    }`,
            ])(),
            postfix: $pick([
                () =>
                    `${
                        (generator?.customs ?? $generator.customs)?.string?.(
                            [],
                        ) ?? (generator?.string ?? $generator.string)()
                    }_postfix`,
                () =>
                    `${
                        (generator?.customs ?? $generator.customs)?.number?.(
                            [],
                        ) ?? (generator?.number ?? $generator.number)(0, 100)
                    }_postfix`,
            ])(),
            middle: $pick([
                () => "the_false_value",
                () => "the_true_value",
                () =>
                    `the_${
                        (generator?.customs ?? $generator.customs)?.number?.(
                            [],
                        ) ?? (generator?.number ?? $generator.number)(0, 100)
                    }_value`,
            ])(),
            mixed: $pick([
                () => "the_A_value",
                () => "the_B_value",
                () =>
                    `the_${
                        (generator?.customs ?? $generator.customs)?.number?.(
                            [],
                        ) ?? (generator?.number ?? $generator.number)(0, 100)
                    }_value`,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
                () => (generator?.boolean ?? $generator.boolean)(),
                () => $ro1(_recursive, _recursive ? 1 + _depth : _depth),
            ])(),
        });
        const $ro1 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            name:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
        });
        return (generator?.array ?? $generator.array)(() => $ro0());
    },
    (input: any): typia.Primitive<TemplateUnion> => {
        const __is = (input: any): input is typia.Primitive<TemplateUnion> => {
            const $io0 = (input: any): boolean =>
                "string" === typeof input.prefix &&
                (RegExp(/^prefix_(.*)/).test(input.prefix) ||
                    RegExp(/^prefix_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(
                        input.prefix,
                    )) &&
                "string" === typeof input.postfix &&
                (RegExp(/(.*)_postfix$/).test(input.postfix) ||
                    RegExp(
                        /^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_postfix$/,
                    ).test(input.postfix)) &&
                ("the_false_value" === input.middle ||
                    "the_true_value" === input.middle ||
                    ("string" === typeof input.middle &&
                        RegExp(
                            /^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/,
                        ).test(input.middle))) &&
                null !== input.mixed &&
                undefined !== input.mixed &&
                ("the_A_value" === input.mixed ||
                    "the_B_value" === input.mixed ||
                    ("number" === typeof input.mixed &&
                        Number.isFinite(input.mixed)) ||
                    "boolean" === typeof input.mixed ||
                    ("string" === typeof input.mixed &&
                        RegExp(
                            /^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/,
                        ).test(input.mixed)) ||
                    ("object" === typeof input.mixed &&
                        null !== input.mixed &&
                        $io1(input.mixed)));
            const $io1 = (input: any): boolean =>
                "string" === typeof input.name;
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is typia.Primitive<TemplateUnion> => {
                const $guard = (typia.createAssert as any).guard;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("string" === typeof input.prefix &&
                        (RegExp(/^prefix_(.*)/).test(input.prefix) ||
                            RegExp(
                                /^prefix_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                            ).test(input.prefix))) ||
                        $guard(_exceptionable, {
                            path: _path + ".prefix",
                            expected:
                                "(`prefix_${number}` | `prefix_${string}`)",
                            value: input.prefix,
                        })) &&
                    (("string" === typeof input.postfix &&
                        (RegExp(/(.*)_postfix$/).test(input.postfix) ||
                            RegExp(
                                /^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_postfix$/,
                            ).test(input.postfix))) ||
                        $guard(_exceptionable, {
                            path: _path + ".postfix",
                            expected:
                                "(`${number}_postfix` | `${string}_postfix`)",
                            value: input.postfix,
                        })) &&
                    ("the_false_value" === input.middle ||
                        "the_true_value" === input.middle ||
                        ("string" === typeof input.middle &&
                            RegExp(
                                /^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/,
                            ).test(input.middle)) ||
                        $guard(_exceptionable, {
                            path: _path + ".middle",
                            expected:
                                '("the_false_value" | "the_true_value" | `the_${number}_value`)',
                            value: input.middle,
                        })) &&
                    (null !== input.mixed ||
                        $guard(_exceptionable, {
                            path: _path + ".mixed",
                            expected:
                                '("the_A_value" | "the_B_value" | __type | `the_${number}_value` | boolean | number)',
                            value: input.mixed,
                        })) &&
                    (undefined !== input.mixed ||
                        $guard(_exceptionable, {
                            path: _path + ".mixed",
                            expected:
                                '("the_A_value" | "the_B_value" | __type | `the_${number}_value` | boolean | number)',
                            value: input.mixed,
                        })) &&
                    ("the_A_value" === input.mixed ||
                        "the_B_value" === input.mixed ||
                        ("number" === typeof input.mixed &&
                            Number.isFinite(input.mixed)) ||
                        "boolean" === typeof input.mixed ||
                        ("string" === typeof input.mixed &&
                            RegExp(
                                /^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/,
                            ).test(input.mixed)) ||
                        ((("object" === typeof input.mixed &&
                            null !== input.mixed) ||
                            $guard(_exceptionable, {
                                path: _path + ".mixed",
                                expected:
                                    '("the_A_value" | "the_B_value" | __type | `the_${number}_value` | boolean | number)',
                                value: input.mixed,
                            })) &&
                            $ao1(
                                input.mixed,
                                _path + ".mixed",
                                true && _exceptionable,
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + ".mixed",
                            expected:
                                '("the_A_value" | "the_B_value" | __type | `the_${number}_value` | boolean | number)',
                            value: input.mixed,
                        }));
                const $ao1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "string" === typeof input.name ||
                    $guard(_exceptionable, {
                        path: _path + ".name",
                        expected: "string",
                        value: input.name,
                    });
                return (
                    ((Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TemplateUnion",
                            value: input,
                        })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "TemplateUnion.Type",
                                        value: elem,
                                    })) &&
                                    $ao0(
                                        elem,
                                        _path + "[" + _index1 + "]",
                                        true,
                                    )) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected: "TemplateUnion.Type",
                                    value: elem,
                                }),
                        )) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "TemplateUnion",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
);
