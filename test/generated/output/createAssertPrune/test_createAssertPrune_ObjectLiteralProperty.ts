import typia from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_assertPrune } from "../internal/_test_assertPrune";
export const test_createAssertPrune_ObjectLiteralProperty = _test_assertPrune("ObjectLiteralProperty", ObjectLiteralProperty.generate, (input: any): ISomething => { const assert = (input: any) => {
    const $guard = (typia.createAssertPrune as any).guard;
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
}; const prune = (input: ISomething): void => {
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("something-interesting-do-you-want?" === key || "or-something-crazy-do-you-want?" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
}; assert(input); prune(input); return input; }, ObjectLiteralProperty.SPOILERS);
