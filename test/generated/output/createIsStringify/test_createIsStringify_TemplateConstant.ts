import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { TemplateConstant } from "../../../structures/TemplateConstant";
export const test_createIsStringify_TemplateConstant = _test_isStringify("TemplateConstant", TemplateConstant.generate, (input: TemplateConstant): string | null => { const is = (input: any): input is TemplateConstant => {
    const $io0 = (input: any): boolean => ("prefix_A" === input.prefix || "prefix_B" === input.prefix || "prefix_C" === input.prefix) && ("1_postfix" === input.postfix || "3_postfix" === input.postfix || "2_postfix" === input.postfix) && ("the_1_value_with_label_A" === input.combined || "the_1_value_with_label_B" === input.combined || "the_1_value_with_label_C" === input.combined || "the_3_value_with_label_A" === input.combined || "the_3_value_with_label_B" === input.combined || "the_3_value_with_label_C" === input.combined || "the_2_value_with_label_A" === input.combined || "the_2_value_with_label_B" === input.combined || "the_2_value_with_label_C" === input.combined);
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; const stringify = (input: TemplateConstant): string => {
    const $string = (typia.createIsStringify as any).string;
    const $throws = (typia.createIsStringify as any).throws;
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
}; return is(input) ? stringify(input) : null; }, TemplateConstant.SPOILERS);
