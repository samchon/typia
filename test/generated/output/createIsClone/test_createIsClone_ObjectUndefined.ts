import typia from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_isClone } from "../internal/_test_isClone";
export const test_createIsClone_ObjectUndefined = _test_isClone("ObjectUndefined", ObjectUndefined.generate, (input: any): typia.Primitive<ObjectUndefined> | null => { const is = (input: any): input is ObjectUndefined => {
    const $io0 = (input: any) => "string" === typeof input.name && (undefined === input.professor || "string" === typeof input.professor || "number" === typeof input.professor) && (undefined === input.classroom || "object" === typeof input.classroom && null !== input.classroom && $io1(input.classroom)) && "number" === typeof input.grade && (null !== input.nothing && undefined === input.nothing) && true && (null !== input.never && undefined === input.never);
    const $io1 = (input: any) => "string" === typeof input.id && "string" === typeof input.name;
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; const clone = (input: ObjectUndefined): typia.Primitive<ObjectUndefined> => {
    const $any = (typia.createIsClone as any).any;
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
}; if (!is(input))
    return null; const output = clone(input); return output; }, ObjectUndefined.SPOILERS);
