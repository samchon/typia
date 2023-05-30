import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";
export const test_assertEquals_ClassPropertyAssignment = _test_assertEquals("ClassPropertyAssignment", ClassPropertyAssignment.generate, (input) => ((input: any): ClassPropertyAssignment => {
    const $guard = (typia.assertEquals as any).guard;
    const $join = (typia.assertEquals as any).join;
    const __is = (input: any, _exceptionable: boolean = true): input is ClassPropertyAssignment => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean => "number" === typeof input.id && Number.isFinite(input.id) && "string" === typeof input.name && "assignment" === input.note && false === input.editable && "boolean" === typeof input.incremental && (5 === Object.keys(input).length || Object.keys(input).every(key => {
            if (["id", "name", "note", "editable", "incremental"].some(prop => key === prop))
                return true;
            const value = input[key];
            if (undefined === value)
                return true;
            return false;
        }));
        return "object" === typeof input && null !== input && $io0(input, true);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ClassPropertyAssignment => {
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("number" === typeof input.id && Number.isFinite(input.id) || $guard(_exceptionable, {
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
            })) && (5 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).every(key => {
                if (["id", "name", "note", "editable", "incremental"].some(prop => key === prop))
                    return true;
                const value = input[key];
                if (undefined === value)
                    return true;
                return $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value
                });
            })));
            return ("object" === typeof input && null !== input || $guard(true, {
                path: _path + "",
                expected: "ClassPropertyAssignment",
                value: input
            })) && $ao0(input, _path + "", true);
        })(input, "$input", true);
    return input;
})(input));
