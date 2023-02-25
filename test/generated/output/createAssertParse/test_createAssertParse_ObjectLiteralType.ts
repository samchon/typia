import typia from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_assertParse } from "../internal/_test_assertParse";
export const test_createAssertParse_ObjectLiteralType = _test_assertParse("ObjectLiteralType", ObjectLiteralType.generate, (input: string): typia.Primitive<{ id: string; name: string; age: number; }> => { const assert = (input: any) => {
    const $guard = (typia.createAssertParse as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is { id: string; name: string; age: number; } => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "string",
            value: input.id
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && ("number" === typeof input.age || $guard(_exceptionable, {
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
}; input = JSON.parse(input); return assert(input); }, ObjectLiteralType.SPOILERS);
