import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";
export const test_assertStringify_ObjectLiteralType = _test_assertStringify("ObjectLiteralType", ObjectLiteralType.generate, (input) => ((input: any): string => { const assert = (input: any): {    id: string;    name: string;    age: number;} => {
    const $guard = (typia.assertStringify as any).guard;
    const __is = (input: any): input is {    id: string;    name: string;    age: number;} => {
        return "object" === typeof input && null !== input && ("string" === typeof input.id && "string" === typeof input.name && ("number" === typeof input.age && Number.isFinite(input.age)));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is {    id: string;    name: string;    age: number;} => {
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("string" === typeof input.id || $guard(_exceptionable, {
                path: _path + ".id",
                expected: "string",
                value: input.id
            })) && ("string" === typeof input.name || $guard(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            })) && ("number" === typeof input.age && Number.isFinite(input.age) || $guard(_exceptionable, {
                path: _path + ".age",
                expected: "number",
                value: input.age
            }));
            return ("object" === typeof input && null !== input || $guard(true, {
                path: _path + "",
                expected: "__object",
                value: input
            })) && $ao0(input, _path + "", true);
        })(input, "$input", true);
    return input;
}; const stringify = (input: {    id: string;    name: string;    age: number;}): string => {
    const $string = (typia.assertStringify as any).string;
    const $number = (typia.assertStringify as any).number;
    return `{"id":${$string(input.id)},"name":${$string(input.name)},"age":${$number(input.age)}}`;
}; return stringify(assert(input)); })(input), ObjectLiteralType.SPOILERS);
