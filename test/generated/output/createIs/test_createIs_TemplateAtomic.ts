import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";
export const test_createIs_TemplateAtomic = _test_is("TemplateAtomic", TemplateAtomic.generate, (input: any): input is TemplateAtomic => {
    const $io0 = (input: any): boolean => "string" === typeof input.prefix && RegExp(/^prefix_(.*)/).test(input.prefix) && ("string" === typeof input.postfix && RegExp(/(.*)_postfix$/).test(input.postfix)) && ("string" === typeof input.middle_string && RegExp(/^the_(.*)_value$/).test(input.middle_string)) && ("string" === typeof input.middle_string_empty && RegExp(/^the_(.*)_value$/).test(input.middle_string_empty)) && ("string" === typeof input.middle_numeric && RegExp(/^the_-?\d+\.?\d*_value$/).test(input.middle_numeric)) && ("the_false_value" === input.middle_boolean || "the_true_value" === input.middle_boolean) && ("string" === typeof input.ipv4 && RegExp(/^-?\d+\.?\d*\.-?\d+\.?\d*\.-?\d+\.?\d*\.-?\d+\.?\d*$/).test(input.ipv4)) && ("string" === typeof input.email && RegExp(/(.*)@(.*)\.(.*)/).test(input.email));
    return "object" === typeof input && null !== input && $io0(input);
}, TemplateAtomic.SPOILERS);
