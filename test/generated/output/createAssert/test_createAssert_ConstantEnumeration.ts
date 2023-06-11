import typia from "../../../../src";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
import { _test_assert } from "../../../internal/_test_assert";
export const test_createAssert_ConstantEnumeration = _test_assert("ConstantEnumeration", ConstantEnumeration.generate, (input: any): ConstantEnumeration => {
    const __is = (input: any): input is ConstantEnumeration => {
        return Array.isArray(input) && input.every((elem: any) => 0 === elem || 1 === elem || 2 === elem || "Three" === elem || "Four" === elem);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ConstantEnumeration => {
            const $guard = (typia.createAssert as any).guard;
            return (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "ConstantEnumeration",
                value: input
            })) && input.every((elem: any, _index1: number) => 0 === elem || 1 === elem || 2 === elem || "Three" === elem || "Four" === elem || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "(\"Four\" | \"Three\" | 0 | 1 | 2)",
                value: elem
            })) || $guard(true, {
                path: _path + "",
                expected: "ConstantEnumeration",
                value: input
            });
        })(input, "$input", true);
    return input;
}, ConstantEnumeration.SPOILERS);
