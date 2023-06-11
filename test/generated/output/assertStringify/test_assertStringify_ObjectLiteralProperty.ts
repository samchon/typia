import typia from "../../../../src";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
export const test_assertStringify_ObjectLiteralProperty = _test_assertStringify("ObjectLiteralProperty", ObjectLiteralProperty.generate, (input) => ((input: any): string => { const assert = (input: any): ObjectLiteralProperty.ISomething => {
    const __is = (input: any): input is ObjectLiteralProperty.ISomething => {
        return "object" === typeof input && null !== input && ("string" === typeof (input as any)["something-interesting-do-you-want?"] && "string" === typeof (input as any)["or-something-crazy-do-you-want?"]);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ObjectLiteralProperty.ISomething => {
            const $guard = (typia.assertStringify as any).guard;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("string" === typeof input["something-interesting-do-you-want?"] || $guard(_exceptionable, {
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
                expected: "ObjectLiteralProperty.ISomething",
                value: input
            })) && $ao0(input, _path + "", true) || $guard(true, {
                path: _path + "",
                expected: "ObjectLiteralProperty.ISomething",
                value: input
            });
        })(input, "$input", true);
    return input;
}; const stringify = (input: ObjectLiteralProperty.ISomething): string => {
    const $string = (typia.assertStringify as any).string;
    return `{"something-interesting-do-you-want?":${$string((input as any)["something-interesting-do-you-want?"])},"or-something-crazy-do-you-want?":${$string((input as any)["or-something-crazy-do-you-want?"])}}`;
}; return stringify(assert(input)); })(input), ObjectLiteralProperty.SPOILERS);
