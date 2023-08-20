import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { TagRangeBigInt } from "../../../structures/TagRangeBigInt";

export const test_createAssert_TagRangeBigInt = _test_assert(
    "TagRangeBigInt",
    TagRangeBigInt.generate,
    (input: any): TagRangeBigInt => {
        const __is = (input: any): input is TagRangeBigInt => {
            const $io0 = (input: any): boolean =>
                Array.isArray(input.value) &&
                input.value.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
                );
            const $io1 = (input: any): boolean =>
                "bigint" === typeof input.greater &&
                BigInt(3) < input.greater &&
                "bigint" === typeof input.greater_equal &&
                BigInt(3) <= input.greater_equal &&
                "bigint" === typeof input.less &&
                BigInt(7) > input.less &&
                "bigint" === typeof input.less_equal &&
                BigInt(7) >= input.less_equal &&
                "bigint" === typeof input.greater_less &&
                BigInt(3) < input.greater_less &&
                BigInt(7) > input.greater_less &&
                "bigint" === typeof input.greater_equal_less &&
                BigInt(3) <= input.greater_equal_less &&
                BigInt(7) > input.greater_equal_less &&
                "bigint" === typeof input.greater_less_equal &&
                BigInt(3) < input.greater_less_equal &&
                BigInt(7) >= input.greater_less_equal &&
                "bigint" === typeof input.greater_equal_less_equal &&
                BigInt(3) <= input.greater_equal_less_equal &&
                BigInt(7) >= input.greater_equal_less_equal &&
                "bigint" === typeof input.equal &&
                BigInt(10) <= input.equal &&
                BigInt(10) >= input.equal;
            return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagRangeBigInt => {
                const $guard = (typia.createAssert as any).guard;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ((Array.isArray(input.value) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "Array<TagRangeBigInt.Type>",
                            value: input.value,
                        })) &&
                        input.value.every(
                            (elem: any, _index1: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".value[" + _index1 + "]",
                                        expected: "TagRangeBigInt.Type",
                                        value: elem,
                                    })) &&
                                    $ao1(
                                        elem,
                                        _path + ".value[" + _index1 + "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value[" + _index1 + "]",
                                    expected: "TagRangeBigInt.Type",
                                    value: elem,
                                }),
                        )) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "Array<TagRangeBigInt.Type>",
                        value: input.value,
                    });
                const $ao1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("bigint" === typeof input.greater &&
                        (BigInt(3) < input.greater ||
                            $guard(_exceptionable, {
                                path: _path + ".greater",
                                expected: "bigint (@exclusiveMinimum 3)",
                                value: input.greater,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".greater",
                            expected: "bigint",
                            value: input.greater,
                        })) &&
                    (("bigint" === typeof input.greater_equal &&
                        (BigInt(3) <= input.greater_equal ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal",
                                expected: "bigint (@minimum 3)",
                                value: input.greater_equal,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".greater_equal",
                            expected: "bigint",
                            value: input.greater_equal,
                        })) &&
                    (("bigint" === typeof input.less &&
                        (BigInt(7) > input.less ||
                            $guard(_exceptionable, {
                                path: _path + ".less",
                                expected: "bigint (@exclusiveMaximum 7)",
                                value: input.less,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".less",
                            expected: "bigint",
                            value: input.less,
                        })) &&
                    (("bigint" === typeof input.less_equal &&
                        (BigInt(7) >= input.less_equal ||
                            $guard(_exceptionable, {
                                path: _path + ".less_equal",
                                expected: "bigint (@maximum 7)",
                                value: input.less_equal,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".less_equal",
                            expected: "bigint",
                            value: input.less_equal,
                        })) &&
                    (("bigint" === typeof input.greater_less &&
                        (BigInt(3) < input.greater_less ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_less",
                                expected: "bigint (@exclusiveMinimum 3)",
                                value: input.greater_less,
                            })) &&
                        (BigInt(7) > input.greater_less ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_less",
                                expected: "bigint (@exclusiveMaximum 7)",
                                value: input.greater_less,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".greater_less",
                            expected: "bigint",
                            value: input.greater_less,
                        })) &&
                    (("bigint" === typeof input.greater_equal_less &&
                        (BigInt(3) <= input.greater_equal_less ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal_less",
                                expected: "bigint (@minimum 3)",
                                value: input.greater_equal_less,
                            })) &&
                        (BigInt(7) > input.greater_equal_less ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal_less",
                                expected: "bigint (@exclusiveMaximum 7)",
                                value: input.greater_equal_less,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".greater_equal_less",
                            expected: "bigint",
                            value: input.greater_equal_less,
                        })) &&
                    (("bigint" === typeof input.greater_less_equal &&
                        (BigInt(3) < input.greater_less_equal ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_less_equal",
                                expected: "bigint (@exclusiveMinimum 3)",
                                value: input.greater_less_equal,
                            })) &&
                        (BigInt(7) >= input.greater_less_equal ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_less_equal",
                                expected: "bigint (@maximum 7)",
                                value: input.greater_less_equal,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".greater_less_equal",
                            expected: "bigint",
                            value: input.greater_less_equal,
                        })) &&
                    (("bigint" === typeof input.greater_equal_less_equal &&
                        (BigInt(3) <= input.greater_equal_less_equal ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal_less_equal",
                                expected: "bigint (@minimum 3)",
                                value: input.greater_equal_less_equal,
                            })) &&
                        (BigInt(7) >= input.greater_equal_less_equal ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal_less_equal",
                                expected: "bigint (@maximum 7)",
                                value: input.greater_equal_less_equal,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".greater_equal_less_equal",
                            expected: "bigint",
                            value: input.greater_equal_less_equal,
                        })) &&
                    (("bigint" === typeof input.equal &&
                        (BigInt(10) <= input.equal ||
                            $guard(_exceptionable, {
                                path: _path + ".equal",
                                expected: "bigint (@minimum 10)",
                                value: input.equal,
                            })) &&
                        (BigInt(10) >= input.equal ||
                            $guard(_exceptionable, {
                                path: _path + ".equal",
                                expected: "bigint (@maximum 10)",
                                value: input.equal,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".equal",
                            expected: "bigint",
                            value: input.equal,
                        }));
                return (
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TagRangeBigInt",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "TagRangeBigInt",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
    TagRangeBigInt.SPOILERS,
);
