import typia from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_isClone } from "../internal/_test_isClone";
export const test_createIsClone_ConstantAtomicUnion = _test_isClone("ConstantAtomicUnion", ConstantAtomicUnion.generate, (input: any): typia.Primitive<ConstantAtomicUnion> | null => { const is = (input: any): input is ConstantAtomicUnion => {
    const $io0 = (input: any) => "key" === input.key;
    return Array.isArray(input) && input.every((elem: any) => false === elem || 1 === elem || 2 === elem || "three" === elem || "four" === elem || "object" === typeof elem && null !== elem && $io0(elem));
}; const clone = (input: ConstantAtomicUnion): typia.Primitive<ConstantAtomicUnion> => {
    const $co0 = (input: any) => ({
        key: input.key
    });
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input;
}; if (!is(input))
    return null; const output = clone(input); return output; }, ConstantAtomicUnion.SPOILERS);
