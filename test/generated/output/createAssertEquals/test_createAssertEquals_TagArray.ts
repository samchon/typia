import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { TagArray } from "../../../structures/TagArray";

export const test_assertEquals_TagArray = _test_assertEquals(
    "TagArray",
)<TagArray>(TagArray)((input: any): TagArray => {
    const __is = (
        input: any,
        _exceptionable: boolean = true,
    ): input is TagArray => {
        const $is_uuid = (typia.createAssertEquals as any).is_uuid;
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
                (elem: any, _index1: number) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    $io1(elem, true && _exceptionable),
            ) &&
            (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (["value"].some((prop: any) => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
            Array.isArray(input.items) &&
            3 === input.items.length &&
            input.items.every(
                (elem: any, _index2: number) =>
                    "string" === typeof elem && $is_uuid(elem),
            ) &&
            Array.isArray(input.minItems) &&
            3 <= input.minItems.length &&
            input.minItems.every(
                (elem: any, _index3: number) =>
                    "number" === typeof elem &&
                    Number.isFinite(elem) &&
                    3 <= elem,
            ) &&
            Array.isArray(input.both) &&
            3 <= input.both.length &&
            7 >= input.both.length &&
            input.both.every(
                (elem: any, _index4: number) =>
                    "string" === typeof elem && $is_uuid(elem),
            ) &&
            Array.isArray(input.equal) &&
            10 <= input.equal.length &&
            10 >= input.equal.length &&
            input.equal.every(
                (elem: any, _index5: number) =>
                    "number" === typeof elem &&
                    Number.isFinite(elem) &&
                    10 <= elem &&
                    10 >= elem,
            ) &&
            (4 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (
                        ["items", "minItems", "both", "equal"].some(
                            (prop: any) => key === prop,
                        )
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        return "object" === typeof input && null !== input && $io0(input, true);
    };
    if (false === __is(input))
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is TagArray => {
            const $guard = (typia.createAssertEquals as any).guard;
            const $join = (typia.createAssertEquals as any).join;
            const $is_uuid = (typia.createAssertEquals as any).is_uuid;
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (((Array.isArray(input.value) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "Array<TagArray.Type>",
                        value: input.value,
                    })) &&
                    input.value.every(
                        (elem: any, _index1: number) =>
                            ((("object" === typeof elem && null !== elem) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value[" + _index1 + "]",
                                    expected: "TagArray.Type",
                                    value: elem,
                                })) &&
                                $ao1(
                                    elem,
                                    _path + ".value[" + _index1 + "]",
                                    true && _exceptionable,
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + ".value[" + _index1 + "]",
                                expected: "TagArray.Type",
                                value: elem,
                            }),
                    )) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "Array<TagArray.Type>",
                        value: input.value,
                    })) &&
                (1 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key: any) => {
                        if (["value"].some((prop: any) => key === prop))
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return $guard(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                        });
                    }));
            const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (((Array.isArray(input.items) ||
                    $guard(_exceptionable, {
                        path: _path + ".items",
                        expected: "Array<string>",
                        value: input.items,
                    })) &&
                    (3 === input.items.length ||
                        $guard(_exceptionable, {
                            path: _path + ".items",
                            expected: "Array.length (@items 3)",
                            value: input.items,
                        })) &&
                    input.items.every(
                        (elem: any, _index2: number) =>
                            ("string" === typeof elem &&
                                ($is_uuid(elem) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".items[" + _index2 + "]",
                                        expected: "string (@format uuid)",
                                        value: elem,
                                    }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".items[" + _index2 + "]",
                                expected: "string",
                                value: elem,
                            }),
                    )) ||
                    $guard(_exceptionable, {
                        path: _path + ".items",
                        expected: "Array<string>",
                        value: input.items,
                    })) &&
                (((Array.isArray(input.minItems) ||
                    $guard(_exceptionable, {
                        path: _path + ".minItems",
                        expected: "Array<number>",
                        value: input.minItems,
                    })) &&
                    (3 <= input.minItems.length ||
                        $guard(_exceptionable, {
                            path: _path + ".minItems",
                            expected: "Array.length (@minItems 3)",
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
                                path: _path + ".minItems[" + _index3 + "]",
                                expected: "number",
                                value: elem,
                            }),
                    )) ||
                    $guard(_exceptionable, {
                        path: _path + ".minItems",
                        expected: "Array<number>",
                        value: input.minItems,
                    })) &&
                (((Array.isArray(input.both) ||
                    $guard(_exceptionable, {
                        path: _path + ".both",
                        expected: "Array<string>",
                        value: input.both,
                    })) &&
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
                        })) &&
                    input.both.every(
                        (elem: any, _index4: number) =>
                            ("string" === typeof elem &&
                                ($is_uuid(elem) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".both[" + _index4 + "]",
                                        expected: "string (@format uuid)",
                                        value: elem,
                                    }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".both[" + _index4 + "]",
                                expected: "string",
                                value: elem,
                            }),
                    )) ||
                    $guard(_exceptionable, {
                        path: _path + ".both",
                        expected: "Array<string>",
                        value: input.both,
                    })) &&
                (((Array.isArray(input.equal) ||
                    $guard(_exceptionable, {
                        path: _path + ".equal",
                        expected: "Array<number>",
                        value: input.equal,
                    })) &&
                    (10 <= input.equal.length ||
                        $guard(_exceptionable, {
                            path: _path + ".equal",
                            expected: "Array.length (@minItems 10)",
                            value: input.equal,
                        })) &&
                    (10 >= input.equal.length ||
                        $guard(_exceptionable, {
                            path: _path + ".equal",
                            expected: "Array.length (@maxItems 10)",
                            value: input.equal,
                        })) &&
                    input.equal.every(
                        (elem: any, _index5: number) =>
                            ("number" === typeof elem &&
                                Number.isFinite(elem) &&
                                (10 <= elem ||
                                    $guard(_exceptionable, {
                                        path: _path + ".equal[" + _index5 + "]",
                                        expected: "number (@minimum 10)",
                                        value: elem,
                                    })) &&
                                (10 >= elem ||
                                    $guard(_exceptionable, {
                                        path: _path + ".equal[" + _index5 + "]",
                                        expected: "number (@maximum 10)",
                                        value: elem,
                                    }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".equal[" + _index5 + "]",
                                expected: "number",
                                value: elem,
                            }),
                    )) ||
                    $guard(_exceptionable, {
                        path: _path + ".equal",
                        expected: "Array<number>",
                        value: input.equal,
                    })) &&
                (4 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key: any) => {
                        if (
                            ["items", "minItems", "both", "equal"].some(
                                (prop: any) => key === prop,
                            )
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
});
