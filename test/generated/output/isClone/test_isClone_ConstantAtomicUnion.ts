import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";
export const test_isClone_ConstantAtomicUnion = _test_isClone("ConstantAtomicUnion", ConstantAtomicUnion.generate, (input) => ((input: any): typia.Primitive<Array<ConstantAtomicUnion.Union>> | null => { const is = (input: any): input is Array<ConstantAtomicUnion.Union> => {
    const $io0 = (input: any): boolean => "key" === input.key;
    return Array.isArray(input) && input.every((elem: any) => false === elem || 1 === elem || 2 === elem || "three" === elem || "four" === elem || "object" === typeof elem && null !== elem && $io0(elem));
}; const clone = (input: Array<ConstantAtomicUnion.Union>): typia.Primitive<Array<ConstantAtomicUnion.Union>> => {
    const $co0 = (input: any): any => ({
        key: input.key as any
    });
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem as any) : input as any;
}; if (!is(input))
    return null; const output = clone(input); return output; })(input), ConstantAtomicUnion.SPOILERS);
