import typia from "../../../src";
import { FunctionalValue } from "../../structures/FunctionalValue";
import { _test_assertEquals } from "../internal/_test_assertEquals";
export const test_createAssertEquals_FunctionalValue = _test_assertEquals("FunctionalValue", FunctionalValue.generate, (input: any) => {
    const $guard = (typia.createAssertEquals as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is FunctionalValue => {
        return true || $guard(true, {
            path: _path + "",
            expected: "unknown",
            value: input
        });
    })(input, "$input", true);
    return input as FunctionalValue;
});
