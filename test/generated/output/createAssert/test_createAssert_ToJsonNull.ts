import typia from "../../../../src";
import { ToJsonNull } from "../../../structures/ToJsonNull";
import { _test_assert } from "../../../internal/_test_assert";
export const test_createAssert_ToJsonNull = _test_assert("ToJsonNull", ToJsonNull.generate, (input: any): ToJsonNull => {
    const __is = (input: any): input is ToJsonNull => {
        const $io0 = (input: any): boolean => "function" === typeof input.toJSON;
        return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ToJsonNull => {
            const $guard = (typia.createAssert as any).guard;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => "function" === typeof input.toJSON || $guard(_exceptionable, {
                path: _path + ".toJSON",
                expected: "unknown",
                value: input.toJSON
            });
            return ("object" === typeof input && null !== input || $guard(true, {
                path: _path + "",
                expected: "ToJsonNull",
                value: input
            })) && $ao0(input, _path + "", true) || $guard(true, {
                path: _path + "",
                expected: "ToJsonNull",
                value: input
            });
        })(input, "$input", true);
    return input;
});
