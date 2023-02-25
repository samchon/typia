import typia from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_isParse } from "../internal/_test_isParse";
export const test_isParse_TagType = _test_isParse("TagType", TagType.generate, (input) => ((input: any): typia.Primitive<TagType> => { const is = (input: any): input is TagType => {
    const $io0 = (input: any) => "number" === typeof input.int && parseInt(input.int) === input.int && ("number" === typeof input.uint && parseInt(input.uint) === input.uint && 0 <= input.uint);
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; input = JSON.parse(input); return is(input) ? input as any : null; })(input), TagType.SPOILERS);
