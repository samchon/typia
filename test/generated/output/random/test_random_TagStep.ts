import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { TagStep } from "../../../structures/TagStep";

export const test_random_TagStep = _test_random("TagStep")<TagStep>(TagStep)({
    random: () =>
        ((
            generator?: Partial<typia.IRandomGenerator>,
        ): typia.Primitive<TagStep> => {
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
                exclusiveMinimum:
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "step",
                            value: "5",
                        },
                        {
                            name: "exclusiveMinimum",
                            value: "3",
                        },
                    ]) ??
                    3 + 5 * (generator?.integer ?? $generator.integer)(1, 10),
                minimum:
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "step",
                            value: "5",
                        },
                        {
                            name: "minimum",
                            value: "3",
                        },
                    ]) ??
                    3 + 5 * (generator?.integer ?? $generator.integer)(0, 10),
                range:
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "step",
                            value: "5",
                        },
                        {
                            name: "exclusiveMinimum",
                            value: "0",
                        },
                        {
                            name: "exclusiveMaximum",
                            value: "100",
                        },
                    ]) ??
                    0 + 5 * (generator?.integer ?? $generator.integer)(1, 19),
                multipleOf:
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "multipleOf",
                            value: "5",
                        },
                        {
                            name: "minimum",
                            value: "3",
                        },
                        {
                            name: "maximum",
                            value: "99",
                        },
                    ]) ?? 5 * (generator?.integer ?? $generator.integer)(1, 19),
            });
            return $ro0();
        })(),
    assert: (input: any): TagStep => {
        const __is = (input: any): input is TagStep => {
            const $io0 = (input: any): boolean =>
                Array.isArray(input.value) &&
                input.value.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
                );
            const $io1 = (input: any): boolean =>
                "number" === typeof input.exclusiveMinimum &&
                0 === (input.exclusiveMinimum % 5) - 3 &&
                3 < input.exclusiveMinimum &&
                "number" === typeof input.minimum &&
                0 === (input.minimum % 5) - 3 &&
                3 <= input.minimum &&
                "number" === typeof input.range &&
                0 === (input.range % 5) - 0 &&
                0 < input.range &&
                100 > input.range &&
                "number" === typeof input.multipleOf &&
                0 === input.multipleOf % 5 &&
                3 <= input.multipleOf &&
                99 >= input.multipleOf;
            return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagStep => {
                const $guard = (typia.createAssert as any).guard;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ((Array.isArray(input.value) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "Array<TagStep.Type>",
                            value: input.value,
                        })) &&
                        input.value.every(
                            (elem: any, _index1: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".value[" + _index1 + "]",
                                        expected: "TagStep.Type",
                                        value: elem,
                                    })) &&
                                    $ao1(
                                        elem,
                                        _path + ".value[" + _index1 + "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value[" + _index1 + "]",
                                    expected: "TagStep.Type",
                                    value: elem,
                                }),
                        )) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "Array<TagStep.Type>",
                        value: input.value,
                    });
                const $ao1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("number" === typeof input.exclusiveMinimum &&
                        (0 === (input.exclusiveMinimum % 5) - 3 ||
                            $guard(_exceptionable, {
                                path: _path + ".exclusiveMinimum",
                                expected: "number (@step 5)",
                                value: input.exclusiveMinimum,
                            })) &&
                        (3 < input.exclusiveMinimum ||
                            $guard(_exceptionable, {
                                path: _path + ".exclusiveMinimum",
                                expected: "number (@exclusiveMinimum 3)",
                                value: input.exclusiveMinimum,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".exclusiveMinimum",
                            expected: "number",
                            value: input.exclusiveMinimum,
                        })) &&
                    (("number" === typeof input.minimum &&
                        (0 === (input.minimum % 5) - 3 ||
                            $guard(_exceptionable, {
                                path: _path + ".minimum",
                                expected: "number (@step 5)",
                                value: input.minimum,
                            })) &&
                        (3 <= input.minimum ||
                            $guard(_exceptionable, {
                                path: _path + ".minimum",
                                expected: "number (@minimum 3)",
                                value: input.minimum,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".minimum",
                            expected: "number",
                            value: input.minimum,
                        })) &&
                    (("number" === typeof input.range &&
                        (0 === (input.range % 5) - 0 ||
                            $guard(_exceptionable, {
                                path: _path + ".range",
                                expected: "number (@step 5)",
                                value: input.range,
                            })) &&
                        (0 < input.range ||
                            $guard(_exceptionable, {
                                path: _path + ".range",
                                expected: "number (@exclusiveMinimum 0)",
                                value: input.range,
                            })) &&
                        (100 > input.range ||
                            $guard(_exceptionable, {
                                path: _path + ".range",
                                expected: "number (@exclusiveMaximum 100)",
                                value: input.range,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".range",
                            expected: "number",
                            value: input.range,
                        })) &&
                    (("number" === typeof input.multipleOf &&
                        (0 === input.multipleOf % 5 ||
                            $guard(_exceptionable, {
                                path: _path + ".multipleOf",
                                expected: "number (@multipleOf 5)",
                                value: input.multipleOf,
                            })) &&
                        (3 <= input.multipleOf ||
                            $guard(_exceptionable, {
                                path: _path + ".multipleOf",
                                expected: "number (@minimum 3)",
                                value: input.multipleOf,
                            })) &&
                        (99 >= input.multipleOf ||
                            $guard(_exceptionable, {
                                path: _path + ".multipleOf",
                                expected: "number (@maximum 99)",
                                value: input.multipleOf,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".multipleOf",
                            expected: "number",
                            value: input.multipleOf,
                        }));
                return (
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TagStep",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "TagStep",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
});
