import typia from "../../../../src";
import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { FunctionalValue } from "../../../structures/FunctionalValue";

export const test_createAssertGuard_FunctionalValue = _test_assertGuard(
    "FunctionalValue",
)<FunctionalValue>(FunctionalValue)(
    (input: any): asserts input is FunctionalValue => {
        const __is = (input: any): input is FunctionalValue => {
            return "function" === typeof input;
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is FunctionalValue => {
                const $guard = (typia.createAssertGuard as any).guard;
                return (
                    "function" === typeof input ||
                    $guard(true, {
                        path: _path + "",
                        expected: "unknown",
                        value: input,
                    })
                );
            })(input, "$input", true);
    },
);
