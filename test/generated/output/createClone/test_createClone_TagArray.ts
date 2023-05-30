import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { TagArray } from "../../../structures/TagArray";
export const test_createClone_TagArray = _test_clone("TagArray", TagArray.generate, (input: TagArray): typia.Primitive<TagArray> => {
    const $is_uuid = (typia.createClone as any).is_uuid;
    const $co0 = (input: any): any => ({
        items: Array.isArray(input.items) ? input.items.map((elem: any) => elem as any) : input.items as any,
        minItems: Array.isArray(input.minItems) ? input.minItems.map((elem: any) => elem as any) : input.minItems as any,
        maxItems: Array.isArray(input.maxItems) ? input.maxItems.map((elem: any) => elem as any) : input.maxItems as any,
        both: Array.isArray(input.both) ? input.both.map((elem: any) => elem as any) : input.both as any
    });
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem as any) : input as any;
});
