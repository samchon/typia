import typia from "../../../../src";
import { FunctionalValue } from "../../../structures/FunctionalValue";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
export const test_createAssertEquals_FunctionalValue = _test_assertEquals("FunctionalValue", FunctionalValue.generate, (input: any): FunctionalValue => {
    const __is = (input: any, _exceptionable: boolean = true): input is FunctionalValue => {
        return "function" === typeof input;
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is FunctionalValue => {
            const $guard = (typia.createAssertEquals as any).guard;
            return "function" === typeof input || $guard(true, {
                path: _path + "",
                expected: "unknown",
                value: input
            });
        })(input, "$input", true);
    return input;
});
