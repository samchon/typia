import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";
export const test_createIsPrune_ConstantConstEnumeration = _test_isPrune("ConstantConstEnumeration", ConstantConstEnumeration.generate, (input: any): input is ConstantConstEnumeration => { const is = (input: any): input is ConstantConstEnumeration => {
    return Array.isArray(input) && input.every((elem: any) => 0 === elem || 1 === elem || 2 === elem || "Three" === elem || "Four" === elem);
}; const prune = (input: ConstantConstEnumeration): void => {
}; if (!is(input))
    return false; prune(input); return true; }, ConstantConstEnumeration.SPOILERS);
