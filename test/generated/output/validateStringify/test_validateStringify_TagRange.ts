import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { TagRange } from "../../../structures/TagRange";

export const test_validateStringify_TagRange = _test_validateStringify(
    "TagRange",
    TagRange.generate,
    (input) =>
        ((input: Array<TagRange.Type>): typia.IValidation<string> => {
            const validate: any = (
                input: any,
            ): typia.IValidation<Array<TagRange.Type>> => {
                const __is: any = (
                    input: any,
                ): input is Array<TagRange.Type> => {
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
                const errors: any = [] as any[];
                const $report: any = (typia.validateStringify as any).report(
                    errors,
                );
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is Array<TagRange.Type> => {
                        const $vo0: any = (
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
                                                _path +
                                                ".greater_equal_less_equal",
                                            expected: "number (@minimum 3)",
                                            value: input.greater_equal_less_equal,
                                        })) &&
                                    (7 >= input.greater_equal_less_equal ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".greater_equal_less_equal",
                                            expected: "number (@maximum 7)",
                                            value: input.greater_equal_less_equal,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path:
                                            _path + ".greater_equal_less_equal",
                                        expected: "number",
                                        value: input.greater_equal_less_equal,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((Array.isArray(input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "Array<TagRange.Type>",
                                    value: input,
                                })) &&
                                input
                                    .map(
                                        (elem: any, _index1: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $report(true, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "]",
                                                    expected: "TagRange.Type",
                                                    value: elem,
                                                })) &&
                                                $vo0(
                                                    elem,
                                                    _path + "[" + _index1 + "]",
                                                    true,
                                                )) ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected: "TagRange.Type",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "Array<TagRange.Type>",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                const success: any = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const stringify: any = (input: Array<TagRange.Type>): string => {
                const $number: any = (typia.validateStringify as any).number;
                const $so0: any = (input: any): any =>
                    `{"greater":${$number(
                        input.greater,
                    )},"greater_equal":${$number(
                        input.greater_equal,
                    )},"less":${$number(input.less)},"less_equal":${$number(
                        input.less_equal,
                    )},"greater_less":${$number(
                        input.greater_less,
                    )},"greater_equal_less":${$number(
                        input.greater_equal_less,
                    )},"greater_less_equal":${$number(
                        input.greater_less_equal,
                    )},"greater_equal_less_equal":${$number(
                        input.greater_equal_less_equal,
                    )}}`;
                return (() =>
                    `[${input.map((elem: any) => $so0(elem)).join(",")}]`)();
            };
            const output: any = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        })(input),
    TagRange.SPOILERS,
);
