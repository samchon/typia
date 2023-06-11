import typia from "../../../../src";
import { ObjectInternal } from "../../../structures/ObjectInternal";
import { _test_isStringify } from "../../../internal/_test_isStringify";
export const test_isStringify_ObjectInternal = _test_isStringify("ObjectInternal", ObjectInternal.generate, (input) => ((input: ObjectInternal): string | null => { const is = (input: any): input is ObjectInternal => {
    return "object" === typeof input && null !== input && ("string" === typeof (input as any).id && "string" === typeof (input as any).name);
}; const stringify = (input: ObjectInternal): string => {
    const $string = (typia.isStringify as any).string;
    return `{"id":${$string((input as any).id)},"name":${$string((input as any).name)}}`;
}; return is(input) ? stringify(input) : null; })(input), ObjectInternal.SPOILERS);
