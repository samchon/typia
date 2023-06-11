import typia from "../../../../src";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";
import { _test_isStringify } from "../../../internal/_test_isStringify";
export const test_createIsStringify_ObjectLiteralType = _test_isStringify("ObjectLiteralType", ObjectLiteralType.generate, (input: ObjectLiteralType): string | null => { const is = (input: any): input is ObjectLiteralType => {
    return "object" === typeof input && null !== input && ("string" === typeof (input as any).id && "string" === typeof (input as any).name && ("number" === typeof (input as any).age && Number.isFinite((input as any).age)));
}; const stringify = (input: ObjectLiteralType): string => {
    const $string = (typia.createIsStringify as any).string;
    const $number = (typia.createIsStringify as any).number;
    return `{"id":${$string((input as any).id)},"name":${$string((input as any).name)},"age":${$number((input as any).age)}}`;
}; return is(input) ? stringify(input) : null; }, ObjectLiteralType.SPOILERS);
