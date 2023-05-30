import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { TemplateConstant } from "../../../structures/TemplateConstant";
export const test_createIsParse_TemplateConstant = _test_isParse("TemplateConstant", TemplateConstant.generate, (input: any): typia.Primitive<TemplateConstant> => { const is = (input: any): input is TemplateConstant => {
    const $io0 = (input: any): boolean => ("prefix_A" === input.prefix || "prefix_B" === input.prefix || "prefix_C" === input.prefix) && ("1_postfix" === input.postfix || "3_postfix" === input.postfix || "2_postfix" === input.postfix) && ("the_1_value_with_label_A" === input.combined || "the_1_value_with_label_B" === input.combined || "the_1_value_with_label_C" === input.combined || "the_3_value_with_label_A" === input.combined || "the_3_value_with_label_B" === input.combined || "the_3_value_with_label_C" === input.combined || "the_2_value_with_label_A" === input.combined || "the_2_value_with_label_B" === input.combined || "the_2_value_with_label_C" === input.combined);
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; input = JSON.parse(input); return is(input) ? input as any : null; }, TemplateConstant.SPOILERS);
