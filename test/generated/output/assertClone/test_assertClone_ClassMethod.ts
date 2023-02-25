import typia from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_assertClone_ClassMethod = _test_assertClone("ClassMethod", ClassMethod.generate, (input) => ((input: any): typia.Primitive<Animal> => { const assert = (input: any) => {
    const $guard = (typia.assertClone as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is Animal => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && ("number" === typeof input.age || $guard(_exceptionable, {
            path: _path + ".age",
            expected: "number",
            value: input.age
        }));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<ClassMethod.Animal>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as Animal;
}; const clone = (input: Animal): typia.Primitive<Animal> => {
    const $co0 = (input: any) => ({
        name: input.name,
        age: input.age
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; assert(input); const output = clone(input); /* ClassMethod.Animal */; return output as Animal; })(input), ClassMethod.SPOILERS);
