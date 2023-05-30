import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";
export const test_validateClone_ObjectLiteralType = _test_validateClone("ObjectLiteralType", ObjectLiteralType.generate, (input) => ((input: any): typia.IValidation<typia.Primitive<{    id: string;    name: string;    age: number;}>> => { const validate = (input: any): typia.IValidation<{    id: string;    name: string;    age: number;}> => {
    const __is = (input: any): input is {    id: string;    name: string;    age: number;} => {
        return "object" === typeof input && null !== input && ("string" === typeof input.id && "string" === typeof input.name && ("number" === typeof input.age && Number.isFinite(input.age)));
    };
    const errors = [] as any[];
    const $report = (typia.validateClone as any).report(errors);
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is {    id: string;    name: string;    age: number;} => {
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.id || $report(_exceptionable, {
                    path: _path + ".id",
                    expected: "string",
                    value: input.id
                }), "string" === typeof input.name || $report(_exceptionable, {
                    path: _path + ".name",
                    expected: "string",
                    value: input.name
                }), "number" === typeof input.age && Number.isFinite(input.age) || $report(_exceptionable, {
                    path: _path + ".age",
                    expected: "number",
                    value: input.age
                })].every((flag: boolean) => flag);
            return ("object" === typeof input && null !== input || $report(true, {
                path: _path + "",
                expected: "__object",
                value: input
            })) && $vo0(input, _path + "", true) || $report(true, {
                path: _path + "",
                expected: "__object",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
}; const clone = (input: {    id: string;    name: string;    age: number;}): typia.Primitive<{    id: string;    name: string;    age: number;}> => {
    const $co0 = (input: any): any => ({
        id: input.id as any,
        name: input.name as any,
        age: input.age as any
    });
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; })(input), ObjectLiteralType.SPOILERS);
