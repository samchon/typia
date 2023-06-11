import typia from "../../../../src";
import { TemplateConstant } from "../../../structures/TemplateConstant";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
export const test_validateStringify_TemplateConstant = _test_validateStringify("TemplateConstant", TemplateConstant.generate, (input) => ((input: Array<TemplateConstant.Type>): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<Array<TemplateConstant.Type>> => {
    const errors = [] as any[];
    const $report = (typia.validateStringify as any).report(errors);
    const __is = (input: any): input is Array<TemplateConstant.Type> => {
        const $io0 = (input: any): boolean => ("prefix_A" === input.prefix || "prefix_B" === input.prefix || "prefix_C" === input.prefix) && ("1_postfix" === input.postfix || "3_postfix" === input.postfix || "2_postfix" === input.postfix) && ("the_1_value_with_label_A" === input.combined || "the_1_value_with_label_B" === input.combined || "the_1_value_with_label_C" === input.combined || "the_3_value_with_label_A" === input.combined || "the_3_value_with_label_B" === input.combined || "the_3_value_with_label_C" === input.combined || "the_2_value_with_label_A" === input.combined || "the_2_value_with_label_B" === input.combined || "the_2_value_with_label_C" === input.combined);
        return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is Array<TemplateConstant.Type> => {
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["prefix_A" === input.prefix || "prefix_B" === input.prefix || "prefix_C" === input.prefix || $report(_exceptionable, {
                    path: _path + ".prefix",
                    expected: "(\"prefix_A\" | \"prefix_B\" | \"prefix_C\")",
                    value: input.prefix
                }), "1_postfix" === input.postfix || "3_postfix" === input.postfix || "2_postfix" === input.postfix || $report(_exceptionable, {
                    path: _path + ".postfix",
                    expected: "(\"1_postfix\" | \"2_postfix\" | \"3_postfix\")",
                    value: input.postfix
                }), "the_1_value_with_label_A" === input.combined || "the_1_value_with_label_B" === input.combined || "the_1_value_with_label_C" === input.combined || "the_3_value_with_label_A" === input.combined || "the_3_value_with_label_B" === input.combined || "the_3_value_with_label_C" === input.combined || "the_2_value_with_label_A" === input.combined || "the_2_value_with_label_B" === input.combined || "the_2_value_with_label_C" === input.combined || $report(_exceptionable, {
                    path: _path + ".combined",
                    expected: "(\"the_1_value_with_label_A\" | \"the_1_value_with_label_B\" | \"the_1_value_with_label_C\" | \"the_2_value_with_label_A\" | \"the_2_value_with_label_B\" | \"the_2_value_with_label_C\" | \"the_3_value_with_label_A\" | \"the_3_value_with_label_B\" | \"the_3_value_with_label_C\")",
                    value: input.combined
                })].every((flag: boolean) => flag);
            return (Array.isArray(input) || $report(true, {
                path: _path + "",
                expected: "Array<TemplateConstant.Type>",
                value: input
            })) && input.map((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "TemplateConstant.Type",
                value: elem
            })) && $vo0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "TemplateConstant.Type",
                value: elem
            })).every((flag: boolean) => flag) || $report(true, {
                path: _path + "",
                expected: "Array<TemplateConstant.Type>",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
}; const stringify = (input: Array<TemplateConstant.Type>): string => {
    const $string = (typia.validateStringify as any).string;
    const $throws = (typia.validateStringify as any).throws;
    const $so0 = (input: any): any => `{"prefix":${(() => {
        if ("string" === typeof input.prefix)
            return $string(input.prefix);
        if ("string" === typeof input.prefix)
            return "\"" + input.prefix + "\"";
        $throws({
            expected: "(\"prefix_A\" | \"prefix_B\" | \"prefix_C\")",
            value: input.prefix
        });
    })()},"postfix":${(() => {
        if ("string" === typeof input.postfix)
            return $string(input.postfix);
        if ("string" === typeof input.postfix)
            return "\"" + input.postfix + "\"";
        $throws({
            expected: "(\"1_postfix\" | \"2_postfix\" | \"3_postfix\")",
            value: input.postfix
        });
    })()},"combined":${(() => {
        if ("string" === typeof input.combined)
            return $string(input.combined);
        if ("string" === typeof input.combined)
            return "\"" + input.combined + "\"";
        $throws({
            expected: "(\"the_1_value_with_label_A\" | \"the_1_value_with_label_B\" | \"the_1_value_with_label_C\" | \"the_2_value_with_label_A\" | \"the_2_value_with_label_B\" | \"the_2_value_with_label_C\" | \"the_3_value_with_label_A\" | \"the_3_value_with_label_B\" | \"the_3_value_with_label_C\")",
            value: input.combined
        });
    })()}}`;
    return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; })(input), TemplateConstant.SPOILERS);
