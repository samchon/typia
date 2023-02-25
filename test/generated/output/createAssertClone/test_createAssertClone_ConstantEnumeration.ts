import typia from "../../../src";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_createAssertClone_ConstantEnumeration = _test_assertClone("ConstantEnumeration", ConstantEnumeration.generate, (input: any): typia.Primitive<ConstantEnumeration> => { const assert = (input: any) => {
    const $guard = (typia.createAssertClone as any).guard;
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
}; const clone = (input: ConstantEnumeration): typia.Primitive<ConstantEnumeration> => {
    return Array.isArray(input) ? input.map((elem: any) => elem) : input;
}; assert(input); const output = clone(input); /* Array */; return output as ConstantEnumeration; }, ConstantEnumeration.SPOILERS);
