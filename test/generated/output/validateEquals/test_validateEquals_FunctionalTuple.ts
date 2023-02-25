import typia from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_validateEquals } from "../internal/_test_validateEquals";
export const test_validateEquals_FunctionalTuple = _test_validateEquals("FunctionalTuple", FunctionalTuple.generate, (input) => ((input: any): typia.IValidation<FunctionalTuple> => {
    const errors = [] as any[];
    const $report = (typia.validateEquals as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is FunctionalTuple => {
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "[unknown, unknown, unknown]",
            value: input
        })) && ((input.length === 3 || $report(true, {
            path: _path + "",
            expected: "[unknown, unknown, unknown]",
            value: input
        })) && [
            true || $report(true, {
                path: _path + "[0]",
                expected: "unknown",
                value: input[0]
            }),
            true || $report(true, {
                path: _path + "[1]",
                expected: "unknown",
                value: input[1]
            }),
            true || $report(true, {
                path: _path + "[2]",
                expected: "unknown",
                value: input[2]
            })
        ].every((flag: boolean) => flag)) || $report(true, {
            path: _path + "",
            expected: "[unknown, unknown, unknown]",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<FunctionalTuple>;
})(input));
