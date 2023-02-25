import typia from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_clone } from "../internal/_test_clone";
export const test_createClone_TagArray = _test_clone("TagArray", TagArray.generate, (input: TagArray): typia.Primitive<TagArray> => {
    const $is_uuid = (typia.createClone as any).is_uuid;
    const $co0 = (input: any) => ({
        items: Array.isArray(input.items) ? input.items.map((elem: any) => elem) : input.items,
        minItems: Array.isArray(input.minItems) ? input.minItems.map((elem: any) => elem) : input.minItems,
        maxItems: Array.isArray(input.maxItems) ? input.maxItems.map((elem: any) => elem) : input.maxItems,
        both: Array.isArray(input.both) ? input.both.map((elem: any) => elem) : input.both
    });
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input;
});
