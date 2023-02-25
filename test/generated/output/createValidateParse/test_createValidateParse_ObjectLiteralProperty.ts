import typia from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_validateParse } from "../internal/_test_validateParse";
export const test_createValidateParse_ObjectLiteralProperty = _test_validateParse("ObjectLiteralProperty", ObjectLiteralProperty.generate, (input: string): typia.IValidation<typia.Primitive<ISomething>> => { const validate = (input: any): typia.IValidation<ISomething> => {
    const errors = [] as any[];
    const $report = (typia.createValidateParse as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is ISomething => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input["something-interesting-do-you-want?"] || $report(_exceptionable, {
                path: _path + "[\"something-interesting-do-you-want?\"]",
                expected: "string",
                value: input["something-interesting-do-you-want?"]
            }), "string" === typeof input["or-something-crazy-do-you-want?"] || $report(_exceptionable, {
                path: _path + "[\"or-something-crazy-do-you-want?\"]",
                expected: "string",
                value: input["or-something-crazy-do-you-want?"]
            })].every((flag: boolean) => flag);
        return ("object" === typeof input && null !== input || $report(true, {
            path: _path + "",
            expected: "Resolve<ObjectLiteralProperty.ISomething>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<ObjectLiteralProperty.ISomething>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<ISomething>;
}; input = JSON.parse(input); const output = validate(input); return output; }, ObjectLiteralProperty.SPOILERS);
