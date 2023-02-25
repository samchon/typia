import typia from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_assert } from "../internal/_test_assert";
export const test_createAssert_FunctionalTuple = _test_assert("FunctionalTuple", FunctionalTuple.generate, (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is FunctionalTuple => {
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "[unknown, unknown, unknown]",
            value: input
        })) && ((input.length === 3 || $guard(true, {
            path: _path + "",
            expected: "[unknown, unknown, unknown]",
            value: input
        })) && (true || $guard(true, {
            path: _path + "[0]",
            expected: "unknown",
            value: input[0]
        })) && (true || $guard(true, {
            path: _path + "[1]",
            expected: "unknown",
            value: input[1]
        })) && (true || $guard(true, {
            path: _path + "[2]",
            expected: "unknown",
            value: input[2]
        })));
    })(input, "$input", true);
    return input as FunctionalTuple;
}, FunctionalTuple.SPOILERS);
