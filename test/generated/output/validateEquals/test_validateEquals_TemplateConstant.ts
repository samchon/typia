import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { TemplateConstant } from "../../../structures/TemplateConstant";
export const test_validateEquals_TemplateConstant = _test_validateEquals("TemplateConstant", TemplateConstant.generate, (input) => ((input: any): typia.IValidation<Array<TemplateConstant.Type>> => {
    const __is = (input: any, _exceptionable: boolean = true): input is Array<TemplateConstant.Type> => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean => ("prefix_A" === input.prefix || "prefix_B" === input.prefix || "prefix_C" === input.prefix) && ("1_postfix" === input.postfix || "3_postfix" === input.postfix || "2_postfix" === input.postfix) && ("the_1_value_with_label_A" === input.combined || "the_1_value_with_label_B" === input.combined || "the_1_value_with_label_C" === input.combined || "the_3_value_with_label_A" === input.combined || "the_3_value_with_label_B" === input.combined || "the_3_value_with_label_C" === input.combined || "the_2_value_with_label_A" === input.combined || "the_2_value_with_label_B" === input.combined || "the_2_value_with_label_C" === input.combined) && (3 === Object.keys(input).length || Object.keys(input).every(key => {
            if (["prefix", "postfix", "combined"].some(prop => key === prop))
                return true;
            const value = input[key];
            if (undefined === value)
                return true;
            return false;
        }));
        return Array.isArray(input) && input.every((elem: any, _index1: number) => "object" === typeof elem && null !== elem && $io0(elem, true));
    };
    const errors = [] as any[];
    const $report = (typia.validateEquals as any).report(errors);
    const $join = (typia.validateEquals as any).join;
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
                }), 3 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).map(key => {
                    if (["prefix", "postfix", "combined"].some(prop => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value)
                        return true;
                    return $report(_exceptionable, {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value
                    });
                }).every((flag: boolean) => flag))].every((flag: boolean) => flag);
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
})(input));
