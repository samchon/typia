import typia from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_assertParse } from "../internal/_test_assertParse";
export const test_assertParse_ObjectLiteralProperty = _test_assertParse("ObjectLiteralProperty", ObjectLiteralProperty.generate, (input) => ((input: string): typia.Primitive<ISomething> => { const assert = (input: any) => {
    const $guard = (typia.assertParse as any).guard;
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
}; input = JSON.parse(input); return assert(input); })(input), ObjectLiteralProperty.SPOILERS);
