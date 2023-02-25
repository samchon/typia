import typia from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_validate } from "../internal/_test_validate";
export const test_createValidate_UltimateUnion = _test_validate("UltimateUnion", UltimateUnion.generate, (input: any): typia.IValidation<UltimateUnion> => {
    const errors = [] as any[];
    const $report = (typia.createValidate as any).report(errors);
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
}, UltimateUnion.SPOILERS);
