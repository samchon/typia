import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { TagArray } from "../../../structures/TagArray";
export const test_createIsPrune_TagArray = _test_isPrune("TagArray", TagArray.generate, (input: any): input is TagArray => { const is = (input: any): input is TagArray => {
    const $is_uuid = (typia.createIsPrune as any).is_uuid;
    const $io0 = (input: any): boolean => Array.isArray(input.items) && 3 === input.items.length && input.items.every((elem: any) => "string" === typeof elem && $is_uuid(elem)) && (Array.isArray(input.minItems) && 3 <= input.minItems.length && input.minItems.every((elem: any) => "number" === typeof elem && Number.isFinite(elem) && 3 <= elem)) && (Array.isArray(input.maxItems) && 7 >= input.maxItems.length && input.maxItems.every((elem: any) => "string" === typeof elem && 7 >= elem.length || "number" === typeof elem && Number.isFinite(elem) && 7 >= elem)) && (Array.isArray(input.both) && 3 <= input.both.length && 7 >= input.both.length && input.both.every((elem: any) => "string" === typeof elem && $is_uuid(elem)));
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; const prune = (input: TagArray): void => {
    const $is_uuid = (typia.createIsPrune as any).is_uuid;
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("items" === key || "minItems" === key || "maxItems" === key || "both" === key)
                continue;
            delete input[key];
        }
    };
    if (Array.isArray(input))
        input.forEach((elem: any) => {
            if ("object" === typeof elem && null !== elem)
                $po0(elem);
        });
}; if (!is(input))
    return false; prune(input); return true; }, TagArray.SPOILERS);
