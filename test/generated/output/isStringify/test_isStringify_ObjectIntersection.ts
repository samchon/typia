import typia from "../../../../src";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";
import { _test_isStringify } from "../../../internal/_test_isStringify";
export const test_isStringify_ObjectIntersection = _test_isStringify("ObjectIntersection", ObjectIntersection.generate, (input) => ((input: ObjectIntersection.IEmail & ObjectIntersection.IName): string | null => { const is = (input: any): input is ObjectIntersection.IEmail & ObjectIntersection.IName => {
    return "object" === typeof input && null !== input && ("string" === typeof (input as any).email && "string" === typeof (input as any).name && "boolean" === typeof (input as any).vulnerable);
}; const stringify = (input: ObjectIntersection.IEmail & ObjectIntersection.IName): string => {
    const $string = (typia.isStringify as any).string;
    return `{"email":${$string((input as any).email)},"name":${$string((input as any).name)},"vulnerable":${(input as any).vulnerable}}`;
}; return is(input) ? stringify(input) : null; })(input), ObjectIntersection.SPOILERS);
