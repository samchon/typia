import typia from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_assertPrune } from "../internal/_test_assertPrune";
export const test_createAssertPrune_DynamicConstant = _test_assertPrune("DynamicConstant", DynamicConstant.generate, (input: any): DynamicConstant => { const assert = (input: any) => {
    const $guard = (typia.createAssertPrune as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is DynamicConstant => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.a || $guard(_exceptionable, {
            path: _path + ".a",
            expected: "number",
            value: input.a
        })) && ("number" === typeof input.b || $guard(_exceptionable, {
            path: _path + ".b",
            expected: "number",
            value: input.b
        })) && ("number" === typeof input.c || $guard(_exceptionable, {
            path: _path + ".c",
            expected: "number",
            value: input.c
        })) && ("number" === typeof input.d || $guard(_exceptionable, {
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
}; const prune = (input: DynamicConstant): void => {
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("a" === key || "b" === key || "c" === key || "d" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
}; assert(input); prune(input); return input; }, DynamicConstant.SPOILERS);
