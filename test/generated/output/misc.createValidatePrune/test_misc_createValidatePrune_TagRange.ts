import typia from "../../../../src";
import { _test_misc_validatePrune } from "../../../internal/_test_misc_validatePrune";
import { TagRange } from "../../../structures/TagRange";

export const test_misc_validatePrune_TagRange =
    _test_misc_validatePrune<TagRange>(TagRange)(
        (input: any): typia.IValidation<TagRange> => {
            const validate = (input: any): typia.IValidation<TagRange> => {
                const errors = [] as any[];
                const __is = (input: any): input is TagRange => {
                    const $io0 = (input: any): boolean =>
                        Array.isArray(input.value) &&
                        input.value.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io1(elem),
                        );
                    const $io1 = (input: any): boolean =>
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
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                if (false === __is(input)) {
                    const $report = (
                        typia.misc.createValidatePrune as any
                    ).report(errors);
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
                                                        expected:
                                                            "TagRange.Type",
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
                            ].every((flag: boolean) => flag);
                        const $vo1 = (
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
            };
            const prune = (input: TagRange): void => {
                const $io1 = (input: any): boolean =>
                    "number" === typeof input.greater &&
                    3 < input.greater &&
                    "number" === typeof input.greater_equal &&
                    3 <= input.greater_equal &&
                    "number" === typeof input.less &&
                    7 > input.less &&
                    "number" === typeof input.less_equal &&
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
                const $pp0 = (input: any) =>
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po1(elem);
                    });
                const $po0 = (input: any): any => {
                    if (Array.isArray(input.value)) $pp0(input.value);
                    for (const key of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                const $po1 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if (
                            "greater" === key ||
                            "greater_equal" === key ||
                            "less" === key ||
                            "less_equal" === key ||
                            "greater_less" === key ||
                            "greater_equal_less" === key ||
                            "greater_less_equal" === key ||
                            "greater_equal_less_equal" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                if ("object" === typeof input && null !== input) $po0(input);
            };
            const output = validate(input);
            if (output.success) prune(input);
            return output;
        },
    );
