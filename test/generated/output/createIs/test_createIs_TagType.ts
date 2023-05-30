import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { TagType } from "../../../structures/TagType";
export const test_createIs_TagType = _test_is("TagType", TagType.generate, (input: any): input is TagType => {
    const $io0 = (input: any): boolean => "number" === typeof input.int && Number.isFinite(input.int) && parseInt(input.int) === input.int && ("number" === typeof input.uint && Number.isFinite(input.uint) && parseInt(input.uint) === input.uint && 0 <= input.uint);
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}, TagType.SPOILERS);
