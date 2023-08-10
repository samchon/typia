import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { TagRange } from "../../../structures/TagRange";

export const test_assertEquals_TagRange = _test_assertEquals<TagRange>(
    TagRange,
)((input: any): TagRange => {
    const __is = (
        input: any,
        _exceptionable: boolean = true,
    ): input is TagRange => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
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
        const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
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
            (8 === Object.keys(input).length ||
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
                        ].some((prop: any) => key === prop)
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        return "object" === typeof input && null !== input && $io0(input, true);
    };
    if (false === __is(input))
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is TagRange => {
            const $guard = (typia.createAssertEquals as any).guard;
            const $join = (typia.createAssertEquals as any).join;
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (((Array.isArray(input.value) ||
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
                (8 === Object.keys(input).length ||
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
});
