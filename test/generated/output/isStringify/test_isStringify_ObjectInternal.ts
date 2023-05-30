import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ObjectInternal } from "../../../structures/ObjectInternal";
export const test_isStringify_ObjectInternal = _test_isStringify("ObjectInternal", ObjectInternal.generate, (input) => ((input: ObjectInternal): string | null => { const is = (input: any): input is ObjectInternal => {
    return "object" === typeof input && null !== input && ("string" === typeof input.id && "string" === typeof input.name);
}; const stringify = (input: ObjectInternal): string => {
    const $string = (typia.isStringify as any).string;
    return `{"id":${$string(input.id)},"name":${$string(input.name)}}`;
}; return is(input) ? stringify(input) : null; })(input), ObjectInternal.SPOILERS);
