import typia from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_createIsStringify_ClassMethod = _test_isStringify("ClassMethod", ClassMethod.generate, (input: Animal): string | null => { const is = (input: any): input is Animal => {
    return "object" === typeof input && null !== input && ("string" === typeof input.name && ("number" === typeof input.age && !Number.isNaN(input.age)));
}; const stringify = (input: Animal): string => {
    const $string = (typia.createIsStringify as any).string;
    return `{"name":${$string(input.name)},"age":${input.age}}`;
}; return is(input) ? stringify(input) : null; }, ClassMethod.SPOILERS);
