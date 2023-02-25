import typia from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_assertParse } from "../internal/_test_assertParse";
export const test_assertParse_AtomicUnion = _test_assertParse("AtomicUnion", AtomicUnion.generate, (input) => ((input: string): typia.Primitive<AtomicUnion> => { const assert = (input: any) => {
    const $guard = (typia.assertParse as any).guard;
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
}; input = JSON.parse(input); return assert(input); })(input), AtomicUnion.SPOILERS);
