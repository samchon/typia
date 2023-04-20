import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { TagArray } from "../../../structures/TagArray";

export const test_createEquals_TagArray = _test_equals(
    "TagArray",
    TagArray.generate,
    (input: any, _exceptionable: boolean = true): input is TagArray => {
        const $is_uuid = (typia.createEquals as any).is_uuid;
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
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
            Array.isArray(input.maxItems) &&
            7 >= input.maxItems.length &&
            input.maxItems.every(
                (elem: any, _index4: number) =>
                    ("string" === typeof elem && 7 >= elem.length) ||
                    ("number" === typeof elem &&
                        Number.isFinite(elem) &&
                        7 >= elem),
            ) &&
            Array.isArray(input.both) &&
            3 <= input.both.length &&
            7 >= input.both.length &&
            input.both.every(
                (elem: any, _index5: number) =>
                    "string" === typeof elem && $is_uuid(elem),
            ) &&
            (4 === Object.keys(input).length ||
                Object.keys(input).every((key) => {
                    if (
                        ["items", "minItems", "maxItems", "both"].some(
                            (prop) => key === prop,
                        )
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        return (
            Array.isArray(input) &&
            input.every(
                (elem: any, _index1: number) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    $io0(elem, true),
            )
        );
    },
);
