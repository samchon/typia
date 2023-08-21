import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { TagRangeBigInt } from "../../../structures/TagRangeBigInt";

export const test_assertEquals_TagRangeBigInt = _test_assertEquals(
    "TagRangeBigInt",
)<TagRangeBigInt>(TagRangeBigInt)((input) =>
    ((input: any): TagRangeBigInt => {
        const __is = (
            input: any,
            _exceptionable: boolean = true,
        ): input is TagRangeBigInt => {
            const $io0 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                Array.isArray(input.value) &&
                input.value.every(
                    (elem: any, _index1: number) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        $io1(elem, true && _exceptionable),
                ) &&
                (1 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (["value"].some((prop: any) => key === prop))
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $io1 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
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
                BigInt(10) >= input.equal &&
                (9 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (
                            [
                                "greater",
                                "greater_equal",
                                "less",
                                "less_equal",
                                "greater_less",
                                "greater_equal_less",
                                "greater_less_equal",
                                "greater_equal_less_equal",
                                "equal",
                            ].some((prop: any) => key === prop)
                        )
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            return (
                "object" === typeof input && null !== input && $io0(input, true)
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagRangeBigInt => {
                const $guard = (typia.assertEquals as any).guard;
                const $join = (typia.assertEquals as any).join;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (((Array.isArray(input.value) ||
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
                        })) &&
                    (1 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            if (["value"].some((prop: any) => key === prop))
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
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
                        })) &&
                    (9 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            if (
                                [
                                    "greater",
                                    "greater_equal",
                                    "less",
                                    "less_equal",
                                    "greater_less",
                                    "greater_equal_less",
                                    "greater_less_equal",
                                    "greater_equal_less_equal",
                                    "equal",
                                ].some((prop: any) => key === prop)
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
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
    })(input),
);
