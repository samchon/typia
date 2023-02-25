import typia from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_createAssertClone_ObjectUndefined = _test_assertClone("ObjectUndefined", ObjectUndefined.generate, (input: any): typia.Primitive<ObjectUndefined> => { const assert = (input: any) => {
    const $guard = (typia.createAssertClone as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ObjectUndefined => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && (undefined === input.professor || "string" === typeof input.professor || "number" === typeof input.professor || $guard(_exceptionable, {
            path: _path + ".professor",
            expected: "(number | string | undefined)",
            value: input.professor
        })) && (undefined === input.classroom || ("object" === typeof input.classroom && null !== input.classroom || $guard(_exceptionable, {
            path: _path + ".classroom",
            expected: "(Resolve<ObjectUndefined.IClassroom> | undefined)",
            value: input.classroom
        })) && $ao1(input.classroom, _path + ".classroom", true && _exceptionable)) && ("number" === typeof input.grade || $guard(_exceptionable, {
            path: _path + ".grade",
            expected: "number",
            value: input.grade
        })) && ((null !== input.nothing || $guard(_exceptionable, {
            path: _path + ".nothing",
            expected: "undefined",
            value: input.nothing
        })) && (undefined === input.nothing || $guard(_exceptionable, {
            path: _path + ".nothing",
            expected: "undefined",
            value: input.nothing
        }))) && true && ((null !== input.never || $guard(_exceptionable, {
            path: _path + ".never",
            expected: "undefined",
            value: input.never
        })) && (undefined === input.never || $guard(_exceptionable, {
            path: _path + ".never",
            expected: "undefined",
            value: input.never
        })));
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "string",
            value: input.id
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        }));
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<Resolve<ObjectUndefined.ILecture>>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<ObjectUndefined.ILecture>",
            value: elem
        })) && $ao0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as ObjectUndefined;
}; const clone = (input: ObjectUndefined): typia.Primitive<ObjectUndefined> => {
    const $any = (typia.createAssertClone as any).any;
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
}; assert(input); const output = clone(input); /* Array */; return output as ObjectUndefined; }, ObjectUndefined.SPOILERS);
