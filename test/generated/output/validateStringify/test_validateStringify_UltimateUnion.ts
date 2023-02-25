import typia from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";
export const test_validateStringify_UltimateUnion = _test_validateStringify("UltimateUnion", UltimateUnion.generate, (input) => ((input: typia.IJsonApplication[]): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<typia.IJsonApplication[]> => {
    const errors = [] as any[];
    const $report = (typia.validateStringify as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is typia.IJsonApplication[] => {
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
    } as typia.IValidation<typia.IJsonApplication[]>;
}; const stringify = (input: typia.IJsonApplication[]): string => {
    return JSON.stringify(input);
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; })(input), UltimateUnion.SPOILERS);
