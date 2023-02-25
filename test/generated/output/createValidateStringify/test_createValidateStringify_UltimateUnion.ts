import typia from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";
export const test_createValidateStringify_UltimateUnion = _test_validateStringify("UltimateUnion", UltimateUnion.generate, (input: UltimateUnion): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<UltimateUnion> => {
    const errors = [] as any[];
    const $report = (typia.createValidateStringify as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is UltimateUnion => {
        return Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Array<any>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<UltimateUnion>;
}; const stringify = (input: UltimateUnion): string => {
    return JSON.stringify(input);
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; }, UltimateUnion.SPOILERS);
