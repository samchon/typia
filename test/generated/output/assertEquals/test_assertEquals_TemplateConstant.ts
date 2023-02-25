import typia from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_assertEquals } from "../internal/_test_assertEquals";
export const test_assertEquals_TemplateConstant = _test_assertEquals("TemplateConstant", TemplateConstant.generate, (input) => ((input: any) => {
    const $guard = (typia.assertEquals as any).guard;
    const $join = (typia.assertEquals as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is Type[] => {
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
        })) && (3 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).every(key => {
            if (["prefix", "postfix", "combined"].some(prop => key === prop))
                return true;
            const value = input[key];
            if (undefined === value)
                return true;
            return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value
            });
        })));
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
    return input as Type[];
})(input));
