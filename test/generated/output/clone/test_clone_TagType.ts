import typia from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_TagType = _test_clone("TagType", TagType.generate, (input) => ((input: Type[]): typia.Primitive<Type[]> => {
    const $co0 = (input: any) => ({
        int: input.int,
        uint: input.uint
    });
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input;
})(input));
