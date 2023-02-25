import typia from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_createAssertStringify_ObjectLiteralType = _test_assertStringify("ObjectLiteralType", ObjectLiteralType.generate, (input: { id: string; name: string; age: number; }): string => { const assert = (input: any) => {
    const $guard = (typia.createAssertStringify as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is { id: string; name: string; age: number; } => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "string",
            value: input.id
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && ("number" === typeof input.age && !Number.isNaN(input.age) || $guard(_exceptionable, {
            path: _path + ".age",
            expected: "number",
            value: input.age
        }));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<__object>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as { id: string; name: string; age: number; };
}; const stringify = (input: { id: string; name: string; age: number; }): string => {
    const $string = (typia.createAssertStringify as any).string;
    return `{"id":${$string(input.id)},"name":${$string(input.name)},"age":${input.age}}`;
}; return stringify(assert(input)); }, ObjectLiteralType.SPOILERS);
