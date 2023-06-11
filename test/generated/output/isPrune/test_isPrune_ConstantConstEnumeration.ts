import typia from "../../../../src";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";
import { _test_isPrune } from "../../../internal/_test_isPrune";
export const test_isPrune_ConstantConstEnumeration = _test_isPrune("ConstantConstEnumeration", ConstantConstEnumeration.generate, (input) => ((input: any): input is Array<ConstantConstEnumeration.Enumeration> => { const is = (input: any): input is Array<ConstantConstEnumeration.Enumeration> => {
    return Array.isArray(input) && input.every((elem: any) => 0 === elem || 1 === elem || 2 === elem || "Three" === elem || "Four" === elem);
}; const prune = (input: Array<ConstantConstEnumeration.Enumeration>): void => {
}; if (!is(input))
    return false; prune(input); return true; })(input), ConstantConstEnumeration.SPOILERS);
