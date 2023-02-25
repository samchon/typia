import typia from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_isParse } from "../internal/_test_isParse";
export const test_isParse_ObjectUndefined = _test_isParse("ObjectUndefined", ObjectUndefined.generate, (input) => ((input: any): typia.Primitive<ObjectUndefined> => { const is = (input: any): input is ObjectUndefined => {
    const $io0 = (input: any) => "string" === typeof input.name && (undefined === input.professor || "string" === typeof input.professor || "number" === typeof input.professor) && (undefined === input.classroom || "object" === typeof input.classroom && null !== input.classroom && $io1(input.classroom)) && "number" === typeof input.grade && (null !== input.nothing && undefined === input.nothing) && true && (null !== input.never && undefined === input.never);
    const $io1 = (input: any) => "string" === typeof input.id && "string" === typeof input.name;
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; input = JSON.parse(input); return is(input) ? input as any : null; })(input), ObjectUndefined.SPOILERS);
