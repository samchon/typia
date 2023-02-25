import typia from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_assertClone_ConstantAtomicSimple = _test_assertClone("ConstantAtomicSimple", ConstantAtomicSimple.generate, (input) => ((input: any): typia.Primitive<ConstantAtomicSimple> => { const assert = (input: any) => {
    const $guard = (typia.assertClone as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ConstantAtomicSimple => {
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "[false, true, 2, \"three\"]",
            value: input
        })) && ((input.length === 4 || $guard(true, {
            path: _path + "",
            expected: "[false, true, 2, \"three\"]",
            value: input
        })) && (false === input[0] || $guard(true, {
            path: _path + "[0]",
            expected: "false",
            value: input[0]
        })) && (true === input[1] || $guard(true, {
            path: _path + "[1]",
            expected: "true",
            value: input[1]
        })) && (2 === input[2] || $guard(true, {
            path: _path + "[2]",
            expected: "2",
            value: input[2]
        })) && ("three" === input[3] || $guard(true, {
            path: _path + "[3]",
            expected: "\"three\"",
            value: input[3]
        })));
    })(input, "$input", true);
    return input as ConstantAtomicSimple;
}; const clone = (input: ConstantAtomicSimple): typia.Primitive<ConstantAtomicSimple> => {
    return Array.isArray(input) && (input.length === 4 && false === input[0] && true === input[1] && 2 === input[2] && "three" === input[3]) ? [
        input[0],
        input[1],
        input[2],
        input[3]
    ] : input;
}; assert(input); const output = clone(input); /* ConstantAtomicSimple */; return output as ConstantAtomicSimple; })(input), ConstantAtomicSimple.SPOILERS);
