import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { TagType } from "../../../structures/TagType";
export const test_isStringify_TagType = _test_isStringify("TagType", TagType.generate, (input) => ((input: Array<TagType.Type>): string | null => { const is = (input: any): input is Array<TagType.Type> => {
    const $io0 = (input: any): boolean => "number" === typeof input.int && Number.isFinite(input.int) && parseInt(input.int) === input.int && ("number" === typeof input.uint && Number.isFinite(input.uint) && parseInt(input.uint) === input.uint && 0 <= input.uint);
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; const stringify = (input: Array<TagType.Type>): string => {
    const $number = (typia.isStringify as any).number;
    return `[${input.map((elem: any) => `{"int":${$number(elem.int)},"uint":${$number(elem.uint)}}`).join(",")}]`;
}; return is(input) ? stringify(input) : null; })(input), TagType.SPOILERS);
