import typia from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_assert } from "../internal/_test_assert";
export const test_assert_ClassMethod = _test_assert("ClassMethod", ClassMethod.generate, (input) => ((input: any) => {
    const $guard = (typia.assert as any).guard;
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
})(input), ClassMethod.SPOILERS);
