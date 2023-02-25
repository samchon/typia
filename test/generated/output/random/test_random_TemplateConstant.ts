import typia from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_random } from "../internal/_test_random";
export const test_random_TemplateConstant = _test_random("TemplateConstant", () => ((generator: typia.IRandomGenerator = (typia.random as any).generator) => {
    const $pick = (typia.random as any).pick;
    const $generator = (typia.random as any).generator;
    const $ro0 = (recursive = false, depth = 0) => ({
        prefix: $pick([
            () => "prefix_A",
            () => "prefix_B",
            () => "prefix_C"
        ])(),
        postfix: $pick([
            () => "1_postfix",
            () => "3_postfix",
            () => "2_postfix"
        ])(),
        combined: $pick([
            () => "the_1_value_with_label_A",
            () => "the_1_value_with_label_B",
            () => "the_1_value_with_label_C",
            () => "the_3_value_with_label_A",
            () => "the_3_value_with_label_B",
            () => "the_3_value_with_label_C",
            () => "the_2_value_with_label_A",
            () => "the_2_value_with_label_B",
            () => "the_2_value_with_label_C"
        ])()
    });
    return (generator.array ?? $generator.array)(() => $ro0());
})(), (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is TemplateConstant => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("prefix_A" === input.prefix || "prefix_B" === input.prefix || "prefix_C" === input.prefix || $guard(_exceptionable, {
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
            expected: "Array<Resolve<TemplateConstant.Type>>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<TemplateConstant.Type>",
            value: elem
        })) && $ao0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as typia.Primitive<TemplateConstant>;
});
