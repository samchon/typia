import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { TagRange } from "../../../structures/TagRange";

export const test_createAssertEquals_TagRange = _test_assertEquals(
    "TagRange",
    TagRange.generate,
    (input: any): TagRange => {
        const __is = (
            input: any,
            _exceptionable: boolean = true,
        ): input is TagRange => {
            const $io0 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
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
                Array.isArray(input) &&
                input.every(
                    (elem: any, _index1: number) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        $io0(elem, true),
                )
            );
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
