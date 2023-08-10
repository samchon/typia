import typia from "../../../../src";
import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { TagArray } from "../../../structures/TagArray";

export const test_json_assertStringify_TagArray =
    _test_json_assertStringify<TagArray>(TagArray)((input) =>
        ((input: any): string => {
            const assert = (input: any): TagArray => {
                const __is = (input: any): input is TagArray => {
                    const $is_uuid = (typia.json.assertStringify as any)
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
                        );
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is TagArray => {
                        const $guard = (typia.json.assertStringify as any)
                            .guard;
                        const $is_uuid = (typia.json.assertStringify as any)
                            .is_uuid;
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            ((Array.isArray(input.value) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "Array<TagArray.Type>",
                                    value: input.value,
                                })) &&
                                input.value.every(
                                    (elem: any, _index1: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".value[" +
                                                    _index1 +
                                                    "]",
                                                expected: "TagArray.Type",
                                                value: elem,
                                            })) &&
                                            $ao1(
                                                elem,
                                                _path +
                                                    ".value[" +
                                                    _index1 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".value[" +
                                                _index1 +
                                                "]",
                                            expected: "TagArray.Type",
                                            value: elem,
                                        }),
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "Array<TagArray.Type>",
                                value: input.value,
                            });
                        const $ao1 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            ((((Array.isArray(input.items) &&
                                (3 === input.items.length ||
                                    $guard(_exceptionable, {
                                        path: _path + ".items",
                                        expected: "Array.length (@items 3)",
                                        value: input.items,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".items",
                                    expected: "Array<string>",
                                    value: input.items,
                                })) &&
                                input.items.every(
                                    (elem: any, _index2: number) =>
                                        ("string" === typeof elem &&
                                            ($is_uuid(elem) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".items[" +
                                                        _index2 +
                                                        "]",
                                                    expected:
                                                        "string (@format uuid)",
                                                    value: elem,
                                                }))) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".items[" +
                                                _index2 +
                                                "]",
                                            expected: "string",
                                            value: elem,
                                        }),
                                )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".items",
                                    expected: "Array<string>",
                                    value: input.items,
                                })) &&
                            ((((Array.isArray(input.minItems) &&
                                (3 <= input.minItems.length ||
                                    $guard(_exceptionable, {
                                        path: _path + ".minItems",
                                        expected: "Array.length (@minItems 3)",
                                        value: input.minItems,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".minItems",
                                    expected: "Array<number>",
                                    value: input.minItems,
                                })) &&
                                input.minItems.every(
                                    (elem: any, _index3: number) =>
                                        ("number" === typeof elem &&
                                            Number.isFinite(elem) &&
                                            (3 <= elem ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".minItems[" +
                                                        _index3 +
                                                        "]",
                                                    expected:
                                                        "number (@minimum 3)",
                                                    value: elem,
                                                }))) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".minItems[" +
                                                _index3 +
                                                "]",
                                            expected: "number",
                                            value: elem,
                                        }),
                                )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".minItems",
                                    expected: "Array<number>",
                                    value: input.minItems,
                                })) &&
                            ((((Array.isArray(input.both) &&
                                (3 <= input.both.length ||
                                    $guard(_exceptionable, {
                                        path: _path + ".both",
                                        expected: "Array.length (@minItems 3)",
                                        value: input.both,
                                    })) &&
                                (7 >= input.both.length ||
                                    $guard(_exceptionable, {
                                        path: _path + ".both",
                                        expected: "Array.length (@maxItems 7)",
                                        value: input.both,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".both",
                                    expected: "Array<string>",
                                    value: input.both,
                                })) &&
                                input.both.every(
                                    (elem: any, _index4: number) =>
                                        ("string" === typeof elem &&
                                            ($is_uuid(elem) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".both[" +
                                                        _index4 +
                                                        "]",
                                                    expected:
                                                        "string (@format uuid)",
                                                    value: elem,
                                                }))) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".both[" +
                                                _index4 +
                                                "]",
                                            expected: "string",
                                            value: elem,
                                        }),
                                )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".both",
                                    expected: "Array<string>",
                                    value: input.both,
                                }));
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "TagArray",
                                    value: input,
                                })) &&
                                $ao0(input, _path + "", true)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "TagArray",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
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
                    );
                const $string = (typia.json.assertStringify as any).string;
                const $number = (typia.json.assertStringify as any).number;
                const $is_uuid = (typia.json.assertStringify as any).is_uuid;
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
                        .join(",")}]`}}`;
                return $so0(input);
            };
            return stringify(assert(input));
        })(input),
    );
