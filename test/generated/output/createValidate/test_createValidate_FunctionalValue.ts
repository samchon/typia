import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { FunctionalValue } from "../../../structures/FunctionalValue";

export const test_createValidate_FunctionalValue = _test_validate(
    "FunctionalValue",
    FunctionalValue.generate,
    (input: any): typia.IValidation<FunctionalValue> => {
        const __is: any = (input: any): input is FunctionalValue => {
            return "function" === typeof input;
        };
        const errors: any = [] as any[];
        const $report: any = (typia.createValidate as any).report(errors);
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is FunctionalValue => {
                return (
                    "function" === typeof input ||
                    $report(true, {
                        path: _path + "",
                        expected: "unknown",
                        value: input,
                    })
                );
            })(input, "$input", true);
        const success: any = 0 === errors.length;
        return {
            success,
            errors,
            data: success ? input : undefined,
        } as any;
    },
);
