import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { ToJsonUndefined } from "../../../structures/ToJsonUndefined";

export const test_assert_ToJsonUndefined = _test_assert<ToJsonUndefined>(
    ToJsonUndefined,
)((input: any): ToJsonUndefined => {
    const __is = (input: any): input is ToJsonUndefined => {
        return "object" === typeof input && null !== input && true;
    };
    if (false === __is(input))
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ToJsonUndefined => {
            const $guard = (typia.createAssert as any).guard;
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean => true;
            return (
                ((("object" === typeof input &&
                    null !== input &&
                    false === Array.isArray(input)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "ToJsonUndefined",
                        value: input,
                    })) &&
                    $ao0(input, _path + "", true)) ||
                $guard(true, {
                    path: _path + "",
                    expected: "ToJsonUndefined",
                    value: input,
                })
            );
        })(input, "$input", true);
    return input;
});
