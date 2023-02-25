import typia from "../../../src";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_assert } from "../internal/_test_assert";
export const test_createAssert_ConstantEnumeration = _test_assert("ConstantEnumeration", ConstantEnumeration.generate, (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ConstantEnumeration => {
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
    return input as ConstantEnumeration;
}, ConstantEnumeration.SPOILERS);
