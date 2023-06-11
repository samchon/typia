import typia from "../../../../src";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";
import { _test_is } from "../../../internal/_test_is";
export const test_is_ConstantConstEnumeration = _test_is("ConstantConstEnumeration", ConstantConstEnumeration.generate, (input) => ((input: any): input is Array<ConstantConstEnumeration.Enumeration> => {
    return Array.isArray(input) && input.every((elem: any) => 0 === elem || 1 === elem || 2 === elem || "Three" === elem || "Four" === elem);
})(input), ConstantConstEnumeration.SPOILERS);
