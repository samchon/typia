import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
export const test_createEquals_ConstantEnumeration = _test_equals("ConstantEnumeration", ConstantEnumeration.generate, (input: any, _exceptionable: boolean = true): input is ConstantEnumeration => {
    return Array.isArray(input) && input.every((elem: any, _index1: number) => 0 === elem || 1 === elem || 2 === elem || "Three" === elem || "Four" === elem);
});
