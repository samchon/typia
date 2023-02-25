import typia from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_validateClone } from "../internal/_test_validateClone";
export const test_validateClone_ObjectUndefined = _test_validateClone("ObjectUndefined", ObjectUndefined.generate, (input) => ((input: any): typia.IValidation<typia.Primitive<ObjectUndefined>> => { const validate = (input: any): typia.IValidation<ObjectUndefined> => {
    const errors = [] as any[];
    const $report = (typia.validateClone as any).report(errors);
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
}; const clone = (input: ObjectUndefined): typia.Primitive<ObjectUndefined> => {
    const $any = (typia.validateClone as any).any;
    const $io1 = (input: any) => "string" === typeof input.id && "string" === typeof input.name;
    const $co0 = (input: any) => ({
        name: input.name,
        professor: input.professor,
        classroom: "object" === typeof input.classroom && null !== input.classroom ? $co1(input.classroom) : input.classroom,
        grade: input.grade,
        nothing: input.nothing,
        unknown: $any(input.unknown),
        never: input.never
    });
    const $co1 = (input: any) => ({
        id: input.id,
        name: input.name
    });
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; })(input), ObjectUndefined.SPOILERS);
