import typia from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_assertClone_AtomicSimple = _test_assertClone("AtomicSimple", AtomicSimple.generate, (input) => ((input: any): typia.Primitive<AtomicSimple> => { const assert = (input: any) => {
    const $guard = (typia.assertClone as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is AtomicSimple => {
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "[boolean, number, string]",
            value: input
        })) && ((input.length === 3 || $guard(true, {
            path: _path + "",
            expected: "[boolean, number, string]",
            value: input
        })) && ("boolean" === typeof input[0] || $guard(true, {
            path: _path + "[0]",
            expected: "boolean",
            value: input[0]
        })) && ("number" === typeof input[1] || $guard(true, {
            path: _path + "[1]",
            expected: "number",
            value: input[1]
        })) && ("string" === typeof input[2] || $guard(true, {
            path: _path + "[2]",
            expected: "string",
            value: input[2]
        })));
    })(input, "$input", true);
    return input as AtomicSimple;
}; const clone = (input: AtomicSimple): typia.Primitive<AtomicSimple> => {
    return Array.isArray(input) && (input.length === 3 && "boolean" === typeof input[0] && "number" === typeof input[1] && "string" === typeof input[2]) ? [
        input[0],
        input[1],
        input[2]
    ] : input;
}; assert(input); const output = clone(input); /* AtomicSimple */; return output as AtomicSimple; })(input), AtomicSimple.SPOILERS);
