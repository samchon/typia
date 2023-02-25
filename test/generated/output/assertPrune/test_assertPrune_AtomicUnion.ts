import typia from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_assertPrune } from "../internal/_test_assertPrune";
export const test_assertPrune_AtomicUnion = _test_assertPrune("AtomicUnion", AtomicUnion.generate, (input) => ((input: any): AtomicUnion => { const assert = (input: any) => {
    const $guard = (typia.assertPrune as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is AtomicUnion => {
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(boolean | number | string)>",
            value: input
        })) && input.every((elem: any, _index1: number) => "string" === typeof elem || "number" === typeof elem || "boolean" === typeof elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(boolean | number | string)",
            value: elem
        }));
    })(input, "$input", true);
    return input as AtomicUnion;
}; const prune = (input: AtomicUnion): void => {
}; assert(input); prune(input); return input; })(input), AtomicUnion.SPOILERS);
