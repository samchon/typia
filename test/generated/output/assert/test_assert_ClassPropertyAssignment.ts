import typia from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_assert } from "../internal/_test_assert";
export const test_assert_ClassPropertyAssignment = _test_assert("ClassPropertyAssignment", ClassPropertyAssignment.generate, (input) => ((input: any) => {
    const $guard = (typia.assert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ClassPropertyAssignment => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "number",
            value: input.id
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && ("assignment" === input.note || $guard(_exceptionable, {
            path: _path + ".note",
            expected: "\"assignment\"",
            value: input.note
        })) && (false === input.editable || $guard(_exceptionable, {
            path: _path + ".editable",
            expected: "false",
            value: input.editable
        })) && ("boolean" === typeof input.incremental || $guard(_exceptionable, {
            path: _path + ".incremental",
            expected: "boolean",
            value: input.incremental
        }));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<ClassPropertyAssignment>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as ClassPropertyAssignment;
})(input), ClassPropertyAssignment.SPOILERS);
