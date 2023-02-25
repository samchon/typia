import typia from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_validateClone } from "../internal/_test_validateClone";
export const test_createValidateClone_ObjectLiteralType = _test_validateClone("ObjectLiteralType", ObjectLiteralType.generate, (input: any): typia.IValidation<typia.Primitive<{ id: string; name: string; age: number; }>> => { const validate = (input: any): typia.IValidation<{ id: string; name: string; age: number; }> => {
    const errors = [] as any[];
    const $report = (typia.createValidateClone as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is { id: string; name: string; age: number; } => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.id || $report(_exceptionable, {
                path: _path + ".id",
                expected: "string",
                value: input.id
            }), "string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            }), "number" === typeof input.age && !Number.isNaN(input.age) || $report(_exceptionable, {
                path: _path + ".age",
                expected: "number",
                value: input.age
            })].every((flag: boolean) => flag);
        return ("object" === typeof input && null !== input || $report(true, {
            path: _path + "",
            expected: "Resolve<__object>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<__object>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<{ id: string; name: string; age: number; }>;
}; const clone = (input: { id: string; name: string; age: number; }): typia.Primitive<{ id: string; name: string; age: number; }> => {
    const $co0 = (input: any) => ({
        id: input.id,
        name: input.name,
        age: input.age
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; }, ObjectLiteralType.SPOILERS);
