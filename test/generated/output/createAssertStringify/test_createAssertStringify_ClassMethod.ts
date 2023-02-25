import typia from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_createAssertStringify_ClassMethod = _test_assertStringify("ClassMethod", ClassMethod.generate, (input: Animal): string => { const assert = (input: any) => {
    const $guard = (typia.createAssertStringify as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is Animal => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && ("number" === typeof input.age && !Number.isNaN(input.age) || $guard(_exceptionable, {
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
}; const stringify = (input: Animal): string => {
    const $string = (typia.createAssertStringify as any).string;
    return `{"name":${$string(input.name)},"age":${input.age}}`;
}; return stringify(assert(input)); }, ClassMethod.SPOILERS);
