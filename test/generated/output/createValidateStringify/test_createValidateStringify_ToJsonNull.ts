import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { ToJsonNull } from "../../../structures/ToJsonNull";
export const test_createValidateStringify_ToJsonNull = _test_validateStringify("ToJsonNull", ToJsonNull.generate, (input: ToJsonNull): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<ToJsonNull> => {
    const __is = (input: any): input is ToJsonNull => {
        const $io0 = (input: any): boolean => true;
        return "object" === typeof input && null !== input && $io0(input);
    };
    const errors = [] as any[];
    const $report = (typia.createValidateStringify as any).report(errors);
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ToJsonNull => {
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [true || $report(_exceptionable, {
                    path: _path + ".toJSON",
                    expected: "unknown",
                    value: input.toJSON
                })].every((flag: boolean) => flag);
            return ("object" === typeof input && null !== input || $report(true, {
                path: _path + "",
                expected: "ToJsonNull",
                value: input
            })) && $vo0(input, _path + "", true) || $report(true, {
                path: _path + "",
                expected: "ToJsonNull",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
}; const stringify = (input: ToJsonNull): string => {
    return "null";
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; });
