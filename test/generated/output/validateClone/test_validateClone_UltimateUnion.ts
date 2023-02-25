import typia from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_validateClone } from "../internal/_test_validateClone";
export const test_validateClone_UltimateUnion = _test_validateClone("UltimateUnion", UltimateUnion.generate, (input) => ((input: any): typia.IValidation<typia.Primitive<typia.IJsonApplication[]>> => { const validate = (input: any): typia.IValidation<typia.IJsonApplication[]> => {
    const errors = [] as any[];
    const $report = (typia.validateClone as any).report(errors);
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
}; const clone = (input: typia.IJsonApplication[]): typia.Primitive<typia.IJsonApplication[]> => {
    const $any = (typia.validateClone as any).any;
    return $any(input);
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; })(input), UltimateUnion.SPOILERS);
