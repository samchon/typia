import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { CommentTagRange } from "../../../structures/CommentTagRange";

export const test_random_CommentTagRange = _test_random(
    "CommentTagRange",
)<CommentTagRange>(CommentTagRange)({
    random: (
        generator?: Partial<typia.IRandomGenerator>,
    ): typia.Resolved<CommentTagRange> => {
        const $generator = (typia.createRandom as any).generator;
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
                        name: "Type<int32>",
                        target: "number",
                        kind: "type",
                        value: "int32",
                        validate:
                            "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                        exclusive: true,
                    },
                    {
                        name: "ExclusiveMinimum<3>",
                        target: "number",
                        kind: "exclusiveMinimum",
                        value: 3,
                        validate: "3 < $input",
                        exclusive: ["minimum", "exclusiveMinimum"],
                    },
                ]) ?? (generator?.integer ?? $generator.integer)(4, 14),
            greater_equal:
                (generator?.customs ?? $generator.customs)?.number?.([
                    {
                        name: "Type<int32>",
                        target: "number",
                        kind: "type",
                        value: "int32",
                        validate:
                            "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                        exclusive: true,
                    },
                    {
                        name: "Minimum<3>",
                        target: "number",
                        kind: "minimum",
                        value: 3,
                        validate: "3 <= $input",
                        exclusive: ["minimum", "exclusiveMinimum"],
                    },
                ]) ?? (generator?.integer ?? $generator.integer)(3, 13),
            less:
                (generator?.customs ?? $generator.customs)?.number?.([
                    {
                        name: "Type<int32>",
                        target: "number",
                        kind: "type",
                        value: "int32",
                        validate:
                            "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                        exclusive: true,
                    },
                    {
                        name: "ExclusiveMaximum<7>",
                        target: "number",
                        kind: "exclusiveMaximum",
                        value: 7,
                        validate: "$input < 7",
                        exclusive: ["maximum", "exclusiveMaximum"],
                    },
                ]) ?? (generator?.integer ?? $generator.integer)(-4, 6),
            less_equal:
                (generator?.customs ?? $generator.customs)?.number?.([
                    {
                        name: "Type<int32>",
                        target: "number",
                        kind: "type",
                        value: "int32",
                        validate:
                            "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                        exclusive: true,
                    },
                    {
                        name: "Maximum<7>",
                        target: "number",
                        kind: "maximum",
                        value: 7,
                        validate: "$input <= 7",
                        exclusive: ["maximum", "exclusiveMaximum"],
                    },
                ]) ?? (generator?.integer ?? $generator.integer)(-3, 7),
            greater_less:
                (generator?.customs ?? $generator.customs)?.number?.([
                    {
                        name: "Type<int32>",
                        target: "number",
                        kind: "type",
                        value: "int32",
                        validate:
                            "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                        exclusive: true,
                    },
                    {
                        name: "ExclusiveMinimum<3>",
                        target: "number",
                        kind: "exclusiveMinimum",
                        value: 3,
                        validate: "3 < $input",
                        exclusive: ["minimum", "exclusiveMinimum"],
                    },
                    {
                        name: "ExclusiveMaximum<7>",
                        target: "number",
                        kind: "exclusiveMaximum",
                        value: 7,
                        validate: "$input < 7",
                        exclusive: ["maximum", "exclusiveMaximum"],
                    },
                ]) ?? (generator?.integer ?? $generator.integer)(4, 6),
            greater_equal_less:
                (generator?.customs ?? $generator.customs)?.number?.([
                    {
                        name: "Type<int32>",
                        target: "number",
                        kind: "type",
                        value: "int32",
                        validate:
                            "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                        exclusive: true,
                    },
                    {
                        name: "Minimum<3>",
                        target: "number",
                        kind: "minimum",
                        value: 3,
                        validate: "3 <= $input",
                        exclusive: ["minimum", "exclusiveMinimum"],
                    },
                    {
                        name: "ExclusiveMaximum<7>",
                        target: "number",
                        kind: "exclusiveMaximum",
                        value: 7,
                        validate: "$input < 7",
                        exclusive: ["maximum", "exclusiveMaximum"],
                    },
                ]) ?? (generator?.integer ?? $generator.integer)(3, 6),
            greater_less_equal:
                (generator?.customs ?? $generator.customs)?.number?.([
                    {
                        name: "Type<int32>",
                        target: "number",
                        kind: "type",
                        value: "int32",
                        validate:
                            "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                        exclusive: true,
                    },
                    {
                        name: "ExclusiveMinimum<3>",
                        target: "number",
                        kind: "exclusiveMinimum",
                        value: 3,
                        validate: "3 < $input",
                        exclusive: ["minimum", "exclusiveMinimum"],
                    },
                    {
                        name: "Maximum<7>",
                        target: "number",
                        kind: "maximum",
                        value: 7,
                        validate: "$input <= 7",
                        exclusive: ["maximum", "exclusiveMaximum"],
                    },
                ]) ?? (generator?.integer ?? $generator.integer)(4, 7),
            greater_equal_less_equal:
                (generator?.customs ?? $generator.customs)?.number?.([
                    {
                        name: "Type<int32>",
                        target: "number",
                        kind: "type",
                        value: "int32",
                        validate:
                            "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                        exclusive: true,
                    },
                    {
                        name: "Minimum<3>",
                        target: "number",
                        kind: "minimum",
                        value: 3,
                        validate: "3 <= $input",
                        exclusive: ["minimum", "exclusiveMinimum"],
                    },
                    {
                        name: "Maximum<7>",
                        target: "number",
                        kind: "maximum",
                        value: 7,
                        validate: "$input <= 7",
                        exclusive: ["maximum", "exclusiveMaximum"],
                    },
                ]) ?? (generator?.integer ?? $generator.integer)(3, 7),
            equal:
                (generator?.customs ?? $generator.customs)?.number?.([
                    {
                        name: "Type<int32>",
                        target: "number",
                        kind: "type",
                        value: "int32",
                        validate:
                            "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                        exclusive: true,
                    },
                    {
                        name: "Minimum<10>",
                        target: "number",
                        kind: "minimum",
                        value: 10,
                        validate: "10 <= $input",
                        exclusive: ["minimum", "exclusiveMinimum"],
                    },
                    {
                        name: "Maximum<10>",
                        target: "number",
                        kind: "maximum",
                        value: 10,
                        validate: "$input <= 10",
                        exclusive: ["maximum", "exclusiveMaximum"],
                    },
                ]) ?? (generator?.integer ?? $generator.integer)(10, 10),
        });
        return $ro0();
    },
    assert: (input: any): CommentTagRange => {
        const __is = (input: any): input is CommentTagRange => {
            const $io0 = (input: any): boolean =>
                Array.isArray(input.value) &&
                input.value.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
                );
            const $io1 = (input: any): boolean =>
                "number" === typeof input.greater &&
                Math.floor(input.greater) === input.greater &&
                -2147483648 <= input.greater &&
                input.greater <= 2147483647 &&
                3 < input.greater &&
                "number" === typeof input.greater_equal &&
                Math.floor(input.greater_equal) === input.greater_equal &&
                -2147483648 <= input.greater_equal &&
                input.greater_equal <= 2147483647 &&
                3 <= input.greater_equal &&
                "number" === typeof input.less &&
                Math.floor(input.less) === input.less &&
                -2147483648 <= input.less &&
                input.less <= 2147483647 &&
                input.less < 7 &&
                "number" === typeof input.less_equal &&
                Math.floor(input.less_equal) === input.less_equal &&
                -2147483648 <= input.less_equal &&
                input.less_equal <= 2147483647 &&
                input.less_equal <= 7 &&
                "number" === typeof input.greater_less &&
                Math.floor(input.greater_less) === input.greater_less &&
                -2147483648 <= input.greater_less &&
                input.greater_less <= 2147483647 &&
                3 < input.greater_less &&
                input.greater_less < 7 &&
                "number" === typeof input.greater_equal_less &&
                Math.floor(input.greater_equal_less) ===
                    input.greater_equal_less &&
                -2147483648 <= input.greater_equal_less &&
                input.greater_equal_less <= 2147483647 &&
                3 <= input.greater_equal_less &&
                input.greater_equal_less < 7 &&
                "number" === typeof input.greater_less_equal &&
                Math.floor(input.greater_less_equal) ===
                    input.greater_less_equal &&
                -2147483648 <= input.greater_less_equal &&
                input.greater_less_equal <= 2147483647 &&
                3 < input.greater_less_equal &&
                input.greater_less_equal <= 7 &&
                "number" === typeof input.greater_equal_less_equal &&
                Math.floor(input.greater_equal_less_equal) ===
                    input.greater_equal_less_equal &&
                -2147483648 <= input.greater_equal_less_equal &&
                input.greater_equal_less_equal <= 2147483647 &&
                3 <= input.greater_equal_less_equal &&
                input.greater_equal_less_equal <= 7 &&
                "number" === typeof input.equal &&
                Math.floor(input.equal) === input.equal &&
                -2147483648 <= input.equal &&
                input.equal <= 2147483647 &&
                10 <= input.equal &&
                input.equal <= 10;
            return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is CommentTagRange => {
                const $guard = (typia.createAssert as any).guard;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ((Array.isArray(input.value) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "Array<CommentTagRange.Type>",
                            value: input.value,
                        })) &&
                        input.value.every(
                            (elem: any, _index1: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".value[" + _index1 + "]",
                                        expected: "CommentTagRange.Type",
                                        value: elem,
                                    })) &&
                                    $ao1(
                                        elem,
                                        _path + ".value[" + _index1 + "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value[" + _index1 + "]",
                                    expected: "CommentTagRange.Type",
                                    value: elem,
                                }),
                        )) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "Array<CommentTagRange.Type>",
                        value: input.value,
                    });
                const $ao1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("number" === typeof input.greater &&
                        ((Math.floor(input.greater) === input.greater &&
                            -2147483648 <= input.greater &&
                            input.greater <= 2147483647) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater",
                                expected: "number & Type<int32>",
                                value: input.greater,
                            })) &&
                        (3 < input.greater ||
                            $guard(_exceptionable, {
                                path: _path + ".greater",
                                expected: "number & ExclusiveMinimum<3>",
                                value: input.greater,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".greater",
                            expected:
                                "(number & Type<int32> & ExclusiveMinimum<3>)",
                            value: input.greater,
                        })) &&
                    (("number" === typeof input.greater_equal &&
                        ((Math.floor(input.greater_equal) ===
                            input.greater_equal &&
                            -2147483648 <= input.greater_equal &&
                            input.greater_equal <= 2147483647) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal",
                                expected: "number & Type<int32>",
                                value: input.greater_equal,
                            })) &&
                        (3 <= input.greater_equal ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal",
                                expected: "number & Minimum<3>",
                                value: input.greater_equal,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".greater_equal",
                            expected: "(number & Type<int32> & Minimum<3>)",
                            value: input.greater_equal,
                        })) &&
                    (("number" === typeof input.less &&
                        ((Math.floor(input.less) === input.less &&
                            -2147483648 <= input.less &&
                            input.less <= 2147483647) ||
                            $guard(_exceptionable, {
                                path: _path + ".less",
                                expected: "number & Type<int32>",
                                value: input.less,
                            })) &&
                        (input.less < 7 ||
                            $guard(_exceptionable, {
                                path: _path + ".less",
                                expected: "number & ExclusiveMaximum<7>",
                                value: input.less,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".less",
                            expected:
                                "(number & Type<int32> & ExclusiveMaximum<7>)",
                            value: input.less,
                        })) &&
                    (("number" === typeof input.less_equal &&
                        ((Math.floor(input.less_equal) === input.less_equal &&
                            -2147483648 <= input.less_equal &&
                            input.less_equal <= 2147483647) ||
                            $guard(_exceptionable, {
                                path: _path + ".less_equal",
                                expected: "number & Type<int32>",
                                value: input.less_equal,
                            })) &&
                        (input.less_equal <= 7 ||
                            $guard(_exceptionable, {
                                path: _path + ".less_equal",
                                expected: "number & Maximum<7>",
                                value: input.less_equal,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".less_equal",
                            expected: "(number & Type<int32> & Maximum<7>)",
                            value: input.less_equal,
                        })) &&
                    (("number" === typeof input.greater_less &&
                        ((Math.floor(input.greater_less) ===
                            input.greater_less &&
                            -2147483648 <= input.greater_less &&
                            input.greater_less <= 2147483647) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_less",
                                expected: "number & Type<int32>",
                                value: input.greater_less,
                            })) &&
                        (3 < input.greater_less ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_less",
                                expected: "number & ExclusiveMinimum<3>",
                                value: input.greater_less,
                            })) &&
                        (input.greater_less < 7 ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_less",
                                expected: "number & ExclusiveMaximum<7>",
                                value: input.greater_less,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".greater_less",
                            expected:
                                "(number & Type<int32> & ExclusiveMinimum<3> & ExclusiveMaximum<7>)",
                            value: input.greater_less,
                        })) &&
                    (("number" === typeof input.greater_equal_less &&
                        ((Math.floor(input.greater_equal_less) ===
                            input.greater_equal_less &&
                            -2147483648 <= input.greater_equal_less &&
                            input.greater_equal_less <= 2147483647) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal_less",
                                expected: "number & Type<int32>",
                                value: input.greater_equal_less,
                            })) &&
                        (3 <= input.greater_equal_less ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal_less",
                                expected: "number & Minimum<3>",
                                value: input.greater_equal_less,
                            })) &&
                        (input.greater_equal_less < 7 ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal_less",
                                expected: "number & ExclusiveMaximum<7>",
                                value: input.greater_equal_less,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".greater_equal_less",
                            expected:
                                "(number & Type<int32> & Minimum<3> & ExclusiveMaximum<7>)",
                            value: input.greater_equal_less,
                        })) &&
                    (("number" === typeof input.greater_less_equal &&
                        ((Math.floor(input.greater_less_equal) ===
                            input.greater_less_equal &&
                            -2147483648 <= input.greater_less_equal &&
                            input.greater_less_equal <= 2147483647) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_less_equal",
                                expected: "number & Type<int32>",
                                value: input.greater_less_equal,
                            })) &&
                        (3 < input.greater_less_equal ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_less_equal",
                                expected: "number & ExclusiveMinimum<3>",
                                value: input.greater_less_equal,
                            })) &&
                        (input.greater_less_equal <= 7 ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_less_equal",
                                expected: "number & Maximum<7>",
                                value: input.greater_less_equal,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".greater_less_equal",
                            expected:
                                "(number & Type<int32> & ExclusiveMinimum<3> & Maximum<7>)",
                            value: input.greater_less_equal,
                        })) &&
                    (("number" === typeof input.greater_equal_less_equal &&
                        ((Math.floor(input.greater_equal_less_equal) ===
                            input.greater_equal_less_equal &&
                            -2147483648 <= input.greater_equal_less_equal &&
                            input.greater_equal_less_equal <= 2147483647) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal_less_equal",
                                expected: "number & Type<int32>",
                                value: input.greater_equal_less_equal,
                            })) &&
                        (3 <= input.greater_equal_less_equal ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal_less_equal",
                                expected: "number & Minimum<3>",
                                value: input.greater_equal_less_equal,
                            })) &&
                        (input.greater_equal_less_equal <= 7 ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal_less_equal",
                                expected: "number & Maximum<7>",
                                value: input.greater_equal_less_equal,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".greater_equal_less_equal",
                            expected:
                                "(number & Type<int32> & Minimum<3> & Maximum<7>)",
                            value: input.greater_equal_less_equal,
                        })) &&
                    (("number" === typeof input.equal &&
                        ((Math.floor(input.equal) === input.equal &&
                            -2147483648 <= input.equal &&
                            input.equal <= 2147483647) ||
                            $guard(_exceptionable, {
                                path: _path + ".equal",
                                expected: "number & Type<int32>",
                                value: input.equal,
                            })) &&
                        (10 <= input.equal ||
                            $guard(_exceptionable, {
                                path: _path + ".equal",
                                expected: "number & Minimum<10>",
                                value: input.equal,
                            })) &&
                        (input.equal <= 10 ||
                            $guard(_exceptionable, {
                                path: _path + ".equal",
                                expected: "number & Maximum<10>",
                                value: input.equal,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".equal",
                            expected:
                                "(number & Type<int32> & Minimum<10> & Maximum<10>)",
                            value: input.equal,
                        }));
                return (
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "CommentTagRange",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "CommentTagRange",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
});
