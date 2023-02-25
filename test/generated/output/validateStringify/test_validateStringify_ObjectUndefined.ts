import typia from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_validateStringify } from "../internal/_test_validateStringify";
export const test_validateStringify_ObjectUndefined = _test_validateStringify("ObjectUndefined", ObjectUndefined.generate, (input) => ((input: ObjectUndefined): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<ObjectUndefined> => {
    const errors = [] as any[];
    const $report = (typia.validateStringify as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is ObjectUndefined => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            }), undefined === input.professor || "string" === typeof input.professor || "number" === typeof input.professor && !Number.isNaN(input.professor) || $report(_exceptionable, {
                path: _path + ".professor",
                expected: "(number | string | undefined)",
                value: input.professor
            }), undefined === input.classroom || ("object" === typeof input.classroom && null !== input.classroom || $report(_exceptionable, {
                path: _path + ".classroom",
                expected: "(Resolve<ObjectUndefined.IClassroom> | undefined)",
                value: input.classroom
            })) && $vo1(input.classroom, _path + ".classroom", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".classroom",
                expected: "(Resolve<ObjectUndefined.IClassroom> | undefined)",
                value: input.classroom
            }), "number" === typeof input.grade && !Number.isNaN(input.grade) || $report(_exceptionable, {
                path: _path + ".grade",
                expected: "number",
                value: input.grade
            }), (null !== input.nothing || $report(_exceptionable, {
                path: _path + ".nothing",
                expected: "undefined",
                value: input.nothing
            })) && (undefined === input.nothing || $report(_exceptionable, {
                path: _path + ".nothing",
                expected: "undefined",
                value: input.nothing
            })), true, (null !== input.never || $report(_exceptionable, {
                path: _path + ".never",
                expected: "undefined",
                value: input.never
            })) && (undefined === input.never || $report(_exceptionable, {
                path: _path + ".never",
                expected: "undefined",
                value: input.never
            }))].every((flag: boolean) => flag);
        const $vo1 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.id || $report(_exceptionable, {
                path: _path + ".id",
                expected: "string",
                value: input.id
            }), "string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            })].every((flag: boolean) => flag);
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Array<Resolve<ObjectUndefined.ILecture>>",
            value: input
        })) && input.map((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<ObjectUndefined.ILecture>",
            value: elem
        })) && $vo0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<ObjectUndefined.ILecture>",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "",
            expected: "Array<Resolve<ObjectUndefined.ILecture>>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<ObjectUndefined>;
}; const stringify = (input: ObjectUndefined): string => {
    const $string = (typia.validateStringify as any).string;
    const $throws = (typia.validateStringify as any).throws;
    const $io1 = (input: any) => "string" === typeof input.id && "string" === typeof input.name;
    const $so0 = (input: any) => `{${undefined === input.professor ? "" : `"professor":${undefined !== input.professor ? (() => {
        if ("string" === typeof input.professor)
            return $string(input.professor);
        if ("number" === typeof input.professor)
            return input.professor;
        $throws({
            expected: "(number | string | undefined)",
            value: input.professor
        });
    })() : undefined},`}${undefined === input.classroom ? "" : `"classroom":${undefined !== input.classroom ? `{"id":${$string(input.classroom.id)},"name":${$string(input.classroom.name)}}` : undefined},`}${undefined === input.unknown || "function" === typeof input.unknown ? "" : `"unknown":${undefined !== input.unknown ? JSON.stringify(input.unknown) : undefined},`}"name":${$string(input.name)},"grade":${input.grade}}`;
    return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; })(input), ObjectUndefined.SPOILERS);
