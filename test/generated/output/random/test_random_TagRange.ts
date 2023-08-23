import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { TagRange } from "../../../structures/TagRange";

export const test_random_TagRange = _test_random("TagRange")<TagRange>(
    TagRange,
)({
    random: () =>
        ((
            generator?: Partial<typia.IRandomGenerator>,
        ): typia.Resolved<TagRange> => {
            const $generator = (typia.random as any).generator;
            const $ro0 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                value: (generator?.array ?? $generator.array)(() =>
                    $ro1(_recursive, _recursive ? 1 + _depth : _depth),
                ),
            });
            const $ro1 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                greater:
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "type",
                            value: "int",
                        },
                        {
                            name: "exclusiveMinimum",
                            value: "3",
                        },
                    ]) ?? (generator?.integer ?? $generator.integer)(4, 14),
                greater_equal:
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "type",
                            value: "int",
                        },
                        {
                            name: "minimum",
                            value: "3",
                        },
                    ]) ?? (generator?.integer ?? $generator.integer)(3, 13),
                less:
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "type",
                            value: "int",
                        },
                        {
                            name: "exclusiveMaximum",
                            value: "7",
                        },
                    ]) ?? (generator?.integer ?? $generator.integer)(-4, 6),
                less_equal:
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "type",
                            value: "int",
                        },
                        {
                            name: "maximum",
                            value: "7",
                        },
                    ]) ?? (generator?.integer ?? $generator.integer)(-3, 7),
                greater_less:
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "type",
                            value: "int",
                        },
                        {
                            name: "exclusiveMinimum",
                            value: "3",
                        },
                        {
                            name: "exclusiveMaximum",
                            value: "7",
                        },
                    ]) ?? (generator?.integer ?? $generator.integer)(4, 6),
                greater_equal_less:
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "type",
                            value: "int",
                        },
                        {
                            name: "minimum",
                            value: "3",
                        },
                        {
                            name: "exclusiveMaximum",
                            value: "7",
                        },
                    ]) ?? (generator?.integer ?? $generator.integer)(3, 6),
                greater_less_equal:
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "type",
                            value: "int",
                        },
                        {
                            name: "exclusiveMinimum",
                            value: "3",
                        },
                        {
                            name: "maximum",
                            value: "7",
                        },
                    ]) ?? (generator?.integer ?? $generator.integer)(4, 7),
                greater_equal_less_equal:
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "type",
                            value: "int",
                        },
                        {
                            name: "minimum",
                            value: "3",
                        },
                        {
                            name: "maximum",
                            value: "7",
                        },
                    ]) ?? (generator?.integer ?? $generator.integer)(3, 7),
                equal:
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "type",
                            value: "int",
                        },
                        {
                            name: "minimum",
                            value: "10",
                        },
                        {
                            name: "maximum",
                            value: "10",
                        },
                    ]) ?? (generator?.integer ?? $generator.integer)(10, 10),
            });
            return $ro0();
        })(),
    assert: (input: any): TagRange => {
        const __is = (input: any): input is TagRange => {
            const $io0 = (input: any): boolean =>
                Array.isArray(input.value) &&
                input.value.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
                );
            const $io1 = (input: any): boolean =>
                "number" === typeof input.greater &&
                Number.isFinite(input.greater) &&
                Math.floor(input.greater) === input.greater &&
                -2147483648 <= input.greater &&
                input.greater <= 2147483647 &&
                3 < input.greater &&
                "number" === typeof input.greater_equal &&
                Number.isFinite(input.greater_equal) &&
                Math.floor(input.greater_equal) === input.greater_equal &&
                -2147483648 <= input.greater_equal &&
                input.greater_equal <= 2147483647 &&
                3 <= input.greater_equal &&
                "number" === typeof input.less &&
                Number.isFinite(input.less) &&
                Math.floor(input.less) === input.less &&
                -2147483648 <= input.less &&
                input.less <= 2147483647 &&
                7 > input.less &&
                "number" === typeof input.less_equal &&
                Number.isFinite(input.less_equal) &&
                Math.floor(input.less_equal) === input.less_equal &&
                -2147483648 <= input.less_equal &&
                input.less_equal <= 2147483647 &&
                7 >= input.less_equal &&
                "number" === typeof input.greater_less &&
                Math.floor(input.greater_less) === input.greater_less &&
                -2147483648 <= input.greater_less &&
                input.greater_less <= 2147483647 &&
                3 < input.greater_less &&
                7 > input.greater_less &&
                "number" === typeof input.greater_equal_less &&
                Math.floor(input.greater_equal_less) ===
                    input.greater_equal_less &&
                -2147483648 <= input.greater_equal_less &&
                input.greater_equal_less <= 2147483647 &&
                3 <= input.greater_equal_less &&
                7 > input.greater_equal_less &&
                "number" === typeof input.greater_less_equal &&
                Math.floor(input.greater_less_equal) ===
                    input.greater_less_equal &&
                -2147483648 <= input.greater_less_equal &&
                input.greater_less_equal <= 2147483647 &&
                3 < input.greater_less_equal &&
                7 >= input.greater_less_equal &&
                "number" === typeof input.greater_equal_less_equal &&
                Math.floor(input.greater_equal_less_equal) ===
                    input.greater_equal_less_equal &&
                -2147483648 <= input.greater_equal_less_equal &&
                input.greater_equal_less_equal <= 2147483647 &&
                3 <= input.greater_equal_less_equal &&
                7 >= input.greater_equal_less_equal &&
                "number" === typeof input.equal &&
                Math.floor(input.equal) === input.equal &&
                -2147483648 <= input.equal &&
                input.equal <= 2147483647 &&
                10 <= input.equal &&
                10 >= input.equal;
            return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagRange => {
                const $guard = (typia.createAssert as any).guard;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ((Array.isArray(input.value) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "Array<TagRange.Type>",
                            value: input.value,
                        })) &&
                        input.value.every(
                            (elem: any, _index1: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".value[" + _index1 + "]",
                                        expected: "TagRange.Type",
                                        value: elem,
                                    })) &&
                                    $ao1(
                                        elem,
                                        _path + ".value[" + _index1 + "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value[" + _index1 + "]",
                                    expected: "TagRange.Type",
                                    value: elem,
                                }),
                        )) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "Array<TagRange.Type>",
                        value: input.value,
                    });
                const $ao1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("number" === typeof input.greater &&
                        Number.isFinite(input.greater) &&
                        (Math.floor(input.greater) === input.greater ||
                            $guard(_exceptionable, {
                                path: _path + ".greater",
                                expected: "number (@type int)",
                                value: input.greater,
                            })) &&
                        ((-2147483648 <= input.greater &&
                            input.greater <= 2147483647) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater",
                                expected: "number (@type int)",
                                value: input.greater,
                            })) &&
                        (3 < input.greater ||
                            $guard(_exceptionable, {
                                path: _path + ".greater",
                                expected: "number (@exclusiveMinimum 3)",
                                value: input.greater,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".greater",
                            expected: "number",
                            value: input.greater,
                        })) &&
                    (("number" === typeof input.greater_equal &&
                        Number.isFinite(input.greater_equal) &&
                        (Math.floor(input.greater_equal) ===
                            input.greater_equal ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal",
                                expected: "number (@type int)",
                                value: input.greater_equal,
                            })) &&
                        ((-2147483648 <= input.greater_equal &&
                            input.greater_equal <= 2147483647) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal",
                                expected: "number (@type int)",
                                value: input.greater_equal,
                            })) &&
                        (3 <= input.greater_equal ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal",
                                expected: "number (@minimum 3)",
                                value: input.greater_equal,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".greater_equal",
                            expected: "number",
                            value: input.greater_equal,
                        })) &&
                    (("number" === typeof input.less &&
                        Number.isFinite(input.less) &&
                        (Math.floor(input.less) === input.less ||
                            $guard(_exceptionable, {
                                path: _path + ".less",
                                expected: "number (@type int)",
                                value: input.less,
                            })) &&
                        ((-2147483648 <= input.less &&
                            input.less <= 2147483647) ||
                            $guard(_exceptionable, {
                                path: _path + ".less",
                                expected: "number (@type int)",
                                value: input.less,
                            })) &&
                        (7 > input.less ||
                            $guard(_exceptionable, {
                                path: _path + ".less",
                                expected: "number (@exclusiveMaximum 7)",
                                value: input.less,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".less",
                            expected: "number",
                            value: input.less,
                        })) &&
                    (("number" === typeof input.less_equal &&
                        Number.isFinite(input.less_equal) &&
                        (Math.floor(input.less_equal) === input.less_equal ||
                            $guard(_exceptionable, {
                                path: _path + ".less_equal",
                                expected: "number (@type int)",
                                value: input.less_equal,
                            })) &&
                        ((-2147483648 <= input.less_equal &&
                            input.less_equal <= 2147483647) ||
                            $guard(_exceptionable, {
                                path: _path + ".less_equal",
                                expected: "number (@type int)",
                                value: input.less_equal,
                            })) &&
                        (7 >= input.less_equal ||
                            $guard(_exceptionable, {
                                path: _path + ".less_equal",
                                expected: "number (@maximum 7)",
                                value: input.less_equal,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".less_equal",
                            expected: "number",
                            value: input.less_equal,
                        })) &&
                    (("number" === typeof input.greater_less &&
                        (Math.floor(input.greater_less) ===
                            input.greater_less ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_less",
                                expected: "number (@type int)",
                                value: input.greater_less,
                            })) &&
                        ((-2147483648 <= input.greater_less &&
                            input.greater_less <= 2147483647) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_less",
                                expected: "number (@type int)",
                                value: input.greater_less,
                            })) &&
                        (3 < input.greater_less ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_less",
                                expected: "number (@exclusiveMinimum 3)",
                                value: input.greater_less,
                            })) &&
                        (7 > input.greater_less ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_less",
                                expected: "number (@exclusiveMaximum 7)",
                                value: input.greater_less,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".greater_less",
                            expected: "number",
                            value: input.greater_less,
                        })) &&
                    (("number" === typeof input.greater_equal_less &&
                        (Math.floor(input.greater_equal_less) ===
                            input.greater_equal_less ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal_less",
                                expected: "number (@type int)",
                                value: input.greater_equal_less,
                            })) &&
                        ((-2147483648 <= input.greater_equal_less &&
                            input.greater_equal_less <= 2147483647) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal_less",
                                expected: "number (@type int)",
                                value: input.greater_equal_less,
                            })) &&
                        (3 <= input.greater_equal_less ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal_less",
                                expected: "number (@minimum 3)",
                                value: input.greater_equal_less,
                            })) &&
                        (7 > input.greater_equal_less ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal_less",
                                expected: "number (@exclusiveMaximum 7)",
                                value: input.greater_equal_less,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".greater_equal_less",
                            expected: "number",
                            value: input.greater_equal_less,
                        })) &&
                    (("number" === typeof input.greater_less_equal &&
                        (Math.floor(input.greater_less_equal) ===
                            input.greater_less_equal ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_less_equal",
                                expected: "number (@type int)",
                                value: input.greater_less_equal,
                            })) &&
                        ((-2147483648 <= input.greater_less_equal &&
                            input.greater_less_equal <= 2147483647) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_less_equal",
                                expected: "number (@type int)",
                                value: input.greater_less_equal,
                            })) &&
                        (3 < input.greater_less_equal ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_less_equal",
                                expected: "number (@exclusiveMinimum 3)",
                                value: input.greater_less_equal,
                            })) &&
                        (7 >= input.greater_less_equal ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_less_equal",
                                expected: "number (@maximum 7)",
                                value: input.greater_less_equal,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".greater_less_equal",
                            expected: "number",
                            value: input.greater_less_equal,
                        })) &&
                    (("number" === typeof input.greater_equal_less_equal &&
                        (Math.floor(input.greater_equal_less_equal) ===
                            input.greater_equal_less_equal ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal_less_equal",
                                expected: "number (@type int)",
                                value: input.greater_equal_less_equal,
                            })) &&
                        ((-2147483648 <= input.greater_equal_less_equal &&
                            input.greater_equal_less_equal <= 2147483647) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal_less_equal",
                                expected: "number (@type int)",
                                value: input.greater_equal_less_equal,
                            })) &&
                        (3 <= input.greater_equal_less_equal ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal_less_equal",
                                expected: "number (@minimum 3)",
                                value: input.greater_equal_less_equal,
                            })) &&
                        (7 >= input.greater_equal_less_equal ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal_less_equal",
                                expected: "number (@maximum 7)",
                                value: input.greater_equal_less_equal,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".greater_equal_less_equal",
                            expected: "number",
                            value: input.greater_equal_less_equal,
                        })) &&
                    (("number" === typeof input.equal &&
                        (Math.floor(input.equal) === input.equal ||
                            $guard(_exceptionable, {
                                path: _path + ".equal",
                                expected: "number (@type int)",
                                value: input.equal,
                            })) &&
                        ((-2147483648 <= input.equal &&
                            input.equal <= 2147483647) ||
                            $guard(_exceptionable, {
                                path: _path + ".equal",
                                expected: "number (@type int)",
                                value: input.equal,
                            })) &&
                        (10 <= input.equal ||
                            $guard(_exceptionable, {
                                path: _path + ".equal",
                                expected: "number (@minimum 10)",
                                value: input.equal,
                            })) &&
                        (10 >= input.equal ||
                            $guard(_exceptionable, {
                                path: _path + ".equal",
                                expected: "number (@maximum 10)",
                                value: input.equal,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".equal",
                            expected: "number",
                            value: input.equal,
                        }));
                return (
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TagRange",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "TagRange",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
});
