import typia from "../../../../src";
import { _test_assertPrune } from "../../../internal/_test_assertPrune";
import { TagArray } from "../../../structures/TagArray";

export const test_assertPrune_TagArray = _test_assertPrune(
    "TagArray",
    TagArray.generate,
    (input) =>
        ((input: any): Array<TagArray.Type> => {
            const assert = (input: any): Array<TagArray.Type> => {
                const $guard = (typia.assertPrune as any).guard;
                const $is_uuid = (typia.assertPrune as any).is_uuid;
                const __is = (input: any): input is Array<TagArray.Type> => {
                    const $is_uuid = (typia.assertPrune as any).is_uuid;
                    const $io0 = (input: any): boolean =>
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
                        Array.isArray(input.maxItems) &&
                        7 >= input.maxItems.length &&
                        input.maxItems.every(
                            (elem: any) =>
                                ("string" === typeof elem &&
                                    7 >= elem.length) ||
                                ("number" === typeof elem &&
                                    Number.isFinite(elem) &&
                                    7 >= elem),
                        ) &&
                        Array.isArray(input.both) &&
                        3 <= input.both.length &&
                        7 >= input.both.length &&
                        input.both.every(
                            (elem: any) =>
                                "string" === typeof elem && $is_uuid(elem),
                        );
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
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is Array<TagArray.Type> => {
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            ((Array.isArray(input.items) &&
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
                                        path: _path + ".items[" + _index2 + "]",
                                        expected: "string",
                                        value: elem,
                                    }),
                            ) &&
                            ((Array.isArray(input.minItems) &&
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
                                                expected: "number (@minimum 3)",
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
                            ) &&
                            ((Array.isArray(input.maxItems) &&
                                (7 >= input.maxItems.length ||
                                    $guard(_exceptionable, {
                                        path: _path + ".maxItems",
                                        expected: "Array.length (@maxItems 7)",
                                        value: input.maxItems,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".maxItems",
                                    expected: "Array<(number | string)>",
                                    value: input.maxItems,
                                })) &&
                            input.maxItems.every(
                                (elem: any, _index4: number) =>
                                    ("string" === typeof elem &&
                                        (7 >= elem.length ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".maxItems[" +
                                                    _index4 +
                                                    "]",
                                                expected:
                                                    "string (@maxLength 7)",
                                                value: elem,
                                            }))) ||
                                    ("number" === typeof elem &&
                                        Number.isFinite(elem) &&
                                        (7 >= elem ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".maxItems[" +
                                                    _index4 +
                                                    "]",
                                                expected: "number (@maximum 7)",
                                                value: elem,
                                            }))) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".maxItems[" +
                                            _index4 +
                                            "]",
                                        expected: "(number | string)",
                                        value: elem,
                                    }),
                            ) &&
                            ((Array.isArray(input.both) &&
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
                                (elem: any, _index5: number) =>
                                    ("string" === typeof elem &&
                                        ($is_uuid(elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".both[" +
                                                    _index5 +
                                                    "]",
                                                expected:
                                                    "string (@format uuid)",
                                                value: elem,
                                            }))) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".both[" + _index5 + "]",
                                        expected: "string",
                                        value: elem,
                                    }),
                            );
                        return (
                            (Array.isArray(input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "Array<Resolve<TagArray.Type>>",
                                    value: input,
                                })) &&
                            input.every(
                                (elem: any, _index1: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected: "Resolve<TagArray.Type>",
                                            value: elem,
                                        })) &&
                                    $ao0(
                                        elem,
                                        _path + "[" + _index1 + "]",
                                        true,
                                    ),
                            )
                        );
                    })(input, "$input", true);
                return input;
            };
            const prune = (input: Array<TagArray.Type>): void => {
                const $is_uuid = (typia.assertPrune as any).is_uuid;
                const $po0 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if (
                            "items" === key ||
                            "minItems" === key ||
                            "maxItems" === key ||
                            "both" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                if (Array.isArray(input))
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po0(elem);
                    });
            };
            assert(input);
            prune(input);
            return input;
        })(input),
    TagArray.SPOILERS,
);
