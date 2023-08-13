import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { TagRange } from "../../../structures/TagRange";

export const test_random_TagRange = _test_random(
    "TagRange",
    () =>
        ((
            generator?: Partial<typia.IRandomGenerator>,
        ): typia.Primitive<TagRange> => {
            const $generator = (typia.random as any).generator;
            const $ro0 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                greater:
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "exclusiveMinimum",
                            value: "3",
                        },
                    ]) ?? (generator?.number ?? $generator.number)(3, 13),
                greater_equal:
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "minimum",
                            value: "3",
                        },
                    ]) ?? (generator?.number ?? $generator.number)(3, 13),
                less:
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "exclusiveMaximum",
                            value: "7",
                        },
                    ]) ?? (generator?.number ?? $generator.number)(-3, 7),
                less_equal:
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "maximum",
                            value: "7",
                        },
                    ]) ?? (generator?.number ?? $generator.number)(-3, 7),
                greater_less:
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "exclusiveMinimum",
                            value: "3",
                        },
                        {
                            name: "exclusiveMaximum",
                            value: "7",
                        },
                    ]) ?? (generator?.number ?? $generator.number)(3, 7),
                greater_equal_less:
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "minimum",
                            value: "3",
                        },
                        {
                            name: "exclusiveMaximum",
                            value: "7",
                        },
                    ]) ?? (generator?.number ?? $generator.number)(3, 7),
                greater_less_equal:
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "exclusiveMinimum",
                            value: "3",
                        },
                        {
                            name: "maximum",
                            value: "7",
                        },
                    ]) ?? (generator?.number ?? $generator.number)(3, 7),
                greater_equal_less_equal:
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "minimum",
                            value: "3",
                        },
                        {
                            name: "maximum",
                            value: "7",
                        },
                    ]) ?? (generator?.number ?? $generator.number)(3, 7),
                equal:
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "minimum",
                            value: "10",
                        },
                        {
                            name: "maximum",
                            value: "10",
                        },
                    ]) ?? (generator?.number ?? $generator.number)(10, 10),
            });
            return (generator?.array ?? $generator.array)(() => $ro0());
        })(),
    (input: any): typia.Primitive<TagRange> => {
        const __is = (input: any): input is typia.Primitive<TagRange> => {
            const $io0 = (input: any): boolean =>
                "number" === typeof input.greater &&
                Number.isFinite(input.greater) &&
                3 < input.greater &&
                "number" === typeof input.greater_equal &&
                Number.isFinite(input.greater_equal) &&
                3 <= input.greater_equal &&
                "number" === typeof input.less &&
                Number.isFinite(input.less) &&
                7 > input.less &&
                "number" === typeof input.less_equal &&
                Number.isFinite(input.less_equal) &&
                7 >= input.less_equal &&
                "number" === typeof input.greater_less &&
                3 < input.greater_less &&
                7 > input.greater_less &&
                "number" === typeof input.greater_equal_less &&
                3 <= input.greater_equal_less &&
                7 > input.greater_equal_less &&
                "number" === typeof input.greater_less_equal &&
                3 < input.greater_less_equal &&
                7 >= input.greater_less_equal &&
                "number" === typeof input.greater_equal_less_equal &&
                3 <= input.greater_equal_less_equal &&
                7 >= input.greater_equal_less_equal &&
                "number" === typeof input.equal &&
                10 <= input.equal &&
                10 >= input.equal;
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
            ): input is typia.Primitive<TagRange> => {
                const $guard = (typia.createAssert as any).guard;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("number" === typeof input.greater &&
                        Number.isFinite(input.greater) &&
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
                    ((Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TagRange",
                            value: input,
                        })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "TagRange.Type",
                                        value: elem,
                                    })) &&
                                    $ao0(
                                        elem,
                                        _path + "[" + _index1 + "]",
                                        true,
                                    )) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected: "TagRange.Type",
                                    value: elem,
                                }),
                        )) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "TagRange",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
);
