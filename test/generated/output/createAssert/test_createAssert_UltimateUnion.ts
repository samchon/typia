import typia from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_assert } from "../internal/_test_assert";
export const test_createAssert_UltimateUnion = _test_assert("UltimateUnion", UltimateUnion.generate, (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is UltimateUnion => {
        return Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<any>",
            value: input
        });
    })(input, "$input", true);
    return input as UltimateUnion;
}, UltimateUnion.SPOILERS);
