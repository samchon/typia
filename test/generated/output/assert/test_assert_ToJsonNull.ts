import typia from "../../../src";
import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_assert } from "../internal/_test_assert";
export const test_assert_ToJsonNull = _test_assert("ToJsonNull", ToJsonNull.generate, (input) => ((input: any) => {
    const $guard = (typia.assert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ToJsonNull => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => true || $guard(_exceptionable, {
            path: _path + ".toJSON",
            expected: "unknown",
            value: input.toJSON
        });
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<ToJsonNull>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as ToJsonNull;
})(input));
