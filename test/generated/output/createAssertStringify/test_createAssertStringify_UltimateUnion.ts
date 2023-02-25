import typia from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_createAssertStringify_UltimateUnion = _test_assertStringify("UltimateUnion", UltimateUnion.generate, (input: UltimateUnion): string => { const assert = (input: any) => {
    const $guard = (typia.createAssertStringify as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is UltimateUnion => {
        return Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<any>",
            value: input
        });
    })(input, "$input", true);
    return input as UltimateUnion;
}; const stringify = (input: UltimateUnion): string => {
    return JSON.stringify(input);
}; return stringify(assert(input)); }, UltimateUnion.SPOILERS);
