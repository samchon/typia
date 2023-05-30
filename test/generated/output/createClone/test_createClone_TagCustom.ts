import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { TagCustom } from "../../../structures/TagCustom";
export const test_createClone_TagCustom = _test_clone("TagCustom", TagCustom.generate, (input: TagCustom): typia.Primitive<TagCustom> => {
    const $is_uuid = (typia.createClone as any).is_uuid;
    const $is_custom = (typia.createClone as any).is_custom;
    const $co0 = (input: any): any => ({
        id: input.id as any,
        dollar: input.dollar as any,
        postfix: input.postfix as any,
        log: input.log as any
    });
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
});
