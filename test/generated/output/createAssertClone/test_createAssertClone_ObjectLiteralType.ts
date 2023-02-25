import typia from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_createAssertClone_ObjectLiteralType = _test_assertClone("ObjectLiteralType", ObjectLiteralType.generate, (input: any): typia.Primitive<{ id: string; name: string; age: number; }> => { const assert = (input: any) => {
    const $guard = (typia.createAssertClone as any).guard;
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
}; const clone = (input: { id: string; name: string; age: number; }): typia.Primitive<{ id: string; name: string; age: number; }> => {
    const $co0 = (input: any) => ({
        id: input.id,
        name: input.name,
        age: input.age
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; assert(input); const output = clone(input); /* __object */; return output as { id: string; name: string; age: number; }; }, ObjectLiteralType.SPOILERS);
