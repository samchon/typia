import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { TagArray } from "../../../structures/TagArray";

export const test_assertEquals_TagArray = _test_assertEquals(
    "TagArray",
    TagArray.generate,
    (input) =>
        ((input: any): Array<TagArray.Type> => {
            const $guard = (typia.assertEquals as any).guard;
            const $is_uuid = (typia.assertEquals as any).is_uuid;
            const $join = (typia.assertEquals as any).join;
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
                    ((Array.isArray(input.items) && 3 === input.items.length) ||
                        $guard(_exceptionable, {
                            path: _path + ".items",
                            expected: "Array<string>",
                            value: input.items,
                        })) &&
                    input.items.every(
                        (elem: any, _index2: number) =>
                            ("string" === typeof elem &&
                                true === $is_uuid(elem)) ||
                            $guard(_exceptionable, {
                                path: _path + ".items[" + _index2 + "]",
                                expected: "string",
                                value: elem,
                            }),
                    ) &&
                    ((Array.isArray(input.minItems) &&
                        3 <= input.minItems.length) ||
                        $guard(_exceptionable, {
                            path: _path + ".minItems",
                            expected: "Array<number>",
                            value: input.minItems,
                        })) &&
                    input.minItems.every(
                        (elem: any, _index3: number) =>
                            ("number" === typeof elem &&
                                Number.isFinite(elem) &&
                                3 <= elem) ||
                            $guard(_exceptionable, {
                                path: _path + ".minItems[" + _index3 + "]",
                                expected: "number",
                                value: elem,
                            }),
                    ) &&
                    ((Array.isArray(input.maxItems) &&
                        7 >= input.maxItems.length) ||
                        $guard(_exceptionable, {
                            path: _path + ".maxItems",
                            expected: "Array<(number | string)>",
                            value: input.maxItems,
                        })) &&
                    input.maxItems.every(
                        (elem: any, _index4: number) =>
                            ("string" === typeof elem && 7 >= elem.length) ||
                            ("number" === typeof elem &&
                                Number.isFinite(elem) &&
                                7 >= elem) ||
                            $guard(_exceptionable, {
                                path: _path + ".maxItems[" + _index4 + "]",
                                expected: "(number | string)",
                                value: elem,
                            }),
                    ) &&
                    ((Array.isArray(input.both) &&
                        3 <= input.both.length &&
                        7 >= input.both.length) ||
                        $guard(_exceptionable, {
                            path: _path + ".both",
                            expected: "Array<string>",
                            value: input.both,
                        })) &&
                    input.both.every(
                        (elem: any, _index5: number) =>
                            ("string" === typeof elem &&
                                true === $is_uuid(elem)) ||
                            $guard(_exceptionable, {
                                path: _path + ".both[" + _index5 + "]",
                                expected: "string",
                                value: elem,
                            }),
                    ) &&
                    (4 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key) => {
                            if (
                                ["items", "minItems", "maxItems", "both"].some(
                                    (prop) => key === prop,
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
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Array<TagArray.Type>",
                            value: input,
                        })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected: "TagArray.Type",
                                    value: elem,
                                })) &&
                            $ao0(elem, _path + "[" + _index1 + "]", true),
                    )
                );
            })(input, "$input", true);
            return input;
        })(input),
);
