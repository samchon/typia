import typia from "../../../../src";
import { _test_assertPrune } from "../../../internal/_test_assertPrune";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";
export const test_createAssertPrune_ConstantConstEnumeration = _test_assertPrune("ConstantConstEnumeration", ConstantConstEnumeration.generate, (input: any): ConstantConstEnumeration => { const assert = (input: any): ConstantConstEnumeration => {
    const $guard = (typia.createAssertPrune as any).guard;
    const __is = (input: any): input is ConstantConstEnumeration => {
        return Array.isArray(input) && input.every((elem: any) => 0 === elem || 1 === elem || 2 === elem || "Three" === elem || "Four" === elem);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ConstantConstEnumeration => {
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
}; const prune = (input: ConstantConstEnumeration): void => {
}; assert(input); prune(input); return input; }, ConstantConstEnumeration.SPOILERS);
