import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";
export const test_createIsParse_ObjectUndefined = _test_isParse("ObjectUndefined", ObjectUndefined.generate, (input: any): typia.Primitive<ObjectUndefined> => { const is = (input: any): input is ObjectUndefined => {
    const $io0 = (input: any): boolean => "string" === typeof input.name && (undefined === input.professor || "string" === typeof input.professor || "number" === typeof input.professor && Number.isFinite(input.professor)) && (undefined === input.classroom || "object" === typeof input.classroom && null !== input.classroom && $io1(input.classroom)) && (undefined === input.grade || "number" === typeof input.grade && Number.isFinite(input.grade)) && (null !== input.nothing && undefined === input.nothing) && true && (null !== input.never && undefined === input.never);
    const $io1 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.name;
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; input = JSON.parse(input); return is(input) ? input as any : null; }, ObjectUndefined.SPOILERS);
