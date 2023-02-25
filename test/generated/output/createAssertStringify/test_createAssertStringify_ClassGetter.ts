import typia from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_createAssertStringify_ClassGetter = _test_assertStringify("ClassGetter", ClassGetter.generate, (input: Person): string => { const assert = (input: any) => {
    const $guard = (typia.createAssertStringify as any).guard;
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
    return input as Person;
}; const stringify = (input: Person): string => {
    const $string = (typia.createAssertStringify as any).string;
    return `{"id":${$string(input.id)},"name":${$string(input.name)},"dead":${input.dead}}`;
}; return stringify(assert(input)); }, ClassGetter.SPOILERS);
