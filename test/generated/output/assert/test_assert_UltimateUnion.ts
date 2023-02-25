import typia from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_assert } from "../internal/_test_assert";
export const test_assert_UltimateUnion = _test_assert("UltimateUnion", UltimateUnion.generate, (input) => ((input: any) => {
    const $guard = (typia.assert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is typia.IJsonApplication[] => {
        return Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<any>",
            value: input
        });
    })(input, "$input", true);
    return input as typia.IJsonApplication[];
})(input), UltimateUnion.SPOILERS);
