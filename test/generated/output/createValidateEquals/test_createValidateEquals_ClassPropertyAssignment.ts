import typia from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_validateEquals } from "../internal/_test_validateEquals";
export const test_createValidateEquals_ClassPropertyAssignment = _test_validateEquals("ClassPropertyAssignment", ClassPropertyAssignment.generate, (input: any): typia.IValidation<ClassPropertyAssignment> => {
    const errors = [] as any[];
    const $report = (typia.createValidateEquals as any).report(errors);
    const $join = (typia.createValidateEquals as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is ClassPropertyAssignment => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.id || $report(_exceptionable, {
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
            }), 5 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).map(key => {
                if (["id", "name", "note", "editable", "incremental"].some(prop => key === prop))
                    return true;
                const value = input[key];
                if (undefined === value)
                    return true;
                return $report(_exceptionable, {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value
                });
            }).every((flag: boolean) => flag))].every((flag: boolean) => flag);
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
});
