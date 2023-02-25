import typia from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_validateClone } from "../internal/_test_validateClone";
export const test_createValidateClone_ClassPropertyAssignment = _test_validateClone("ClassPropertyAssignment", ClassPropertyAssignment.generate, (input: any): typia.IValidation<typia.Primitive<ClassPropertyAssignment>> => { const validate = (input: any): typia.IValidation<ClassPropertyAssignment> => {
    const errors = [] as any[];
    const $report = (typia.createValidateClone as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is ClassPropertyAssignment => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.id && !Number.isNaN(input.id) || $report(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id
            }), "string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            }), "assignment" === input.note || $report(_exceptionable, {
                path: _path + ".note",
                expected: "\"assignment\"",
                value: input.note
            }), false === input.editable || $report(_exceptionable, {
                path: _path + ".editable",
                expected: "false",
                value: input.editable
            }), "boolean" === typeof input.incremental || $report(_exceptionable, {
                path: _path + ".incremental",
                expected: "boolean",
                value: input.incremental
            })].every((flag: boolean) => flag);
        return ("object" === typeof input && null !== input || $report(true, {
            path: _path + "",
            expected: "Resolve<ClassPropertyAssignment>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<ClassPropertyAssignment>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<ClassPropertyAssignment>;
}; const clone = (input: ClassPropertyAssignment): typia.Primitive<ClassPropertyAssignment> => {
    const $co0 = (input: any) => ({
        id: input.id,
        name: input.name,
        note: input.note,
        editable: input.editable,
        incremental: input.incremental
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; }, ClassPropertyAssignment.SPOILERS);
