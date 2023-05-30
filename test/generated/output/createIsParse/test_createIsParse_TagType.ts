import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { TagType } from "../../../structures/TagType";
export const test_createIsParse_TagType = _test_isParse("TagType", TagType.generate, (input: any): typia.Primitive<TagType> => { const is = (input: any): input is TagType => {
    const $io0 = (input: any): boolean => "number" === typeof input.int && Number.isFinite(input.int) && parseInt(input.int) === input.int && ("number" === typeof input.uint && Number.isFinite(input.uint) && parseInt(input.uint) === input.uint && 0 <= input.uint);
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; input = JSON.parse(input); return is(input) ? input as any : null; }, TagType.SPOILERS);
