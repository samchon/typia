import typia from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_validateStringify } from "../internal/_test_validateStringify";
export const test_createValidateStringify_ObjectLiteralType = _test_validateStringify("ObjectLiteralType", ObjectLiteralType.generate, (input: { id: string; name: string; age: number; }): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<{ id: string; name: string; age: number; }> => {
    const errors = [] as any[];
    const $report = (typia.createValidateStringify as any).report(errors);
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
}; const stringify = (input: { id: string; name: string; age: number; }): string => {
    const $string = (typia.createValidateStringify as any).string;
    return `{"id":${$string(input.id)},"name":${$string(input.name)},"age":${input.age}}`;
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; }, ObjectLiteralType.SPOILERS);
