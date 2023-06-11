import typia from "../../../../src";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";
import { _test_isPrune } from "../../../internal/_test_isPrune";
export const test_createIsPrune_ConstantAtomicUnion = _test_isPrune("ConstantAtomicUnion", ConstantAtomicUnion.generate, (input: any): input is ConstantAtomicUnion => { const is = (input: any): input is ConstantAtomicUnion => {
    const $io0 = (input: any): boolean => "key" === input.key;
    return Array.isArray(input) && input.every((elem: any) => false === elem || 1 === elem || 2 === elem || "three" === elem || "four" === elem || "object" === typeof elem && null !== elem && $io0(elem));
}; const prune = (input: ConstantAtomicUnion): void => {
    const $pp0 = (input: any) => input.forEach((elem: any) => {
        if ("object" === typeof elem && null !== elem)
            $po0(elem);
    });
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("key" === key)
                continue;
            delete input[key];
        }
    };
    if (Array.isArray(input))
        $pp0(input);
}; if (!is(input))
    return false; prune(input); return true; }, ConstantAtomicUnion.SPOILERS);
