import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { FunctionalValue } from "../../../structures/FunctionalValue";

export const test_createAssertEquals_FunctionalValue = _test_assertEquals(
    "FunctionalValue",
    FunctionalValue.generate,
    (input: any): FunctionalValue => {
        const __is: any = (
            input: any,
            _exceptionable: boolean = true,
        ): input is FunctionalValue => {
            return "function" === typeof input;
        };
        const $guard: any = (typia.createAssertEquals as any).guard;
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is FunctionalValue => {
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
    },
);
