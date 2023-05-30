import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
export const test_createIsPrune_ConstantEnumeration = _test_isPrune("ConstantEnumeration", ConstantEnumeration.generate, (input: any): input is ConstantEnumeration => { const is = (input: any): input is ConstantEnumeration => {
    return Array.isArray(input) && input.every((elem: any) => 0 === elem || 1 === elem || 2 === elem || "Three" === elem || "Four" === elem);
}; const prune = (input: ConstantEnumeration): void => {
}; if (!is(input))
    return false; prune(input); return true; }, ConstantEnumeration.SPOILERS);
