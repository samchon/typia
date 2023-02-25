import typia from "../../../src";
import { FunctionalValue } from "../../structures/FunctionalValue";
import { _test_assert } from "../internal/_test_assert";
export const test_createAssert_FunctionalValue = _test_assert("FunctionalValue", FunctionalValue.generate, (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is FunctionalValue => {
        return true || $guard(true, {
            path: _path + "",
            expected: "unknown",
            value: input
        });
    })(input, "$input", true);
    return input as FunctionalValue;
});
