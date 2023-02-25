import typia from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_createAssertStringify_DynamicConstant = _test_assertStringify("DynamicConstant", DynamicConstant.generate, (input: DynamicConstant): string => { const assert = (input: any) => {
    const $guard = (typia.createAssertStringify as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is DynamicConstant => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.a && !Number.isNaN(input.a) || $guard(_exceptionable, {
            path: _path + ".a",
            expected: "number",
            value: input.a
        })) && ("number" === typeof input.b && !Number.isNaN(input.b) || $guard(_exceptionable, {
            path: _path + ".b",
            expected: "number",
            value: input.b
        })) && ("number" === typeof input.c && !Number.isNaN(input.c) || $guard(_exceptionable, {
            path: _path + ".c",
            expected: "number",
            value: input.c
        })) && ("number" === typeof input.d && !Number.isNaN(input.d) || $guard(_exceptionable, {
            path: _path + ".d",
            expected: "number",
            value: input.d
        }));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<DynamicConstant>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as DynamicConstant;
}; const stringify = (input: DynamicConstant): string => {
    const $so0 = (input: any) => `{"a":${input.a},"b":${input.b},"c":${input.c},"d":${input.d}}`;
    return $so0(input);
}; return stringify(assert(input)); }, DynamicConstant.SPOILERS);
