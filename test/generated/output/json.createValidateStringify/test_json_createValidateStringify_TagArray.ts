import typia from "../../../../src";
import { _test_json_validateStringify } from "../../../internal/_test_json_validateStringify";
import { TagArray } from "../../../structures/TagArray";

export const test_json_validateStringify_TagArray =
    _test_json_validateStringify("TagArray")<TagArray>(TagArray)(
        (input: TagArray): typia.IValidation<string> => {
            const validate = (input: any): typia.IValidation<TagArray> => {
                const errors = [] as any[];
                const __is = (input: any): input is TagArray => {
                    const $is_uuid = (typia.json.createValidateStringify as any)
                        .is_uuid;
                    const $io0 = (input: any): boolean =>
                        Array.isArray(input.value) &&
                        input.value.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io1(elem),
                        );
                    const $io1 = (input: any): boolean =>
                        Array.isArray(input.items) &&
                        3 === input.items.length &&
                        input.items.every(
                            (elem: any) =>
                                "string" === typeof elem && $is_uuid(elem),
                        ) &&
                        Array.isArray(input.minItems) &&
                        3 <= input.minItems.length &&
                        input.minItems.every(
                            (elem: any) =>
                                "number" === typeof elem &&
                                Number.isFinite(elem) &&
                                3 <= elem,
                        ) &&
                        Array.isArray(input.both) &&
                        3 <= input.both.length &&
                        7 >= input.both.length &&
                        input.both.every(
                            (elem: any) =>
                                "string" === typeof elem && $is_uuid(elem),
                        ) &&
                        Array.isArray(input.equal) &&
                        10 <= input.equal.length &&
                        10 >= input.equal.length &&
                        input.equal.every(
                            (elem: any) =>
                                "number" === typeof elem &&
                                Number.isFinite(elem) &&
                                10 <= elem &&
                                10 >= elem,
                        );
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
                    ): input is TagArray => {
                        const $is_uuid = (
                            typia.json.createValidateStringify as any
                        ).is_uuid;
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((Array.isArray(input.value) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "Array<TagArray.Type>",
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
                                                            "TagArray.Type",
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
                                                    expected: "TagArray.Type",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "Array<TagArray.Type>",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo1 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((Array.isArray(input.items) ||
                                    $report(_exceptionable, {
                                        path: _path + ".items",
                                        expected: "Array<string>",
                                        value: input.items,
                                    })) &&
                                    (3 === input.items.length ||
                                        $report(_exceptionable, {
                                            path: _path + ".items",
                                            expected: "Array.length (@items 3)",
                                            value: input.items,
                                        })) &&
                                    input.items
                                        .map(
                                            (elem: any, _index2: number) =>
                                                ("string" === typeof elem &&
                                                    ($is_uuid(elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    ".items[" +
                                                                    _index2 +
                                                                    "]",
                                                                expected:
                                                                    "string (@format uuid)",
                                                                value: elem,
                                                            },
                                                        ))) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".items[" +
                                                        _index2 +
                                                        "]",
                                                    expected: "string",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".items",
                                        expected: "Array<string>",
                                        value: input.items,
                                    }),
                                ((Array.isArray(input.minItems) ||
                                    $report(_exceptionable, {
                                        path: _path + ".minItems",
                                        expected: "Array<number>",
                                        value: input.minItems,
                                    })) &&
                                    (3 <= input.minItems.length ||
                                        $report(_exceptionable, {
                                            path: _path + ".minItems",
                                            expected:
                                                "Array.length (@minItems 3)",
                                            value: input.minItems,
                                        })) &&
                                    input.minItems
                                        .map(
                                            (elem: any, _index3: number) =>
                                                ("number" === typeof elem &&
                                                    Number.isFinite(elem) &&
                                                    (3 <= elem ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    ".minItems[" +
                                                                    _index3 +
                                                                    "]",
                                                                expected:
                                                                    "number (@minimum 3)",
                                                                value: elem,
                                                            },
                                                        ))) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".minItems[" +
                                                        _index3 +
                                                        "]",
                                                    expected: "number",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".minItems",
                                        expected: "Array<number>",
                                        value: input.minItems,
                                    }),
                                ((Array.isArray(input.both) ||
                                    $report(_exceptionable, {
                                        path: _path + ".both",
                                        expected: "Array<string>",
                                        value: input.both,
                                    })) &&
                                    (3 <= input.both.length ||
                                        $report(_exceptionable, {
                                            path: _path + ".both",
                                            expected:
                                                "Array.length (@minItems 3)",
                                            value: input.both,
                                        })) &&
                                    (7 >= input.both.length ||
                                        $report(_exceptionable, {
                                            path: _path + ".both",
                                            expected:
                                                "Array.length (@maxItems 7)",
                                            value: input.both,
                                        })) &&
                                    input.both
                                        .map(
                                            (elem: any, _index4: number) =>
                                                ("string" === typeof elem &&
                                                    ($is_uuid(elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    ".both[" +
                                                                    _index4 +
                                                                    "]",
                                                                expected:
                                                                    "string (@format uuid)",
                                                                value: elem,
                                                            },
                                                        ))) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".both[" +
                                                        _index4 +
                                                        "]",
                                                    expected: "string",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".both",
                                        expected: "Array<string>",
                                        value: input.both,
                                    }),
                                ((Array.isArray(input.equal) ||
                                    $report(_exceptionable, {
                                        path: _path + ".equal",
                                        expected: "Array<number>",
                                        value: input.equal,
                                    })) &&
                                    (10 <= input.equal.length ||
                                        $report(_exceptionable, {
                                            path: _path + ".equal",
                                            expected:
                                                "Array.length (@minItems 10)",
                                            value: input.equal,
                                        })) &&
                                    (10 >= input.equal.length ||
                                        $report(_exceptionable, {
                                            path: _path + ".equal",
                                            expected:
                                                "Array.length (@maxItems 10)",
                                            value: input.equal,
                                        })) &&
                                    input.equal
                                        .map(
                                            (elem: any, _index5: number) =>
                                                ("number" === typeof elem &&
                                                    Number.isFinite(elem) &&
                                                    (10 <= elem ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    ".equal[" +
                                                                    _index5 +
                                                                    "]",
                                                                expected:
                                                                    "number (@minimum 10)",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                    (10 >= elem ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    ".equal[" +
                                                                    _index5 +
                                                                    "]",
                                                                expected:
                                                                    "number (@maximum 10)",
                                                                value: elem,
                                                            },
                                                        ))) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".equal[" +
                                                        _index5 +
                                                        "]",
                                                    expected: "number",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".equal",
                                        expected: "Array<number>",
                                        value: input.equal,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "TagArray",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "TagArray",
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
            const stringify = (input: TagArray): string => {
                const $io1 = (input: any): boolean =>
                    Array.isArray(input.items) &&
                    3 === input.items.length &&
                    input.items.every(
                        (elem: any) =>
                            "string" === typeof elem && $is_uuid(elem),
                    ) &&
                    Array.isArray(input.minItems) &&
                    3 <= input.minItems.length &&
                    input.minItems.every(
                        (elem: any) => "number" === typeof elem && 3 <= elem,
                    ) &&
                    Array.isArray(input.both) &&
                    3 <= input.both.length &&
                    7 >= input.both.length &&
                    input.both.every(
                        (elem: any) =>
                            "string" === typeof elem && $is_uuid(elem),
                    ) &&
                    Array.isArray(input.equal) &&
                    10 <= input.equal.length &&
                    10 >= input.equal.length &&
                    input.equal.every(
                        (elem: any) =>
                            "number" === typeof elem &&
                            10 <= elem &&
                            10 >= elem,
                    );
                const $string = (typia.json.createValidateStringify as any)
                    .string;
                const $number = (typia.json.createValidateStringify as any)
                    .number;
                const $is_uuid = (typia.json.createValidateStringify as any)
                    .is_uuid;
                const $so0 = (input: any): any =>
                    `{"value":${`[${input.value
                        .map((elem: any) => $so1(elem))
                        .join(",")}]`}}`;
                const $so1 = (input: any): any =>
                    `{"items":${`[${input.items
                        .map((elem: any) => $string(elem))
                        .join(",")}]`},"minItems":${`[${input.minItems
                        .map((elem: any) => $number(elem))
                        .join(",")}]`},"both":${`[${input.both
                        .map((elem: any) => $string(elem))
                        .join(",")}]`},"equal":${`[${input.equal
                        .map((elem: any) => $number(elem))
                        .join(",")}]`}}`;
                return $so0(input);
            };
            const output = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        },
    );
