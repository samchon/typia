import typia from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_validateParse } from "../internal/_test_validateParse";
export const test_validateParse_UltimateUnion = _test_validateParse("UltimateUnion", UltimateUnion.generate, (input) => ((input: string): typia.IValidation<typia.Primitive<UltimateUnion>> => { const validate = (input: any): typia.IValidation<UltimateUnion> => {
    const errors = [] as any[];
    const $report = (typia.validateParse as any).report(errors);
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
}; input = JSON.parse(input); const output = validate(input); return output; })(input), UltimateUnion.SPOILERS);
