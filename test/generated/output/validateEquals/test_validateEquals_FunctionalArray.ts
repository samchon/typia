import typia from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_validateEquals } from "../internal/_test_validateEquals";
export const test_validateEquals_FunctionalArray = _test_validateEquals("FunctionalArray", FunctionalArray.generate, (input) => ((input: any): typia.IValidation<FunctionalArray> => {
    const errors = [] as any[];
    const $report = (typia.validateEquals as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is FunctionalArray => {
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Array<unknown>",
            value: input
        })) && input.map((elem: any, _index1: number) => true || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "unknown",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "",
            expected: "Array<unknown>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<FunctionalArray>;
})(input));
