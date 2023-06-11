import typia from "../../../../src";
import { TagLength } from "../../../structures/TagLength";
import { _test_isStringify } from "../../../internal/_test_isStringify";
export const test_createIsStringify_TagLength = _test_isStringify("TagLength", TagLength.generate, (input: TagLength): string | null => { const is = (input: any): input is TagLength => {
    const $io0 = (input: any): boolean => "string" === typeof input.fixed && 5 === input.fixed.length && ("string" === typeof input.minimum && 3 <= input.minimum.length) && ("string" === typeof input.maximum && 7 >= input.maximum.length) && ("string" === typeof input.minimum_and_maximum && 3 <= input.minimum_and_maximum.length && 7 >= input.minimum_and_maximum.length);
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; const stringify = (input: TagLength): string => {
    const $string = (typia.createIsStringify as any).string;
    const $so0 = (input: any): any => `{"fixed":${$string(input.fixed)},"minimum":${$string(input.minimum)},"maximum":${$string(input.maximum)},"minimum_and_maximum":${$string(input.minimum_and_maximum)}}`;
    return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
}; return is(input) ? stringify(input) : null; }, TagLength.SPOILERS);
