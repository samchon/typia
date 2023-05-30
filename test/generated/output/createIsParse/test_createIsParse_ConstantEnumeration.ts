import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
export const test_createIsParse_ConstantEnumeration = _test_isParse("ConstantEnumeration", ConstantEnumeration.generate, (input: any): typia.Primitive<ConstantEnumeration> => { const is = (input: any): input is ConstantEnumeration => {
    return Array.isArray(input) && input.every((elem: any) => 0 === elem || 1 === elem || 2 === elem || "Three" === elem || "Four" === elem);
}; input = JSON.parse(input); return is(input) ? input as any : null; }, ConstantEnumeration.SPOILERS);
