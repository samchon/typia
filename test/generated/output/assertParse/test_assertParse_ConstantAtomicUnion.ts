import typia from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_assertParse } from "../internal/_test_assertParse";
export const test_assertParse_ConstantAtomicUnion = _test_assertParse("ConstantAtomicUnion", ConstantAtomicUnion.generate, (input) => ((input: string): typia.Primitive<ConstantAtomicUnion> => { const assert = (input: any) => {
    const $guard = (typia.assertParse as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ConstantAtomicUnion => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => "key" === input.key || $guard(_exceptionable, {
            path: _path + ".key",
            expected: "\"key\"",
            value: input.key
        });
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(\"four\" | \"three\" | 1 | 2 | Resolve<__type> | false)>",
            value: input
        })) && input.every((elem: any, _index1: number) => false === elem || 1 === elem || 2 === elem || "three" === elem || "four" === elem || ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(\"four\" | \"three\" | 1 | 2 | Resolve<__type> | false)",
            value: elem
        })) && $ao0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as ConstantAtomicUnion;
}; input = JSON.parse(input); return assert(input); })(input), ConstantAtomicUnion.SPOILERS);
