import typia from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_isStringify_ObjectLiteralType = _test_isStringify("ObjectLiteralType", ObjectLiteralType.generate, (input) => ((input: { id: string; name: string; age: number; }): string | null => { const is = (input: any): input is { id: string; name: string; age: number; } => {
    return "object" === typeof input && null !== input && ("string" === typeof input.id && "string" === typeof input.name && ("number" === typeof input.age && !Number.isNaN(input.age)));
}; const stringify = (input: { id: string; name: string; age: number; }): string => {
    const $string = (typia.isStringify as any).string;
    return `{"id":${$string(input.id)},"name":${$string(input.name)},"age":${input.age}}`;
}; return is(input) ? stringify(input) : null; })(input), ObjectLiteralType.SPOILERS);
