import typia from "../../../src";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_assertParse } from "../internal/_test_assertParse";
export const test_createAssertParse_ConstantConstEnumeration = _test_assertParse("ConstantConstEnumeration", ConstantConstEnumeration.generate, (input: string): typia.Primitive<ConstantConstEnumeration> => { const assert = (input: any) => {
    const $guard = (typia.createAssertParse as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ConstantConstEnumeration => {
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(\"Four\" | \"Three\" | 0 | 1 | 2)>",
            value: input
        })) && input.every((elem: any, _index1: number) => 0 === elem || 1 === elem || 2 === elem || "Three" === elem || "Four" === elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(\"Four\" | \"Three\" | 0 | 1 | 2)",
            value: elem
        }));
    })(input, "$input", true);
    return input as ConstantConstEnumeration;
}; input = JSON.parse(input); return assert(input); }, ConstantConstEnumeration.SPOILERS);
