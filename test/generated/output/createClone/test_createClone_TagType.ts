import typia from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_clone } from "../internal/_test_clone";
export const test_createClone_TagType = _test_clone("TagType", TagType.generate, (input: TagType): typia.Primitive<TagType> => {
    const $co0 = (input: any) => ({
        int: input.int,
        uint: input.uint
    });
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input;
});
