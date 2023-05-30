import typia from "../../../../src";
import { _test_assertParse } from "../../../internal/_test_assertParse";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";
export const test_createAssertParse_ConstantAtomicUnion = _test_assertParse("ConstantAtomicUnion", ConstantAtomicUnion.generate, (input: string): typia.Primitive<ConstantAtomicUnion> => { const assert = (input: any): ConstantAtomicUnion => {
    const $guard = (typia.createAssertParse as any).guard;
    const __is = (input: any): input is ConstantAtomicUnion => {
        const $io0 = (input: any): boolean => "key" === input.key;
        return Array.isArray(input) && input.every((elem: any) => false === elem || 1 === elem || 2 === elem || "three" === elem || "four" === elem || "object" === typeof elem && null !== elem && $io0(elem));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ConstantAtomicUnion => {
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
}; input = JSON.parse(input); return assert(input) as any; }, ConstantAtomicUnion.SPOILERS);
