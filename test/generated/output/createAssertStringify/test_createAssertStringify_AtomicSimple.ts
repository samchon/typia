import typia from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_createAssertStringify_AtomicSimple = _test_assertStringify("AtomicSimple", AtomicSimple.generate, (input: AtomicSimple): string => { const assert = (input: any) => {
    const $guard = (typia.createAssertStringify as any).guard;
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
        })) && ("number" === typeof input[1] && !Number.isNaN(input[1]) || $guard(true, {
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
}; const stringify = (input: AtomicSimple): string => {
    const $string = (typia.createAssertStringify as any).string;
    return `[${input[0]},${input[1]},${$string(input[2])}]`;
}; return stringify(assert(input)); }, AtomicSimple.SPOILERS);
