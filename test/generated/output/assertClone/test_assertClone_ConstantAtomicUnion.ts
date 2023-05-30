import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";
export const test_assertClone_ConstantAtomicUnion = _test_assertClone("ConstantAtomicUnion", ConstantAtomicUnion.generate, (input) => ((input: any): typia.Primitive<Array<ConstantAtomicUnion.Union>> => { const assert = (input: any): Array<ConstantAtomicUnion.Union> => {
    const $guard = (typia.assertClone as any).guard;
    const __is = (input: any): input is Array<ConstantAtomicUnion.Union> => {
        const $io0 = (input: any): boolean => "key" === input.key;
        return Array.isArray(input) && input.every((elem: any) => false === elem || 1 === elem || 2 === elem || "three" === elem || "four" === elem || "object" === typeof elem && null !== elem && $io0(elem));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is Array<ConstantAtomicUnion.Union> => {
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => "key" === input.key || $guard(_exceptionable, {
                path: _path + ".key",
                expected: "\"key\"",
                value: input.key
            });
            return (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "Array<(\"four\" | \"three\" | 1 | 2 | __type | false)>",
                value: input
            })) && input.every((elem: any, _index1: number) => false === elem || 1 === elem || 2 === elem || "three" === elem || "four" === elem || ("object" === typeof elem && null !== elem || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "(\"four\" | \"three\" | 1 | 2 | __type | false)",
                value: elem
            })) && $ao0(elem, _path + "[" + _index1 + "]", true));
        })(input, "$input", true);
    return input;
}; const clone = (input: Array<ConstantAtomicUnion.Union>): typia.Primitive<Array<ConstantAtomicUnion.Union>> => {
    const $co0 = (input: any): any => ({
        key: input.key as any
    });
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem as any) : input as any;
}; assert(input); const output = clone(input); return output; })(input), ConstantAtomicUnion.SPOILERS);
