import typia from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_validateClone } from "../internal/_test_validateClone";
export const test_createValidateClone_UltimateUnion = _test_validateClone("UltimateUnion", UltimateUnion.generate, (input: any): typia.IValidation<typia.Primitive<UltimateUnion>> => { const validate = (input: any): typia.IValidation<UltimateUnion> => {
    const errors = [] as any[];
    const $report = (typia.createValidateClone as any).report(errors);
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
}; const clone = (input: UltimateUnion): typia.Primitive<UltimateUnion> => {
    const $any = (typia.createValidateClone as any).any;
    return $any(input);
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; }, UltimateUnion.SPOILERS);
