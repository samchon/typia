import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ClassMethod } from "../../../structures/ClassMethod";
export const test_createIsStringify_ClassMethod = _test_isStringify("ClassMethod", ClassMethod.generate, (input: ClassMethod): string | null => { const is = (input: any): input is ClassMethod => {
    return "object" === typeof input && null !== input && ("string" === typeof input.name && ("number" === typeof input.age && Number.isFinite(input.age)));
}; const stringify = (input: ClassMethod): string => {
    const $string = (typia.createIsStringify as any).string;
    const $number = (typia.createIsStringify as any).number;
    return `{"name":${$string(input.name)},"age":${$number(input.age)}}`;
}; return is(input) ? stringify(input) : null; }, ClassMethod.SPOILERS);
