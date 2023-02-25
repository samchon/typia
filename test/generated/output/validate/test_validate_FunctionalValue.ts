import typia from "../../../src";
import { FunctionalValue } from "../../structures/FunctionalValue";
import { _test_validate } from "../internal/_test_validate";
export const test_validate_FunctionalValue = _test_validate("FunctionalValue", FunctionalValue.generate, (input) => ((input: any): typia.IValidation<FunctionalValue> => {
    const errors = [] as any[];
    const $report = (typia.validate as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is FunctionalValue => {
        return true || $report(true, {
            path: _path + "",
            expected: "unknown",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<FunctionalValue>;
})(input));
