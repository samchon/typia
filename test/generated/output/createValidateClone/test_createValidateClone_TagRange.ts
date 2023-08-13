import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { TagRange } from "../../../structures/TagRange";

export const test_createValidateClone_TagRange = _test_validateClone(
    "TagRange",
    TagRange.generate,
    (input: any): typia.IValidation<typia.Primitive<TagRange>> => {
        const validate = (input: any): typia.IValidation<TagRange> => {
            const errors = [] as any[];
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
                    7 >= input.greater_equal_less_equal &&
                    "number" === typeof input.equal &&
                    10 <= input.equal &&
                    10 >= input.equal;
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
            if (false === __is(input)) {
                const $report = (typia.createValidateClone as any).report(
                    errors,
                );
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
                                        expected:
                                            "number (@exclusiveMinimum 3)",
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
                                        expected:
                                            "number (@exclusiveMaximum 7)",
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
                                        expected:
                                            "number (@exclusiveMinimum 3)",
                                        value: input.greater_less,
                                    })) &&
                                (7 > input.greater_less ||
                                    $report(_exceptionable, {
                                        path: _path + ".greater_less",
                                        expected:
                                            "number (@exclusiveMaximum 7)",
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
                                        expected:
                                            "number (@exclusiveMaximum 7)",
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
                                        expected:
                                            "number (@exclusiveMinimum 3)",
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
                            ("number" ===
                                typeof input.greater_equal_less_equal &&
                                (3 <= input.greater_equal_less_equal ||
                                    $report(_exceptionable, {
                                        path:
                                            _path + ".greater_equal_less_equal",
                                        expected: "number (@minimum 3)",
                                        value: input.greater_equal_less_equal,
                                    })) &&
                                (7 >= input.greater_equal_less_equal ||
                                    $report(_exceptionable, {
                                        path:
                                            _path + ".greater_equal_less_equal",
                                        expected: "number (@maximum 7)",
                                        value: input.greater_equal_less_equal,
                                    }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".greater_equal_less_equal",
                                    expected: "number",
                                    value: input.greater_equal_less_equal,
                                }),
                            ("number" === typeof input.equal &&
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
                                                path:
                                                    _path + "[" + _index1 + "]",
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
            }
            const success = 0 === errors.length;
            return {
                success,
                errors,
                data: success ? input : undefined,
            } as any;
        };
        const clone = (input: TagRange): typia.Primitive<TagRange> => {
            const $cp0 = (input: any) =>
                input.map((elem: any) =>
                    "object" === typeof elem && null !== elem
                        ? $co0(elem)
                        : (elem as any),
                );
            const $co0 = (input: any): any => ({
                greater: input.greater as any,
                greater_equal: input.greater_equal as any,
                less: input.less as any,
                less_equal: input.less_equal as any,
                greater_less: input.greater_less as any,
                greater_equal_less: input.greater_equal_less as any,
                greater_less_equal: input.greater_less_equal as any,
                greater_equal_less_equal: input.greater_equal_less_equal as any,
                equal: input.equal as any,
            });
            return Array.isArray(input) ? $cp0(input) : (input as any);
        };
        const output = validate(input) as any;
        if (output.success) output.data = clone(input);
        return output;
    },
    TagRange.SPOILERS,
);
