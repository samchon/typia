import typia from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_assertClone_DynamicConstant = _test_assertClone("DynamicConstant", DynamicConstant.generate, (input) => ((input: any): typia.Primitive<DynamicConstant> => { const assert = (input: any) => {
    const $guard = (typia.assertClone as any).guard;
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
}; const clone = (input: DynamicConstant): typia.Primitive<DynamicConstant> => {
    const $co0 = (input: any) => ({
        a: input.a,
        b: input.b,
        c: input.c,
        d: input.d
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; assert(input); const output = clone(input); /* __type */; return output as DynamicConstant; })(input), DynamicConstant.SPOILERS);
