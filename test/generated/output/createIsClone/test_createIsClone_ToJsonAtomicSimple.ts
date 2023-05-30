import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";
export const test_createIsClone_ToJsonAtomicSimple = _test_isClone("ToJsonAtomicSimple", ToJsonAtomicSimple.generate, (input: any): typia.Primitive<ToJsonAtomicSimple> | null => { const is = (input: any): input is ToJsonAtomicSimple => {
    const $io0 = (input: any): boolean => "function" === typeof input.toJSON;
    const $io1 = (input: any): boolean => "function" === typeof input.toJSON;
    const $io2 = (input: any): boolean => "function" === typeof input.toJSON;
    return Array.isArray(input) && (input.length === 3 && ("object" === typeof input[0] && null !== input[0] && $io0(input[0])) && ("object" === typeof input[1] && null !== input[1] && $io1(input[1])) && ("object" === typeof input[2] && null !== input[2] && $io2(input[2])));
}; const clone = (input: ToJsonAtomicSimple): typia.Primitive<ToJsonAtomicSimple> => {
    return Array.isArray(input) && (input.length === 3 && true && true && true) ? [
        "object" === typeof input[0] && null !== input[0] && "function" === typeof input[0].toJSON ? input[0].toJSON() as any : input[0] as any,
        "object" === typeof input[1] && null !== input[1] && "function" === typeof input[1].toJSON ? input[1].toJSON() as any : input[1] as any,
        "object" === typeof input[2] && null !== input[2] && "function" === typeof input[2].toJSON ? input[2].toJSON() as any : input[2] as any
    ] as any : input as any;
}; if (!is(input))
    return null; const output = clone(input); return output; });
