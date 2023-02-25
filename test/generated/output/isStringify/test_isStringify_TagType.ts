import typia from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_isStringify_TagType = _test_isStringify("TagType", TagType.generate, (input) => ((input: TagType): string | null => { const is = (input: any): input is TagType => {
    const $io0 = (input: any) => "number" === typeof input.int && !Number.isNaN(input.int) && parseInt(input.int) === input.int && ("number" === typeof input.uint && !Number.isNaN(input.uint) && parseInt(input.uint) === input.uint && 0 <= input.uint);
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; const stringify = (input: TagType): string => {
    return `[${input.map((elem: any) => `{"int":${elem.int},"uint":${elem.uint}}`).join(",")}]`;
}; return is(input) ? stringify(input) : null; })(input), TagType.SPOILERS);
