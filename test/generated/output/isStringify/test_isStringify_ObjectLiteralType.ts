import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";
export const test_isStringify_ObjectLiteralType = _test_isStringify("ObjectLiteralType", ObjectLiteralType.generate, (input) => ((input: {    id: string;    name: string;    age: number;}): string | null => { const is = (input: any): input is {    id: string;    name: string;    age: number;} => {
    return "object" === typeof input && null !== input && ("string" === typeof input.id && "string" === typeof input.name && ("number" === typeof input.age && Number.isFinite(input.age)));
}; const stringify = (input: {    id: string;    name: string;    age: number;}): string => {
    const $string = (typia.isStringify as any).string;
    const $number = (typia.isStringify as any).number;
    return `{"id":${$string(input.id)},"name":${$string(input.name)},"age":${$number(input.age)}}`;
}; return is(input) ? stringify(input) : null; })(input), ObjectLiteralType.SPOILERS);
