import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { FunctionalValue } from "../../../structures/FunctionalValue";
export const test_validateEquals_FunctionalValue = _test_validateEquals("FunctionalValue", FunctionalValue.generate, (input) => ((input: any): typia.IValidation<(...args: Array<any>) => > => {
    const __is = (input: any, _exceptionable: boolean = true): input is (...args: Array<any>) =>  => {
        return "function" === typeof input;
    };
    const errors = [] as any[];
    const $report = (typia.validateEquals as any).report(errors);
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is (...args: Array<any>) =>  => {
            return "function" === typeof input || $report(true, {
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
    } as any;
})(input));
