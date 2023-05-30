import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { TemplateConstant } from "../../../structures/TemplateConstant";
export const test_assertStringify_TemplateConstant = _test_assertStringify("TemplateConstant", TemplateConstant.generate, (input) => ((input: any): string => { const assert = (input: any): Array<TemplateConstant.Type> => {
    const $guard = (typia.assertStringify as any).guard;
    const __is = (input: any): input is Array<TemplateConstant.Type> => {
        const $io0 = (input: any): boolean => ("prefix_A" === input.prefix || "prefix_B" === input.prefix || "prefix_C" === input.prefix) && ("1_postfix" === input.postfix || "3_postfix" === input.postfix || "2_postfix" === input.postfix) && ("the_1_value_with_label_A" === input.combined || "the_1_value_with_label_B" === input.combined || "the_1_value_with_label_C" === input.combined || "the_3_value_with_label_A" === input.combined || "the_3_value_with_label_B" === input.combined || "the_3_value_with_label_C" === input.combined || "the_2_value_with_label_A" === input.combined || "the_2_value_with_label_B" === input.combined || "the_2_value_with_label_C" === input.combined);
        return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is Array<TemplateConstant.Type> => {
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("prefix_A" === input.prefix || "prefix_B" === input.prefix || "prefix_C" === input.prefix || $guard(_exceptionable, {
                path: _path + ".prefix",
                expected: "(\"prefix_A\" | \"prefix_B\" | \"prefix_C\")",
                value: input.prefix
            })) && ("1_postfix" === input.postfix || "3_postfix" === input.postfix || "2_postfix" === input.postfix || $guard(_exceptionable, {
                path: _path + ".postfix",
                expected: "(\"1_postfix\" | \"2_postfix\" | \"3_postfix\")",
                value: input.postfix
            })) && ("the_1_value_with_label_A" === input.combined || "the_1_value_with_label_B" === input.combined || "the_1_value_with_label_C" === input.combined || "the_3_value_with_label_A" === input.combined || "the_3_value_with_label_B" === input.combined || "the_3_value_with_label_C" === input.combined || "the_2_value_with_label_A" === input.combined || "the_2_value_with_label_B" === input.combined || "the_2_value_with_label_C" === input.combined || $guard(_exceptionable, {
                path: _path + ".combined",
                expected: "(\"the_1_value_with_label_A\" | \"the_1_value_with_label_B\" | \"the_1_value_with_label_C\" | \"the_2_value_with_label_A\" | \"the_2_value_with_label_B\" | \"the_2_value_with_label_C\" | \"the_3_value_with_label_A\" | \"the_3_value_with_label_B\" | \"the_3_value_with_label_C\")",
                value: input.combined
            }));
            return (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "Array<TemplateConstant.Type>",
                value: input
            })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "TemplateConstant.Type",
                value: elem
            })) && $ao0(elem, _path + "[" + _index1 + "]", true));
        })(input, "$input", true);
    return input;
}; const stringify = (input: Array<TemplateConstant.Type>): string => {
    const $string = (typia.assertStringify as any).string;
    const $throws = (typia.assertStringify as any).throws;
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
}; return stringify(assert(input)); })(input), TemplateConstant.SPOILERS);
