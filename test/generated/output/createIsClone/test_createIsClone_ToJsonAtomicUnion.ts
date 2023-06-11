import typia from "../../../../src";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";
import { _test_isClone } from "../../../internal/_test_isClone";
export const test_createIsClone_ToJsonAtomicUnion = _test_isClone("ToJsonAtomicUnion", ToJsonAtomicUnion.generate, (input: any): typia.Primitive<ToJsonAtomicUnion> | null => { const is = (input: any): input is ToJsonAtomicUnion => {
    const $io0 = (input: any): boolean => "function" === typeof input.toJSON;
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; const clone = (input: ToJsonAtomicUnion): typia.Primitive<ToJsonAtomicUnion> => {
    const $cp0 = (input: any) => input.map((elem: any) => "object" === typeof elem && null !== elem && "function" === typeof elem.toJSON ? elem.toJSON() as any : elem as any);
    return Array.isArray(input) ? $cp0(input) : input as any;
}; if (!is(input))
    return null; const output = clone(input); return output; });
