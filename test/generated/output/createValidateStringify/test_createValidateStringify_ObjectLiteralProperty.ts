import typia from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_validateStringify } from "../internal/_test_validateStringify";
export const test_createValidateStringify_ObjectLiteralProperty = _test_validateStringify("ObjectLiteralProperty", ObjectLiteralProperty.generate, (input: ISomething): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<ISomething> => {
    const errors = [] as any[];
    const $report = (typia.createValidateStringify as any).report(errors);
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
}; const stringify = (input: ISomething): string => {
    const $string = (typia.createValidateStringify as any).string;
    return `{"something-interesting-do-you-want?":${$string(input["something-interesting-do-you-want?"])},"or-something-crazy-do-you-want?":${$string(input["or-something-crazy-do-you-want?"])}}`;
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; }, ObjectLiteralProperty.SPOILERS);
