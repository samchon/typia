import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
export const test_assert_ConstantEnumeration = _test_assert("ConstantEnumeration", ConstantEnumeration.generate, (input) => ((input: any): Array<ConstantEnumeration.Enumeration> => {
    const $guard = (typia.assert as any).guard;
    const __is = (input: any): input is Array<ConstantEnumeration.Enumeration> => {
        return Array.isArray(input) && input.every((elem: any) => 0 === elem || 1 === elem || 2 === elem || "Three" === elem || "Four" === elem);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is Array<ConstantEnumeration.Enumeration> => {
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
    return input;
})(input), ConstantEnumeration.SPOILERS);
