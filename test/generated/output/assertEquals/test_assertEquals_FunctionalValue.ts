import typia from "../../../src";
import { FunctionalValue } from "../../structures/FunctionalValue";
import { _test_assertEquals } from "../internal/_test_assertEquals";
export const test_assertEquals_FunctionalValue = _test_assertEquals("FunctionalValue", FunctionalValue.generate, (input) => ((input: any) => {
    const $guard = (typia.assertEquals as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is FunctionalValue => {
        return true || $guard(true, {
            path: _path + "",
            expected: "unknown",
            value: input
        });
    })(input, "$input", true);
    return input as FunctionalValue;
})(input));
