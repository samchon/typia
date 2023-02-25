import typia from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_assertStringify_UltimateUnion = _test_assertStringify("UltimateUnion", UltimateUnion.generate, (input) => ((input: typia.IJsonApplication[]): string => { const assert = (input: any) => {
    const $guard = (typia.assertStringify as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is typia.IJsonApplication[] => {
        return Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<any>",
            value: input
        });
    })(input, "$input", true);
    return input as typia.IJsonApplication[];
}; const stringify = (input: typia.IJsonApplication[]): string => {
    return JSON.stringify(input);
}; return stringify(assert(input)); })(input), UltimateUnion.SPOILERS);
