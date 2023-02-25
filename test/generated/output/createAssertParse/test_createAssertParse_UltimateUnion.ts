import typia from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_assertParse } from "../internal/_test_assertParse";
export const test_createAssertParse_UltimateUnion = _test_assertParse("UltimateUnion", UltimateUnion.generate, (input: string): typia.Primitive<UltimateUnion> => { const assert = (input: any) => {
    const $guard = (typia.createAssertParse as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is UltimateUnion => {
        return Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<any>",
            value: input
        });
    })(input, "$input", true);
    return input as UltimateUnion;
}; input = JSON.parse(input); return assert(input); }, UltimateUnion.SPOILERS);
