import typia from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_ObjectUndefined = _test_clone("ObjectUndefined", ObjectUndefined.generate, (input) => ((input: ObjectUndefined): typia.Primitive<ObjectUndefined> => {
    const $any = (typia.clone as any).any;
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
})(input));
