import typia from "../../../../src";
import { ClassGetter } from "../../../structures/ClassGetter";
import { _test_assert } from "../../../internal/_test_assert";
export const test_createAssert_ClassGetter = _test_assert("ClassGetter", ClassGetter.generate, (input: any): ClassGetter => {
    const __is = (input: any): input is ClassGetter => {
        const $io0 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.name && (null === input.dead || "boolean" === typeof input.dead);
        return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ClassGetter => {
            const $guard = (typia.createAssert as any).guard;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("string" === typeof input.id || $guard(_exceptionable, {
                path: _path + ".id",
                expected: "string",
                value: input.id
            })) && ("string" === typeof input.name || $guard(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            })) && (null === input.dead || "boolean" === typeof input.dead || $guard(_exceptionable, {
                path: _path + ".dead",
                expected: "(boolean | null)",
                value: input.dead
            }));
            return ("object" === typeof input && null !== input || $guard(true, {
                path: _path + "",
                expected: "ClassGetter.Person",
                value: input
            })) && $ao0(input, _path + "", true) || $guard(true, {
                path: _path + "",
                expected: "ClassGetter.Person",
                value: input
            });
        })(input, "$input", true);
    return input;
}, ClassGetter.SPOILERS);
