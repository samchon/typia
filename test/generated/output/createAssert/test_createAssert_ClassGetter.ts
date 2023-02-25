import typia from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_assert } from "../internal/_test_assert";
export const test_createAssert_ClassGetter = _test_assert("ClassGetter", ClassGetter.generate, (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is Person => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "string",
            value: input.id
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && ("boolean" === typeof input.dead || $guard(_exceptionable, {
            path: _path + ".dead",
            expected: "boolean",
            value: input.dead
        }));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<ClassGetter.Person>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as ClassGetter;
}, ClassGetter.SPOILERS);
