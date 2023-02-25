import typia from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_isClone } from "../internal/_test_isClone";
export const test_createIsClone_TagArray = _test_isClone("TagArray", TagArray.generate, (input: any): typia.Primitive<TagArray> | null => { const is = (input: any): input is TagArray => {
    const $is_uuid = (typia.createIsClone as any).is_uuid;
    const $io0 = (input: any) => Array.isArray(input.items) && 3 === input.items.length && input.items.every((elem: any) => "string" === typeof elem && true === $is_uuid(elem)) && (Array.isArray(input.minItems) && 3 <= input.minItems.length && input.minItems.every((elem: any) => "number" === typeof elem && 3 <= elem)) && (Array.isArray(input.maxItems) && 7 >= input.maxItems.length && input.maxItems.every((elem: any) => "string" === typeof elem && 7 >= elem.length || "number" === typeof elem && 7 >= elem)) && (Array.isArray(input.both) && (3 <= input.both.length && 7 >= input.both.length) && input.both.every((elem: any) => "string" === typeof elem && true === $is_uuid(elem)));
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; const clone = (input: TagArray): typia.Primitive<TagArray> => {
    const $is_uuid = (typia.createIsClone as any).is_uuid;
    const $co0 = (input: any) => ({
        items: Array.isArray(input.items) ? input.items.map((elem: any) => elem) : input.items,
        minItems: Array.isArray(input.minItems) ? input.minItems.map((elem: any) => elem) : input.minItems,
        maxItems: Array.isArray(input.maxItems) ? input.maxItems.map((elem: any) => elem) : input.maxItems,
        both: Array.isArray(input.both) ? input.both.map((elem: any) => elem) : input.both
    });
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input;
}; if (!is(input))
    return null; const output = clone(input); return output; }, TagArray.SPOILERS);
