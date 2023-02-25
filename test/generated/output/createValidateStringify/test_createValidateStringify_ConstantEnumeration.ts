import typia from "../../../src";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_validateStringify } from "../internal/_test_validateStringify";
export const test_createValidateStringify_ConstantEnumeration = _test_validateStringify("ConstantEnumeration", ConstantEnumeration.generate, (input: ConstantEnumeration): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<ConstantEnumeration> => {
    const errors = [] as any[];
    const $report = (typia.createValidateStringify as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is ConstantEnumeration => {
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
    } as typia.IValidation<ConstantEnumeration>;
}; const stringify = (input: ConstantEnumeration): string => {
    const $string = (typia.createValidateStringify as any).string;
    const $throws = (typia.createValidateStringify as any).throws;
    return `[${input.map((elem: any) => (() => {
        if ("string" === typeof elem)
            return $string(elem);
        if ("number" === typeof elem)
            return elem;
        if ("string" === typeof elem)
            return "\"" + elem + "\"";
        $throws({
            expected: "(\"Four\" | \"Three\" | 0 | 1 | 2)",
            value: elem
        });
    })()).join(",")}]`;
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; }, ConstantEnumeration.SPOILERS);
