import typia from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_random } from "../internal/_test_random";
export const test_createRandom_DynamicConstant = _test_random("DynamicConstant", (generator: typia.IRandomGenerator = (typia.createRandom as any).generator) => {
    const $generator = (typia.createRandom as any).generator;
    const $ro0 = (recursive = false, depth = 0) => ({
        a: (generator.number ?? $generator.number)(0, 100),
        b: (generator.number ?? $generator.number)(0, 100),
        c: (generator.number ?? $generator.number)(0, 100),
        d: (generator.number ?? $generator.number)(0, 100)
    });
    return $ro0();
}, (input: any) => {
    const $guard = (typia.createAssert as any).guard;
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
    return input as typia.Primitive<DynamicConstant>;
});
