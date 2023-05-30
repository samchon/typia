import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { FunctionalArray } from "../../../structures/FunctionalArray";
export const test_createValidateEquals_FunctionalArray = _test_validateEquals("FunctionalArray", FunctionalArray.generate, (input: any): typia.IValidation<FunctionalArray> => {
    const __is = (input: any, _exceptionable: boolean = true): input is FunctionalArray => {
        return Array.isArray(input) && input.every((elem: any, _index1: number) => "function" === typeof elem);
    };
    const errors = [] as any[];
    const $report = (typia.createValidateEquals as any).report(errors);
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is FunctionalArray => {
            return (Array.isArray(input) || $report(true, {
                path: _path + "",
                expected: "Array<unknown>",
                value: input
            })) && input.map((elem: any, _index1: number) => "function" === typeof elem || $report(true, {
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
    } as any;
});
