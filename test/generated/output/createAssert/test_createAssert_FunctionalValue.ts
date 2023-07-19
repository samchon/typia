import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { FunctionalValue } from "../../../structures/FunctionalValue";

export const test_assert_FunctionalValue = _test_assert<FunctionalValue>(
    FunctionalValue,
)((input: any): FunctionalValue => {
    const __is = (input: any): input is FunctionalValue => {
        return "function" === typeof input;
    };
    if (false === __is(input))
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is FunctionalValue => {
            const $guard = (typia.createAssert as any).guard;
            return (
                "function" === typeof input ||
                $guard(true, {
                    path: _path + "",
                    expected: "unknown",
                    value: input,
                })
            );
        })(input, "$input", true);
    return input;
});
