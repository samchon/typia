import typia from "../../../../src";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
export const test_createAssertStringify_ObjectLiteralType = _test_assertStringify("ObjectLiteralType", ObjectLiteralType.generate, (input: any): string => { const assert = (input: any): ObjectLiteralType => {
    const __is = (input: any): input is ObjectLiteralType => {
        return "object" === typeof input && null !== input && ("string" === typeof (input as any).id && "string" === typeof (input as any).name && ("number" === typeof (input as any).age && Number.isFinite((input as any).age)));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ObjectLiteralType => {
            const $guard = (typia.createAssertStringify as any).guard;
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
            })) && $ao0(input, _path + "", true) || $guard(true, {
                path: _path + "",
                expected: "__object",
                value: input
            });
        })(input, "$input", true);
    return input;
}; const stringify = (input: ObjectLiteralType): string => {
    const $string = (typia.createAssertStringify as any).string;
    const $number = (typia.createAssertStringify as any).number;
    return `{"id":${$string((input as any).id)},"name":${$string((input as any).name)},"age":${$number((input as any).age)}}`;
}; return stringify(assert(input)); }, ObjectLiteralType.SPOILERS);
