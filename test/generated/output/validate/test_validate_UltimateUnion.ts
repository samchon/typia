import typia from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_validate } from "../internal/_test_validate";
export const test_validate_UltimateUnion = _test_validate("UltimateUnion", UltimateUnion.generate, (input) => ((input: any): typia.IValidation<typia.IJsonApplication[]> => {
    const errors = [] as any[];
    const $report = (typia.validate as any).report(errors);
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
})(input), UltimateUnion.SPOILERS);
