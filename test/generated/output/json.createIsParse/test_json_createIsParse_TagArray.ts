import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { TagArray } from "../../../structures/TagArray";

export const test_json_isParse_TagArray = _test_json_isParse<TagArray>(
    TagArray,
)((input: any): typia.Primitive<TagArray> => {
    const is = (input: any): input is TagArray => {
        const $is_uuid = (typia.json.createIsParse as any).is_uuid;
        const $io0 = (input: any): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io1(elem),
            );
        const $io1 = (input: any): boolean =>
            Array.isArray(input.items) &&
            3 === input.items.length &&
            input.items.every(
                (elem: any) => "string" === typeof elem && $is_uuid(elem),
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
                (elem: any) => "string" === typeof elem && $is_uuid(elem),
            );
        return "object" === typeof input && null !== input && $io0(input);
    };
    input = JSON.parse(input);
    return is(input) ? (input as any) : null;
});
