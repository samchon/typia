import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { TagRange } from "../../../structures/TagRange";

export const test_assert_TagRange = _test_assert(
    "TagRange",
    TagRange.generate,
    (input) =>
        ((input: any): Array<TagRange.Type> => {
            const __is: any = (input: any): input is Array<TagRange.Type> => {
                const $io0: any = (input: any): boolean =>
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
                    7 >= input.greater_equal_less_equal;
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    )
                );
            };
            const $guard: any = (typia.assert as any).guard;
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is Array<TagRange.Type> => {
                    const $ao0: any = (
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
                            }));
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "Array<TagRange.Type>",
                                value: input,
                            })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "TagRange.Type",
                                        value: elem,
                                    })) &&
                                $ao0(elem, _path + "[" + _index1 + "]", true),
                        )
                    );
                })(input, "$input", true);
            return input;
        })(input),
    TagRange.SPOILERS,
);
