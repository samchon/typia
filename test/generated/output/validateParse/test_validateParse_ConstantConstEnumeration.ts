import typia from "../../../src";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_validateParse } from "../internal/_test_validateParse";
export const test_validateParse_ConstantConstEnumeration = _test_validateParse("ConstantConstEnumeration", ConstantConstEnumeration.generate, (input) => ((input: string): typia.IValidation<typia.Primitive<ConstantConstEnumeration>> => { const validate = (input: any): typia.IValidation<ConstantConstEnumeration> => {
    const errors = [] as any[];
    const $report = (typia.validateParse as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is ConstantConstEnumeration => {
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Array<(\"Four\" | \"Three\" | 0 | 1 | 2)>",
            value: input
        })) && input.map((elem: any, _index1: number) => 0 === elem || 1 === elem || 2 === elem || "Three" === elem || "Four" === elem || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(\"Four\" | \"Three\" | 0 | 1 | 2)",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "",
            expected: "Array<(\"Four\" | \"Three\" | 0 | 1 | 2)>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<ConstantConstEnumeration>;
}; input = JSON.parse(input); const output = validate(input); return output; })(input), ConstantConstEnumeration.SPOILERS);
