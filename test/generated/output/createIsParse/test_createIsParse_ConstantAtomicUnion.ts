import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";
export const test_createIsParse_ConstantAtomicUnion = _test_isParse("ConstantAtomicUnion", ConstantAtomicUnion.generate, (input: any): typia.Primitive<ConstantAtomicUnion> => { const is = (input: any): input is ConstantAtomicUnion => {
    const $io0 = (input: any): boolean => "key" === input.key;
    return Array.isArray(input) && input.every((elem: any) => false === elem || 1 === elem || 2 === elem || "three" === elem || "four" === elem || "object" === typeof elem && null !== elem && $io0(elem));
}; input = JSON.parse(input); return is(input) ? input as any : null; }, ConstantAtomicUnion.SPOILERS);
