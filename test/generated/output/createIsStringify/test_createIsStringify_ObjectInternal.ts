import typia from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_createIsStringify_ObjectInternal = _test_isStringify("ObjectInternal", ObjectInternal.generate, (input: ObjectInternal): string | null => { const is = (input: any): input is ObjectInternal => {
    return "object" === typeof input && null !== input && ("string" === typeof input.id && "string" === typeof input.name);
}; const stringify = (input: ObjectInternal): string => {
    const $string = (typia.createIsStringify as any).string;
    return `{"id":${$string(input.id)},"name":${$string(input.name)}}`;
}; return is(input) ? stringify(input) : null; }, ObjectInternal.SPOILERS);
