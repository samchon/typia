import typia from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_isClone } from "../internal/_test_isClone";
export const test_isClone_TemplateConstant = _test_isClone("TemplateConstant", TemplateConstant.generate, (input) => ((input: any): typia.Primitive<TemplateConstant> | null => { const is = (input: any): input is TemplateConstant => {
    const $io0 = (input: any) => ("prefix_A" === input.prefix || "prefix_B" === input.prefix || "prefix_C" === input.prefix) && ("1_postfix" === input.postfix || "3_postfix" === input.postfix || "2_postfix" === input.postfix) && ("the_1_value_with_label_A" === input.combined || "the_1_value_with_label_B" === input.combined || "the_1_value_with_label_C" === input.combined || "the_3_value_with_label_A" === input.combined || "the_3_value_with_label_B" === input.combined || "the_3_value_with_label_C" === input.combined || "the_2_value_with_label_A" === input.combined || "the_2_value_with_label_B" === input.combined || "the_2_value_with_label_C" === input.combined);
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; const clone = (input: TemplateConstant): typia.Primitive<TemplateConstant> => {
    const $co0 = (input: any) => ({
        prefix: input.prefix,
        postfix: input.postfix,
        combined: input.combined
    });
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input;
}; if (!is(input))
    return null; const output = clone(input); return output; })(input), TemplateConstant.SPOILERS);
