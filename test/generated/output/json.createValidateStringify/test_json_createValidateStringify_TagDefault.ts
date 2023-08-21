import typia from "../../../../src";
import { _test_json_validateStringify } from "../../../internal/_test_json_validateStringify";
import { TagDefault } from "../../../structures/TagDefault";

export const test_json_validateStringify_TagDefault =
    _test_json_validateStringify("TagDefault")<TagDefault>(TagDefault)(
        (input: TagDefault): typia.IValidation<string> => {
            const validate = (input: any): typia.IValidation<TagDefault> => {
                const errors = [] as any[];
                const __is = (input: any): input is TagDefault => {
                    const $is_custom = (
                        typia.json.createValidateStringify as any
                    ).is_custom;
                    const $io0 = (input: any): boolean =>
                        "boolean" === typeof input.boolean &&
                        "number" === typeof input.number &&
                        Number.isFinite(input.number) &&
                        $is_custom("default", "number", "1", input.number) &&
                        "string" === typeof input.string &&
                        $is_custom("default", "string", "two", input.string) &&
                        "string" === typeof input.text &&
                        $is_custom(
                            "default",
                            "string",
                            "Very long text, can you understand it?",
                            input.text,
                        ) &&
                        "string" === typeof input.template &&
                        RegExp(/^prefix_(.*)/).test(input.template) &&
                        $is_custom(
                            "default",
                            "string",
                            "prefix_A",
                            input.template,
                        ) &&
                        (("string" ===
                            typeof input.boolean_and_number_and_string &&
                            $is_custom(
                                "default",
                                "string",
                                "false",
                                input.boolean_and_number_and_string,
                            ) &&
                            $is_custom(
                                "default",
                                "string",
                                "1",
                                input.boolean_and_number_and_string,
                            ) &&
                            $is_custom(
                                "default",
                                "string",
                                "two",
                                input.boolean_and_number_and_string,
                            )) ||
                            ("number" ===
                                typeof input.boolean_and_number_and_string &&
                                Number.isFinite(
                                    input.boolean_and_number_and_string,
                                ) &&
                                $is_custom(
                                    "default",
                                    "number",
                                    "false",
                                    input.boolean_and_number_and_string,
                                ) &&
                                $is_custom(
                                    "default",
                                    "number",
                                    "1",
                                    input.boolean_and_number_and_string,
                                ) &&
                                $is_custom(
                                    "default",
                                    "number",
                                    "two",
                                    input.boolean_and_number_and_string,
                                )) ||
                            "boolean" ===
                                typeof input.boolean_and_number_and_string) &&
                        (("string" === typeof input.union_but_boolean &&
                            $is_custom(
                                "default",
                                "string",
                                "false",
                                input.union_but_boolean,
                            )) ||
                            ("number" === typeof input.union_but_boolean &&
                                Number.isFinite(input.union_but_boolean) &&
                                $is_custom(
                                    "default",
                                    "number",
                                    "false",
                                    input.union_but_boolean,
                                )) ||
                            "boolean" === typeof input.union_but_boolean) &&
                        (("string" === typeof input.union_but_number &&
                            $is_custom(
                                "default",
                                "string",
                                "1",
                                input.union_but_number,
                            )) ||
                            ("number" === typeof input.union_but_number &&
                                Number.isFinite(input.union_but_number) &&
                                $is_custom(
                                    "default",
                                    "number",
                                    "1",
                                    input.union_but_number,
                                )) ||
                            "boolean" === typeof input.union_but_number) &&
                        (("string" === typeof input.union_but_string &&
                            $is_custom(
                                "default",
                                "string",
                                "two",
                                input.union_but_string,
                            )) ||
                            ("number" === typeof input.union_but_string &&
                                Number.isFinite(input.union_but_string) &&
                                $is_custom(
                                    "default",
                                    "number",
                                    "two",
                                    input.union_but_string,
                                )) ||
                            "boolean" === typeof input.union_but_string) &&
                        "number" === typeof input.vulnerable_range &&
                        3 <= input.vulnerable_range &&
                        5 >= input.vulnerable_range &&
                        $is_custom(
                            "default",
                            "number",
                            "7",
                            input.vulnerable_range,
                        ) &&
                        "string" === typeof input.vulnerable_template &&
                        RegExp(/^prefix_(.*)/).test(
                            input.vulnerable_template,
                        ) &&
                        $is_custom(
                            "default",
                            "string",
                            "two",
                            input.vulnerable_template,
                        ) &&
                        null !== input.boolean_and_number_and_template &&
                        undefined !== input.boolean_and_number_and_template &&
                        (("number" ===
                            typeof input.boolean_and_number_and_template &&
                            Number.isFinite(
                                input.boolean_and_number_and_template,
                            ) &&
                            $is_custom(
                                "default",
                                "number",
                                "false",
                                input.boolean_and_number_and_template,
                            ) &&
                            $is_custom(
                                "default",
                                "number",
                                "1",
                                input.boolean_and_number_and_template,
                            ) &&
                            $is_custom(
                                "default",
                                "number",
                                "prefix_B",
                                input.boolean_and_number_and_template,
                            )) ||
                            "boolean" ===
                                typeof input.boolean_and_number_and_template ||
                            ("string" ===
                                typeof input.boolean_and_number_and_template &&
                                RegExp(/^prefix_(.*)/).test(
                                    input.boolean_and_number_and_template,
                                ) &&
                                $is_custom(
                                    "default",
                                    "string",
                                    "false",
                                    input.boolean_and_number_and_template,
                                ) &&
                                $is_custom(
                                    "default",
                                    "string",
                                    "1",
                                    input.boolean_and_number_and_template,
                                ) &&
                                $is_custom(
                                    "default",
                                    "string",
                                    "prefix_B",
                                    input.boolean_and_number_and_template,
                                )));
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                if (false === __is(input)) {
                    const $report = (
                        typia.json.createValidateStringify as any
                    ).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is TagDefault => {
                        const $is_custom = (
                            typia.json.createValidateStringify as any
                        ).is_custom;
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "boolean" === typeof input.boolean ||
                                    $report(_exceptionable, {
                                        path: _path + ".boolean",
                                        expected: "boolean",
                                        value: input.boolean,
                                    }),
                                ("number" === typeof input.number &&
                                    Number.isFinite(input.number) &&
                                    ($is_custom(
                                        "default",
                                        "number",
                                        "1",
                                        input.number,
                                    ) ||
                                        $report(_exceptionable, {
                                            path: _path + ".number",
                                            expected: "number (@default 1)",
                                            value: input.number,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".number",
                                        expected: "number",
                                        value: input.number,
                                    }),
                                ("string" === typeof input.string &&
                                    ($is_custom(
                                        "default",
                                        "string",
                                        "two",
                                        input.string,
                                    ) ||
                                        $report(_exceptionable, {
                                            path: _path + ".string",
                                            expected: "string (@default two)",
                                            value: input.string,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".string",
                                        expected: "string",
                                        value: input.string,
                                    }),
                                ("string" === typeof input.text &&
                                    ($is_custom(
                                        "default",
                                        "string",
                                        "Very long text, can you understand it?",
                                        input.text,
                                    ) ||
                                        $report(_exceptionable, {
                                            path: _path + ".text",
                                            expected:
                                                "string (@default Very long text, can you understand it?)",
                                            value: input.text,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".text",
                                        expected: "string",
                                        value: input.text,
                                    }),
                                ("string" === typeof input.template &&
                                    RegExp(/^prefix_(.*)/).test(
                                        input.template,
                                    ) &&
                                    ($is_custom(
                                        "default",
                                        "string",
                                        "prefix_A",
                                        input.template,
                                    ) ||
                                        $report(_exceptionable, {
                                            path: _path + ".template",
                                            expected:
                                                "string (@default prefix_A)",
                                            value: input.template,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".template",
                                        expected: "`prefix_${string}`",
                                        value: input.template,
                                    }),
                                ("string" ===
                                    typeof input.boolean_and_number_and_string &&
                                    ($is_custom(
                                        "default",
                                        "string",
                                        "false",
                                        input.boolean_and_number_and_string,
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".boolean_and_number_and_string",
                                            expected: "string (@default false)",
                                            value: input.boolean_and_number_and_string,
                                        })) &&
                                    ($is_custom(
                                        "default",
                                        "string",
                                        "1",
                                        input.boolean_and_number_and_string,
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".boolean_and_number_and_string",
                                            expected: "string (@default 1)",
                                            value: input.boolean_and_number_and_string,
                                        })) &&
                                    ($is_custom(
                                        "default",
                                        "string",
                                        "two",
                                        input.boolean_and_number_and_string,
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".boolean_and_number_and_string",
                                            expected: "string (@default two)",
                                            value: input.boolean_and_number_and_string,
                                        }))) ||
                                    ("number" ===
                                        typeof input.boolean_and_number_and_string &&
                                        Number.isFinite(
                                            input.boolean_and_number_and_string,
                                        ) &&
                                        ($is_custom(
                                            "default",
                                            "number",
                                            "false",
                                            input.boolean_and_number_and_string,
                                        ) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".boolean_and_number_and_string",
                                                expected:
                                                    "number (@default false)",
                                                value: input.boolean_and_number_and_string,
                                            })) &&
                                        ($is_custom(
                                            "default",
                                            "number",
                                            "1",
                                            input.boolean_and_number_and_string,
                                        ) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".boolean_and_number_and_string",
                                                expected: "number (@default 1)",
                                                value: input.boolean_and_number_and_string,
                                            })) &&
                                        ($is_custom(
                                            "default",
                                            "number",
                                            "two",
                                            input.boolean_and_number_and_string,
                                        ) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".boolean_and_number_and_string",
                                                expected:
                                                    "number (@default two)",
                                                value: input.boolean_and_number_and_string,
                                            }))) ||
                                    "boolean" ===
                                        typeof input.boolean_and_number_and_string ||
                                    $report(_exceptionable, {
                                        path:
                                            _path +
                                            ".boolean_and_number_and_string",
                                        expected: "(boolean | number | string)",
                                        value: input.boolean_and_number_and_string,
                                    }),
                                ("string" === typeof input.union_but_boolean &&
                                    ($is_custom(
                                        "default",
                                        "string",
                                        "false",
                                        input.union_but_boolean,
                                    ) ||
                                        $report(_exceptionable, {
                                            path: _path + ".union_but_boolean",
                                            expected: "string (@default false)",
                                            value: input.union_but_boolean,
                                        }))) ||
                                    ("number" ===
                                        typeof input.union_but_boolean &&
                                        Number.isFinite(
                                            input.union_but_boolean,
                                        ) &&
                                        ($is_custom(
                                            "default",
                                            "number",
                                            "false",
                                            input.union_but_boolean,
                                        ) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".union_but_boolean",
                                                expected:
                                                    "number (@default false)",
                                                value: input.union_but_boolean,
                                            }))) ||
                                    "boolean" ===
                                        typeof input.union_but_boolean ||
                                    $report(_exceptionable, {
                                        path: _path + ".union_but_boolean",
                                        expected: "(boolean | number | string)",
                                        value: input.union_but_boolean,
                                    }),
                                ("string" === typeof input.union_but_number &&
                                    ($is_custom(
                                        "default",
                                        "string",
                                        "1",
                                        input.union_but_number,
                                    ) ||
                                        $report(_exceptionable, {
                                            path: _path + ".union_but_number",
                                            expected: "string (@default 1)",
                                            value: input.union_but_number,
                                        }))) ||
                                    ("number" ===
                                        typeof input.union_but_number &&
                                        Number.isFinite(
                                            input.union_but_number,
                                        ) &&
                                        ($is_custom(
                                            "default",
                                            "number",
                                            "1",
                                            input.union_but_number,
                                        ) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path + ".union_but_number",
                                                expected: "number (@default 1)",
                                                value: input.union_but_number,
                                            }))) ||
                                    "boolean" ===
                                        typeof input.union_but_number ||
                                    $report(_exceptionable, {
                                        path: _path + ".union_but_number",
                                        expected: "(boolean | number | string)",
                                        value: input.union_but_number,
                                    }),
                                ("string" === typeof input.union_but_string &&
                                    ($is_custom(
                                        "default",
                                        "string",
                                        "two",
                                        input.union_but_string,
                                    ) ||
                                        $report(_exceptionable, {
                                            path: _path + ".union_but_string",
                                            expected: "string (@default two)",
                                            value: input.union_but_string,
                                        }))) ||
                                    ("number" ===
                                        typeof input.union_but_string &&
                                        Number.isFinite(
                                            input.union_but_string,
                                        ) &&
                                        ($is_custom(
                                            "default",
                                            "number",
                                            "two",
                                            input.union_but_string,
                                        ) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path + ".union_but_string",
                                                expected:
                                                    "number (@default two)",
                                                value: input.union_but_string,
                                            }))) ||
                                    "boolean" ===
                                        typeof input.union_but_string ||
                                    $report(_exceptionable, {
                                        path: _path + ".union_but_string",
                                        expected: "(boolean | number | string)",
                                        value: input.union_but_string,
                                    }),
                                ("number" === typeof input.vulnerable_range &&
                                    (3 <= input.vulnerable_range ||
                                        $report(_exceptionable, {
                                            path: _path + ".vulnerable_range",
                                            expected: "number (@minimum 3)",
                                            value: input.vulnerable_range,
                                        })) &&
                                    (5 >= input.vulnerable_range ||
                                        $report(_exceptionable, {
                                            path: _path + ".vulnerable_range",
                                            expected: "number (@maximum 5)",
                                            value: input.vulnerable_range,
                                        })) &&
                                    ($is_custom(
                                        "default",
                                        "number",
                                        "7",
                                        input.vulnerable_range,
                                    ) ||
                                        $report(_exceptionable, {
                                            path: _path + ".vulnerable_range",
                                            expected: "number (@default 7)",
                                            value: input.vulnerable_range,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".vulnerable_range",
                                        expected: "number",
                                        value: input.vulnerable_range,
                                    }),
                                ("string" ===
                                    typeof input.vulnerable_template &&
                                    RegExp(/^prefix_(.*)/).test(
                                        input.vulnerable_template,
                                    ) &&
                                    ($is_custom(
                                        "default",
                                        "string",
                                        "two",
                                        input.vulnerable_template,
                                    ) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path + ".vulnerable_template",
                                            expected: "string (@default two)",
                                            value: input.vulnerable_template,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".vulnerable_template",
                                        expected: "`prefix_${string}`",
                                        value: input.vulnerable_template,
                                    }),
                                (null !==
                                    input.boolean_and_number_and_template ||
                                    $report(_exceptionable, {
                                        path:
                                            _path +
                                            ".boolean_and_number_and_template",
                                        expected:
                                            "(`prefix_${string}` | boolean | number)",
                                        value: input.boolean_and_number_and_template,
                                    })) &&
                                    (undefined !==
                                        input.boolean_and_number_and_template ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".boolean_and_number_and_template",
                                            expected:
                                                "(`prefix_${string}` | boolean | number)",
                                            value: input.boolean_and_number_and_template,
                                        })) &&
                                    (("number" ===
                                        typeof input.boolean_and_number_and_template &&
                                        Number.isFinite(
                                            input.boolean_and_number_and_template,
                                        ) &&
                                        ($is_custom(
                                            "default",
                                            "number",
                                            "false",
                                            input.boolean_and_number_and_template,
                                        ) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".boolean_and_number_and_template",
                                                expected:
                                                    "number (@default false)",
                                                value: input.boolean_and_number_and_template,
                                            })) &&
                                        ($is_custom(
                                            "default",
                                            "number",
                                            "1",
                                            input.boolean_and_number_and_template,
                                        ) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".boolean_and_number_and_template",
                                                expected: "number (@default 1)",
                                                value: input.boolean_and_number_and_template,
                                            })) &&
                                        ($is_custom(
                                            "default",
                                            "number",
                                            "prefix_B",
                                            input.boolean_and_number_and_template,
                                        ) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".boolean_and_number_and_template",
                                                expected:
                                                    "number (@default prefix_B)",
                                                value: input.boolean_and_number_and_template,
                                            }))) ||
                                        "boolean" ===
                                            typeof input.boolean_and_number_and_template ||
                                        ("string" ===
                                            typeof input.boolean_and_number_and_template &&
                                            RegExp(/^prefix_(.*)/).test(
                                                input.boolean_and_number_and_template,
                                            ) &&
                                            ($is_custom(
                                                "default",
                                                "string",
                                                "false",
                                                input.boolean_and_number_and_template,
                                            ) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".boolean_and_number_and_template",
                                                    expected:
                                                        "string (@default false)",
                                                    value: input.boolean_and_number_and_template,
                                                })) &&
                                            ($is_custom(
                                                "default",
                                                "string",
                                                "1",
                                                input.boolean_and_number_and_template,
                                            ) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".boolean_and_number_and_template",
                                                    expected:
                                                        "string (@default 1)",
                                                    value: input.boolean_and_number_and_template,
                                                })) &&
                                            ($is_custom(
                                                "default",
                                                "string",
                                                "prefix_B",
                                                input.boolean_and_number_and_template,
                                            ) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".boolean_and_number_and_template",
                                                    expected:
                                                        "string (@default prefix_B)",
                                                    value: input.boolean_and_number_and_template,
                                                }))) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".boolean_and_number_and_template",
                                            expected:
                                                "(`prefix_${string}` | boolean | number)",
                                            value: input.boolean_and_number_and_template,
                                        })),
                            ].every((flag: boolean) => flag);
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "TagDefault",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "TagDefault",
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
            const stringify = (input: TagDefault): string => {
                const $number = (typia.json.createValidateStringify as any)
                    .number;
                const $string = (typia.json.createValidateStringify as any)
                    .string;
                const $throws = (typia.json.createValidateStringify as any)
                    .throws;
                const $is_custom = (typia.json.createValidateStringify as any)
                    .is_custom;
                const $so0 = (input: any): any =>
                    `{"boolean":${input.boolean},"number":${$number(
                        input.number,
                    )},"string":${$string(input.string)},"text":${$string(
                        input.text,
                    )},"template":${$string(
                        input.template,
                    )},"boolean_and_number_and_string":${(() => {
                        if (
                            "string" ===
                            typeof input.boolean_and_number_and_string
                        )
                            return $string(input.boolean_and_number_and_string);
                        if (
                            "number" ===
                            typeof input.boolean_and_number_and_string
                        )
                            return $number(input.boolean_and_number_and_string);
                        if (
                            "boolean" ===
                            typeof input.boolean_and_number_and_string
                        )
                            return input.boolean_and_number_and_string;
                        $throws({
                            expected: "(boolean | number | string)",
                            value: input.boolean_and_number_and_string,
                        });
                    })()},"union_but_boolean":${(() => {
                        if ("string" === typeof input.union_but_boolean)
                            return $string(input.union_but_boolean);
                        if ("number" === typeof input.union_but_boolean)
                            return $number(input.union_but_boolean);
                        if ("boolean" === typeof input.union_but_boolean)
                            return input.union_but_boolean;
                        $throws({
                            expected: "(boolean | number | string)",
                            value: input.union_but_boolean,
                        });
                    })()},"union_but_number":${(() => {
                        if ("string" === typeof input.union_but_number)
                            return $string(input.union_but_number);
                        if ("number" === typeof input.union_but_number)
                            return $number(input.union_but_number);
                        if ("boolean" === typeof input.union_but_number)
                            return input.union_but_number;
                        $throws({
                            expected: "(boolean | number | string)",
                            value: input.union_but_number,
                        });
                    })()},"union_but_string":${(() => {
                        if ("string" === typeof input.union_but_string)
                            return $string(input.union_but_string);
                        if ("number" === typeof input.union_but_string)
                            return $number(input.union_but_string);
                        if ("boolean" === typeof input.union_but_string)
                            return input.union_but_string;
                        $throws({
                            expected: "(boolean | number | string)",
                            value: input.union_but_string,
                        });
                    })()},"vulnerable_range":${$number(
                        input.vulnerable_range,
                    )},"vulnerable_template":${$string(
                        input.vulnerable_template,
                    )},"boolean_and_number_and_template":${(() => {
                        if (
                            "string" ===
                            typeof input.boolean_and_number_and_template
                        )
                            return $string(
                                input.boolean_and_number_and_template,
                            );
                        if (
                            "number" ===
                            typeof input.boolean_and_number_and_template
                        )
                            return $number(
                                input.boolean_and_number_and_template,
                            );
                        if (
                            "boolean" ===
                            typeof input.boolean_and_number_and_template
                        )
                            return input.boolean_and_number_and_template;
                        $throws({
                            expected: "(`prefix_${string}` | boolean | number)",
                            value: input.boolean_and_number_and_template,
                        });
                    })()}}`;
                return $so0(input);
            };
            const output = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        },
    );
