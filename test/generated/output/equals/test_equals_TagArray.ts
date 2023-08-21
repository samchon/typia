import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { TagArray } from "../../../structures/TagArray";

export const test_equals_TagArray = _test_equals("TagArray")<TagArray>(
    TagArray,
)((input) =>
    ((input: any, _exceptionable: boolean = true): input is TagArray => {
        const $is_uuid = (typia.equals as any).is_uuid;
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
                    "number" === typeof elem && 10 <= elem && 10 >= elem,
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
    })(input),
);
