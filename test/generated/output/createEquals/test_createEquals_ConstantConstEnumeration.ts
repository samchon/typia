import typia from "../../../src";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_equals } from "../internal/_test_equals";
export const test_createEquals_ConstantConstEnumeration = _test_equals("ConstantConstEnumeration", ConstantConstEnumeration.generate, (input: any, _exceptionable: boolean): input is ConstantConstEnumeration => {
    return Array.isArray(input) && input.every((elem: any, _index1: number) => 0 === elem || 1 === elem || 2 === elem || "Three" === elem || "Four" === elem);
});
