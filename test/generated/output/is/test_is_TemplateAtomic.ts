import typia from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_is } from "../internal/_test_is";
export const test_is_TemplateAtomic = _test_is("TemplateAtomic", TemplateAtomic.generate, (input) => ((input: any): input is TemplateAtomic => {
    const $io0 = (input: any) => "string" === typeof input.prefix && true === RegExp(/^prefix_(.*)/).test(input.prefix) && ("string" === typeof input.postfix && true === RegExp(/(.*)_postfix$/).test(input.postfix)) && ("string" === typeof input.middle_string && true === RegExp(/^the_(.*)_value$/).test(input.middle_string)) && ("string" === typeof input.middle_string_empty && true === RegExp(/^the_(.*)_value$/).test(input.middle_string_empty)) && ("string" === typeof input.middle_numeric && true === RegExp(/^the_-?\d+\.?\d*_value$/).test(input.middle_numeric)) && ("the_false_value" === input.middle_boolean || "the_true_value" === input.middle_boolean) && ("string" === typeof input.ipv4 && true === RegExp(/^-?\d+\.?\d*\.-?\d+\.?\d*\.-?\d+\.?\d*\.-?\d+\.?\d*$/).test(input.ipv4)) && ("string" === typeof input.email && true === RegExp(/(.*)@(.*)\.(.*)/).test(input.email));
    return "object" === typeof input && null !== input && $io0(input);
})(input), TemplateAtomic.SPOILERS);
