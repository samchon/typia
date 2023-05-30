import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { TagLength } from "../../../structures/TagLength";
export const test_createIsParse_TagLength = _test_isParse("TagLength", TagLength.generate, (input: any): typia.Primitive<TagLength> => { const is = (input: any): input is TagLength => {
    const $io0 = (input: any): boolean => "string" === typeof input.fixed && 5 === input.fixed.length && ("string" === typeof input.minimum && 3 <= input.minimum.length) && ("string" === typeof input.maximum && 7 >= input.maximum.length) && ("string" === typeof input.minimum_and_maximum && 3 <= input.minimum_and_maximum.length && 7 >= input.minimum_and_maximum.length);
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; input = JSON.parse(input); return is(input) ? input as any : null; }, TagLength.SPOILERS);
