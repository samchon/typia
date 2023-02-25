import typia from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_assertPrune } from "../internal/_test_assertPrune";
export const test_assertPrune_ConstantAtomicUnion = _test_assertPrune("ConstantAtomicUnion", ConstantAtomicUnion.generate, (input) => ((input: any): ConstantAtomicUnion => { const assert = (input: any) => {
    const $guard = (typia.assertPrune as any).guard;
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
}; const prune = (input: ConstantAtomicUnion): void => {
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("key" === key)
                continue;
            delete input[key];
        }
    };
    if (Array.isArray(input))
        input.forEach((elem: any) => {
            if ("object" === typeof elem && null !== elem)
                $po0(elem);
        });
}; assert(input); prune(input); return input; })(input), ConstantAtomicUnion.SPOILERS);
