import typia from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_assert } from "../internal/_test_assert";
export const test_assert_AtomicAlias = _test_assert("AtomicAlias", AtomicAlias.generate, (input) => ((input: any) => {
    const $guard = (typia.assert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is AtomicAlias => {
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
    return input as AtomicAlias;
})(input), AtomicAlias.SPOILERS);
