import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { TagRange } from "../../../structures/TagRange";

export const test_createValidate_TagRange = _test_validate(
    "TagRange",
    TagRange.generate,
    (input: any): typia.IValidation<TagRange> => {
        const errors = [] as any[];
        const $report = (typia.createValidate as any).report(errors);
        const __is = (input: any): input is TagRange => {
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
                7 >= input.greater_equal_less_equal;
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
            ): input is TagRange => {
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ("number" === typeof input.greater &&
                            Number.isFinite(input.greater) &&
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
                    ].every((flag: boolean) => flag);
                return (
                    ((Array.isArray(input) ||
                        $report(true, {
                            path: _path + "",
                            expected: "TagRange",
                            value: input,
                        })) &&
                        input
                            .map(
                                (elem: any, _index1: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected: "TagRange.Type",
                                            value: elem,
                                        })) &&
                                        $vo0(
                                            elem,
                                            _path + "[" + _index1 + "]",
                                            true,
                                        )) ||
                                    $report(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "TagRange.Type",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "TagRange",
                        value: input,
                    })
                );
            })(input, "$input", true);
        const success = 0 === errors.length;
        return {
            success,
            errors,
            data: success ? input : undefined,
        } as any;
    },
    TagRange.SPOILERS,
);
