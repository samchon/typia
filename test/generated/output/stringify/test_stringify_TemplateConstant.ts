import typia from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_stringify } from "../internal/_test_stringify";
export const test_stringify_TemplateConstant = _test_stringify("TemplateConstant", TemplateConstant.generate, (input) => ((input: Type[]): string => {
    const $string = (typia.stringify as any).string;
    const $throws = (typia.stringify as any).throws;
    const $so0 = (input: any) => `{"prefix":${(() => {
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
})(input));
