import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { FunctionalValue } from "../../../structures/FunctionalValue";

export const test_validate_FunctionalValue = _test_validate(
    "FunctionalValue",
    FunctionalValue.generate,
    (input: any): typia.IValidation<FunctionalValue> => {
        const errors = [] as any[];
        const __is = (input: any): input is FunctionalValue => {
            return "function" === typeof input;
        };
        if (false === __is(input)) {
            const $report = (typia.createValidate as any).report(errors);
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
        }
        const success = 0 === errors.length;
        return {
            success,
            errors,
            data: success ? input : undefined,
        } as any;
    },
);
