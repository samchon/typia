import typia from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_validateParse } from "../internal/_test_validateParse";
export const test_createValidateParse_TemplateConstant = _test_validateParse("TemplateConstant", TemplateConstant.generate, (input: string): typia.IValidation<typia.Primitive<TemplateConstant>> => { const validate = (input: any): typia.IValidation<TemplateConstant> => {
    const errors = [] as any[];
    const $report = (typia.createValidateParse as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is TemplateConstant => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["prefix_A" === input.prefix || "prefix_B" === input.prefix || "prefix_C" === input.prefix || $report(_exceptionable, {
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
            expected: "Array<Resolve<TemplateConstant.Type>>",
            value: input
        })) && input.map((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<TemplateConstant.Type>",
            value: elem
        })) && $vo0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<TemplateConstant.Type>",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "",
            expected: "Array<Resolve<TemplateConstant.Type>>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<TemplateConstant>;
}; input = JSON.parse(input); const output = validate(input); return output; }, TemplateConstant.SPOILERS);
