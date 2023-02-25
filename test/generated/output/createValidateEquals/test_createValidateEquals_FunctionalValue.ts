import typia from "../../../src";
import { FunctionalValue } from "../../structures/FunctionalValue";
import { _test_validateEquals } from "../internal/_test_validateEquals";
export const test_createValidateEquals_FunctionalValue = _test_validateEquals("FunctionalValue", FunctionalValue.generate, (input: any): typia.IValidation<FunctionalValue> => {
    const errors = [] as any[];
    const $report = (typia.createValidateEquals as any).report(errors);
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
});
