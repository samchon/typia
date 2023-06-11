import typia from "../../../../src";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";
import { _test_isClone } from "../../../internal/_test_isClone";
export const test_isClone_ConstantConstEnumeration = _test_isClone("ConstantConstEnumeration", ConstantConstEnumeration.generate, (input) => ((input: any): typia.Primitive<Array<ConstantConstEnumeration.Enumeration>> | null => { const is = (input: any): input is Array<ConstantConstEnumeration.Enumeration> => {
    return Array.isArray(input) && input.every((elem: any) => 0 === elem || 1 === elem || 2 === elem || "Three" === elem || "Four" === elem);
}; const clone = (input: Array<ConstantConstEnumeration.Enumeration>): typia.Primitive<Array<ConstantConstEnumeration.Enumeration>> => {
    const $cp0 = (input: any) => input.map((elem: any) => elem as any);
    return Array.isArray(input) ? $cp0(input) : input as any;
}; if (!is(input))
    return null; const output = clone(input); return output; })(input), ConstantConstEnumeration.SPOILERS);
