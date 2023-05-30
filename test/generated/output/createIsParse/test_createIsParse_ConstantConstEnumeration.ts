import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";
export const test_createIsParse_ConstantConstEnumeration = _test_isParse("ConstantConstEnumeration", ConstantConstEnumeration.generate, (input: any): typia.Primitive<ConstantConstEnumeration> => { const is = (input: any): input is ConstantConstEnumeration => {
    return Array.isArray(input) && input.every((elem: any) => 0 === elem || 1 === elem || 2 === elem || "Three" === elem || "Four" === elem);
}; input = JSON.parse(input); return is(input) ? input as any : null; }, ConstantConstEnumeration.SPOILERS);
