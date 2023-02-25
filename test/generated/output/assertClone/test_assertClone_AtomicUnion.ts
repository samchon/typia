import typia from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_assertClone_AtomicUnion = _test_assertClone("AtomicUnion", AtomicUnion.generate, (input) => ((input: any): typia.Primitive<AtomicUnion> => { const assert = (input: any) => {
    const $guard = (typia.assertClone as any).guard;
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
}; const clone = (input: AtomicUnion): typia.Primitive<AtomicUnion> => {
    return Array.isArray(input) ? input.map((elem: any) => elem) : input;
}; assert(input); const output = clone(input); /* Array */; return output as AtomicUnion; })(input), AtomicUnion.SPOILERS);
