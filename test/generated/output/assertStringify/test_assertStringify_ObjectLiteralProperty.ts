import typia from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_assertStringify_ObjectLiteralProperty = _test_assertStringify("ObjectLiteralProperty", ObjectLiteralProperty.generate, (input) => ((input: ISomething): string => { const assert = (input: any) => {
    const $guard = (typia.assertStringify as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ISomething => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input["something-interesting-do-you-want?"] || $guard(_exceptionable, {
            path: _path + "[\"something-interesting-do-you-want?\"]",
            expected: "string",
            value: input["something-interesting-do-you-want?"]
        })) && ("string" === typeof input["or-something-crazy-do-you-want?"] || $guard(_exceptionable, {
            path: _path + "[\"or-something-crazy-do-you-want?\"]",
            expected: "string",
            value: input["or-something-crazy-do-you-want?"]
        }));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<ObjectLiteralProperty.ISomething>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as ISomething;
}; const stringify = (input: ISomething): string => {
    const $string = (typia.assertStringify as any).string;
    return `{"something-interesting-do-you-want?":${$string(input["something-interesting-do-you-want?"])},"or-something-crazy-do-you-want?":${$string(input["or-something-crazy-do-you-want?"])}}`;
}; return stringify(assert(input)); })(input), ObjectLiteralProperty.SPOILERS);
