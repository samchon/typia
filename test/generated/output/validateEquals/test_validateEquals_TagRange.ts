import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { TagRange } from "../../../structures/TagRange";

export const test_validateEquals_TagRange = _test_validateEquals(
    "TagRange",
)<TagRange>(TagRange)((input) =>
    ((input: any): typia.IValidation<TagRange> => {
        const errors = [] as any[];
        const __is = (
            input: any,
            _exceptionable: boolean = true,
        ): input is TagRange => {
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
                10 >= input.equal &&
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
        if (false === __is(input)) {
            const $report = (typia.validateEquals as any).report(errors);
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagRange => {
                const $join = (typia.validateEquals as any).join;
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ((Array.isArray(input.value) ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected: "Array<TagRange.Type>",
                                value: input.value,
                            })) &&
                            input.value
                                .map(
                                    (elem: any, _index1: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".value[" +
                                                    _index1 +
                                                    "]",
                                                expected: "TagRange.Type",
                                                value: elem,
                                            })) &&
                                            $vo1(
                                                elem,
                                                _path +
                                                    ".value[" +
                                                    _index1 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".value[" +
                                                _index1 +
                                                "]",
                                            expected: "TagRange.Type",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected: "Array<TagRange.Type>",
                                value: input.value,
                            }),
                        1 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key: any) => {
                                    if (
                                        ["value"].some(
                                            (prop: any) => key === prop,
                                        )
                                    )
                                        return true;
                                    const value = input[key];
                                    if (undefined === value) return true;
                                    return $report(_exceptionable, {
                                        path: _path + $join(key),
                                        expected: "undefined",
                                        value: value,
                                    });
                                })
                                .every((flag: boolean) => flag),
                    ].every((flag: boolean) => flag);
                const $vo1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ("number" === typeof input.greater &&
                            Number.isFinite(input.greater) &&
                            (Math.floor(input.greater) === input.greater ||
                                $report(_exceptionable, {
                                    path: _path + ".greater",
                                    expected: "number (@type int)",
                                    value: input.greater,
                                })) &&
                            ((-2147483648 <= input.greater &&
                                input.greater <= 2147483647) ||
                                $report(_exceptionable, {
                                    path: _path + ".greater",
                                    expected: "number (@type int)",
                                    value: input.greater,
                                })) &&
                            (3 < input.greater ||
                                $report(_exceptionable, {
                                    path: _path + ".greater",
                                    expected: "number (@exclusiveMinimum 3)",
                                    value: input.greater,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".greater",
                                expected: "number",
                                value: input.greater,
                            }),
                        ("number" === typeof input.greater_equal &&
                            Number.isFinite(input.greater_equal) &&
                            (Math.floor(input.greater_equal) ===
                                input.greater_equal ||
                                $report(_exceptionable, {
                                    path: _path + ".greater_equal",
                                    expected: "number (@type int)",
                                    value: input.greater_equal,
                                })) &&
                            ((-2147483648 <= input.greater_equal &&
                                input.greater_equal <= 2147483647) ||
                                $report(_exceptionable, {
                                    path: _path + ".greater_equal",
                                    expected: "number (@type int)",
                                    value: input.greater_equal,
                                })) &&
                            (3 <= input.greater_equal ||
                                $report(_exceptionable, {
                                    path: _path + ".greater_equal",
                                    expected: "number (@minimum 3)",
                                    value: input.greater_equal,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".greater_equal",
                                expected: "number",
                                value: input.greater_equal,
                            }),
                        ("number" === typeof input.less &&
                            Number.isFinite(input.less) &&
                            (Math.floor(input.less) === input.less ||
                                $report(_exceptionable, {
                                    path: _path + ".less",
                                    expected: "number (@type int)",
                                    value: input.less,
                                })) &&
                            ((-2147483648 <= input.less &&
                                input.less <= 2147483647) ||
                                $report(_exceptionable, {
                                    path: _path + ".less",
                                    expected: "number (@type int)",
                                    value: input.less,
                                })) &&
                            (7 > input.less ||
                                $report(_exceptionable, {
                                    path: _path + ".less",
                                    expected: "number (@exclusiveMaximum 7)",
                                    value: input.less,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".less",
                                expected: "number",
                                value: input.less,
                            }),
                        ("number" === typeof input.less_equal &&
                            Number.isFinite(input.less_equal) &&
                            (Math.floor(input.less_equal) ===
                                input.less_equal ||
                                $report(_exceptionable, {
                                    path: _path + ".less_equal",
                                    expected: "number (@type int)",
                                    value: input.less_equal,
                                })) &&
                            ((-2147483648 <= input.less_equal &&
                                input.less_equal <= 2147483647) ||
                                $report(_exceptionable, {
                                    path: _path + ".less_equal",
                                    expected: "number (@type int)",
                                    value: input.less_equal,
                                })) &&
                            (7 >= input.less_equal ||
                                $report(_exceptionable, {
                                    path: _path + ".less_equal",
                                    expected: "number (@maximum 7)",
                                    value: input.less_equal,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".less_equal",
                                expected: "number",
                                value: input.less_equal,
                            }),
                        ("number" === typeof input.greater_less &&
                            (Math.floor(input.greater_less) ===
                                input.greater_less ||
                                $report(_exceptionable, {
                                    path: _path + ".greater_less",
                                    expected: "number (@type int)",
                                    value: input.greater_less,
                                })) &&
                            ((-2147483648 <= input.greater_less &&
                                input.greater_less <= 2147483647) ||
                                $report(_exceptionable, {
                                    path: _path + ".greater_less",
                                    expected: "number (@type int)",
                                    value: input.greater_less,
                                })) &&
                            (3 < input.greater_less ||
                                $report(_exceptionable, {
                                    path: _path + ".greater_less",
                                    expected: "number (@exclusiveMinimum 3)",
                                    value: input.greater_less,
                                })) &&
                            (7 > input.greater_less ||
                                $report(_exceptionable, {
                                    path: _path + ".greater_less",
                                    expected: "number (@exclusiveMaximum 7)",
                                    value: input.greater_less,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".greater_less",
                                expected: "number",
                                value: input.greater_less,
                            }),
                        ("number" === typeof input.greater_equal_less &&
                            (Math.floor(input.greater_equal_less) ===
                                input.greater_equal_less ||
                                $report(_exceptionable, {
                                    path: _path + ".greater_equal_less",
                                    expected: "number (@type int)",
                                    value: input.greater_equal_less,
                                })) &&
                            ((-2147483648 <= input.greater_equal_less &&
                                input.greater_equal_less <= 2147483647) ||
                                $report(_exceptionable, {
                                    path: _path + ".greater_equal_less",
                                    expected: "number (@type int)",
                                    value: input.greater_equal_less,
                                })) &&
                            (3 <= input.greater_equal_less ||
                                $report(_exceptionable, {
                                    path: _path + ".greater_equal_less",
                                    expected: "number (@minimum 3)",
                                    value: input.greater_equal_less,
                                })) &&
                            (7 > input.greater_equal_less ||
                                $report(_exceptionable, {
                                    path: _path + ".greater_equal_less",
                                    expected: "number (@exclusiveMaximum 7)",
                                    value: input.greater_equal_less,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".greater_equal_less",
                                expected: "number",
                                value: input.greater_equal_less,
                            }),
                        ("number" === typeof input.greater_less_equal &&
                            (Math.floor(input.greater_less_equal) ===
                                input.greater_less_equal ||
                                $report(_exceptionable, {
                                    path: _path + ".greater_less_equal",
                                    expected: "number (@type int)",
                                    value: input.greater_less_equal,
                                })) &&
                            ((-2147483648 <= input.greater_less_equal &&
                                input.greater_less_equal <= 2147483647) ||
                                $report(_exceptionable, {
                                    path: _path + ".greater_less_equal",
                                    expected: "number (@type int)",
                                    value: input.greater_less_equal,
                                })) &&
                            (3 < input.greater_less_equal ||
                                $report(_exceptionable, {
                                    path: _path + ".greater_less_equal",
                                    expected: "number (@exclusiveMinimum 3)",
                                    value: input.greater_less_equal,
                                })) &&
                            (7 >= input.greater_less_equal ||
                                $report(_exceptionable, {
                                    path: _path + ".greater_less_equal",
                                    expected: "number (@maximum 7)",
                                    value: input.greater_less_equal,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".greater_less_equal",
                                expected: "number",
                                value: input.greater_less_equal,
                            }),
                        ("number" === typeof input.greater_equal_less_equal &&
                            (Math.floor(input.greater_equal_less_equal) ===
                                input.greater_equal_less_equal ||
                                $report(_exceptionable, {
                                    path: _path + ".greater_equal_less_equal",
                                    expected: "number (@type int)",
                                    value: input.greater_equal_less_equal,
                                })) &&
                            ((-2147483648 <= input.greater_equal_less_equal &&
                                input.greater_equal_less_equal <= 2147483647) ||
                                $report(_exceptionable, {
                                    path: _path + ".greater_equal_less_equal",
                                    expected: "number (@type int)",
                                    value: input.greater_equal_less_equal,
                                })) &&
                            (3 <= input.greater_equal_less_equal ||
                                $report(_exceptionable, {
                                    path: _path + ".greater_equal_less_equal",
                                    expected: "number (@minimum 3)",
                                    value: input.greater_equal_less_equal,
                                })) &&
                            (7 >= input.greater_equal_less_equal ||
                                $report(_exceptionable, {
                                    path: _path + ".greater_equal_less_equal",
                                    expected: "number (@maximum 7)",
                                    value: input.greater_equal_less_equal,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".greater_equal_less_equal",
                                expected: "number",
                                value: input.greater_equal_less_equal,
                            }),
                        ("number" === typeof input.equal &&
                            (Math.floor(input.equal) === input.equal ||
                                $report(_exceptionable, {
                                    path: _path + ".equal",
                                    expected: "number (@type int)",
                                    value: input.equal,
                                })) &&
                            ((-2147483648 <= input.equal &&
                                input.equal <= 2147483647) ||
                                $report(_exceptionable, {
                                    path: _path + ".equal",
                                    expected: "number (@type int)",
                                    value: input.equal,
                                })) &&
                            (10 <= input.equal ||
                                $report(_exceptionable, {
                                    path: _path + ".equal",
                                    expected: "number (@minimum 10)",
                                    value: input.equal,
                                })) &&
                            (10 >= input.equal ||
                                $report(_exceptionable, {
                                    path: _path + ".equal",
                                    expected: "number (@maximum 10)",
                                    value: input.equal,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".equal",
                                expected: "number",
                                value: input.equal,
                            }),
                        9 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key: any) => {
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
                                    return $report(_exceptionable, {
                                        path: _path + $join(key),
                                        expected: "undefined",
                                        value: value,
                                    });
                                })
                                .every((flag: boolean) => flag),
                    ].every((flag: boolean) => flag);
                return (
                    ((("object" === typeof input && null !== input) ||
                        $report(true, {
                            path: _path + "",
                            expected: "TagRange",
                            value: input,
                        })) &&
                        $vo0(input, _path + "", true)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "TagRange",
                        value: input,
                    })
                );
            })(input, "$input", true);
        }
        const success = 0 === errors.length;
        return {
            success,
            errors,
            data: success ? input : undefined,
        } as any;
    })(input),
);
