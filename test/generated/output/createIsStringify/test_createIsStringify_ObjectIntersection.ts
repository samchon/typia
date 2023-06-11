import typia from "../../../../src";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";
import { _test_isStringify } from "../../../internal/_test_isStringify";
export const test_createIsStringify_ObjectIntersection = _test_isStringify("ObjectIntersection", ObjectIntersection.generate, (input: ObjectIntersection): string | null => { const is = (input: any): input is ObjectIntersection => {
    return "object" === typeof input && null !== input && ("string" === typeof (input as any).email && "string" === typeof (input as any).name && "boolean" === typeof (input as any).vulnerable);
}; const stringify = (input: ObjectIntersection): string => {
    const $string = (typia.createIsStringify as any).string;
    return `{"email":${$string((input as any).email)},"name":${$string((input as any).name)},"vulnerable":${(input as any).vulnerable}}`;
}; return is(input) ? stringify(input) : null; }, ObjectIntersection.SPOILERS);
